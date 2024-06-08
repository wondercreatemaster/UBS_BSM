const fs = require('fs');
const path = require('path');
const unzipper = require('unzipper');
const { DBFFile } = require('dbffile');

const Property = require('../models/property.model');
const Owner = require('../models/owner.model');
const Charge = require('../models/charge.model');
const Invhead = require('../models/invhead.model');
const Payhead = require('../models/payhead.model');

const saveRecords = async (records, Schema, userid) =>
{
  for (const record of records)
  {
    try
    {
      const newSchema = new Schema({
        user: userid,
        ...record,
      });
      await newSchema.save();
    } catch (saveError)
    {
      console.error(`Error saving ${Schema.name}:`, saveError);
    }
  }
}

const smb2db = async (req, res) =>
{
  const filePath = req.file.path;
  const user = req.user;
  const extractPath = path.join('temp', req.file.filename);

  // Ensure the extraction path exists
  if (!fs.existsSync(extractPath))
  {
    fs.mkdirSync(extractPath, { recursive: true });
  }

  try
  {
    // Extract the zip file
    await new Promise((resolve, reject) =>
    {
      fs.createReadStream(filePath)
        .pipe(unzipper.Extract({ path: extractPath }))
        .on('close', resolve)
        .on('error', reject);
    });

    const propertyDBFPath = path.join(extractPath, 'property.dbf');
    const ownerDBFPath = path.join(extractPath, 'owner.dbf');
    const chargesDBFPath = path.join(extractPath, 'charges.dbf');
    const invheadDBFPath = path.join(extractPath, 'invhead.dbf');
    const payheadDBFPath = path.join(extractPath, 'payhead.dbf');

    // Check if the DBF file exists
    if (!fs.existsSync(propertyDBFPath) || !fs.existsSync(ownerDBFPath) || !fs.existsSync(chargesDBFPath) || !fs.existsSync(invheadDBFPath) || !fs.existsSync(payheadDBFPath))
    {
      fs.rm(extractPath, { recursive: true, force: true }, (err) =>
      {
        if (err)
        {
          console.error(`Error while deleting ${extractPath}.`, err);
        } else
        {
          console.log(`Deleted folder: ${extractPath}`);
        }
      });

      fs.unlink(filePath, (err) =>
      {
        if (err)
        {
          console.error(`Error while deleting file ${filePath}.`, err);
        } else
        {
          console.log(`Deleted file: ${filePath}`);
        }
      });
      return res.status(400).send('DBF file not found in the extracted contents');
    }

    try
    {
      const propertyDBF = await DBFFile.open(propertyDBFPath);
      const ownerDBF = await DBFFile.open(ownerDBFPath);
      const chargesDBF = await DBFFile.open(chargesDBFPath);
      const invheadDBF = await DBFFile.open(invheadDBFPath);
      const payheadDBF = await DBFFile.open(payheadDBFPath);

      const propertyRecords = await propertyDBF.readRecords();
      const ownerRecords = await ownerDBF.readRecords();
      const chargesRecords = await chargesDBF.readRecords();
      const invheadRecords = await invheadDBF.readRecords();
      const payheadRecords = await payheadDBF.readRecords();

      await saveRecords(propertyRecords, Property, user._id)
      await saveRecords(ownerRecords, Owner, user._id)
      await saveRecords(chargesRecords, Charge, user._id)
      await saveRecords(invheadRecords, Invhead, user._id)
      await saveRecords(payheadRecords, Payhead, user._id)

      // Save all records to the database
      // for (const record of records)
      // {
      //   try
      //   {
      //     const newProperty = new Property({
      //       user: user._id,
      //       ...record,
      //     });
      //     await newProperty.save();
      //   } catch (saveError)
      //   {
      //     console.error('Error saving property:', saveError);
      //   }
      // }

      res.json({ success: true, message: 'File uploaded and data extracted successfully' });

      // Cleanup extracted files
      fs.rm(extractPath, { recursive: true, force: true }, (err) =>
      {
        if (err)
        {
          console.error(`Error while deleting ${extractPath}.`, err);
        } else
        {
          console.log(`Deleted folder: ${extractPath}`);
        }
      });

    } catch (parseError)
    {
      console.error('Error processing DBF file:', parseError);
      return res.status(500).send('Error processing DBF file');
    }

  } catch (err)
  {
    console.error('Error processing file:', err);
    return res.status(500).send('Error processing file');
  } finally
  {
    // Ensure the uploaded file is deleted after processing
    fs.unlink(filePath, (err) =>
    {
      if (err)
      {
        console.error(`Error while deleting file ${filePath}.`, err);
      } else
      {
        console.log(`Deleted file: ${filePath}`);
      }
    });
  }
};

module.exports = { smb2db };

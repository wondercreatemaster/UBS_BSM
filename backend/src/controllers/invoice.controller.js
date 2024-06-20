const Invoice = require('../models/invhead.model')
const Property = require('../models/property.model')
const mongoose = require('mongoose');

const getInvoices = async (req, res) =>
{
  try
  {
    const { page = 1, invoicesPerPage = 10, searchword = '' } = req.body;
    const user = req.user;
    const regex = new RegExp(searchword, 'i');

    const totalInvoices = await Invoice.countDocuments({
      user: user._id,
      $or: [
        { INVNO: regex },
        { UNITNO: regex },
      ]
    });

    const userid = new mongoose.Types.ObjectId(user._id);

    const invoices = await Invoice.aggregate([
      {
        $match: {
          user: userid,
          $or: [
            { INVNO: { $regex: searchword, $options: 'i' } },
            { UNITNO: { $regex: searchword, $options: 'i' } }
          ]
        }
      },
      {
        $lookup: {
          from: 'properties',
          let: { propertyuser: '$user', propertyUNITNO: '$UNITNO' },
          pipeline: [
            {
              $match: {
                $expr: {
                  $and: [
                    { $eq: ['$user', '$$propertyuser'] },
                    { $eq: ['$UNITNO', '$$propertyUNITNO'] },
                  ]
                }
              }
            }
          ],
          as: 'Property'
        }
      },
      {
        $unwind: {
          path: '$Property',
          preserveNullAndEmptyArrays: true
        }
      },
      {
        $lookup: {
          from: 'owners',
          let: { invoiceuser: '$user', invoiceOwnerNo: '$OWNERNO' },
          pipeline: [
            {
              $match: {
                $expr: {
                  $and: [
                    { $eq: ['$user', '$$invoiceuser'] },
                    { $eq: ['$OWNERNO', '$$invoiceOwnerNo'] },
                  ]
                }
              }
            }
          ],
          as: 'Owner'
        }
      },
      {
        $unwind: {
          path: '$Owner',
          preserveNullAndEmptyArrays: true
        }
      },
      {
        $group: {
          _id: '$_id', // Group by the invoice ID
          mergedFields: { $mergeObjects: '$$ROOT' },
        }
      },
      {
        $replaceRoot: { newRoot: '$mergedFields' }
      },
      {
        $skip: (page - 1) * invoicesPerPage
      },
      {
        $limit: invoicesPerPage
      }
    ]);

    res.json({ totalInvoices, invoices });
  } catch (err)
  {
    res.status(500).send(err);
  }
};

const getUnits = async (req, res) =>
{
  const user = req.user;

  let userid = new mongoose.Types.ObjectId(user._id);

  try
  {
    const units = await Property.aggregate(
      [
        {
          $match: {
            user: userid,
          }
        },
        {
          $lookup: {
            from: 'owners',
            let: { propertyuser: '$user', propertyUNITNO: '$UNITNO' },
            pipeline: [
              {
                $match: {
                  $expr: {
                    $and: [
                      { $eq: ['$user', '$$propertyuser'] },
                      { $eq: ['$UNITNO', '$$propertyUNITNO'] },
                    ]
                  }
                }
              }
            ],
            as: 'Owner'
          }
        },
        {
          $unwind: '$Owner'
        }
      ]
    )
    res.json({ units });
  } catch (error)
  {
    res.send(error)
  }
}



const deleteInvoice = (req, res) =>
{
  let invoiceid = req.params.id
  Invoice.findById(invoiceid)
    .then(
      invoice =>
      {
        if (!invoice || invoice.user != req.user._id)
        {
          return res.status(404).send("Not Found!")
        }
        Invoice.findByIdAndDelete(invoiceid)
          .then(async invoice =>
          {
            let invoicesCount = await Invoice.countDocuments({ user: req.user._id }).lean()
            res.json({ success: true, pages: invoicesCount })
          })
          .catch(err =>
          {
            console.log(err)
            res.status(500).send(err)
          })
      }
    )
    .catch(err =>
    {
      console.log(err)
      res.status(500).send(err)
    })
}

const generateInvoiceNo = async (req, res) =>
{
  const userid = req.user._id;

  let invoices = await Invoice.find({ user: userid }).select('INVNO').lean();

  let invoiceNos = invoices.map(invoice => invoice.INVNO);

  let sortedarray = await invoiceNos.sort((a, b) =>
  {
    const numericPartA = parseInt(a.slice(3), 10);
    const numericPartB = parseInt(b.slice(3), 10);
    return numericPartA - numericPartB;
  });

  const numericPart = parseInt(sortedarray[sortedarray.length - 1].slice(3), 10); // Assuming 'INV' prefix
  const nextNumericPart = numericPart + 1;

  // Create the next item with the same prefix and padded number
  const nextItem = 'INV' + nextNumericPart.toString().padStart(7, '0');

  res.json({ InvoiceNo: nextItem })
}

module.exports = { getInvoices, deleteInvoice, getUnits, generateInvoiceNo }
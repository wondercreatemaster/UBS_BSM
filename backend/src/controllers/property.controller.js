const Property = require("../models/property.model");


const getAllProperty = (req, res) =>
{
  user = req.user;
  Property.find({ user: user._id }).select('_id')
    .lean()
    .then(properties =>
    {
      res.json({ properties });
    })
}

const getPage = (req, res) =>
{
  user = req.user;
  page = req.params.page;
  Property.find({ user: user._id })
    .lean()
    .then(properties =>
    {
      if (page > properties.length)
        return res.json({
          pages: properties.length,
          content: properties[properties.length - 1]
        })
      res.json({
        pages: properties.length,
        content: properties[page - 1]
      })
    }
    )
}

const updateProperty = async (req, res) =>
{
  let updatedproperty = req.body;
  if (updatedproperty._id)
  {
    user = req.user;
    let property = await Property.findById(updatedproperty._id)

    if (!property)
      return res.status(404).send('Error!')
    if (property.user != user._id)
      return res.status(404).send("Error1")

    await Object.keys(updatedproperty).map(key =>
    {
      property[key] = updatedproperty[key]
    })

    property.save()
      .then(property => res.json({ success: true, property }))
      .catch(err => console.log(err))

    return;
  }
  else
  {
    let newProperty = new Property({
      ...updatedproperty,
      user: user._id,
    })

    newProperty.save()
      .then(property => res.json({ success: true, property }))
      .catch(err => console.log(err));
  }
}

module.exports = { getAllProperty, getPage, updateProperty }
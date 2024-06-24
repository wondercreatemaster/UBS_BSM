const Property = require("../models/property.model");


const getAllProperty = (req, res) => {
  user = req.user;
  Property.find({ user: user._id }).select('_id')
    .lean()
    .then(properties => {
      res.json({ properties });
    })
}

const getPropertyById = async (req, res) => {
  let id = req.params.id;
  let user = req.user;
  let property = await Property.findById(id).lean();
  if (property.user != user._id) {
    return res.status(404).send("Not Found");
  }
  res.json({ property });
}

const getProperties = async (req, res) => {
  const { page = 1, propertiesPerpage = 10, searchword = '', phaseFiltering, typeFiltering } = req.body;
  let user = req.user;
  const regex = new RegExp(searchword, 'i')
  const totalProperties = await Property.countDocuments({
    user: user._id,
    $or: [
      { UNITNO: regex },
      { PHCODE: regex },
      { HSECODE: regex },
      //{ AREA: regex },
      { CARPARK: regex }
    ],
    PHCODE: { $in: phaseFiltering },
    UNITTYPE: { $in: typeFiltering }
  })


  Property.find({
    user: user._id,
    $or: [
      { UNITNO: regex },
      { PHCODE: regex },
      { HSECODE: regex },
      //{ AREA: regex },
      { CARPARK: regex }
    ],
    PHCODE: { $in: phaseFiltering },
    UNITTYPE: { $in: typeFiltering }
  })
    .skip((page - 1) * propertiesPerpage)
    .limit(propertiesPerpage)
    .lean()
    .then(properties => {
      res.json({ properties, totalProperties });
    })
    .catch(err => {
      res.send(err)
    })
}

// const getPage = (req, res) =>
// {
//   let user = req.user;
//   let page = req.params.page;
//   let searchword = req.body.searchword;
//   Property.find(
//     {
//       user: user._id,
//       $or: [
//         { UNITNO: new RegExp(searchword) },
//         { PHCODE: new RegExp(searchword) },
//         { HSECODE: new RegExp(searchword) },
//       ]
//     }
//   )
//     .lean()
//     .then(properties =>
//     {
//       if (page > properties.length)
//         return res.json({
//           pages: properties.length,
//           content: properties[properties.length - 1],
//           currentPage: properties.length
//         })
//       res.json({
//         pages: properties.length,
//         content: properties[page - 1]
//       })
//     }
//     )
// }

const updateProperty = async (req, res) => {
  let updatedproperty = req.body;
  let user = req.user;
  if (updatedproperty._id) {
    let property = await Property.findOneAndUpdate({ _id: updatedproperty._id, user: user._id }, updatedproperty)

    if (!property)
      return res.status(404).send('Error!')
    res.json({ success: true, property })
  }
  else {
    let newProperty = new Property({
      ...updatedproperty,
      user: user._id,
    })
    newProperty.save()
      .then(property => res.json({ success: true, property }))
      .catch(err => {
        console.log(err)
        res.status(500).send("Unexpected Error!")
      });
  }
}

const deleteProperty = async (req, res) => {
  let propertyid = req.params.id
  Property.findById(propertyid)
    .then(
      property => {
        if (!property || property.user != req.user._id) {
          return res.status(404).send("Not Found!")
        }
        Property.findByIdAndDelete(propertyid)
          .then(async property => {
            let properties = await Property.find({ user: req.user._id }).lean()
            res.json({ success: true, pages: properties.length })
          })
          .catch(err => {
            console.log(err)
            res.status(500).send(err)
          })
      }
    )
    .catch(err => {
      console.log(err)
      res.status(500).send(err)
    })
}

const generateProperties = async (req, res) => {
  const { property_details, UNITNOs, ...other } = req.body;

  if (UNITNOs.length > 0) {
    let newproperties = UNITNOs.map(UNITNO => ({ user: req.user._id, UNITNO, ...property_details }))

    Property.insertMany(newproperties)
      .then(properties => {
        res.json({ success: true, UNITNOs })
      })
      .catch(err => res.send(err))
  }
  else
    res.send("Unexpected Error!")

}

const getUnitNos = async (req, res) => {
  const userid = req.user._id;

  const temp = await Property.find({ user: userid }).select('UNITNO');
  const UNITNOs = temp.map(item => item.UNITNO)
  res.json({ UNITNOs })
}

const getPropertyByUNITNO = async (req, res) => {
  const UNITNO = req.body.UNITNO;
  const property = await Property.findOne({ UNITNO, user: req.user._id });
  res.json({ property });
}


module.exports = { getAllProperty, updateProperty, deleteProperty, getProperties, getPropertyById, generateProperties, getUnitNos, getPropertyByUNITNO }
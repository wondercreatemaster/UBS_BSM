const Owner = require('../models/owner.model')
const Property = require('../models/property.model')
const mongoose = require('mongoose');

const getOwner = async (req, res) => {
  const { page = 1, ownersPerpage = 10, searchword = '' } = req.body
  const user = req.user;
  const regex = new RegExp(searchword, 'i');
  const totalOwners = await Owner.countDocuments({
    user: user._id,
    $or: [
      { UNITNO: regex },
      { OWNNAME: regex },
    ]
  })

  let userid = new mongoose.Types.ObjectId(user._id);

  Owner.aggregate(
    [
      {
        $match: {
          user: userid,
          $or: [
            { UNITNO: { $regex: searchword, $options: 'i' } },
            { OWNNAME: { $regex: searchword, $options: 'i' } }
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
        $unwind: '$Property'
      }
    ]
  )
    .skip((page - 1) * ownersPerpage)
    .limit(ownersPerpage)
    .then(owners => {
      res.json({ totalOwners, owners })
    })
    .catch(err => res.send(err))
}


const deleteOwner = async (req, res) => {
  let ownerid = req.params.id
  Owner.findById(ownerid)
    .then(
      owner => {
        if (!owner || owner.user != req.user._id) {
          return res.status(404).send("Not Found!")
        }
        Owner.findByIdAndDelete(ownerid)
          .then(async owner => {
            let ownersCount = await Owner.countDocuments({ user: req.user._id }).lean()
            res.json({ success: true, pages: ownersCount })
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

const getOwnerById = async (req, res) => {
  const userid = new mongoose.Types.ObjectId(req.user._id);
  const id = new mongoose.Types.ObjectId(req.params.id);

  Owner.aggregate(
    [
      {
        $match: {
          user: userid,
          _id: id
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
        $unwind: '$Property'
      }
    ]
  )
    .then(owners => {
      if (owners.length)
        res.json({ owner: owners[0] })
      else
        res.status(404).send("Not found")
    })
    .catch(err => res.send(err))
}

const modifyOwner = async (req, res) => {
  const userid = req.user._id;
  const { Property, _id, user, UNITNO, ...other } = req.body.owner;

  let owner = await Owner.findOneAndUpdate({ _id: _id, user: userid }, other);

  if (owner)
    res.json({ success: true, owner })

}

const getUnownedUNITNOs = async (req, res) => {
  const userid = req.user._id;
  const owners = await Owner.find({ user: userid });
  const properties = await Property.find({ user: userid });

  let ownedUNITNOs = owners.map(owner => owner.UNITNO);
  let allUNITNOs = properties.map(property => property.UNITNO)
  let UNITNOs = allUNITNOs.filter(UNITNO => !ownedUNITNOs.includes(UNITNO))
  res.json({ UNITNOs });
}

const addOwner = (req, res) => {
  const userid = req.user._id;
  const { Property, ...other } = req.body.owner;

  let newOwner = new Owner({
    user: userid,
    ...other
  })

  newOwner.save()
    .then(savedOwner => res.json({
      success: true,
      owner: savedOwner
    }))
    .catch(err => res.send(err))
}

module.exports = { getOwner, deleteOwner, getOwnerById, modifyOwner, getUnownedUNITNOs, addOwner }
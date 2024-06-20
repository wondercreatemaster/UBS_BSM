const Owner = require('../models/owner.model')
const mongoose = require('mongoose');

const getOwner = async (req, res) =>
{
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
    .then(owners =>
    {
      res.json({ totalOwners, owners })
    })
    .catch(err => res.send(err))
}


const deleteOwner = async (req, res) =>
{
  let ownerid = req.params.id
  Owner.findById(ownerid)
    .then(
      owner =>
      {
        if (!owner || owner.user != req.user._id)
        {
          return res.status(404).send("Not Found!")
        }
        Owner.findByIdAndDelete(ownerid)
          .then(async owner =>
          {
            let ownersCount = await Owner.countDocuments({ user: req.user._id }).lean()
            res.json({ success: true, pages: ownersCount })
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

module.exports = { getOwner, deleteOwner }
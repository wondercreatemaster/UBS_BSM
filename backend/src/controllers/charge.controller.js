const { default: mongoose } = require('mongoose');
const Charge = require('../models/charge.model')

const getCharge = async (req, res) =>
{
  const { page = 1, chargesPerPage = 10, searchword = '' } = req.body
  const user = req.user;
  const regex = new RegExp(searchword, 'i');

  const totalCharges = await Charge.countDocuments({
    user: user._id,
    $or: [
      { CHARCODE: regex },
      { DESP: regex },
    ]
  })

  Charge.find({
    user: user._id,
    $or: [
      { CHARCODE: regex },
      { DESP: regex },
    ]
  })
    .skip((page - 1) * chargesPerPage)
    .limit(chargesPerPage)
    .lean()
    .then(charges =>
    {
      res.json({ totalCharges, charges })
    })
    .catch(err => res.send(err))
}

const deleteCharge = (req, res) =>
{
  let chargeid = req.params.id;
  Charge.findById(chargeid)
    .then(charge =>
    {
      if (!charge || charge.user != req.user._id)
      {
        return res.status(404).send("Not Found!")
      }

      Charge.findByIdAndDelete(chargeid)
        .then(async charge =>
        {
          let totalCharges = await Charge.countDocuments({ user: req.user._id })
          res.json({ success: true, pages: totalCharges })
        })
        .catch(err =>
        {
          console.log(err)
          res.status(500).send(err)
        })
    })
    .catch(err =>
    {
      console.log(err)
      res.status(500).send(err)
    })
}

const getAll = async (req, res) =>
{

  let userid = new mongoose.Types.ObjectId(req.user._id);

  Charge.find({ user: userid })
    .select('CHARCODE DESP CALMETHOD')
    .lean()
    .then(charges =>
    {
      res.json({ charges })
    })
    .catch(err => res.send(err))

}

module.exports = { getCharge, deleteCharge, getAll };
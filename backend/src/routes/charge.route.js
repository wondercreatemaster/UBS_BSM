const express = require("express");
const router = express.Router();

const chargeController = require('../controllers/charge.controller')

router.post('/getcharges', chargeController.getCharge)
router.get('/getall', chargeController.getAll)
router.delete('/:id', chargeController.deleteCharge)

module.exports = router
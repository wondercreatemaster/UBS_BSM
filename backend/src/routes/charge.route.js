const express = require("express");
const router = express.Router();

const chargeController = require('../controllers/charge.controller')

router.post('/getcharges', chargeController.getCharge)
router.post('/modify/:id', chargeController.modifyCharge)
router.post('/add', chargeController.addCharge);
router.get('/getall', chargeController.getAll)

router.get('/:id', chargeController.getChargeById)
router.delete('/:id', chargeController.deleteCharge)

module.exports = router
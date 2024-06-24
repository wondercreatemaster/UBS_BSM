const express = require("express");
const router = express.Router();

const ownerController = require('../controllers/owner.controller')

router.post('/getowners', ownerController.getOwner);
router.post('/modify', ownerController.modifyOwner);
router.post('/add', ownerController.addOwner);

router.get('/unownedunitnos', ownerController.getUnownedUNITNOs);

router.get('/getownerbyid/:id', ownerController.getOwnerById)

router.delete('/:id', ownerController.deleteOwner)

module.exports = router
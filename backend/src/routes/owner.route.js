const express = require("express");
const router = express.Router();

const ownerController = require('../controllers/owner.controller')

router.post('/getowners', ownerController.getOwner);
router.delete('/:id', ownerController.deleteOwner)

module.exports = router
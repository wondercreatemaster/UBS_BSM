const express = require("express");
const router = express.Router();

const propertyController = require('../controllers/property.controller');

router.get('/', propertyController.getAllProperty)
router.get('/:page', propertyController.getPage)
router.put('/modify', propertyController.updateProperty)

module.exports = router
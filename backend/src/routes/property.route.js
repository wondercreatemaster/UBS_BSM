const express = require("express");
const router = express.Router();

const propertyController = require('../controllers/property.controller');

//router.get('/', propertyController.getAllProperty)
router.post('/getproperties', propertyController.getProperties)
router.post('/getpropertybyunitno', propertyController.getPropertyByUNITNO)
router.get('/getunitnos', propertyController.getUnitNos);
router.get('/:id', propertyController.getPropertyById)

//router.post('/:page', propertyController.getPage)
router.put('/modify', propertyController.updateProperty)
router.put('/generate', propertyController.generateProperties)
router.delete('/:id', propertyController.deleteProperty)

module.exports = router
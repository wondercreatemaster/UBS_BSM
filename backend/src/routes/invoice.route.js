const express = require("express");
const router = express.Router();

const invoiceController = require('../controllers/invoice.controller')

router.post('/getinvoices', invoiceController.getInvoices)

router.get('/getunits', invoiceController.getUnits);

router.get('/nextinvoiceno', invoiceController.generateInvoiceNo)

router.post('/modify/:id', invoiceController.modifyInvoice)

router.post('/add', invoiceController.addInvoice);

router.get('/getinvoice/:id', invoiceController.getInvoiceById)

router.delete('/:id', invoiceController.deleteInvoice)

module.exports = router
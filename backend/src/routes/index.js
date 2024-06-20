const express = require("express");
const router = express.Router();

const userRoute = require("./user.route");
const filesRoute = require("./files.route");
const propertyRoute = require("./property.route");
const ownerRoute = require("./owner.route");
const chargeRoute = require("./charge.route");
const invoiceRoute = require("./invoice.route");
const { AuthMiddleware } = require("../middlewares/auth");

router.use("/user", userRoute);
router.use("/files", AuthMiddleware, filesRoute);
router.use("/property", AuthMiddleware, propertyRoute);
router.use("/owner", AuthMiddleware, ownerRoute);
router.use("/charge", AuthMiddleware, chargeRoute);
router.use("/invoice", AuthMiddleware, invoiceRoute);

module.exports = router;
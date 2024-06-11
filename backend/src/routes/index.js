const express = require("express");
const router = express.Router();

const userRoute = require("./user.route");
const filesRoute = require("./files.route");
const propertyRoute = require("./property.route");
const { AuthMiddleware } = require("../middlewares/auth");

router.use("/user", userRoute);
router.use("/files", AuthMiddleware, filesRoute);
router.use("/property", AuthMiddleware, propertyRoute);

module.exports = router;
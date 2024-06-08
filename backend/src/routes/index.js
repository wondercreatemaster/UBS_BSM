const express = require("express");
const router = express.Router();

const userRoute = require("./user.route");
const filesRoute = require("./files.route");
const { AuthMiddleware } = require("../middlewares/auth");

router.use("/user", userRoute);
router.use("/files", AuthMiddleware, filesRoute);

module.exports = router;
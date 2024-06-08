// routes/auth.js (Registration Route)
const express = require("express");
const router = express.Router();

const userController = require("../controllers/user.controller");
const { AuthMiddleware } = require("../middlewares/auth");

// Handle user registration
router.post("/register", userController.register);
router.post("/signin", userController.signin);
router.get("/me", AuthMiddleware, userController.myinfo);

module.exports = router;
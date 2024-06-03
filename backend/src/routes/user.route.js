// routes/auth.js (Registration Route)
const express = require("express");
const router = express.Router();

const userController = require("../controllers/user.controller");

// Handle user registration
router.post("/register", userController.register);
router.post("/signin", userController.signin);

module.exports = router;
// routes/auth.js (Registration Route)
const express = require("express");
const multer = require("multer")
const router = express.Router();

const filesController = require("../controllers/files.controller");

const upload = multer({ dest: "uploads/" })
// Handle user registration
router.post("/smb", upload.single('smbfile'), filesController.smb2db);


module.exports = router;
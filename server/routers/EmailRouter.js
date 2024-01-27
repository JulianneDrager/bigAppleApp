const express = require("express");
const router = express.Router();
const EmailController = require("../controllers/EmailController");

// Routes for sending email
router.post("/send-email", EmailController.sendEmail);

module.exports = router;

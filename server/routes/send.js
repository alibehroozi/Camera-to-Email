const express = require("express");
const router = express.Router();
const sendPdf = require("../controllers/send/pdf");

router.post("/send/pdf", sendPdf);

module.exports = router;

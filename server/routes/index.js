const express = require("express");
const sendRoute = require("./send");
const router = express.Router();

router.use("/", sendRoute);

module.exports = router;

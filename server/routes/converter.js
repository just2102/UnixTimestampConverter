var express = require('express');
var router = express.Router();
const {dateToUnix, unixToDate} = require("../controllers/converterController")


router.route("/dateToUnix")
.post(dateToUnix)


router.route("/unixToDate")
.post(unixToDate)

module.exports = router;

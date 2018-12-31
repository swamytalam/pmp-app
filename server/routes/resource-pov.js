var express = require("express");
var router = express.Router();
var Resource = require("../models/resource");

router.get("/:week", function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
  res.setHeader('Access-Control-Allow-Credentials', true); // If needed
  ResourcePOV.getResourcesByFiscalWeek(req.params.week, res, ResourcePOV.getCallBackFunction);
});

module.exports = router;

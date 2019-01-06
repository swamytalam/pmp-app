var express = require("express");
var router = express.Router();
var Allocation = require("../models/allocation");

router.get("/", function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
  res.setHeader('Access-Control-Allow-Credentials', true); // If needed
  Allocation.getAllocations(req, res, Allocation.getCallBackFunction);
});

module.exports = router;

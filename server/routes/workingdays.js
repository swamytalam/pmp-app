var express = require("express");
var router = express.Router();
var WorkingDay = require("../models/workingday");

router.get("/", function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
  res.setHeader('Access-Control-Allow-Credentials', true); // If needed
  WorkingDay.getWorkingDays(req, res, WorkingDay.getCallBackFunction);
});

router.get("/:id", function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
  res.setHeader('Access-Control-Allow-Credentials', true); // If needed
  WorkingDay.getWorkingDaysByYearId(req.params.id, res, WorkingDay.getCallBackFunction);
});

module.exports = router;

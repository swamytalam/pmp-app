var express = require("express");
var router = express.Router();
var ResourcePlan = require("../models/resourceplan");

router.get("/", function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
  res.setHeader('Access-Control-Allow-Credentials', true); // If needed
  ResourcePlan.getResourcePlan(req, res, ResourcePlan.getCallBackFunction);
});

router.get("/:id", function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
  res.setHeader('Access-Control-Allow-Credentials', true); // If needed
  ResourcePlan.getResourcePlanByYearId(req.params.id, res, ResourcePlan.getCallBackFunction);
});

module.exports = router;

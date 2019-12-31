var express = require("express");
var router = express.Router();

const logger = require('../logger');

router.get('/', async (req, res) => {
  const milestone = await req.context.models.Milestone.findAll();
  logger.info('find all milestones', milestone);
  return res.send(milestone);
});

router.get('/project/:id', async (req, res) => {
  const milestone = await req.context.models.Milestone.findMilestonesByProjectId(req.params.id);
  logger.info('find milestones by project id', milestone);
  return res.send(milestone);
});
// var Milestone = require("../models/milestone");

// router.get("/", function (req, res, next) {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
//   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
//   res.setHeader('Access-Control-Allow-Credentials', true); // If needed
//   Milestone.getMilestones(req, res, Milestone.getCallBackFunction);
// });

// router.get("/:id", function (req, res, next) {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
//   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
//   res.setHeader('Access-Control-Allow-Credentials', true); // If needed
//   Milestone.getMilestonesByProjectId(req.params.id, res, Milestone.getCallBackFunction);
// });

module.exports = router;

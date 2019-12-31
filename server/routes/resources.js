var express = require("express");
var router = express.Router();

const logger = require('../logger');

router.get('/', async (req, res) => {
  const holidays = await req.context.models.Holiday.findAll();
  logger.info('find all holidays', holidays);
  return res.send(holidays);
});

router.get('/year/:id', async (req, res) => {
  const holidays = await req.context.models.Holiday.findByYearId(req.params.id);
  logger.info('find holiday by year id', holidays);
  return res.send(holidays);
});


// var Resource = require("../models/resource");

// router.get("/", function (req, res, next) {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
//   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
//   res.setHeader('Access-Control-Allow-Credentials', true); // If needed
//   Resource.getResources(req, res, Resource.getCallBackFunction);
// });

// router.get("/:id", function (req, res, next) {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
//   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
//   res.setHeader('Access-Control-Allow-Credentials', true); // If needed
//   Resource.getResourcesByDeptId(req.params.id, res, Resource.getCallBackFunction);
// });

module.exports = router;

var express = require("express");
var router = express.Router();

const logger = require('../logger');

router.get('/', async (req, res) => {
  const Resource = await req.context.models.Resource.findAll();
  logger.info('find all resource', Resource);
  return res.send(Resource);
});

router.get('/department/:id', async (req, res) => {
  const Resource = await req.context.models.Resource.findByResourceDepartmentId(req.params.id);
  logger.info('find resource by id', Resource);
  return res.send(Resource);
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

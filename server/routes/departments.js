var express = require("express");
var router = express.Router();

const logger = require('../logger');

router.get('/', async (req, res) => {
  const department = await req.context.models.Department.findAll();
  logger.info('find all department', department);
  return res.send(department);
});

router.get('/:id', async (req, res) => {
  const department = await req.context.models.Department.findByDepartmentId(req.params.id);
  logger.info('find by department id', department);
  return res.send(department);
});

// var Department = require("../models/department");

// router.get("/", function (req, res, next) {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
//   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
//   res.setHeader('Access-Control-Allow-Credentials', true); // If needed
//   Department.getDepartments(req, res, Department.getCallBackFunction);
// });


module.exports = router;

var express = require("express");
var router = express.Router();
// var Project = require("../pg-models/project");
const logger = require('../logger');


router.get('/', async (req, res) => {
  const projects = await req.context.models.Project.findAll();
  logger.info('find all projects', projects);
  return res.send(projects);
});

router.get('/:id', async (req, res) => {
  const projects = await req.context.models.Project.findByProjectId(req.params.id);
  logger.info('find project by id', projects);
  return res.send(projects);
});


// router.get("/", function (req, res, next) {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
//   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
//   res.setHeader('Access-Control-Allow-Credentials', true); // If needed
//   Project.getProjects(req, res, Project.getCallBackFunction);
// });

// router.get("/:id", function (req, res, next) {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
//   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
//   res.setHeader('Access-Control-Allow-Credentials', true); // If needed
//   Project.getProjectById(req.params.id, res, Project.getCallBackFunction);
// });

// //POST API
// router.post("/", function (req, res) {
//   Project.addProject(req, res, Project.getCallBackFunction);
// });
module.exports = router;

//Initializing node modules
var express = require("express");
var bodyParser = require("body-parser");
//var cors = require('cors');
// use it before all route definitions
//app.use(cors({origin: 'http://localhost:4200'}));

var projectRoutes = require('./routes/projects');
var milestoneRoutes = require('./routes/milestones');
var taskRoutes = require('./routes/tasks');
var resourceRoutes = require('./routes/resources');
var departmentRoutes = require('./routes/departments');
var resourcePOVRouter = require('./routes/resource-pov');


var app = express();

// Setting static resource directory
app.use(express.static('public'))

// Setting Base directory
app.use(bodyParser.json());
app.use('/api/projects/', projectRoutes);
app.use('/api/milestones/', milestoneRoutes);
app.use('/api/tasks/', taskRoutes);
app.use('/api/resources', resourceRoutes);
app.use('/api/departments', departmentRoutes);
app.use('/api/resource-pov', resourcePOVRouter);

    //CORS for Middleware
app.use(function (req, res, next) {
  //Enabling CORS 
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization");
  next();
});

//Setting up server
var server = app.listen(process.env.PORT || 3000, function () {
  var port = server.address().port;
  console.log("App now running ", server.address());
  console.log("App now running on port", port);
});

//Initializing node modules
var express = require("express");
var bodyParser = require("body-parser");
//var cors = require('cors');
// use it before all route definitions
//app.use(cors({origin: 'http://localhost:4200'}));

var projectRouter = require('./routes/projects');
var milestoneRouter = require('./routes/milestones');
var taskRouter = require('./routes/tasks');
var resourceRouter = require('./routes/resources');
var departmentRouter = require('./routes/departments');
var resourcePOVRouter = require('./routes/resource-pov');
var holidayRouter = require('./routes/holidays');
var workingdayRouter = require('./routes/workingdays');
var titleRouter = require('./routes/titles');
var allocationRouter = require('./routes/allocations');
var resourcePlanRouter = require('./routes/resourceplans');
var app = express();

// Setting static resource directory
app.use(express.static('public'))

// Setting Base directory
app.use(bodyParser.json());
app.use('/api/projects/', projectRouter);
app.use('/api/milestones/', milestoneRouter);
app.use('/api/tasks/', taskRouter);
app.use('/api/resources', resourceRouter);
app.use('/api/departments', departmentRouter);
app.use('/api/resource-pov', resourcePOVRouter);
app.use('/api/holidays', holidayRouter);
app.use('/api/working-days', workingdayRouter);
app.use('/api/titles', titleRouter);
app.use('/api/allocations', allocationRouter);
app.use('/api/resource-plan/', resourcePlanRouter);

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

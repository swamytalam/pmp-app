var connection = require("../dbconnection");
var sql = require("mssql");

var Task = {
  getTasks: function (req, res, callback) {
    return connection.executeQuery(
      res,
      "SELECT t.id, r.fname, t.name, t.actual_start_date, t.actual_end_date, t.planned_start_date, t.planned_end_date, t.project_id, t.milestone_id, s.status FROM [pmpdb].[task] t, [pmpdb].[resource] r, pmpdb.status s where t.resource_id=r.id and s.id=t.status_id order by planned_start_date, project_id, milestone_id"
    );
  },

  getTasksById: function (id, res, callback) {
    return connection.executeQuery(
      res, "SELECT t.id, r.fname, t.name, t.actual_start_date, t.actual_end_date, t.planned_start_date, t.planned_end_date,t.project_id, t.milestone_id, s.status  FROM [pmpdb].[task] t, [pmpdb].[resource] r, pmpdb.status s where t.resource_id=r.id and t.id=" + id + "and s.id=t.status_id "
    );
  },

  getTaskLogById: function (id, res, callback) {
    return connection.executeQuery(
      res, "SELECT ts.id, s.status, ts.created_date, ts.log FROM [pmpdb].[task_status] ts, [pmpdb].[status] s  where ts.task_id = " + id + "and s.id=ts.status_id "
    );
  },


  getTasksByProjectId: function (id, res, callback) {
    return connection.executeQuery(
      res, "SELECT t.id, r.fname, t.name, t.actual_start_date, t.actual_end_date, t.planned_start_date, t.planned_end_date,t.project_id, t.milestone_id, s.status  FROM [pmpdb].[task] t, [pmpdb].[resource] r, pmpdb.status s where t.resource_id=r.id and  t.project_id=" + id + "and s.id=t.status_id  order by planned_start_date, project_id, milestone_id "
    );
  },

  createTask: function (req, res, callback) {
    console.log('createTask from server: ' + '${req.body}');
    var query = `INSERT INTO [pmpdb].[task] (name, planned_start_date, planned_end_date, milestone_id, resource_id, project_id) 
    VALUES('${req.body.name}', '${req.body.planned_start_date}', '${req.body.planned_end_date}', '${req.body.status}' ,'${req.body.milestone_id}', '${req.body.resource_id}', '${req.body.project_id}' )`;
    return connection.executeInsertQuery(res, query);
  },

  createTaskLog: function (req, res, callback) {
    console.log('createTaskLog from server: ' + '${req.body}');
    var query = `INSERT INTO [pmpdb].[task_status] (task_id, status_id, created_date, log) 
    VALUES('${req.body.task_id}', '${req.body.status_id}', '${req.body.created_date}', '${req.body.log}' ,'${req.body.milestone_id}', '${req.body.resource_id}', '${req.body.project_id}' )`;
    return connection.executeInsertQuery(res, query);
  },

  getCallBackFunction: function (err, res, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  }
};

module.exports = Task;

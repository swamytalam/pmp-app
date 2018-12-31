var connection = require("../dbconnection");
var sql = require("mssql");

var Milestone = {
  getMilestones: function (req, res, callback) {
    return connection.executeQuery(
      res,
      "SELECT id, name, description, project_id FROM [pmpdb].[milestone] "
    );
  },

  getMilestonesByProjectId: function (id, res, callback) {
    return connection.executeQuery(
      res, "SELECT id, name, description, project_id FROM [pmpdb].[milestone] where project_id=" + id
    );
  },

  addMilestone: function (req, res, callback) {
    var query = `INSERT INTO [mpmdb].[milestone] (name,description,project_id) 
    VALUES('${req.body.name}','${req.body.description}','${req.body.project_id}'})`;
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

module.exports = Milestone;

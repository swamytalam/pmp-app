var connection = require("../dbconnection");
var sql = require("mssql");

var Project = {
  getProjects: function (req, res, callback) {
    return connection.executeQuery(
      res,
      "SELECT id, name, description, objective, businessJusctification FROM [pmpdb].[project] "
    );
  },

  getProjectById: function (id, res, callback) {
    return connection.executeQuery(
      res,
      "SELECT * FROM [pmpdb].[project] where id = " + id
    );
  },

  addProject: function (req, res, callback) {
    var query = `INSERT INTO [mpmdb].[project] (name,description,objective,businesJuctification) VALUES('${req.body.name}','${req.body.description}','${req.body.objective}', ${req.body.businessJestification})`;
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

module.exports = Project;

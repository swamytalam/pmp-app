var connection = require("../dbconnection");
var sql = require("mssql");

var Resource = {
  getResources: function (req, res, callback) {
    return connection.executeQuery(
      res,
      "SELECT id, fname, lname, generic_name, title FROM [pmpdb].[resource]"
    );
  },


  getResourcesByDeptId: function (id, res, callback) {
    return connection.executeQuery(
      res,
      "SELECT id, fname, lname, generic_name, title FROM [pmpdb].[resource] where dept_id=" + id
    );
  },

  getCallBackFunction: function (err, res, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  }
};

module.exports = Resource;

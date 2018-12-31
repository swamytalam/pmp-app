var connection = require("../dbconnection");
var sql = require("mssql");

var Department = {
  getDepartments: function (req, res, callback) {
    return connection.executeQuery(
      res,
      "SELECT id, name, parent_dept_id FROM [pmpdb].[dept]"
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

module.exports = Department;

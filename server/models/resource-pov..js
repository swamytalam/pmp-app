var connection = require("../dbconnection");
var sql = require("mssql");

var ResourcePOV = {

  getResourcesByFiscalWeek: function (week, res, callback) {
    return connection.executeQuery(
      res,
      "SELECT id, fname, lname, generic_name, title FROM [pmpdb].[resource] where fiscal_week" + week
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

var connection = require("../dbconnection");
var sql = require("mssql");

var Title = {
  getTitles: function (req, res, callback) {
    return connection.executeQuery(
      res,
      "SELECT id, role FROM [pmpdb].[title] "
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

module.exports = Title;

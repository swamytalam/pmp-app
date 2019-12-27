var connection = require("../dbconnection");
var sql = require("mssql");

var Allocation = {
  getAllocations: function (req, res, callback) {
    return connection.executeQuery(
      res,
      "SELECT id, name FROM [pmpdb].[allocation] "
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

module.exports = Allocation;

var connection = require("../dbconnection");
var sql = require("mssql");

var WorkingDay = {
  getWorkingDays: function (req, res, callback) {
    return connection.executeQuery(
      res,
      "select w.id, m.month,w.count from pmpdb.working_days w, pmpdb.month m where m.id=w.month_id  "
    );
  },

  getWorkingDaysByYearId: function (id, res, callback) {
    return connection.executeQuery(
      res,
      "select w.id, m.month,w.count from pmpdb.working_days w, pmpdb.month m where m.id=w.month_id and w.year_id=" + id
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

module.exports = WorkingDay;

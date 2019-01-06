var connection = require("../dbconnection");
var sql = require("mssql");

var Holiday = {
  getHolidays: function (req, res, callback) {
    return connection.executeQuery(
      res,
      "select h.id, m.month,h.name, h.holiday_date from pmpdb.holiday h, pmpdb.month m where m.id=h.month_id "
    );
  },

  getHolidaysByYearId: function (id, res, callback) {
    return connection.executeQuery(
      res,
      "select h.id, m.month,h.name, h.holiday_date from pmpdb.holiday h, pmpdb.month m where m.id=h.month_id and h.year_id=" + id
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

module.exports = Holiday;

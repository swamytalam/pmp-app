var connection = require("../dbconnection");
var sql = require("mssql");

var ResourcePlan = {
  getResourcePlan: function (req, res, callback) {
    return connection.executeQuery(
      res,
      "select r.id, r.fname, r.lname, t.role, a.name as allocation, tay.percentage, ryp.working_days, ryp.holidays, ryp.vacation_days, ryp.hours_per_day, ryp.budget_hours as total_budget_hours from pmpdb.resource r, pmpdb.title t, pmpdb.title_allocation_year tay , pmpdb.allocation a, pmpdb.resource_yearly_plan ryp where t.id=r.title_id and tay.allocation_id=a.id and tay.title_id = t.id and r.id = ryp.resource_id order by r.fname, allocation"
    );
  },

  getResourcePlanByYearId: function (id, res, callback) {
    return connection.executeQuery(
      res,
      "select r.id, r.fname, r.lname, t.role, a.name as allocation, tay.percentage, ryp.working_days, ryp.holidays, ryp.vacation_days, ryp.hours_per_day, ryp.budget_hours as total_budget_hours from pmpdb.resource r, pmpdb.title t, pmpdb.title_allocation_year tay , pmpdb.allocation a, pmpdb.resource_yearly_plan ryp where t.id=r.title_id and tay.allocation_id=a.id and tay.title_id = t.id and r.id = ryp.resource_id"
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

module.exports = ResourcePlan;

//var sql = require("mssql");
var sql = require("pg-promise");
//Initiallising connection string
var dbConfig = {
  user: "ecomdevadmin",
  password: "ecomdevadmin123#",
  server: "dev-ecom-rds-postgres.cvopxdeitq1r.us-west-2.rds.amazonaws.com",
  database: "ecomdb",
  port: "5432",
  requestTimeout: '3000',
  //          debug: true,
  dialect: "mssql",
  options: {
    encrypt: true // Use this if you're on Windows Azure
  }

};

// Function to connect to database and execute query
var connection = {
  executeQuery: function (res, query) {
    var dbConn = new sql.Connection(dbConfig);
    dbConn.connect().then(function () {
      var request = new sql.Request(dbConn);

      request.query(query).then(function (recordSet) {
        //console.log(recordSet);
        res.send(recordSet);
        dbConn.close();
      }).catch(function (err) {
        console.log(err);
        dbConn.close();
      });
    }).catch(function (err) {
      console.log(err);
    });
  },
  executeInsertQuery: function (res, query) {
    var dbConn = new sql.Connection(dbConfig);
    dbConn
      .connect()
      .then(function () {
        var transaction = new sql.Transaction(dbConn);
        transaction
          .begin()
          .then(function () {
            var request = new sql.Request(transaction);
            request.query(query).then(function () {
              transaction
                .commit()
                .then(function () {
                  res.send({
                    status: "success"
                  });
                  dbConn.close();
                })
                .catch(function (err) {
                  console.log("Error in Transaction Commit " + err);
                  dbConn.close();
                });
            });
          })
          .catch(function (err) {
            console.log(err);
            dbConn.close();
          });
      })
      .catch(function (err) {
        console.log(err);
      });
  }
};

module.exports = connection;

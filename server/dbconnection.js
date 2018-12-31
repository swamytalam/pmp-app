var sql = require("mssql");
//Initiallising connection string
var dbConfig = {
  user: "otcadmin",
  password: "Oriental#123",
  server: "appdevmasterdb.database.windows.net",
  database: "ecom-svc-data-packet",
  port: "1433",
  requestTimeout: '3000',
  //	debug: true,
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

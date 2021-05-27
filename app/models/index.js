require("dotenv").config();
// let dbConfig = require("./app/models/index");
let mssql = require('mssql');


let pool1 = new mssql.ConnectionPool({ /* config */ 

  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  server: 'localhost',
  database: process.env.DB_NAME,
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    encrypt: false,
    enableArithAbort: false 

  }
})


module.exports = pool1;

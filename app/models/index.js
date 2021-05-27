require("dotenv").config();
// let dbConfig = require("./app/models/index");
let mssql = require('mssql');


let pool1 = new mssql.ConnectionPool({ /* config */ 

  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  server: 'olebot.cl4wsbkb9qhh.us-west-2.rds.amazonaws.com',
  database: process.env.DB_NAME,
  pool: {
    idleTimeoutMillis: 60000,
    max: 10,
    min: 0,
  },
  options: {
    encrypt: true,
    enableArithAbort: false 

  }
})


module.exports = pool1;

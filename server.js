let app = require("./app.js");
let logger = require("./config/winston.js");
require("dotenv").config();
const pool1 = require("./app/models/index.js");

//database connection
pool1.connect().then(pool => {
  
  console.log("Database Connected");  
  return pool.request();
  
}).catch(err => {
  throw({
      message:err.message || "Server error while Database connection",
      code:err.code || 500
  });
});

pool1.on('error', err => {
  logger.error(err);
  throw new Error(err);
})

app.listen(process.env.PORT, () => {
  logger.info(`Server started at : http://localhost:${process.env.PORT}`);
  
});

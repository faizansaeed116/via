let app = require("./app.js");
let logger = require("./config/winston.js");
require("dotenv").config();



app.listen(process.env.PORT, () => {
  logger.info(`Server started at : http://localhost:${process.env.PORT}`);
});

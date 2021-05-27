let winston = require("winston");

let loggerConfig = {
  level: "info",
  handleExceptions: true,
  json: false,
  colorize: true,
};

let logger = new winston.createLogger({
  transports: [new winston.transports.Console(loggerConfig)],
  exitOnError: false,
});



module.exports = logger;

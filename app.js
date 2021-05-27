let express = require("express");
let app = express();

//Setup Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// //Setup Routes
app.use("/", require("./app/routes/index.route.js"));

module.exports = app;

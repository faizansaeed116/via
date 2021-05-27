let Router = require("express").Router();
let {body,param} = require("express-validator");
let contrl = require("../controllers/index.ctrl.js");

let validatetelefonos = [body("codigo").notEmpty().isInt(),body("telefono").notEmpty().isString()];
let validaterfc = [body("codigo").notEmpty().isInt(),body("telefono").notEmpty().isString(),body("rfc").notEmpty().isString()];
let validateconsulta = [body("codigo").notEmpty().isInt()];
let validateclient = [body("telefono").notEmpty().isString(),body("nombreprospecto").notEmpty().isString(),body("direccionprospecto").notEmpty().isString(),
    body("giroprospecto").notEmpty().isString(),body("horarioprospecto").notEmpty().isString(),body("cpprospecto").notEmpty().isString()]
let validateincident = [body("codigo").notEmpty().isInt(),body("telefono").notEmpty().isString(),body("tipoincidencia").notEmpty().isString(),body("detalleincidencia").notEmpty().isString()]
    //Each route will have its own validation according to input
///Understood like this 
// am i right now>?

//Add Routes Here
Router.post("/validactiontelefonos", validatetelefonos, contrl.validactiontelefonos);
Router.post("/validactionrfc", validaterfc, contrl.validactionRFC);
Router.post("/consulta", validateconsulta, contrl.consulta);
Router.post("/newclient", validateclient, contrl.newClient);
Router.post("/newincident", validateincident, contrl.newIncident);

module.exports = Router;

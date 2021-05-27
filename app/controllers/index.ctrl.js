const pool1 = require("../models/index.js");
const {validationResult} = require("express-validator");
//validactiontelefonos
exports.validactiontelefonos = async (req,res)=>{
    let errors = validationResult(req);

    if(!errors.isEmpty())
    {
        return res.status(422).send({
            message: errors.array(),
            code: 422
        });
    }
    try
    {
        await pool1.connect().then(pool => {
            return pool.request()
            .input('Codigo', req.body.codigo)
            .input('Telefono', req.body.telefono)
            .execute(`VALIDACIONTELEFONOS`);  
         }).then(result => {
            const record = result.recordsets[0];
            console.log(record);
            return res.status(200).send(record);
         }).catch(err => {
            throw({
                message:err.message || "Server error while E-Status",
                code:err.code || 500
            });
         });
    }
    catch(err)
    {
        return res.status(err.code || 500).send({
            message:err.message || "Server error while E-Status",
            code:err.code || 500
        });
    }
}

// validaction-RFC
exports.validactionRFC= async (req,res)=>{
    let errors = validationResult(req);

    if(!errors.isEmpty())
    {
        return res.status(422).send({
            message: errors.array(),
            code: 422
        });
    }
    try
    {
        await pool1.connect().then(pool => {
            return pool.request()
            .input('Codigo', req.body.codigo)
            .input('Telefono', req.body.telefono)
            .input('RFC', req.body.rfc)
            .execute(`VALIDACIONRFC`);
         
         
         }).then(result => {
            const record = result.recordsets;
            console.log(record);
            return res.status(200).send(record);

         }).catch(err => {
            throw({
                message:err.message || "Server error while validating RFC",
                code:err.code || 500
            });
         });
    }
    catch(err)
    {
        return res.status(err.code || 500).send({
            message:err.message || "Server error while E-Status",
            code:err.code || 500
        });
    }


}

//consulta
exports.consulta= async (req,res)=>{
    let errors = validationResult(req);

    if(!errors.isEmpty())
    {
        return res.status(422).send({
            message: errors.array(),
            code: 422
        });
    }
    try
    {
        await pool1.connect().then(pool => {
            return  pool.request()
            .input('Codigo', req.body.codigo)
            .execute(`CONSULTA`);
            
         }).then(result => {
            const record = result.recordset;
            console.log(record);
            return res.status(200).send(record);
         }).catch(err => {
            throw({
                message:err.message || "Server error ",
                code:err.code || 500
            });
         });
    }
    catch(err)
    {
        return res.status(err.code || 500).send({
            message:err.message || "Server error while E-Status",
            code:err.code || 500
        });
    }
}

//New Client
exports.newClient= async (req,res)=>{
    let errors = validationResult(req);

    if(!errors.isEmpty())
    {
        return res.status(422).send({
            message: errors.array(),
            code: 422
        });
    }
    try
    {
        await pool1.connect().then(pool => {
            return pool.request()
            .input('Telefono', req.body.telefono)
            .input('nombreprospecto', req.body.nombreprospecto)
            .input('direccionprospecto', req.body.direccionprospecto)
            .input('giroprospecto', req.body.giroprospecto)
            .input('horarioprospecto', req.body.horarioprospecto)
            .input('cpprospecto', req.body.cpprospecto)
            .execute(`INSERTAPROSPECTOS`); 
         }).then(result => {
            return res.status(200).send(result);
            
         }).catch(err => {
            throw({
                message:err.message || "Server error while adding client",
                code:err.code || 500
            });
         });
  
    }
    catch(err)
    {
        return res.status(err.code || 500).send({
            message:err.message || "Server error while E-Status",
            code:err.code || 500
        });
    }
}

//New Incident
exports.newIncident= async (req,res)=>{
    let errors = validationResult(req);

    if(!errors.isEmpty())
    {
        return res.status(422).send({
            message: errors.array(),
            code: 422
        });
    }
    try
    {
        await pool1.connect().then(pool => {
        
            pool.request()
            .input('codigo', req.body.codigo)
            .input('tipoincidencia', req.body.tipoincidencia)
            .input('Telefono', req.body.telefono)
            .input('detalleincidencia', req.body.detalleincidencia)
            .execute(`ALTAINCIDENCIAS`);
         
         }).then(result => {
            return res.status(200).send(result);
         }).catch(err => {
            throw({
                message:err.message || "Server error while adding incident",
                code:err.code || 500
            });
         });
    }
    catch(err)
    {
        return res.status(err.code || 500).send({
            message:err.message || "Server error while E-Status",
            code:err.code || 500
        });
    }

}
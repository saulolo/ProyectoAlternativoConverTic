const ErrorHandler = require('../utils/errorHandler')

module.exports = (err, req, res, next) =>{
    err.statusCode= err.statusCode || 500;
    err.message= err.message || "Internal Server Error"

    res.status(err.statusCode).json({
        success:false,
        message: err.stack
    })

    //ERROR DE CLAVE DUPLICADA EN MONGOOSE
    if (err.code=== 11000){
        const message=`Clave duplicada ${Object.keys(err.keyValue)}`
        error= new ErrorHandler(message, 400)
    }

    //Error en JWT token
    if (err.name==="JsonWebTokenError"){
        const message= "Token de Json Web es inválido, intentalo de nuevo!"
        error= new ErrorHandler(message, 400)
    }

    //Error JWT Token expirado
    if (err.name==="TokenExpiredError"){
        const message= "El token de JWT es vencido. Ya expiró. Intentalo de nuevo!"
        error= new ErrorHandler(message, 400)
    }

}
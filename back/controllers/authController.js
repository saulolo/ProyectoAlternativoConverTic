const User = require("../models/auth")
const ErrorHandler= require("../utils/errorHandler")
const catchAsyncErrors= require("../middleware/catchAsyncErrors");
const tokenEnviado = require("../utils/jwtToken");

//  REGISTRAR UN NUEVO USUARIO   /api/usuario/registro
exports.registroUsuario= catchAsyncErrors(async (req, res, next) =>{
    const {nombre, email, password} = req.body;

    const user = await User.create({
        nombre,
        email,
        password,
        avatar:{
            public_id:"Anfghhytressd6789LOUYG798hhgvbvdsg5467",
            url: "https://www.pngmart.com/files/21/Account-Avatar-Profile-PNG-Photo.png"
        }
    })

    tokenEnviado(user,201,res)
})


//INICIAR SESIÓN - LOGIN
exports.loginUser = catchAsyncErrors(async (req, res, next) =>{
    const { email, password} = req.body;

    //Revisar si los campos estan completos
    if(!email || !password){
        return next(new ErrorHandler("Por favor ingrese email y Contraseña", 400))
    }

    //Buscar al usuario en nuestra base de datos 
    const user = await User.findOne({email}).select("+password")
    if(!user){
        return next(new ErrorHandler("Email o contraseña inválidos", 401))
    }

    //Comparar contraseñas, verificar si esta bien
    const contrasenaOK= await user.compararPass(password);

    if (!contrasenaOK){
        return next(new ErrorHandler("Contraseña inválida", 401))
    }

    tokenEnviado(user,200,res)

})
const User = require("../models/auth")
const ErrorHandler= require("../utils/errorHandler")
const catchAsyncErrors= require("../middleware/catchAsyncErrors");

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

    res.status(201).json({
        success: true,
        user
    })
})
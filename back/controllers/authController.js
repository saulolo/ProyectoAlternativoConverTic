const User = require("../models/auth")
const ErrorHandler= require("../utils/errorHandler")
const catchAsyncErrors= require("../middleware/catchAsyncErrors");
const tokenEnviado = require("../utils/jwtToken");
const sendEmail = require("../utils/sendEmail")
const crypto = require("crypto")

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
exports.loginUser = catchAsyncErrors(async(req, res, next)=>{
    const { email, password} = req.body;

    //Revisar si los campos estan completos
    if (!email || !password){
        return next(new ErrorHandler("Por favor ingrese email y Contraseña", 400))
    }

    //Buscar al usuario en nuestra base de datos
    const user = await User.findOne({email}).select("+password")
    if(!user){
        return next(new ErrorHandler("Email o contraseña inválidos", 401))
    }

    //Comparar contraseñas, verificar si está bien
    const contrasenaOK= await user.compararPass(password);

    if (!contrasenaOK){
        return next(new ErrorHandler("Contraseña inválida",401))
    }

    tokenEnviado(user,200,res)

})

//CERRAR SESIÓN (LOGOUT)
exports.logOut = catchAsyncErrors(async(req, res, next)=>{
    res.cookie("token",null, {
        expires: new Date(Date.now()),
        httpOnly: true
    })

    res.status(200).json({
        success:true,
        message: "Cerró sesión"
    })
})

//RECUPERAR CONTRASEÑA (OLVIDE MI CONTRASEÑA)
exports.forgotPassword = catchAsyncErrors ( async( req, res, next) =>{
    const user= await User.findOne({email: req.body.email});

    if (!user){
        return next(new ErrorHandler("Usuario no se encuentra registrado", 404))
    }
    const resetToken= user.genResetPasswordToken();

    await user.save({validateBeforeSave: false})

    //Crear una url para hacer el reset de la contraseña
    const resetUrl= `${req.protocol}://${req.get("host")}/api/resetPassword/${resetToken}`;

    const mensaje=`Hola!\n\nTu link para ajustar una nueva contraseña es el 
    siguiente: \n\n${resetUrl}\n\n
    Si no solicitaste este link, por favor comunicate con soporte.\n\n Att:\nConverTic Shop`

    try{
        await sendEmail({
            email:user.email,
            subject: "ConverTic Shop Recuperación de la contraseña",
            mensaje
        })
        res.status(200).json({
            success:true,
            message: `Correo enviado a: ${user.email}`
        })
    }catch(error){
        user.resetPasswordToken=undefined;
        user.resetPasswordExpire=undefined;

        await user.save({validateBeforeSave:false});
        return next(new ErrorHandler(error.message, 500))
    }

})

//Resetear la contraseña
exports.resetPassword = catchAsyncErrors(async (req,res,next) =>{
    //Hash el token que llego con la URL
    const resetPasswordToken= crypto.createHash("sha256").update(req.params.token).digest("hex")
    //Buscamos al usuario al que le vamos a resetear la contraseña
    const user= await User.findOne({
        resetPasswordToken,
        resetPasswordExpire:{$gt: Date.now()}
    })
    //El usuario si esta en la base de datos?
    if(!user){
        return next(new ErrorHandler("El token es inválido o ya expiró",400))
    }
    //Diligenciamos bien los campos?
    if(req.body.password!==req.body.confirmPassword){
        return next(new ErrorHandler("Contraseñas no coinciden",400))
    }

    //Setear la nueva contraseña
    user.password= req.body.password;
    user.resetPasswordToken=undefined;
    user.resetPasswordExpire=undefined;

    await user.save();
    tokenEnviado(user, 200, res)
})

//VER PERFIL DE USUARIO (Usuario que esta logueado)
exports.getUserProfile= catchAsyncErrors(async (req, res, next) =>{
    const user= await User.findById(req.user.id);

    res.status(200).json({
        success:true,
        user
    })
})


//UPDATE CONTRASEÑA (usuario logueado)
exports.updatePassword= catchAsyncErrors( async (req, res, next)=>{
    const user= await User.findById(req.user.id).select("+password");

    //Revisamos si la contraseña vieja es igual a la nueva
    const sonIguales = await user.compararPass(req.body.oldPassword)

    if(!sonIguales){
        return next (new ErrorHandler("La contraseña actual no es correcta", 401))
    }

    user.password= req.body.newPassword;
    await user.save();

    tokenEnviado(user, 200, res)
})


//UPDATE PERFIL DE USUARIO (logueado)
exports.updateProfile= catchAsyncErrors(async(req,res,next)=>{
    //Actualizar el email por user a desición de cada uno
    const newUserData ={
        nombre: req.body.nombre,
        email: req.body.email
    }

    //Update Avatar: pendiente

    const user = await User.findByIdAndUpdate(req.user.id, newUserData, {
        new:true,
        runValidators:true,
        useFindAndModify: false
    })

    res.status(200).json({
        success:true,
        user
    })
})

//SERVICIOS CONTROLADORES SOBRE USUARIOS POR PARTE DE LOS ADMIN

//Ver todos los Usuarios

exports.getAllUsers = catchAsyncErrors (async(req, res, next)=>{
    const users = await User.find();

    res.status(200).json({
        success: true,
        users
    })
})

//VER EL DETALLE DE UN USUARIO
exports.getUserDetails= catchAsyncErrors(async(req, res, next)=>{
    const user= await User.findById(req.params.id);

    if (!user){
        return next(new ErrorHandler(`No se ha encontrado ningún usuario con el id: ${req.params.id}`))
    }

    res.status(200).json({
        success:true,
        user
    })
})

//ACTUALIZAR PERFIL DE USUARIO (como administrador)
exports.updateUser= catchAsyncErrors (async(req, res, next)=>{
    const nuevaData={
        nombre: req.body.nombre,
        email: req.body.email,
        role: req.body.role
    }

    const user= await User.findByIdAndUpdate(req.params.id,nuevaData, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })

    res.status(200).json({
        success:true,
        user
    })
})





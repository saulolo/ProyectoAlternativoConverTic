//[25]
exports.getProducts = (req,res, next) => {  //[26]
    res.status(200).json({  //[27]
        success: true,
        message: "En esta ruta usted va a ver todos los productos"
    })
}  //[28]
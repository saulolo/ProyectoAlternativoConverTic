const producto=require("../models/productos") //[69] 


//[25]
/* Ver la lista de productos */
exports.getProducts = (req,res, next) => {  //[26]
    res.status(200).json({  //[27]
        success: true,
        message: "En esta ruta usted va a ver todos los productos"
    })
}  //[28]


//Crear nuevo producto   /api/productos  [68]
exports.newProduct=async(req,res, next) =>{  //[70]
    const product=await producto.create(req.body);  //[71]
      
    res.status(201).json({  //[72] 
        success:true,  //[72.1] 
        product  //[72.2] 
    })
} 

//[73] 
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const producto = require("../models/productos"); //[69] 
const APIFeatures = require("../utils/apiFeatures");
const ErrorHandler = require("../utils/errorHandler");
const fetch = (url) => import('node-fetch').then(({ default: fetch }) => fetch(url));//[93]


//[25]
/* VER LA LISTA DE TODOS LOS PRODUCTOS */
exports.getProducts = catchAsyncErrors(async (req, res, next) => {  //[26] y [78]
    
    //Paginación
    const resPerPage = 4;
    const productsCount = await producto.countDocuments();

    const apiFeatures = new APIFeatures(producto.find(), req.query)
        .search()
        .filter();

    let products = await apiFeatures.query;
    let filteredProductsCount= products.length;
    apiFeatures.pagination(resPerPage)
    products = await apiFeatures.query.clone();

    res.status(200).json({ 
        success: true,
        productsCount,
        resPerPage,
        filteredProductsCount,
        products
    })

})  //[28]


/* VER UN PRODUCTO POR ID */ //[81]
exports.getProductById = catchAsyncErrors(async (req, res, next) => {  
    const product = await producto.findById(req.params.id);  //[81.1]  

    if (!product) {  //[81.2] 
        return next(new ErrorHandler("Producto no encontrado", 404)) 
        }
    
    res.status(200).json({  //[81.6] 
        success: true,
        message: "Aqui debajo encuentras información sobre tu producto: ",
        product
    })
})   //[82] 


//[84] Tipos de Variables
/* ACTUALIZAR (UPDATE) A UN PRODUCTO */  //[85]
exports.updateProduct = catchAsyncErrors (async (req, res, next) => {
    let product = await producto.findById(req.params.id);   //[85.1] 
    
    if (!product) {  //[81.2] 
        return next(new ErrorHandler("Producto no encontrado", 404)) 
        }
    //[85.3] 
    product=await producto.findByIdAndUpdate(req.params.id, req.body, { //[85.4] 
        new:true,//[85.5]
        runValidators:true  //[85.6] 
    }) 
    res.status(200).json({  //[85.7]
        success: true,
        message:"Producto actualizado correctamente",
        producto
    })
}) //[86] 


/* ELIMINAR A UN PRODUCTO */ //[89]
exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
    const product = await producto.findById(req.params.id);   //[89.1] 
    
    if (!product) { 
        return next(new ErrorHandler("Producto no encontrado", 404)) 
        }

    await product.remove();//[89.2] 
    res.status(200).json({ 
        success: true,
        message: "Producto eliminado correctamente",
    })    
})//[90] 


/*CREAR NUEVO PRODUCTO */  //api/productos  [68]
exports.newProduct = catchAsyncErrors(async (req, res, next) =>{  //[70]
    req.body.user = req.user.id;
    const product = await producto.create(req.body);  //[71] 
    res.status(201).json({  //[72] 
        success: true,  //[72.1] 
        product  //[72.2] 
    })
})
//[73] 


//Crear o actualizar una Review
exports.createProductReview = catchAsyncErrors(async (req, res, next) => {
    const { rating, comentario, idProducto } = req.body;

    const opinion = {
        nombreCliente: req.user.nombre,
        rating: Number(rating),
        comentario
    }

    const product = await producto.findById(idProducto);

    const isReviewed = product.opiniones.find(item =>
        item.nombreCliente === req.user.nombre)

        if (isReviewed) {
            product.opiniones.forEach(opinion => {
                if (opinion.nombreCliente === req.user.nombre) {
                    opinion.comentario = comentario,
                    opinion.rating = rating
                }
            })
        } else {
            product.opiniones.push(opinion)
            product.numCalificaciones = product.opiniones.length
        }

        product.calificacion = product.opiniones.reduce((acc, opinion) =>
        opinion.rating + acc, 0) / product.opiniones.length

        await product.save({ validateBeforeSave: false });

        res.status(200).json({
            success: true,
            message: "Hemos opinado correctamente"
        })
})

//Ver todas las reviews de un producto
exports.getProductReviews = catchAsyncErrors(async (req, res, next) => {
    const product = await producto.findById(req.query.id)

    res.status(200).json({
        success: true,
        opiniones: product.opiniones
    })
})

//Eliminar review
exports.deleteReview = catchAsyncErrors(async (req, res, next) => {
    const product = await producto.findById(req.query.idProducto);

    const opiniones = product.opiniones.filter(opinion =>
        opinion._id.toString() !== req.query.idReview.toString());

    const numCalificaciones = opiniones.length;

    const calificacion = opiniones.reduce((acc, Opinion) =>
        Opinion.rating + acc, 0) / opiniones.length;

    await producto.findByIdAndUpdate(req.query.idProducto, {
        opiniones,
        calificacion,
        numCalificaciones
    }, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })
    res.status(200).json({
        success: true,
        message: "review eliminada correctamente"
    })
})

//Ver la lista de productos (Admin)
exports.getAdminProducts = catchAsyncErrors(async (req, res, next) => {

    const products = await producto.find()

    res.status(200).json({
        products
    })

})



//[92] Otro método para ver productos
/* VER TODOS LOS PRODUCTOS CON FETCH */ //[94]
function verProductos(){   //[94.1] 
     fetch('http://localhost:4000/api/productos') //[94.2]
     .then(res => res.json()) //[94.3] 
     .then(res => console.log(res))   //[94.4] 
     .catch(err => console.error(err))  //[94.5] 
} 
//verProductos();  //[95] 


//[96] Otro método para ver productos por ID con Fetch
/* VER LOS PRODUCTOS POR ID CON FETCH */ //[96.1]
function verProductosPorID(id){   //[96.2] 
    fetch('http://localhost:4000/api/producto/' + id) //[96.3]
    .then(res => res.json()) 
    .then(res => console.log(res))   
    .catch(err => console.error(err))   
} 
//verProductosPorID('63f6c01c0498c80e4b4361bb');  //[97] 





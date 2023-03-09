const Order=require("../models/order");
const Product= require ("../models/productos")
const catchAsyncErrors= require("../middleware/catchAsyncErrors")
const ErrorHandler = require("../utils/errorHandler");

//CREAR NUEVA ORDEN (PEDIDO)
exports.newOrder= catchAsyncErrors (async (req, res, next)=>{
    const {
        items,
        envioInfo,
        precioItems,
        precioImpuesto,
        precioEnvio,
        precioTotal,
        pagoInfo
    } = req.body;

    const order= await Order.create({
        items,
        envioInfo,
        precioItems,
        precioImpuesto,
        precioEnvio,
        precioTotal,
        pagoInfo,
        fechaPago: Date.now(),
        user: req.user._id
    })

    res.status(201).json({
        success:true,
        order
    })
})

//VER UNA ORDEN POR ID
exports.getOneOrder= catchAsyncErrors(async(req, res, next)=>{
    const order= await Order.findById(req.params.id).populate("user", "nombre email")//Restricción de usuario

    if(!order){
        return next(new ErrorHandler("No encontramos una orden con ese ID", 404))
    }
    res.status(200).json({
        success:true,
        order
    })
})

//VER TODAS MIS ORDENES (Usuario logueado)
exports.myOrders= catchAsyncErrors(async(req,res, next)=>{
    const orders= await Order.find({user: req.user._id});

    res.status(200).json({
        success:true,
        orders
    })
})

//ADMIN
//Ver todas las Ordenes (Avministrador)
exports.allOrders= catchAsyncErrors(async (req, res, next)=>{
    const orders= await Order.find()

    let cantidadTotal= 0;
    orders.forEach(order =>{
        cantidadTotal= cantidadTotal + order.precioTotal
    })

    res.status(200).json({
        success:true,
        cantidadTotal,
        orders
    })
})

//Editar una Orden
exports.updateOrder= catchAsyncErrors(async(req, res, next)=>{
    const order= await Order.findById(req.params.id)

    if(!order){
        return next (new ErrorHandler("Orden no encontrada", 404))
    }

    if(!order.estado==="Enviado"){
        return next (new ErrorHandler("Esta orden ya fue enviada", 400))
    }

    order.estado= req.body.estado;
    order.fechaEnvio= Date.now();

    await order.save()

    res.status(200).json({
        success:true,
        order
    })

})


//Funcion para actualizar el Inventario
async function updateStock(id, quantity){
    const product = await Product.findById(id);
    product.invetario= product.invetario - quantity;
    await product.save({validateBeforeSave: false})
}


//Eliminar una Orden (admin)
exports.deleteOrder = catchAsyncErrors(async (req, res, next)=>{
    const order = await Order.findById(req.params.id);

    if(!order){
        return next (new ErrorHandler("Esta no esta registrada", 404))
    }
    await order.remove()

    res.status(200).json({
        success:true,
        message:"Orden eliminada correctamente"
    })
})
const express=require("express") //[29]
const router=express.Router(); //[30] 

const {getProducts, newProduct, getProductById, updateProduct, deleteProduct} = require("../controllers/productsController")   //[31]

router.route('/productos').get(getProducts);    //[32] Ruta para ver productos
router.route('/producto/nuevo').post(newProduct);  //[74] y [75]  Ruta para crear producto
router.route('/producto/:id').get(getProductById); //[83] Ruta para consultar por id
router.route('/producto/:id').put(updateProduct); //[87] Ruta para actualizar por id y [88]
router.route('/producto/:id').delete(deleteProduct) //[91] Ruta para eliminar por id

module.exports=router;   //[33]

//[34] 




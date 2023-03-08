const express=require("express") //[29]
const router=express.Router(); //[30] 

const {getProducts, 
    newProduct, 
    getProductById, 
    updateProduct, 
    deleteProduct
} = require("../controllers/productsController");   //[31]
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");


//Probemos autenticación
router.route('/productos').get(getProducts)    //[32] Ruta para ver productos
router.route('/producto/nuevo').post(isAuthenticatedUser, authorizeRoles("admin"), newProduct);  //[74] y [75]  Ruta para crear producto
router.route('/producto/:id').get(getProductById); //[83] Ruta para consultar por id
router.route('/producto/:id').put(isAuthenticatedUser, authorizeRoles("admin"), updateProduct); //[87] Ruta para actualizar por id y [88]
router.route('/producto/:id').delete(isAuthenticatedUser, authorizeRoles("admin"), deleteProduct) //[91] Ruta para eliminar por id

module.exports=router;   //[33]

//[34] 




const express=require("express") //[29]
const router=express.Router(); //[30] 

const {getProducts, newProduct} = require("../controllers/productsController")   //[31]

router.route('/productos').get(getProducts)    //[32] 

router.route('/producto/nuevo').post(newProduct)  //[74] 
                    //[75] 


module.exports=router;   //[33]

//[34] 




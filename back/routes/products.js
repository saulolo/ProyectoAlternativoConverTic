const express=require("express") //[29]
const router=express.Router(); //[30] 

const {getProducts} = require("../controllers/productsController")   //[31]

router.route('/productos').get(getProducts)    //[32] 

module.exports=router;   //[33]

//[34] 




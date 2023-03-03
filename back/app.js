//[7]
const express=require("express"); //[8]
const app = express();              //[9] 

app.use(express.json());  //[35] 
const productos=require("./routes/products")       //[36] 

app.use('/api',productos)  //[37] 

//[38] 

module.exports=app   //[10] 

//[11] 
//[39] 
//[40] 
//[41] 

//[42] 
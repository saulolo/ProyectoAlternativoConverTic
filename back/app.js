//[7]
const express=require("express"); //[8]
const app = express();              //[9] 
const errorMiddleware= require("./middleware/errors")
const cookieParser = require("cookie-parser")

//Uso de constantes importadas
app.use(express.json());  //[35] 
app.use(cookieParser());

//Importar rutas
const productos=require("./routes/products")       //[36] 
const usuarios=require("./routes/auth")

app.use('/api',productos)  //[37] y [38]
app.use('/api',usuarios)


//MiddleWares para manejar errores
app.use(errorMiddleware)

module.exports=app   //[10] 

//[11] 
//[39] 
//[40] 
//[41] 

//[42] 
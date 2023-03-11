//[7]
const express=require("express"); //[8]
const app = express();              //[9] 
const errorMiddleware= require("./middleware/errors")
const cookieParser= require("cookie-parser")
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')

//Uso de constantes importadas
app.use(express.json());  //[35] 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(fileUpload());

//Importar rutas
const productos=require("./routes/products")       //[36] 
const usuarios=require("./routes/auth")
const ordenes=require("./routes/orders")

app.use('/api',productos)  //[37] y [38]
app.use('/api',usuarios)
app.use('/api', ordenes)


//MiddleWares para manejar errores
app.use(errorMiddleware)

module.exports=app   //[10] 

//[11] 
//[39] 
//[40] 
//[41] 

//[42] 
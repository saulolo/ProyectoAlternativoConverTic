//[7]
const express=require("express"); //[8]
const app = express();              //[9] 
const errorMiddleware= require("./middleware/errors")
const cookieParser= require("cookie-parser")
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')
const path = require("path")

//Seteamos archivo de configuracion
if(process.env.NODE_ENV!=="PRODUCTION") require('dotenv').config({path:'back/config/config.env'})

//Uso de constantes importadas
app.use(express.json());  //[35] 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(fileUpload());

//Importar rutas
const productos=require("./routes/products")       //[36] 
const usuarios=require("./routes/auth")
const ordenes=require("./routes/orders")

app.use('/api', productos)  //[37] y [38]
app.use('/api', usuarios)
app.use('/api', ordenes)

if(process.env.NODE_ENV === "PRODUCTION"){
    app.use(express.static(path.join(__dirname,'../front/build')))
    app.get("*", (req, res)=>{
        res.sendFile(path.resolve(__dirname,'../front/build/index.html'))
    })
}


//MiddleWares para manejar errores
app.use(errorMiddleware)

module.exports=app   //[10] 

//[11] 
//[39] 
//[40] 
//[41] 

//[42] 
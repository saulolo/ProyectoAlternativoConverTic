const app=require("./app")  //[12], [13] y [14]  
const connectDatabase = require("./config/database"); //[49]

//Setear el archivo de configuración
const dotenv=require("dotenv"); //[17] 
dotenv.config({path: 'back/config/config.env'}) //[18] 

//Configurar BD [48] importo el metodo creado y este me trae la importación [49]
connectDatabase();


//Llamemos al server [15]
const server=app.listen(process.env.PORT, () => {
    console.log(`Servidor iniciado en el puerto: ${process.env.PORT} en modo: ${process.env.NODE_ENV}`)  //[16]
})  //[19]

//[50]


                                                     

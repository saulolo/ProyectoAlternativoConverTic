const app = require ("./app");                       //[12], [13] y [14]    

//Settear el archivo de configuración
const dotenv = require("dotenv");                    //[17] 
dotenv.config({path: 'back/config/config.env'})      //[18] 

//Llamemos el server
const server = app.listen(process.env.PORT, () => {  //[15]
    console.log(`Servidor iniciando en el puerto: ${process.env.PORT} en modo: ${process.env. NODE_ENV}`)                                      //[16]
})                                                   //[19]


                                                     

const mongoose=require("mongoose"); //[43] y [44]  

//mongoose.set('strictQuery', false);

//Cadena de conexión
const connectDatabase = () => {
    mongoose.connect(process.env.DB_LOCAL_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true, //[45]
        //useFindAndModify: false
    }).then(con => {
        console.log(`Base de datos mongo conectada con el servidor: ${con.connection.host}`)
    }).catch(con => {   //[46]
        console.log(`No se logro la conexion con la base de datos`)
    })
}

module.exports=connectDatabase;  //[47]







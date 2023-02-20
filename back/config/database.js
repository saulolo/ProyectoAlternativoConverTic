const mongoose=require("mongoose"); //[43] y [44]  

const connectDatabase = () => {
    mongoose.connect(process.env.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true //[45]
    }).then(con => {
        console.log(`Base de datos mongo conectada con el servidor: ${con.connection.host}`)
    }).catch(con => {   //[46]
        console.log(`No se logro la conexion con la base de datos`)
    })
}

module.exports=connectDatabase;  //[47]









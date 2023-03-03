const mongoose=require("mongoose")    //[51] 

const productosSchema=mongoose.Schema({   //[52] 
    nombre:{          //[53]
        type:String,  //[53.1] 
        required:[true,"Por favor registra el nombre del producto."], //[53.2]
        trim:true,  //[53.3]
        maxLength:[120,"El nombre del producto no debe exceder los 120 caracteres."]   //[53.4] 
    },  
    precio:{   //[54] 
        type: Number, //[54.1] 
        required:[true,"Por favor registre el precio del producto."],
        maxLength:[8, "El precio del producto no puede estar por encima de 99'999.999"],
        default: 0.0//[54.2] 
    },
    descripcion:{ //[55] 
        type:String,
        required:[true,"Por favor registre una descripción para el producto."]
    },
    calificacion:{  //[56] 
        type: Number,
        default: 0 //[56.1] 
    },  
    imagen:[     //[57] 
        {   
            public_id:{   //[57.1] 
                type:String,
                required:true
            },
            url:{  //[59] 
                type:String,
                required:true
            }
        }
    ], //[60] 
     categoria:{
        type:String,
        required:[true,"Por favor seleccione la categoria del producto."],
        enum:{ //[60.1] 
              values:[  //[60.2] 
                "Chamarras, Buzos y Abrigos",
                "Camisas y Camisetas",
                "Vestidos, Pantalones y Jeans",
                "Calzado",
                "Ropa interior",
                "Bolsos y Maletas",
                "Accesorios"
            ]
        }
    },
    vendedor:{  //[61] 
        type:String,
        required:[true,"Por favor registre el vendedor del producto"]
    },
    invetario:{  //[62] 
        type: Number,
        required: [true,"Por favor registre el stock del producto"],
        maxLength: [5,"Cantiad máxima del producto no puede sobreasar 99999"],
        default: 0
    },
    numCalificaciones:{  //[63] 
        type:Number,
        default:0
    },
    opiniones:[//[64] 
        {
            nombreCliente:{
                type:String,
                required:true  //[64.1] 
            },
            rating:{  //[64.2]
                type:Number,
                required:true
            },
            comentario:{ //[64.3] 
                type:String,
                required:true
            }
        }
    ], 
    fechaCreacion:{ //[65] 
        type:Date,  //[65.1] 
        default:Date.now //[65.2] 
    }
})   


module.exports=mongoose.model("productos",productosSchema)  //[66]

//[67] 

//[149]
import { ALL_PRODUCTS_REQUEST, 
    ALL_PRODUCTS_SUCCESS, 
    ALL_PRODUCTS_FAIL, 
    CLEAR_ERRORS } from "../constants/productConstants";


    //VER PRODUCTOS
export const productReducer = (state ={products: []}, action)=> {  //[149.1] 
    switch(action.type){ //[149.2] 
        case ALL_PRODUCTS_REQUEST: //[149.3] 
            return{
                loading:true,
                products:[]
            }

        case ALL_PRODUCTS_SUCCESS:  //[150]
            return{
                loading:false,
                productos: action.payload.productos, //[150.1]
                cantidad: action.payload.cantidad //[150.2]
            }

        case ALL_PRODUCTS_FAIL: //[160]
            return{
                loading:false,
                error: action.payload //[160.1]
            }

        case CLEAR_ERRORS: //[161]
            return{
                ...state, //[161.1]
                error:null  //[161.2]
            }

        default:
            return state;    
    } 
}


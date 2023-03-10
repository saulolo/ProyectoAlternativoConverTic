//[149]
import { ALL_PRODUCTS_REQUEST, 
    ALL_PRODUCTS_SUCCESS, 
    ALL_PRODUCTS_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    CLEAR_ERRORS  
 } from "../constants/productConstants";


    //VER PRODUCTOS
export const productReducer = (state ={products: []}, action)=> {  //[149.1] 
    switch(action.type) { //[149.2] 
        case ALL_PRODUCTS_REQUEST: //[149.3] 
            return{
                loading:true,
                products:[]
            }

        case ALL_PRODUCTS_SUCCESS:  //[150]
            return {
                loading: false,
                products: action.payload.products, //[150.1]
                cantidad: action.payload.cantidad, //[150.2]
                resPerPage: action.payload.resPerPage,
                filteredProductsCount: action.payload.filteredProductsCount
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

//REDUCER PARA VER TODOS LOS DETALLES
export const productDetailsReducer = (state = { product: {} }, action) => {  
    console.log({action})
    console.log({j:action.payload})
    switch (action.type) { 
        case PRODUCT_DETAILS_REQUEST: 
            return {
                ...state,
                loading: true
            }

        case PRODUCT_DETAILS_SUCCESS:  
            return {
                loading: false,
                product: action.payload
            }

        case PRODUCT_DETAILS_FAIL: 
            return {
                ...state,
                error: action.payload
            }

        case CLEAR_ERRORS: 
            return {
                ...state, 
                error: null  
            }

        default:
            return state    
    } 
}

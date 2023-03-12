//[149]
import { 
    ALL_PRODUCTS_REQUEST, 
    ALL_PRODUCTS_SUCCESS, 
    ALL_PRODUCTS_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    CLEAR_ERRORS,
    ADMIN_PRODUCTS_REQUEST,
    ADMIN_PRODUCTS_SUCCESS,
    ADMIN_PRODUCTS_FAIL,
    NEW_PRODUCT_REQUEST,
    NEW_PRODUCT_SUCCESS,
    NEW_PRODUCT_FAIL,
    NEW_PRODUCT_RESET,
    // DELETE_PRODUCT_REQUEST,
    // DELETE_PRODUCT_SUCCESS,
    // DELETE_PRODUCT_FAIL,
    // UPDATE_PRODUCT_REQUEST,
    // UPDATE_PRODUCT_SUCCESS,
    // UPDATE_PRODUCT_FAIL,
    // UPDATE_PRODUCT_RESET,
    NEW_REVIEW_REQUEST,
    NEW_REVIEW_SUCCESS,
    NEW_REVIEW_FAIL,
    NEW_REVIEW_RESET,
    // GET_REVIEWS_REQUEST,
    // GET_REVIEWS_SUCCESS,
    // GET_REVIEWS_FAIL,
    // DELETE_REVIEW_REQUEST,
    // DELETE_REVIEW_SUCCESS,
    // DELETE_REVIEW_RESET,
    // DELETE_REVIEW_FAIL
 } from "../constants/productConstants";


    //REDUCER PARA VER PRODUCTOS
export const productReducer = (state ={products: []}, action)=> {  //[149.1] 
    switch(action.type) { //[149.2] 
        case ALL_PRODUCTS_REQUEST: //[149.3] 
        case ADMIN_PRODUCTS_REQUEST:
            return{
                loading:true,
                products:[]
            }

        case ALL_PRODUCTS_SUCCESS:  //[150]
            return {
                loading: false,
                products: action.payload.products, //[150.1]
                productsCount: action.payload.productsCount, //[150.2]
                resPerPage: action.payload.resPerPage,
                filteredProductsCount: action.payload.filteredProductsCount
            }

        case ADMIN_PRODUCTS_SUCCESS:
            return{
                loading: false,
                products: action.payload
            }    

        case ALL_PRODUCTS_FAIL: //[160]
        case ADMIN_PRODUCTS_FAIL:
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

//REDUCER PARA CREAR NUEVO PRODUCTO
export const newProductReducer = (state={ product:{} }, action )=>{
    switch(action.type){

        case NEW_PRODUCT_REQUEST:
            return{
                ...state,
                loading: true
            }

        case NEW_PRODUCT_SUCCESS:
            return {
                loading: false,
                success: action.payload.success,
                product: action.payload.product
            }

        case NEW_PRODUCT_FAIL:
            return{
                ...state,
                error:action.payload
            }
            
        case NEW_PRODUCT_RESET:
            return{
                ...state,
                success:false
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error:null
            }

        default:
            return state
    }
}


//REDUCER PARA DEJAR UNA OPINION (REVIEW) Y CALIFICACION (RATING)
export const newReviewReducer = (state = {}, action) => {
    switch (action.type) {

        case NEW_REVIEW_REQUEST:
            return {
                ...state,
                loading: true
            }

        case NEW_REVIEW_SUCCESS:
            return {
                loading: false,
                success: action.payload
            }

        case NEW_REVIEW_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case NEW_REVIEW_RESET:
            return {
                ...state,
                success: false
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

// export const productReviewsReducer = (state = { opiniones: [] }, action) => {
//     switch (action.type) {

//         case GET_REVIEWS_REQUEST:
//             return {
//                 ...state,
//                 loading: true
//             }

//         case GET_REVIEWS_SUCCESS:
//             return {
//                 loading: false,
//                 opiniones: action.payload
//             }

//         case GET_REVIEWS_FAIL:
//             return {
//                 ...state,
//                 error: action.payload
//             }

//         case CLEAR_ERRORS:
//             return {
//                 ...state,
//                 error: null
//             }

//         default:
//             return state
//     }
// }

// export const reviewReducer = (state = {}, action) => {
//     switch (action.type) {

//         case DELETE_REVIEW_REQUEST:
//             return {
//                 ...state,
//                 loading: true
//             }

//         case DELETE_REVIEW_SUCCESS:
//             return {
//                 ...state,
//                 loading: false,
//                 isDeleted: action.payload
//             }

//         case DELETE_REVIEW_FAIL:
//             return {
//                 ...state,
//                 error: action.payload
//             }

//         case DELETE_REVIEW_RESET:
//             return {
//                 ...state,
//                 isDeleted: false
//             }

//         case CLEAR_ERRORS:
//             return {
//                 ...state,
//                 error: null
//             }

//         default:
//             return state
//     }
// }

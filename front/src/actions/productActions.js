import axios from 'axios';  //[163]

import {  //[163.1]
    ALL_PRODUCTS_REQUEST,
    ALL_PRODUCTS_SUCCESS,
    ALL_PRODUCTS_FAIL, 
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    CLEAR_ERRORS,
    // ADMIN_PRODUCTS_REQUEST,
    // ADMIN_PRODUCTS_SUCCESS,
    // ADMIN_PRODUCTS_FAIL,
    // NEW_PRODUCT_REQUEST,
    // NEW_PRODUCT_SUCCESS,
    // NEW_PRODUCT_FAIL,
    // DELETE_PRODUCT_SUCCESS,
    // DELETE_PRODUCT_FAIL,
    // DELETE_PRODUCT_REQUEST,
    // UPDATE_PRODUCT_REQUEST,
    // UPDATE_PRODUCT_SUCCESS,
    NEW_REVIEW_REQUEST,
    NEW_REVIEW_SUCCESS,
    NEW_REVIEW_FAIL,
    // UPDATE_PRODUCT_FAIL,
    // GET_REVIEWS_REQUEST,
    // GET_REVIEWS_SUCCESS,
    // GET_REVIEWS_FAIL,
    // DELETE_REVIEW_REQUEST,
    // DELETE_REVIEW_SUCCESS,
    // DELETE_REVIEW_FAIL
} from '../constants/productConstants';

export const getProducts = (currentPage = 1, keyword = '', precio) => async (dispatch) =>{ //[164] 
    try {
        dispatch({ type: ALL_PRODUCTS_REQUEST })

        let link = `/api/productos?keyword=${keyword}&page=${currentPage}&precio[gte]=${precio[0]}&precio[lte]=${precio[1]}`

        const { data } = await axios.get(link) //[164.1] 

        dispatch({ //[164.2] 
            type: ALL_PRODUCTS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: ALL_PRODUCTS_FAIL,  //[164.3] 
            payload: error.response.data.message //[164.4] 
        })
    }  
}

//VER DETALLE DEL PRODUCTO
export const getProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_DETAILS_REQUEST })

        const { data } = await axios.get(`/api/producto/${id}`)

        dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            payload: data.product
        })
    } catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload: error.response.data.message
        })
    }
}

//Registar una review
export const newReview = (reviewData) => async (dispatch) => {
    try {

        dispatch({ type: NEW_REVIEW_REQUEST })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.put(`/api/review`, reviewData, config)

        dispatch({
            type: NEW_REVIEW_SUCCESS,
            payload: data.success
        })

    } catch (error) {
        dispatch({
            type: NEW_REVIEW_FAIL,
            payload: error.response.data.message
        })
    }
}

// export const getProductReviews = (id) => async (dispatch) => {
//     try {

//         dispatch({ type: GET_REVIEWS_REQUEST })

//         const { data } = await axios.get(`/api/reviews?id=${id}`)

//         dispatch({
//             type: GET_REVIEWS_SUCCESS,
//             payload: data.opiniones
//         })

//     } catch (error) {

//         dispatch({
//             type: GET_REVIEWS_FAIL,
//             payload: error.response.data.message
//         })
//     }
// }

// // Delete product review
// export const deleteReview = (id, productId) => async (dispatch) => {
//     try {

//         dispatch({ type: DELETE_REVIEW_REQUEST })

//         const { data } = await axios.delete(`/api/reviews?idProducto=${productId}&idReview=${id}`)

//         dispatch({
//             type: DELETE_REVIEW_SUCCESS,
//             payload: data.success
//         })

//     } catch (error) {

//         console.log(error.response);

//         dispatch({
//             type: DELETE_REVIEW_FAIL,
//             payload: error.response.data.message
//         })
//     }
// }



//CLEAR ERRORS [165]
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}



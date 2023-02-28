import axios from 'axios';  //[163]

import {  //[163.1]
    ALL_PRODUCTS_REQUEST,
    ALL_PRODUCTS_SUCCESS,
    ALL_PRODUCTS_FAIL, 
    CLEAR_ERRORS
} from '../constants/productConstants';

export const getProducts = () => async(dispatch)=>{ //[164] 
    try {
        dispatch({type: ALL_PRODUCTS_REQUEST})

        const {data} = await axios.get('api/productos') //[164.1] 

        dispatch({ //[164.2] 
            type: ALL_PRODUCTS_SUCCESS,
            payload: data
        })
    }
    catch(error){
        dispatch({
            type: ALL_PRODUCTS_FAIL,  //[164.3] 
            payload: error.response.data.message //[164.4] 
        })
    }  
}

//CLEAR ERRORS [165]
export const clearErrors = () => async(dispatch)=>{
    dispatch({
        type: CLEAR_ERRORS
    })
}



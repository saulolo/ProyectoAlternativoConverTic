import { createStore, combineReducers, applyMiddleware } from 'redux'; //[142]
import thunk from 'redux-thunk';  //[142.1]  
import { composeWithDevTools } from 'redux-devtools-extension';
import { productReducer, productDetailsReducer  } from './reducer/productReducer';
import { authReducer, forgotPasswordReducer, userReducer } from './reducer/userReducer';
import { cartReducer } from './reducer/cartReducer';


const reducer = combineReducers ({ //[142.2]
    products: productReducer,  //[167]
    productDetails: productDetailsReducer,
    auth: authReducer,
    user: userReducer,
    forgotPassword: forgotPasswordReducer,
    cart: cartReducer
}) 

let initialState = {
    cart: {
        cartItems: localStorage.getItem('cartItems')
            ? JSON.parse(localStorage.getItem('cartItems'))
            : []
        // shippingInfo: localStorage.getItem('shippingInfo')
        //     ? JSON.parse(localStorage.getItem('shippingInfo'))
        //     : {}
    }
}   //[142.3] 

const middleware = [thunk]  //[142.4] 

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware))) //[142.5]
 
export default store;
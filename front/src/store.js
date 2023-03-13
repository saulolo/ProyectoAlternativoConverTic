import { createStore, combineReducers, applyMiddleware } from 'redux'; //[142]
import thunk from 'redux-thunk';  //[142.1]  
import { composeWithDevTools } from 'redux-devtools-extension';
import { productsReducer, productDetailsReducer, newProductReducer, productReducer } from './reducer/productReducer';
import { authReducer, forgotPasswordReducer, userReducer } from './reducer/userReducer';
import { cartReducer } from './reducer/cartReducer';
import { newOrderReducer } from './reducer/orderReducer';




const reducer = combineReducers ({ //[142.2]
    products: productsReducer,  //[167]
    productDetails: productDetailsReducer,
    auth: authReducer,
    user: userReducer,
    forgotPassword: forgotPasswordReducer,
    cart: cartReducer,
    newProduct: newProductReducer,
    product: productReducer,
    newOrder: newOrderReducer
    
    

}) 

let initialState = {
    cart: {
        cartItems: localStorage.getItem('cartItems')
            ? JSON.parse(localStorage.getItem('cartItems'))
            : [],
        shippingInfo: localStorage.getItem('shippingInfo')
            ? JSON.parse(localStorage.getItem('shippingInfo'))
            : {}
    }
}   //[142.3] 

const middleware = [thunk]  //[142.4] 

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware))) //[142.5]
 
export default store;
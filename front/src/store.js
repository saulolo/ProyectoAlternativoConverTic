import { createStore, combineReducers, applyMiddleware } from 'redux'; //[142]
import thunk from 'redux-thunk';  //[142.1]  
import { composeWithDevTools } from 'redux-devtools-extension';
import { productReducer, productDetailsReducer  } from './reducer/productReducer';
import { authReducer } from './reducer/userReducer';

const reducer = combineReducers ({ //[142.2]
    products: productReducer,  //[167]
    productDetails: productDetailsReducer,
    auth: authReducer
}) 

let initialState = {}   //[142.3] 

const middleware = [thunk]  //[142.4] 

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware))) //[142.5]
 
export default store;
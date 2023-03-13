import './App.css';
import React, { useEffect } from 'react';
import Header from './components/layout/Header';
//import ProtectedRoute from './routes/ProtectedRoute';
import { Footer } from './components/layout/Footer';
import Home from './components/Home';
import { ProductDetails } from './components/products/ProductDetails';
//Router traido desde react-router-dom (no confundir con el de express)
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/admin/Dashboard';
import { Login } from './components/user/Login';
import { Register } from './components/user/Register';
import { loadUser } from './actions/userActions';
import store from './store';
import { Profile } from './components/user/Profile';
import { UpdateProfile } from './components/user/UpdateProfile';
import { UpdatePassword } from './components/user/UpdatePassword';
import { ForgotPassword } from './components/user/ForgotPassword';
import { NewPassword } from './components/user/NewPassword';
import Cart from './components/cart/Cart';
import ProductsList from './components/admin/ProductsList';
import NewProduct from './components/admin/NewProduct';
import { UpdateProduct } from './components/admin/UpdateProduct';
import Shipping from './components/cart/Shipping';
import { ConfirmOrder } from './components/cart/ConfirmOrder';
import { Payment } from './components/cart/Payment';
import { Success } from './components/cart/Success';



//import ProtectedRoute from './routes/ProtectedRoute';


//[112], [115] y [129]
function App() {
  useEffect(() => {
    store.dispatch(loadUser())
  }, [])
  //const {user, isAuthenticated, loading} = useSelector(state => state.auth)
  return (
    <Router>  {/*[135]*/}
      <div className="App">
        <Header />
        <div className='container container-fluid'>
          <Routes>
            <Route path="/" element={<Home />} /> {/*[131 y 136]*/}
            <Route path="/Home" element={<Home />} />
            <Route path="/producto/:id" element={<ProductDetails />} />
            <Route path="/productList" element={<ProductsList />} />
            <Route path="/productList" element={<ProductsList />} />
            <Route path="/nuevoProducto" element={<NewProduct />} />

            <Route path="/search/:keyword" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/password/forgot" element={<ForgotPassword />} />
            <Route path="/resetPassword/:token" element={<NewPassword />} />
            <Route path="/yo" element={<Profile />} />
            <Route path="/yo/update" element={< UpdateProfile/>} />
            <Route path="/password/update" element={<UpdatePassword />} />
            <Route path="/carrito" element={<Cart />} />
            <Route path="/updateProduct/:id" element={<UpdateProduct />} />
            <Route path="/shipping" element={<Shipping />} /> 
            <Route path="/order/confirm" element={<ConfirmOrder />} /> 
            <Route path="/payment" element={<Payment />} /> 
            <Route path="/success" element={<Success />} /> 


            

            {/*Nota: no me deja proteger las rutas*/}
            {/*Ruta Protegida (falta proteger)*/}
            <Route path="/dashboard" element={<Dashboard />} />
            {/*Asi se protegeria pero se me cae*/}
            {/* <Route path="/dashboard" element={<ProtectedRoute isAdmin={true}><Dashboard /></ProtectedRoute>} /> */}



 

          
            
            
        </Routes>
      </div>
      <Footer />
    </div>
    </Router>
  );
}

export default App;

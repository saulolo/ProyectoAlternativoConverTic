import './App.css';
import React from 'react';
import Header from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import Home from './components/Home';
import { ProductDetails } from './components/products/ProductDetails';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/admin/Dashboard';    
import { ProductList } from './components/admin/ProductList';
import { Login } from './components/user/Login';
import { Register } from './components/user/Register';



//[112], [115] y [129]
function App() {
  return (
    <Router>  {/*[135]*/}
      <div className="App">
        <Header />
        <div className='container container-fluid'>
          <Routes>
            <Route path="/" element={<Home />} /> {/*[131 y 136]*/}
            <Route path="/Home" element={<Home />} />
            <Route path="/producto/:id" element={<ProductDetails />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/productList" element={<ProductList />} />
            <Route path="/search/:keyword" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            
            
        </Routes>
      </div>
      <Footer />
    </div>
    </Router>
  );
}

export default App;

import './App.css';
import React from 'react';
import Header from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import Home from './components/Home';
import { ProductDetails } from './components/products/ProductDetails';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

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
        </Routes>
      </div>
      <Footer />
    </div>
    </Router>
  );
}

export default App;

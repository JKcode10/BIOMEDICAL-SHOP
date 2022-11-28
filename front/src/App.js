import './App.css';
import React from 'react';
//Router traido desde react-router-dom (no confundir con el de express)
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/admin/Dashboard';
import ProductsList from './components/admin/ProductsList';
import NewProduct from './components/admin/newProduct';
import HomeScreen from './users/HomeScreen';
import Login from './users/Login';
import Register from './users/Register';
import ProfileScreen from './users/ProfileScreen';
import CartScreen from './components/cart/CartScreen';
import { ProductsDetails } from './components/products/ProductsDetails';

function App() {
  return (
    <Router>
    <div className="App">
          <Routes>
            <Route path="/" element={<HomeScreen />}/>
            <Route path="/products/:id" element={<ProductsDetails/>}/>
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/profile" element={<ProfileScreen/>} />
            <Route path="/cart" element={<CartScreen/>} />
            <Route path="/dashboard" element={<Dashboard />}/>
            <Route path="/productList" element={<ProductsList />}/>
            <Route path="/nuevoProducto" element={<NewProduct />}/>
          </Routes> 
    </div>
    </Router>
  );
}

export default App;

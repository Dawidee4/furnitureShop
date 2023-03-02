import logo from './logo.svg'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Home from './Home.js'
import About from'./About.js'
import Products from './Products.js'
import { useState,useEffect } from 'react'
import axios from 'axios'
import ProductPage from './ProductPage'
import {CartContext} from './CartContext.js';
import Cart from './Cart'


function App() {


  const [cartData, setCartData] = useState([])
  return (
    <div className="App">
      <CartContext.Provider value={{cartData, setCartData}}>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/about' element={<About />}/>
        <Route path='/products' element={<Products />}/>
        <Route path='/products/:title' element={<ProductPage/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      </CartContext.Provider>
    </div>
  );
}

export default App;

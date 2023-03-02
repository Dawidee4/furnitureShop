import logo from './logo.svg'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Home from './Home.js'
import About from'./About.js'
import Products from './Products.js'
import { useState,useEffect } from 'react'
import axios from 'axios'
import ProductPage from './ProductPage'
function App() {


  


  return (
    <div className="App">
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/about' element={<About />}/>
        <Route path='/products' element={<Products />}/>
        <Route path='/products/:title' element={<ProductPage/>}/>
      </Routes>
    </div>
  );
}

export default App;

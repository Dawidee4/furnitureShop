import { useState, useEffect, useContext } from "react";
import Breadcrumbs from "./Breadcrumbs";
import Navbar from "./Navbar";
import { CartContext } from "./CartContext";
import { Link } from 'react-router-dom'
import './Cart.css'
export default function Cart(){

    const {cartData, setCartData} = useContext(CartContext)

    function mapData(){
        var data=cartData.map(element=>{
            return <div className="cart-product" key={element.key}>
                <img src={element.image}/>
                <span>{element.price}</span>
                <span>{element.counter}</span>
                <span>${element.counter*element.price}</span>
                </div>
        })
        return data
    }


    const [products, setProducts] = useState([mapData()])

    const [totalPrice, setTotalPrice] = useState(0)

    function handleSetTotalPrice(){
        let price=0
        
        cartData.forEach(element=>{
            price+=parseInt(element.price*element.counter)
        })

        setTotalPrice(()=>Math.round(price))
    }

    useEffect(()=>{
        setProducts(()=>mapData())
    },[cartData])

    useEffect(()=>{
        handleSetTotalPrice()
    },[products])

    return(
        <div className="cart">
            <Navbar/>
            <Breadcrumbs page="Cart"/>
            <div className="wrapper">
                <div className="cart-header">
                    <span>Item</span>
                    <span>Price</span>
                    <span>Quantity</span>
                    <span>Subtotal</span>
                </div>
                <div className="cart-products">
                    {products}
                </div>
                <div className="cart-buttons">
                    <Link to='/products'><input type="button" value="Continue Shopping" /></Link>
                    <input type="button" value="Clear Shopping Cart" onClick={()=>setCartData(()=>[])}/>
                </div>
                <div className="cart-order">
                    <div className="inline">
                        <span>Subtotal :</span><span>${totalPrice}</span>
                    </div>
                    <div className="inline">
                        <span>Shipping Fee :</span><span>$0</span>
                    </div>
                    <div className="inline border-top">
                        <span>Order Total :</span><span>${totalPrice}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
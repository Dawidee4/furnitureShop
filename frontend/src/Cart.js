import { useState, useEffect, useContext } from "react";
import Breadcrumbs from "./Breadcrumbs";
import Navbar from "./Navbar";
import { CartContext } from "./CartContext";
import './Cart.css'
export default function Cart(){

    const {cartData} = useContext(CartContext)

    const [products, setProducts] = useState([
        cartData.map(element=>{
            return <div className="cart-product" key={element.key}>
                <img src={element.image}/>
                <span>{element.price}</span>
                <span>{element.counter}</span>
                <span>${element.counter*element.price}</span>
                </div>
        })
    ])

    const [totalPrice, setTotalPrice] = useState()

    function handleSetTotalPrice(){
        let price=0
        price=parseInt(price)

        price+=cartData.map(element=>parseInt(element.price*element.counter))
        console.log(price)
        // console.log(products)
        setTotalPrice(()=>price)
    }

    useEffect(()=>{
        handleSetTotalPrice()
    },[products])

    useEffect(()=>{
        // console.log(totalPrice)
    },[totalPrice])
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
                    <input type="button" value="Continue Shopping"/>
                    <input type="button" value="Clear Shopping Cart"/>
                </div>
                <div className="cart-order">
                    <div className="inline">
                        <span>Subtotal :</span><span>$7556.43</span>
                    </div>
                    <div className="inline">
                        <span>Shipping Fee :</span><span>$5.43</span>
                    </div>
                    <div className="inline border-top">
                        <span>Order Total :</span><span>${totalPrice}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
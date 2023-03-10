import './Navbar.css'
import {Link} from 'react-router-dom'
import { CartContext } from './CartContext'
import { useContext } from 'react'
export default function Navbar(){


    const counter=useContext(CartContext).cartData.length

    return(
        <nav>
            <img src="http://127.0.0.1:3000/images/site-logo.svg" alt=""/>
            <div className='nav-buttons'>
                <Link to='/'>
                    <div className='nav-button'>
                     Home
                    </div>
                </Link>
                <Link to='/about'>
                    <div className='nav-button'>
                        About
                    </div>
                </Link>
                <Link to='/products'>
                    <div className='nav-button'>
                        Products
                    </div>
                </Link>
            </div>
            <div className='nav-functions'>
                <Link to='/cart'>
                <div className='nav-function'>
                    Cart
                    <div>
                        <img src="http://127.0.0.1:3000/images/cart.svg"/>
                        <div className='cart-icon'>
                            <div className='cart-counter'>
                                {counter}
                            </div>
                        </div>
                    </div>
                </div>
                </Link>
                <div className='nav-function'>
                    Login<img src="http://127.0.0.1:3000/images/login.svg"/>
                </div>
            </div>
        </nav>
    )
}
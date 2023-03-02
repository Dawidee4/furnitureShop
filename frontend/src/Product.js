import './Product.css';
import {Link} from 'react-router-dom'

export default function Product(props){
    return(
        <div className='product'>
            <div className="image-holder">
                <div className="image-layer"/>
                <Link to={"/products/"+props.title}>
                <div className="link-icon">
                    <img src="./images/magnifier.svg" alt=""/>
                </div>
                <img src={'http://127.0.0.1:3000'+props.img}/>
                </Link>
                </div>
            <div className='product-header'>
                <div className='product-title'>{props.title}</div>
                <div className='product-price'>${props.price}</div>
            </div>
        </div>
    )
}
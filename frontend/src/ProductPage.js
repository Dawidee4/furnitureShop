import Navbar from './Navbar.js'
import BreadCrumbs from './Breadcrumbs.js'
import './ProductPage.css'
import { useParams } from 'react-router-dom'
import { useEffect,useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default function ProductPage(props){
    let title = useParams().title
    title=title.replace(' ','%20')
    console.log(title)

    const [data,setData] = useState({})
    const [counter, setCounter] = useState(1)
    //fetching one product data corresponding to title of page
    async function fetchData(){
        axios.get('http://127.0.0.1:3001/api/products/'+title)
        .then(res=>setData(res.data))
        }
        useEffect(()=>{
            fetchData()
        },[]
        )
        useEffect(()=>{
            console.log(data)
        },[data]
        )

        function handleCounter(number){
            if(counter+number>0 && counter+number<11) setCounter(prev=>prev+number)
        }

    return(
        <div className='product-page'>
            <Navbar/>
            <BreadCrumbs page="Products / product-title"/>
            <div className='wrapper'>
                <Link to='/products'><input className='productpage-button' type="button" value="BACK TO PRODUCTS"/></Link>
                <div className='panel'>
                    <div className='image-holder'>
                        <img src={'http://127.0.0.1:3000'+data.image} alt=""/>
                    </div>
                    <div className='productpage-menu'>
                        <div className='title'>{data.title}</div>
                        <div className='price'>${data.price}</div>
                        <div className='description'>Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge</div>
                        <div className='inline'>
                            <span>Available:</span><span>In Stock</span>
                        </div>
                        <div className='inline'>
                            <span>SKU:</span><span>{data._id}</span>
                        </div>
                        <div className='inline'>
                            <span>Brand:</span><span>{data.company}</span>
                        </div>
                        <hr/>
                        <div className='inline'>
                            <span>Colors:</span><span className='colors'>{data.colors}</span>
                        </div>
                        <div className='productpage-counter'>
                        <img src="http://127.0.0.1:3000/images/plus.svg" alt=""  onClick={()=>handleCounter(1)}/>
                        <span>{counter}</span>
                        <img src="http://127.0.0.1:3000/images/minus.svg" alt="" onClick={()=>handleCounter(-1)}/>
                        </div>
                        <input type="button" value="ADD TO CART"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
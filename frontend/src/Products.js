import Breadcrumbs from "./Breadcrumbs.js"
import Navbar from "./Navbar.js"
import Product from "./Product.js"
import { useState, useEffect } from "react";
import "./Products.css";
import axios from 'axios'
export default function Products(){

    //Fetched data from backend api
    const [data,setData] = useState([])
    //Data that should be displayed depending on filters
    const [dataDisplayed, setDisplayedData] = useState([])

    //Fetching data from backend api
    async function fetchData(){
        axios.get("http://127.0.0.1:3001/api/products")
                        .then(res=>{
                            return res.data
                        })
                        .then(resdata=>{
                            
                            const mappedData = resdata.map(element=>{
                                return <Product 
                                key={element._id}
                                id={element._id}
                                title={element.title}
                                price={element.price}
                                img={element.image}
                                company={element.company}
                                colors={element.colors}
                                category={element.category}
                                shipping={element.freeshipping}/>
                            })
                            setData(()=>mappedData)
                            setDisplayedData(()=>mappedData)
                        })
      }
    //Fetch data once on page load
    useEffect(()=>{
        fetchData()
    },[])

    //Assign data to displayed data after fetchData
    useEffect(()=>{
        setDisplayedData(data)
    },[data])

    //FILTER PROCESSING
    const [category,setCategory] = useState('all')
    const [company,setCompany] = useState('all')
    const [color,setColor] = useState('all')
    const [price,setPrice] = useState(4000)
    const [shipping,setShipping] = useState(false)
    const [searchText,search] = useState("")
    const [itemsCounter, setCounter] = useState(0)

        //Initialize filters
    const [filters, setFilter] = useState({
        category:category,
        company:company,
        colors:color,
        price:price,
        shipping:shipping
    })

        //Set filter depending on selected options everytime option is selected
    useEffect(()=>{
        let newFilter = {
                "category":category,
                "company":company,
                "colors":color,
                "price":price,
                "shipping":shipping,
                "search":searchText
            }
        setFilter(()=> newFilter)
    },[category,company,color,price,shipping,searchText])

    
    
    //Handling Filters (onclicks)
    function handleCategory(e){
    setCategory(() => e.target.innerText.toLowerCase().replace(/ /g,''))
    }
    function handleCompany(e){
        setCompany(()=>e.target.value)
    }
    function handleColor(e){
        setColor(()=>e.target.id)
    }
    function handlePrice(e){
        setPrice(()=>e.target.value)
    }
    function handleShipping(e){
        setShipping(()=>e.target.checked)
    }
    function handleSearch(e){
        search(()=>e.target.value)
    }
    function resetFilters(){
        setCategory(()=>"all")
        setCompany(()=>"all")
        setColor(()=>"all")
        setPrice(()=>4000)
        setShipping(()=>false)
        search(()=>"")
    }

        //Filter data everytime filters change

        useEffect(()=>{
        
            const dataToDisplay = data.filter(element=>{
                return  (element.props.price<price &&
                        (element.props.company==company || company=="all") &&
                        (element.props.category==category || category=="all") &&
                        (element.props.colors.includes(color) || color=="all") &&
                        (element.props.shipping == shipping || element.props.shipping==true) &&
                        (element.props.title.toLowerCase().startsWith(searchText.toLowerCase()))
                     )})

                setDisplayedData(()=>dataToDisplay)
            },[filters])
    
        //count displayed items
        useEffect(()=>{
            setCounter(()=>dataDisplayed.length)
        },[dataDisplayed])

    return(
    <main className="products">
        <Navbar />
        <Breadcrumbs page="Products"/>
        <div className="wrapper">
        <div className="product-menu-wrapper">
            <div className="product-menu">
                <form>
                <input className="product-search" type="text" placeholder="Search" onChange={handleSearch}/>
                <div className="product-menu-header">Category</div>
                <div className="select" onClick={handleCategory}>All</div>
                <div className="select" onClick={handleCategory}>Office</div>
                <div className="select" onClick={handleCategory}>Living Room</div>
                <div className="select" onClick={handleCategory}>Kitchen</div>
                <div className="select" onClick={handleCategory}>Bedroom</div>
                <div className="select" onClick={handleCategory}>Dining</div>
                <div className="select" onClick={handleCategory}>Kids</div>
                <div className="product-menu-header">Company</div>
                <select className="product-search company" onChange={handleCompany}>
                    <option>all</option>
                    <option>marcos</option>
                    <option>liddy</option>
                    <option>ikea</option>
                    <option>caressa</option>
                </select>
                <div className="product-menu-header">Colors</div>
                <div className="menu-colors">
                    <div id="all" onClick={handleColor}>All</div>
                    <div id="red" onClick={handleColor}/>
                    <div id="green" onClick={handleColor}/>
                    <div id="blue" onClick={handleColor}/>
                    <div id="gray" onClick={handleColor}/>
                    <div id="yellow" onClick={handleColor}/>
                </div>
                <span className="product-menu-header">Price</span>
                <div className="select">${price}</div>
                <input className="range" type="range" defaultValue="4000" min="0" max="4000" onChange={handlePrice}/>
                <div className="shipping">
                    Free Shipping <input type="checkbox" onChange={handleShipping}/>
                </div>
                <input type="button" className="clear" value="Clear Filters" onClick={resetFilters}/>
                </form>
            </div>
        </div>
            <div className="products-right">
                <div className="top-bar">
                    <div className="top-bar-boxes">
                        <div className="top-bar-box">
                         box    
                        </div>
                        <div className="top-bar-box">
                         box    
                        </div>
                    </div>
                    <div className="top-bar-found">
                        {itemsCounter} Products Found
                    </div>
                    <div className="line"/>
                    <div className="top-bar-sort">
                        Sort By
                    </div>
                    <div className="top-bar-price">
                        Price (Lowest)    
                    </div>
                </div>
                <div className="products-displayed">
                    {dataDisplayed}
                </div>
            </div>
        </div>
    </main>
    )
}
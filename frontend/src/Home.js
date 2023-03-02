import './Home.css'
import Navbar from './Navbar.js'
export default function Home(){
    return(
        <div className="home">
            <Navbar/>
            <main>

                <div className='section-1'>
                    <div className='section-1-left'>
                        <div className='section-1-header'>
                            Design Your<br/> Comfort Zone
                        </div>
                        <div className='section-1-description'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at sed omnis corporis doloremque possimus velit! Repudiandae nisi odit, aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis alias?
                        </div>
                        <input type="button" value="SHOP NOW"/>
                    </div>
                    <div className='section-1-right'>
                        <div className='images-holder'>
                            <img src="./images/1.jpg" alt="" id="section-1-img1"/>
                            <img src="./images/2.jpg" alt="" id="section-1-img2"/>
                            <div id='section-1-right-box'/>
                        </div>
                    </div>
                </div>

                <div className='section-2'>
                    <div className='section-2-header'>
                        Featured Products
                        <div className='line'/>
                    </div>
                    <div className='section-2-items'>
                        <div className='section-2-item'>
                            <img src="./images/1.jpg" alt=""/>
                            <div className='item-description'>
                                <div className='item-title'>
                                    Entertainment Center
                                </div>
                                <div className='item-price'>
                                    $599.99
                                </div>
                            </div>
                        </div>
                        <div className='section-2-item'>
                        <img src="./images/1.jpg" alt=""/>
                            <div className='item-description'>
                                <div className='item-title'>
                                    Entertainment Center
                                </div>
                                <div className='item-price'>
                                    $599.99
                                </div>
                            </div>
                        </div>
                        <div className='section-2-item'>
                        <img src="./images/1.jpg" alt=""/>
                            <div className='item-description'>
                                <div className='item-title'>
                                    Entertainment Center
                                </div>
                                <div className='item-price'>
                                    $599.99
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='button-holder'>
                         <input type="button" value="ALL PRODUCTS"/>
                    </div>
                </div>
                <div className='section3'>
                    <div className='wrapper'>
                         <div className='section3-header'>
                            <div className='section3-title'>
                               Custom Furniture<br/>
                               Built Only For You
                            </div>
                            <div className='section3-description'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Saepe dolorum debitis consectetur reprehenderit non aliquam voluptates dolore aut vero consequuntur.
                            </div>
                        </div>
                    <div className='section3-boxes'>
                        <div className='section3-box'>
                            <div className='section3-icon'>
                                <img src="./images/compass.svg" alt=""/>
                            </div>
                            <div className='section3-box-title'>
                                Mission
                            </div>
                            <div className='section3-box-description'>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi
                            </div>
                        </div>
                        <div className='section3-box box-2'>
                            <div className='section3-icon'>
                                <img src="./images/pen.svg" alt=""/>
                            </div>
                            <div className='section3-box-title'>
                                Vision
                            </div>
                            <div className='section3-box-description'>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi
                            </div>
                        </div>
                        <div className='section3-box box-3'>
                            <div className='section3-icon'>
                                <img src="./images/compass.svg" alt=""/>
                            </div>
                            <div className='section3-box-title'>
                                History
                            </div>
                            <div className='section3-box-description'>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
import "./About.css"
import Navbar from "./Navbar"
import Breadcrumbs from "./Breadcrumbs"
import {Link} from 'react-router-dom'
export default function About(){
    return( 
        <div>
            <Navbar/>
            <Breadcrumbs page="About"/>
            <div className="about-section">
                <img src="./images/about.jpg" alt=""/>
                <div className="about-right">
                    <div className="about-title">
                        Our Story
                    </div>
                    <div className="line about-line"/>
                    <div className="about-description">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat accusantium sapiente tempora sed dolore esse deserunt eaque excepturi, delectus error accusamus vel eligendi, omnis beatae. Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque dolore, obcaecati incidunt sequi blanditiis est exercitationem molestiae delectus saepe odio eligendi modi porro eaque in libero minus unde sapiente consectetur architecto. Ullam rerum, nemo iste ex, eaque perspiciatis nisi, eum totam velit saepe sed quos similique amet. Ex, voluptate accusamus nesciunt totam vitae esse iste.
                    </div>
                </div>
            </div>
        </div>
    )
}
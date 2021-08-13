import * as React from "react"

import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import { Link } from "gatsby"
import '../styles/styles.css'

const ServicePage = () => (
    <Layout>
     <section className={`services`}>
         <div className="top-services">
             <div className="servLeft">
                <div>
                <h1>Services</h1>
                 <p>
                 We work with you from idea to launch or help you solve a specific problem using cutting-edge technology. We are here to prepare you for a more digital future.
                 </p>
                </div>
             </div>
             <div className="servRight">
                 <StaticImage src="../images/plant_8.png" className="plant" alt="plant" placeholder="tracedSVG"/>
             </div>
         </div>
         <div className="bottom-services">
             <div className="servLeft">
                 <div className="icons">
                    <div className="icons-tab">
                    <StaticImage src="../images/paintbrush.png" alt="icons" className="icon" placeholder="tracedSVG"/>
                    <h3>DESIGN</h3>
                    </div>
                     <p className="dots">- - - - - - - - - - - - - - -</p>
                    <div className="icons-tab">
                    <StaticImage src="../images/gear.png" alt="icons" className="icon" placeholder="tracedSVG"/>
                    <h3>DEVELOPMENT</h3>                    
                    </div>
                     <p className="dots">- - - - - - - - - - - - - - -</p>
                    <div className="icons-tab">
                    <StaticImage src="../images/analytics.png" alt="icons" className="icon" placeholder="tracedSVG"/>
                    <h3>DATA ANALYTICS</h3>
                    </div>
                 </div>
                 <div className="icon-name">
                     
                     
                     
                 </div>
             </div>
             <div className={`servRight text`}>
             <Link to="/work"><p>Find out more &gt; </p></Link>
             </div>
         </div>
     </section>
     <section className={`service-2nd`}>
         <div>
             <StaticImage src="../images/bussines-idea.jpg" alt="bussines-idea" placeholder="tracedSVG"/>
         </div>
         <div>
             <h2>
             Bussines developet of your idea
             </h2>
             <p>
             Our clients get the best results when they have our team dedicated to their business for 
             extended periods of time. This is why we are looking for ongoing collaboration where our 
             professionals are like your team members who just happen to be remote. Ready to move forward?
             </p>
             <h5>Research</h5>
             <h5>Monetisation</h5>
             <h5>Retention</h5>
             <div className={`text`}>
             <Link to="/work"><p>Find out more &gt; </p></Link>
             </div>
         </div>
         <div></div>
     </section>
    </Layout>
)

export default ServicePage
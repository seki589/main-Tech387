import * as React from "react"

import { Link } from "gatsby"
// import Tabs from "../components/Tabs"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Bed from "../assets/bed.svg"
import BriefCase from "../assets/briefcase.svg"
import Coin from "../assets/coin.svg"
import Cardiogram from "../assets/cardiogram.svg"
import ElectricCar from "../assets/electric-car.svg"
import Megaphone from "../assets/megaphone.svg"
import Paintbrush from "../assets/paintbrush.svg"
import PageTransition from 'gatsby-plugin-page-transitions';


// import '../styles/styles.css'
import '../styles/service.css'

const ServicePage = () => (
    <Layout>
    <PageTransition>
     <section className={`service-container`}>
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
                 <StaticImage src="../images/plant_8.png" className="plant" alt="plant" placeholder="blurred"/>
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
     <section className={`service-container service-2nd`}>
         <div className="one">
             <StaticImage src="../images/bussines-idea.jpg" className="serviceImg1" alt="bussines-idea" placeholder="blurred"/>
         </div>
         <div className="two">
             <h3>
             Bussines development of your idea
             </h3>
             <p>
             Our clients get the best results when they have our team dedicated to their business for 
             extended periods of time. This is why we are looking for ongoing collaboration where our 
             professionals are like your team members who just happen to be remote. Ready to move forward?
             </p>
             <h6>Research</h6>
             <h6>Monetisation</h6>
             <h6>Retention</h6>
             <div className={`text`}>
             <Link to="/work"><p>See our creative work &gt; </p></Link>
             </div>
         </div>
         <div></div>
     </section>
     <section className={`service-container service-3nd`}>
     <div className="two">
             <h3>
             Product development
             </h3>
             <p>
             Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
             sed do eiusmod tempor incididunt ut ero labore et dolore magna aliqua.
             </p>
             <h6>Mobile</h6>
             <h6>Web</h6>
             <h6>Backend</h6>
             <h6>Design</h6>
             <div className={`text`}>
             <Link to="/work"><p>See our development focused projects &gt; </p></Link>
             </div>
         </div>
         <div className="one">
             <StaticImage src="../images/planing.jpg" className="serviceImg2" alt="bussines-idea" placeholder="blurred"/>
         </div>
     </section>
     <section className={`service-container service-2nd`}>
         <div className="one">
             <StaticImage src="../images/system.jpg" className="serviceImg2" alt="bussines-idea" placeholder="blurred"/>
         </div>
         <div className="two">
             <h3>
             Complex systems
             </h3>
             <p>
             Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
             sed do eiusmod tempor incididunt ut ero labore et dolore magna aliqua.
             </p>
             <h6>Cloud architecture</h6>
             <h6>DevOps</h6>
             <h6>Scaling</h6>
             <div className={`text`}>
             <Link to="/work"><p>See our development focused projects &gt; </p></Link>
             </div>
         </div>
         <div></div>
     </section>
     <section className={`service-container service-4nd`}>
     <div className="two">
             <h3>
             Data Science
             </h3>
             <p>
             Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
             sed do eiusmod tempor incididunt ut ero labore et dolore magna aliqua.
             </p>
             <h6>Data Science</h6>
             <h6>Engineering</h6>
             <div className={`text`}>
             <Link to="/work"><p>See our development focused projects &gt; </p></Link>
             </div>
         </div>
         <div className="one">
             <StaticImage src="../images/science.jpg" className="serviceImg3" alt="bussines-idea" placeholder="blurred"/>
         </div>
     </section>
     <section className="service-nd">
     <div className={`top-head two`}>
         <h3>Industies we serve</h3>
         <div className="top-triangle">
             <StaticImage src="../images/triangle_2.png" alt="triangle" className="trianglePng" placeholder="tracedSVG"/>
             <StaticImage src="../images/triangle_9.png" alt="triangle" className="trianglePng" placeholder="tracedSVG"/>
             <StaticImage src="../images/triangle_11.png" alt="triangle" className="trianglePng" placeholder="tracedSVG"/>
         </div>
     </div>
     <div className="bot-head">
         <div className="left-tabs">
             <div className="left-tab">
                <Cardiogram className="icon"/>
                <h5>Health & Fitness</h5>
             </div>
             <div className="left-tab">
                <ElectricCar className="icon"/>
                <h5>Automotive</h5>
             </div>
             <div className="left-tab">
                <BriefCase className="icon"/>
                <h5>E Commerce</h5>
             </div>
             <div className="left-tab">
                <Coin className="icon"/>
                <h5>Finance</h5>
             </div>
             <div className="left-tab">
                <Bed className="icon"/>
                <h5>Hospitality</h5>
             </div>
             <div className="left-tab">
                <Megaphone className="icon"/>
                <h5>Social Media</h5>
             </div>
             <div className="left-tab">
                <Paintbrush className="icon"/>
                <h5>Customised Software</h5>
             </div>
         </div>
         <div className="right-tabs">
             <div className="tab-wraper">
             <StaticImage src="../images/meeting.jpg" className="serviceImg4" alt="bussines-idea" placeholder="blurred"/>
             <div className="tab-head">
                 <div className="head-img">
                     <StaticImage src="../images/user.png" alt="user" className="user"/>
                 </div>
                 <div className="head-name">
                     <h6>Name Surname</h6>
                     <p>Founder & CEO</p>
                 </div>
                 
             </div>
             <div className="tab-text">
                     <p>
                     ???Natus error sit voluptartem accusantium doloremque laudantium, 
                     totam rem aperiam, eaque ipsa quae ab illo inventore.???
                     </p>
             </div>

             </div>
         </div>
     </div>
     </section>
     <section className="tabs-section">
     {/* <Tabs> 
        <div label="Web" className="tabs"> 
            <div className="tab-1">
                <div className="tab-item">
                    <h6>Languages</h6>
                    <div className="lang-icon">
                        <StaticImage src="../images/tab-images/c.png" alt="icon" placeholder="tracedSVG"/>
                        <p>C#</p>
                    </div>
                    <div className="lang-icon">
                        <StaticImage src="../images/tab-images/ruby.png" alt="icon" placeholder="tracedSVG"/>
                        <p>Ruby</p>
                    </div>
                    <div className="lang-icon">
                        <StaticImage src="../images/tab-images/ts.png" alt="icon" placeholder="tracedSVG"/>
                        <p>Typescript</p>
                    </div>
                    <div className="lang-icon">
                        <StaticImage src="../images/tab-images/php.png" alt="icon" placeholder="tracedSVG"/>
                        <p>PHP</p>
                    </div>
                    <div className="lang-icon">
                        <StaticImage src="../images/tab-images/javascript.png" alt="icon" placeholder="tracedSVG"/>
                        <p>Javascript</p>
                    </div>
                    <div className="lang-icon">
                        <StaticImage src="../images/tab-images/python.png" alt="icon" placeholder="tracedSVG"/>
                        <p>Pyton</p>
                    </div>
                </div>
                <div className="tab-item">
                    <h6>Frameworks</h6>
                    <div className="lang-icon">
                        <StaticImage src="../images/tab-images/angularjs.png" alt="icon" placeholder="tracedSVG"/>
                        <p>Angular</p>
                    </div>
                    <div className="lang-icon">
                        <StaticImage src="../images/tab-images/ruby_on_rails.png" alt="icon" placeholder="tracedSVG"/>
                        <p>Ruby on rails</p>
                    </div>
                    <div className="lang-icon">
                        <StaticImage src="../images/tab-images/atom.png" alt="icon" placeholder="tracedSVG"/>
                        <p>React</p>
                    </div>
                    <div className="lang-icon">
                        <StaticImage src="../images/tab-images/mvc.png" alt="icon" placeholder="tracedSVG"/>
                        <p>ASP.net MVC</p>
                    </div>
                    <div className="lang-icon">
                        <StaticImage src="../images/tab-images/nodejs.png" alt="icon" placeholder="tracedSVG"/>
                        <p>NodeJS</p>
                    </div>
                    <div className="lang-icon">
                        <StaticImage src="../images/tab-images/laravel.png" alt="icon" placeholder="tracedSVG"/>
                        <p>Laravel</p>
                    </div>
                </div>
                <div className="tab-item">
                    <h6>Detebase</h6>
                    <div className="lang-icon">
                        <StaticImage src="../images/tab-images/redis.png" alt="icon" placeholder="tracedSVG"/>
                        <p>Redis</p>
                    </div>
                    <div className="lang-icon">
                        <StaticImage src="../images/tab-images/elasticsearch.png" alt="icon" placeholder="tracedSVG"/>
                        <p>Elasticsearch</p>
                    </div>
                    <div className="lang-icon">
                        <StaticImage src="../images/tab-images/mongodb.png" alt="icon" placeholder="tracedSVG"/>
                        <p>MongoDB</p>
                    </div>
                    <div className="lang-icon">
                        <StaticImage src="../images/tab-images/postgresql.png" alt="icon" placeholder="tracedSVG"/>
                        <p>PostgreSQL</p>
                    </div>
                    <div className="lang-icon">
                        <StaticImage src="../images/tab-images/mysql.png" alt="icon" placeholder="tracedSVG"/>
                        <p>MySQL</p>
                    </div>
                    
                </div>
                <div className="tab-item">
                    <h6>CMS</h6>
                    <div className="lang-icon">
                        <StaticImage src="../images/tab-images/wordpress.png" alt="icon" placeholder="tracedSVG"/>
                        <p>Wordpress</p>
                    </div>
                    <div className="lang-icon">
                        <StaticImage src="../images/tab-images/magento.png" alt="icon" placeholder="tracedSVG"/>
                        <p>Magento</p>
                    </div>
                    <div className="lang-icon">
                        <StaticImage src="../images/tab-images/woocommerce.png" alt="icon" placeholder="tracedSVG"/>
                        <p>Woocommerce</p>
                    </div>
                    <div className="lang-icon">
                        <StaticImage src="../images/tab-images/joomla.png" alt="icon" placeholder="tracedSVG"/>
                        <p>Joomla</p>
                    </div>
                    <div className="lang-icon">
                        <StaticImage src="../images/tab-images/shopify.png" alt="icon" placeholder="tracedSVG"/>
                        <p>Shopify</p>
                    </div>
                </div>
            </div>
        </div> 
        <div label="Mobile"> 
            <div className="tab-1">
            <div className="tab-item">
                    <h6>Languages</h6>
                    <div className="lang-icon">
                        <StaticImage src="../images/tab-images/c.png" alt="icon" placeholder="tracedSVG"/>
                        <p>C#</p>
                    </div>
                    <div className="lang-icon">
                        <StaticImage src="../images/tab-images/ruby.png" alt="icon" placeholder="tracedSVG"/>
                        <p>Ruby</p>
                    </div>
                    <div className="lang-icon">
                        <StaticImage src="../images/tab-images/ts.png" alt="icon" placeholder="tracedSVG"/>
                        <p>Typescript</p>
                    </div>
                    <div className="lang-icon">
                        <StaticImage src="../images/tab-images/php.png" alt="icon" placeholder="tracedSVG"/>
                        <p>PHP</p>
                    </div>
                    <div className="lang-icon">
                        <StaticImage src="../images/tab-images/javascript.png" alt="icon" placeholder="tracedSVG"/>
                        <p>Javascript</p>
                    </div>
                    <div className="lang-icon">
                        <StaticImage src="../images/tab-images/python.png" alt="icon" placeholder="tracedSVG"/>
                        <p>Pyton</p>
                    </div>
                </div>
            </div>
        </div> 
     </Tabs> */}
     </section>
     </PageTransition>
    </Layout>
)

export default ServicePage
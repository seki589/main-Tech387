import * as React from "react"

import { Link } from "gatsby"
import Tabs from "../components/tabs"
import Seo from "../components/seo"
import Footer from "../components/footer"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import {useState} from 'react'

import data from "../data/services-data.json"
import { motion } from "framer-motion"
import PageTransition from 'gatsby-plugin-page-transitions'
import Services from "../components/services"


import '../styles/service.css'
import { render } from "react-dom"


const ServicePage = () => {
   
    const [imageHover, setImageHover] = useState(false)

   return(
    <Layout>
    <PageTransition>
    <Seo title="Services" />
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
         <motion.div 
         initial={{opacity: 1}}
         animate={{opacity: imageHover? 0 : [0, 1]}}
         className="one">
             <StaticImage src="../images/bussines-idea.jpg" className="serviceImg1" alt="bussines-idea" placeholder="blurred"/>
         </motion.div>
         <div className="two">
             <h3>
             Bussines development of your idea
             </h3>
             <p>
             Our clients get the best results when they have our team dedicated to their business for 
             extended periods of time. This is why we are looking for ongoing collaboration where our 
             professionals are like your team members who just happen to be remote. Ready to move forward?
             </p>
             
                 {data.map(el => 
                      (
                     <Items 
                     imageHover={imageHover}
                     setImageHover={setImageHover}
                     key={el.id}
                     title={el.title}
                     text={el.text}
                     />
                 )
                 )}
             {/* <motion.h6
             onHoverStart={() => setHoverState(true)}
             onHoverEnd={() => setHoverState(false)}
             >Research</motion.h6>
             <motion.div
               initial={{opacity: 0}}
                animate={{
                    opacity: hoverState? 1 : 0}} 
                transition={{ ease: 'linear'}}
                className="iner-hover">
                 <h6>Research</h6>
                 <p>
                 Our multidisciplinary experts research your end users’ behaviours, routines and pain 
                 points to identify opportunities for amazement. We analyse your market, competitors 
                 and explore methods for differentiation.
                 </p>
             </motion.div>
             </div>
             <div className="text-hover">
             <motion.h6
             onHoverStart={() => setHoverState(true)}
             onHoverEnd={() => setHoverState(false)}
             >Monetisation</motion.h6>
             <motion.div
               initial={{opacity: 0}}
                animate={{
                    opacity: hoverState? 1 : 0}} 
                transition={{ ease: 'linear'}}
                className="iner-hover">
                 <h6>Monetisation</h6>
                 <p>
                 We iterate on revenue models and aim to hit the sweet spot where value creation 
                 happens for you and your end users. Based on research data, we design ROI and 
                 growth plans using multi-channel marketing strategies.
                 </p>
             </motion.div>
             </div>
             <div className="text-hover">
             <motion.h6
             onHoverStart={() => setHoverState(true)}
             onHoverEnd={() => setHoverState(false)}
             >Retention</motion.h6>
             <motion.div
               initial={{opacity: 0}}
                animate={{
                    opacity: hoverState? 1 : 0}} 
                transition={{ ease: 'linear'}}
                className="iner-hover">
                 <h6>Retention</h6>
                 <p>
                 Our experts assist you to gather and analyse user insights and expand your offer. 
                 Using insights, we help you prioritise what brings the most value and renders 
                 your product indispensable.
                 </p>
             </motion.div>
             </div>
             <div className="text-hover">
             <h6>Conceptualisation</h6>
             <div className="iner-hover">
                 <h6>Conceptualisation</h6>
                 <p>
                 We align project to your business mission and goals to allocate team and resources 
                 accordingly. Following an order of prioritisation, we plan project implementation, 
                 estimate schedule and project cost.
                 </p>
             </div>
             </div>
             <div className="text-hover">
             <h6>Requirements Engineering</h6>
             <div className="iner-hover">
                 <h6>Requirements Engineering</h6>
                 <p>
                 Our team gathers functional, system and technical requirements from various stakeholders 
                 to understand what technologies will be used and how a project implementation will be structured.
                 </p>
             </div>
             </div>
             <div className="text-hover">
             <h6>Prototyping</h6>
             <div className="iner-hover">
                 <h6>Prototyping</h6>
                 <p>
                 With the requirements in place, we design prototypes to envision what a product will look 
                 like and how it will function. This stage is important to validate ideas and get valuable 
                 feedback before committing to implementation.
                 </p>
             </div>
             </div> */}
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
         <h3>Industries we serve</h3>
         <div className="top-triangle">
             <StaticImage src="../images/triangle_2.png" alt="triangle" className="trianglePng" placeholder="tracedSVG"/>
             <StaticImage src="../images/triangle_9.png" alt="triangle" className="trianglePng" placeholder="tracedSVG"/>
             <StaticImage src="../images/triangle_11.png" alt="triangle" className="trianglePng" placeholder="tracedSVG"/>
         </div>
     </div>
     <Services />
     
     </section>
     <div className="tabs-section">
     <Tabs> 
        <div label="Web" className="tabs"> 
            <div className="tab-1">
                <div className="tab-item" >
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
            </div>
        </div> 
     </Tabs>
     </div>
     <div className="footer-service" >
         <Footer/>
     </div>
     </PageTransition>
    </Layout>
)
}

const Items = ({title, text, setImageHover}) => {

    const [hoverState, setHoverState] = useState(false)
       
    return(
        <div className="text-hover"  >
                        <motion.h6
                        onHoverStart={() => setHoverState(true)&setImageHover(true)}
                        onHoverEnd={() => setHoverState(false)&setImageHover(false)}
                        >{title}
                        </motion.h6>
                        <motion.div
                          initial={{opacity: 0}}
                           animate={{
                               opacity: hoverState? [0,1] : 0}} 
                           transition={{ ease: "backOut"}}
                           
                           className="iner-hover">
                            <motion.h6
                            initial={{x : -70}}
                            animate={{x : hoverState?  0 : -50}}
                            transition={{duration: 0.3}}
                            >{title}</motion.h6>
                            <motion.p
                            initial={{x : -70}}
                            animate={{x : hoverState? 0 : -70}}
                            transition={{delay: 0.3, duration: 0.3}}
                            >
                            {text}
                            </motion.p>
                        </motion.div>
                    </div>
    )
}
export default ServicePage
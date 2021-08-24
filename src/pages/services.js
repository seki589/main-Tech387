import * as React from "react"

import { Link } from "gatsby"
import Tabs from "../components/tabs"
import Seo from "../components/seo"
import Footer from "../components/footer"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import {useState} from 'react'

import dataOne from "../data/services-data.json"
import dataTwo from "../data/services-data-1.json"
import dataThree from "../data/services-data-2.json"
import dataFour from "../data/services-data-3.json"
import { motion } from "framer-motion"
import PageTransition from 'gatsby-plugin-page-transitions'
import Services from "../components/services"


import '../styles/service.css'



const ServicePage = () => {
   
    const [imageHoverOne, setImageHoverOne] = useState(false);
    const [imageHoverTwo, setImageHoverTwo] = useState(false);
    const [imageHoverThree, setImageHoverThree] = useState(false);
    const [imageHoverFour, setImageHoverFour] = useState(false);

   return(
    <Layout>
    <PageTransition>
    <Seo title="Services" />
     <section className={`service-container`}>
         <div className="top-services">
             <div className="servLeft">
                <div>
                <h1>We offer the diversity of skills</h1>
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
         initial={{opacity: 1, scale: 1}}
         animate={{
             opacity: imageHoverOne? 0 : [0, 1],
             scale: imageHoverOne? 1.1 : 1,
            }}
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
             
                 {dataOne.map(el => 
                      (
                     <ItemOne 
                     imageHoverOne={imageHoverOne}
                     setImageHoverOne={setImageHoverOne}
                     key={el.id}
                     title={el.title}
                     text={el.text}
                     />
                 )
                 )}
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
             Bringing your original vision for a product to life rarely resembles a straight line. 
             We are here to help you grow and succeed across product approaches and platforms.We 
             will work with you, collaboratively, to define and make digital products and solutions that will set your brand apart.
             </p>
             {dataTwo.map(el => 
                      (
                     <ItemTwo 
                     imageHoverTwo={imageHoverTwo}
                     setImageHoverTwo={setImageHoverTwo}
                     key={el.id}
                     title={el.title}
                     text={el.text}
                     textTwo={el.textTwo}
                     />
                 )
                 )}
             <div className={`text`}>
             <Link to="/work"><p>See our development focused projects &gt; </p></Link>
             </div>
         </div>
         <motion.div 
         initial={{opacity: 1, scale: 1}}
         animate={{
             opacity: imageHoverTwo? 0 : [0, 1],
             scale: imageHoverTwo? 1.1 : 1,
            }}
         className="one">
             <StaticImage src="../images/planing.jpg" className="serviceImg2" alt="bussines-idea" placeholder="blurred"/>
         </motion.div>
     </section>
     <section className={`service-container service-2nd`}>
     <motion.div 
         initial={{opacity: 1, scale: 1}}
         animate={{
             opacity: imageHoverThree? 0 : [0, 1],
             scale: imageHoverThree? 1.1 : 1,
            }}
         className="one">
             <StaticImage src="../images/system.jpg" className="serviceImg2" alt="bussines-idea" placeholder="blurred"/>
         </motion.div>
         <div className="two">
             <h3>
             Complex systems
             </h3>
             <p>
             Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
             sed do eiusmod tempor incididunt ut ero labore et dolore magna aliqua.
             </p>
             {dataThree.map(el => 
                      (
                     <ItemThree 
                     imageHoverThree={imageHoverThree}
                     setImageHoverThree={setImageHoverThree}
                     key={el.id}
                     title={el.title}
                     text={el.text}
                     textTwo={el.textTwo}
                     />
                 )
                 )}
             {/* <h6>Cloud architecture</h6>
             <h6>DevOps</h6>
             <h6>Scaling</h6> */}
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
             {dataFour.map(el => 
                      (
                     <ItemFour 
                     imageHoverFour={imageHoverFour}
                     setImageHoverFour={setImageHoverFour}
                     key={el.id}
                     title={el.title}
                     text={el.text}
                     textTwo={el.textTwo}
                     />
                 )
                 )}
             {/* <h6>Data Science</h6>
             <h6>Engineering</h6> */}
             <div className={`text`}>
             <Link to="/work"><p>See our development focused projects &gt; </p></Link>
             </div>
         </div>
         <motion.div 
         initial={{opacity: 1, scale: 1}}
         animate={{
             opacity: imageHoverFour? 0 : [0, 1],
             scale: imageHoverFour? 1.1 : 1,
            }}
         className="one">
             <StaticImage src="../images/science.jpg" className="serviceImg3" alt="bussines-idea" placeholder="blurred"/>
         </motion.div>
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

const ItemOne = ({title, text, setImageHoverOne}) => {

    const [hoverState, setHoverState] = useState(false)
       
    return(
        <div className="text-hover"  >
                        <motion.h6
                        onHoverStart={() => setHoverState(true)&setImageHoverOne(true)}
                        onHoverEnd={() => setHoverState(false)&setImageHoverOne(false)}
                        >{title}
                        </motion.h6>
                        <motion.div
                          initial={{opacity: 0}}
                           animate={{
                               opacity: hoverState? [0,1] : 0}} 
                           transition={{ ease: "backOut"}}
                           
                           className="iner-hover">
                            <motion.h6
                            initial={{
                                x : -50,
                                opacity: 0
                            }}
                            animate={{
                                opacity : hoverState?  [0.5 ,1] : 0,
                                x : hoverState?  0 : -50,
                                
                            }}
                            transition={{duration: 0.3, type: 'spring'}}
                            >{title}</motion.h6>
                            <motion.p
                            initial={{
                                y: 50,
                                opacity: 0
                            }}
                            animate={{
                                opacity : hoverState?  [0.5 ,1] : 0,
                                y : hoverState?  0 : 50
                            }}
                            transition={{delay: 0.4, duration: 0.4, type: 'spring',}}
                            >
                            {text}
                            </motion.p>
                        </motion.div>
                    </div>
    )
}
const ItemTwo = ({title, text,textTwo, setImageHoverTwo}) => {

    const [hoverState, setHoverState] = useState(false)
       
    return(
        <div className="text-hover"  >
                        <motion.h6
                        onHoverStart={() => setHoverState(true)&setImageHoverTwo(true)}
                        onHoverEnd={() => setHoverState(false)&setImageHoverTwo(false)}
                        >{title}
                        </motion.h6>
                        <motion.div
                          initial={{opacity: 0}}
                           animate={{
                               opacity: hoverState? [0,1] : 0}} 
                           transition={{ ease: "backOut"}}
                           
                           className="iner-hover-1">
                            <motion.h6
                            initial={{
                                x : -50,
                                opacity: 0
                            }}
                            animate={{
                                opacity : hoverState?  [0.5 ,1] : 0,
                                x : hoverState?  0 : -50,
                                
                            }}
                            transition={{duration: 0.3, type: 'spring'}}
                            >{title}</motion.h6>
                            <motion.p
                            initial={{
                                y: 50,
                                opacity: 0
                            }}
                            animate={{
                                opacity : hoverState?  [0.5 ,1] : 0,
                                y : hoverState?  0 : 50
                            }}
                            transition={{delay: 0.4, duration: 0.4, type: 'spring',}}
                            >
                            {text}
                            </motion.p>
                            <motion.p
                            initial={{
                                y: 50,
                                opacity: 0
                            }}
                            animate={{
                                opacity : hoverState?  [0.5 ,1] : 0,
                                y : hoverState?  0 : 50
                            }}
                            transition={{delay: 0.4, duration: 0.4, type: 'spring',}}
                            >
                            {textTwo}
                            </motion.p>
                        </motion.div>
                    </div>
    )
}
const ItemThree = ({title, text,textTwo, setImageHoverThree}) => {

    const [hoverState, setHoverState] = useState(false)
       
    return(
        <div className="text-hover"  >
                        <motion.h6
                        onHoverStart={() => setHoverState(true)&setImageHoverThree(true)}
                        onHoverEnd={() => setHoverState(false)&setImageHoverThree(false)}
                        >{title}
                        </motion.h6>
                        <motion.div
                          initial={{opacity: 0}}
                           animate={{
                               opacity: hoverState? [0,1] : 0}} 
                           transition={{ ease: "backOut"}}
                           
                           className="iner-hover-2">
                            <motion.h6
                            initial={{
                                x : -50,
                                opacity: 0
                            }}
                            animate={{
                                opacity : hoverState?  [0.5 ,1] : 0,
                                x : hoverState?  0 : -50,
                                
                            }}
                            transition={{duration: 0.3, type: 'spring'}}
                            >{title}</motion.h6>
                            <motion.p
                            initial={{
                                y: 50,
                                opacity: 0
                            }}
                            animate={{
                                opacity : hoverState?  [0.5 ,1] : 0,
                                y : hoverState?  0 : 50
                            }}
                            transition={{delay: 0.4, duration: 0.4, type: 'spring',}}
                            >
                            {text}
                            </motion.p>
                            <motion.p
                            initial={{
                                y: 50,
                                opacity: 0
                            }}
                            animate={{
                                opacity : hoverState?  [0.5 ,1] : 0,
                                y : hoverState?  0 : 50
                            }}
                            transition={{delay: 0.4, duration: 0.4, type: 'spring',}}
                            >
                            {textTwo}
                            </motion.p>
                        </motion.div>
                    </div>
    )
}
const ItemFour = ({title, text,textTwo, setImageHoverFour}) => {

    const [hoverState, setHoverState] = useState(false)
       
    return(
        <div className="text-hover"  >
                        <motion.h6
                        onHoverStart={() => setHoverState(true)&setImageHoverFour(true)}
                        onHoverEnd={() => setHoverState(false)&setImageHoverFour(false)}
                        >{title}
                        </motion.h6>
                        <motion.div
                          initial={{opacity: 0}}
                           animate={{
                               opacity: hoverState? [0,1] : 0}} 
                           transition={{ ease: "backOut"}}
                           
                           className="iner-hover-3">
                            <motion.h6
                            initial={{
                                x : -50,
                                opacity: 0
                            }}
                            animate={{
                                opacity : hoverState?  [0.5 ,1] : 0,
                                x : hoverState?  0 : -50,
                                
                            }}
                            transition={{duration: 0.3, type: 'spring'}}
                            >{title}</motion.h6>
                            <motion.p
                            initial={{
                                y: 50,
                                opacity: 0
                            }}
                            animate={{
                                opacity : hoverState?  [0.5 ,1] : 0,
                                y : hoverState?  0 : 50
                            }}
                            transition={{delay: 0.4, duration: 0.4, type: 'spring',}}
                            >
                            {text}
                            </motion.p>
                            <motion.p
                            initial={{
                                y: 50,
                                opacity: 0
                            }}
                            animate={{
                                opacity : hoverState?  [0.5 ,1] : 0,
                                y : hoverState?  0 : 50
                            }}
                            transition={{delay: 0.4, duration: 0.4, type: 'spring',}}
                            >
                            {textTwo}
                            </motion.p>
                        </motion.div>
                    </div>
    )
}
export default ServicePage
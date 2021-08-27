import * as React from "react"

import { Link } from "gatsby"
// import Tabs from "../components/tabs"
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
     <section className={`service-container topPad`}>
         <div className="top-services">
             <div className="servLeft">
                <div>
                <h1>We offer <br/>the diversity <br/>of skills</h1>
                 <p>
                 We work with you from idea to launch or help you solve a specific problem using cutting-edge technology. We are here to prepare you for a more digital future.
                 </p>
                </div>
             </div>
             <div className="servRight">
                 <StaticImage src="../images/triangle_3.png" className="plant" alt="plant" placeholder="blurred"/>
                 <StaticImage src="../images/triangle_plant_1.png" className="plant" alt="plant" placeholder="blurred"/>
                 <StaticImage src="../images/triangle_5.png" className="plant" alt="plant" placeholder="blurred"/>
             </div>
         </div>
         <div className="bottom-services">
             <div className="servLeft">
                 <div className="icons">
                    <div className="icons-tab">
                    <StaticImage src="../images/brush_1.png" alt="icons" className="icon" placeholder="tracedSVG"/>
                    <h3>DESIGN</h3>
                    </div>
                     <p className="dots">- - - - - - - - - - - - - - -</p>
                    <div className="icons-tab">
                    <StaticImage src="../images/settings.png" alt="icons" className="icon" placeholder="tracedSVG"/>
                    <h3>DEVELOPMENT</h3>                    
                    </div>
                     <p className="dots">- - - - - - - - - - - - - - -</p>
                    <div className="icons-tab">
                    <StaticImage src="../images/chart.png" alt="icons" className="icon" placeholder="tracedSVG"/>
                    <h3>DATA ANALYTICS</h3>
                    </div>
                 </div>
                 <div className="icon-name">
                     
                     
                     
                 </div>
             </div>
             <div className={`servRight text`} >
             <Link to="/work"><p>Find out more &gt; </p></Link>
             </div>
         </div>
     </section>
     <section className={`service-container service-2nd`}>
         <motion.div 
         initial={{opacity: 1, scale: 1}}
         animate={{
             opacity: imageHoverOne? 0 : [0, 1],
             scale: imageHoverOne? 1 : 1,
            }}
         className="one">
             <StaticImage src="../images/buisiness_dev.jpg" className="serviceImg1" alt="bussines-idea" placeholder="blurred"/>
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
             scale: imageHoverTwo? 1 : 1,
            }}
         className="one">
             <StaticImage src="../images/product_dev.jpg" className="serviceImg2" alt="bussines-idea" placeholder="blurred"/>
         </motion.div>
     </section>
     <section className={`service-container service-2nd`}>
     <motion.div 
         initial={{opacity: 1, scale: 1}}
         animate={{
             opacity: imageHoverThree? 0 : [0, 1],
             scale: imageHoverThree? 1 : 1,
            }}
         className="one">
             <StaticImage src="../images/complex_systems.jpg" className="serviceImg2" alt="bussines-idea" placeholder="blurred"/>
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
             <div className={`text`}>
             <Link to="/work"><p>See our development focused projects &gt; </p></Link>
             </div>
         </div>
         <motion.div 
         initial={{opacity: 1, scale: 1}}
         animate={{
             opacity: imageHoverFour? 0 : [0, 1],
             scale: imageHoverFour? 1 : 1,
            }}
         className="one">
             <StaticImage src="../images/data_sience.jpg" className="serviceImg3" alt="data_sience" placeholder="blurred"/>
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
     
     <div className="footer-service" >
         <Footer />
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
                        onClick={() => setHoverState(true)&setImageHoverOne(true)}
                        onMouseLeave={() => setHoverState(false)&setImageHoverOne(false)}
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
                        onClick={() => setHoverState(true)&setImageHoverTwo(true)}
                        onMouseLeave={() => setHoverState(false)&setImageHoverTwo(false)}
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
                        onClick={() => setHoverState(true)&setImageHoverThree(true)}
                        onMouseLeave={() => setHoverState(false)&setImageHoverThree(false)}
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
                        onClick={() => setHoverState(true)&setImageHoverFour(true)}
                        onMouseLeave={() => setHoverState(false)&setImageHoverFour(false)}
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
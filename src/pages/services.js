import * as React from "react"

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
                 <StaticImage src="../images/triangle_3.png" className="plant" alt="triangle" placeholder="blurred"/>
                 <StaticImage src="../images/triangle_plant_1.png" className="plant" alt="triangle" placeholder="blurred"/>
                 <StaticImage src="../images/triangle_5.png" className="plant" alt="triangle" placeholder="blurred"/>
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
             Development of your idea
             </h3>
             <p>
             In order to plan out execution of your final product, our experts work with you to conceptualize your idea, 
             gather requirements and build product prototypes.
             </p>
             <motion.div 
                initial={{opacity: 1, scale: 1}}
                animate={{
                    opacity: imageHoverOne? 0 : [0, 1],
                    scale: imageHoverOne? 1 : 1,
                }}
                className="one-mobile">
                    <StaticImage src="../images/buisiness_dev.jpg" className="serviceImg1" alt="bussines-idea" placeholder="blurred"/>
             </motion.div>
             
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
         </div>
         <div></div>
     </section>
     <section className={`service-container service-3nd`}>
     <div className="two">
             <h3>
             Product development
             </h3>
             <p>
             Bringing your original vision for a product to life rarely 
             resembles a straight line. We will work collaboratively to define 
             and develop your digital product and solution that will set your brand apart.
             </p>
             <motion.div 
                initial={{opacity: 1, scale: 1}}
                animate={{
                    opacity: imageHoverTwo? 0 : [0, 1],
                    scale: imageHoverTwo? 1 : 1,
                    }}
                className="one-mobile">
                    <StaticImage src="../images/product_dev.jpg" className="serviceImg2" alt="bussines-idea" placeholder="blurred"/>
             </motion.div>
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
             In today's world we know that software size will grow, but software complexity will grow even faster. We create global, 
             reliable and complex software systems that may require software containers, cloud architecture, continuous delivery/ continuous 
             integration, microservices and we will be here to help you get the best possible solutions for your business.
             </p>
             <motion.div 
                initial={{opacity: 1, scale: 1}}
                animate={{
                    opacity: imageHoverThree? 0 : [0, 1],
                    scale: imageHoverThree? 1 : 1,
                    }}
                className="one-mobile">
                    <StaticImage src="../images/complex_systems.jpg" className="serviceImg2" alt="bussines-idea" placeholder="blurred"/>
             </motion.div>
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
         </div>
         <div></div>
     </section>
     <section className={`service-container service-4nd`}>
     <div className="two">
             <h3>
             Data Science and Machine Learning
             </h3>
             <p>
             Embedding analytics is about more than just sharing data; it’s an opportunity to build an ecosystem where you, 
             your customers and partners can connect and centralize your shared data, explore it together to gain valuable insights, 
             and build joint solutions that create value for all. After we have the data, we use the ML to create predictive models that enhance user experience.
             </p>
             <motion.div 
                initial={{opacity: 1, scale: 1}}
                animate={{
                    opacity: imageHoverFour? 0 : [0, 1],
                    scale: imageHoverFour? 1 : 1,
                    }}
                className="one-mobile">
                    <StaticImage src="../images/data_sience.jpg" className="serviceImg3" alt="data_sience" placeholder="blurred"/>
             </motion.div>
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
         <h3>Industries we served</h3>
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
                            className="bold-p"
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
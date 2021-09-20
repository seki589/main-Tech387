import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Footer from "../components/footer"
import PageTransition from 'gatsby-plugin-page-transitions'
import { StaticImage } from "gatsby-plugin-image"
// import '../styles/stylesWork.css'



const WorkPage = () => (
    <Layout>
     
            <PageTransition>
            <Seo title="Work" />
            <section className={`work-container topPad`}>
                <div className="top-services">
                    <div className="workLeft">
                        <div>
                        <h1>See our work</h1>
                        <p>
                        Our innovative and bespoke software solutions for start-ups, scale-ups and companies implementing digital transformation. Check out our <br/> cross-industry portfolio.
                        </p>
                        </div>
                        <div className="buttons">
                          <button>APP DEVELOPMENT</button>  
                          <button>WEB DEVELOPMENT</button>  
                          <button>BACKEND SOLUTIONS</button>
                          <button>DATA ANALYTICS</button>  
                          <button>BRANDING</button>  
                          <button>DESIGN SYSTEM</button>  
                          <button>UI/UX</button>  
                        </div>
                    </div>
                    <div className="workRight">
                        <StaticImage src="../images/triangle_plant_4.png" className="plant-1" alt="plant" placeholder="blurred"/>
                        <StaticImage src="../images/triangle_10.png" className="plant-1" alt="plant" placeholder="blurred"/>
                        <StaticImage src="../images/triangle_12.png" className="plant-1" alt="plant" placeholder="blurred"/>
                    </div>
                </div>
            </section>
            <section className={`work-container`}>
                <div className="work-midle">
                    <div className="midle-top">
                        <a className="card" href="./pdf/Spartan.pdf" target="_blank" rel="noreferrer">
                        <StaticImage src="../images/spartanApp.png" className="plant-2" alt="Spartan" placeholder="blurred"/>
                        <h6>Spartan</h6>
                        <p> Personalised training and nutrition app designed to help you reach your goals </p>  
                        </a>
                        <div className="card">
                        <StaticImage src="../images/swoper.png" className="plant-2" alt="Swapper" placeholder="blurred"/>
                        <h6>Swapper</h6>
                        <p>Exchange anything with anyone online</p>  
                        </div>
                    </div>
                    <div className="midle-bot">
                    <div className="card">
                        <StaticImage src="../images/wobl.png" className="plant-2" alt="wobbl" placeholder="blurred"/>
                        <h6>Wobbl</h6>
                        <p> All your social media in one place</p>  
                        </div>
                        <div className="card">
                        <StaticImage src="../images/12charge.png" className="plant-2" alt="EV Butler" placeholder="blurred"/>
                        <h6>EV Butler </h6>
                        <p>Easily locate your electric vehicle chargers</p>  
                        </div>
                    </div>
                </div>
            </section>
            <div className="footer-service" >
                <Footer />
            </div>
            </PageTransition>
    </Layout>
)


export default WorkPage
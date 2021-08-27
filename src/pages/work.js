import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Footer from "../components/footer"
import PageTransition from 'gatsby-plugin-page-transitions'
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
// import '../styles/stylesWork.css'



const WorkPage = () => (
    <Layout>
     
            <PageTransition>
            <Seo title="Work" />
            <section className={`work-container topPad`}>
                <div className="top-services">
                    <div className="servLeft">
                        <div>
                        <h1>Our Work</h1>
                        <p>
                        Our innovative and bespoke software solutions for start-ups, scale-ups and companies implementing digital transformation. Check out our cross-industry portfolio.
                        </p>
                        </div>
                    </div>
                    <div className="workRight">
                        <StaticImage src="../images/plant_1.png" className="plant-1" alt="plant" placeholder="blurred"/>

                    </div>
                </div>
                <div className="bottom-services">
                    <div className="servLeft">
                        <div className="buttons">
                          <button>Mobile Development</button>  
                          <button>Web Development</button>  
                          <button>UI/UX</button>  
                          <button>Branding</button>  
                          <button>Data Analytics</button>  
                        </div>
                        <div className="icon-name">
                            
                            
                            
                        </div>
                    </div>
                    {/* <div className={`servRight text`} >
                    <Link to="/work"><p>Find out more &gt; </p></Link>
                    </div> */}
                </div>
            </section>
            <section className={`work-container`}>
                <div className="work-midle">
                    <div className="midle-top">
                        <div className="card">
                        <StaticImage src="../images/work_1.png" className="plant-2" alt="plant" placeholder="blurred"/>
                        <h6>LOREM IPSUM DOLOR AMET CONSECTETUER</h6>
                        <p>Design, App Development</p>  
                        </div>
                        <div className="card">
                        <StaticImage src="../images/work_2.png" className="plant-2" alt="plant" placeholder="blurred"/>
                        <h6>LOREM IPSUM DOLOR AMET CONSECTETUER</h6>
                        <p>Design, App Development</p>  
                        </div>
                    </div>
                    <div className="midle-bot">
                    <div className="card">
                        <StaticImage src="../images/work_3.png" className="plant-2" alt="plant" placeholder="blurred"/>
                        <h6>LOREM IPSUM DOLOR AMET CONSECTETUER</h6>
                        <p>Design, App Development</p>  
                        </div>
                        <div className="card">
                        <StaticImage src="../images/work_4.png" className="plant-2" alt="plant" placeholder="blurred"/>
                        <h6>LOREM IPSUM DOLOR AMET CONSECTETUER</h6>
                        <p>Design, App Development</p>  
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
import * as React from "react"
import Form from "../components/form";

import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import LinkeBlack from "../images/linkedin_light.png"
import PageTransition from 'gatsby-plugin-page-transitions';
import PartnersLogo from "../components/partnersLogo";


const HireUsPage = () => {


     return   (
            
            <Layout>
            <PageTransition>
            <Seo title="Work with us" />
                <section className="hireUs">
                   <div className="hireTop">
                    <div className="client">
                        <div className="text">
                         <h1>Work with us</h1>   
                         <p>
                         We believe in power of partnership where 1+1 makes 3.
                         Contact our partnerships team to connect.    
                         </p> 
                        </div>
                        <Form/>
                    </div>
                    <div className="team">
                        <div className="team-box">
                            {/* <div className="team-cards">
                                <div className="team-card">
                                <div className="team-img">
                                <StaticImage src="../images/hire_samir.png" alt="Samir Avdibegović" className="profile" placeholder="tracedSVG"/>
                                </div>
                                
                                <div className="team-name">
                                    <p>Samir Avdibegović</p>
                                    <h6>Head of Partnerships and <br></br>Business Development</h6>
                                    <div className="contact">
                                    <a href="mailto:savdibegovic@tech387.com" 
                                    >savdibegovic@tech387.com</a>
                                    </div>
                                    <div className="linkedin">
                                        <a href="https://www.linkedin.com/in/samir-a-03110b18" target="_blank" rel="noreferrer">
                                        <img src={LinkeBlack} alt="linkedin"/>
                                        </a>
                                    </div>
                                </div>
                                </div> 
                            </div> */}
                            <div className="team-cards">
                                <div className="team-card">
                                <div className="team-img">
                                <StaticImage src="../images/hire_emir.png" alt="Emir Čorbo" className="profile" placeholder="tracedSVG"/>
                                </div>  
                                <div className="team-name">
                                    <p>Emir Čorbo</p>
                                    <h6>Business Development<br></br> Manager</h6>
                                    <div className="contact">
                                    <a href="mailto:ecorbo@tech387.com">ecorbo@tech387.com</a>
                                    </div>
                                    <div className="contact">
                                        {/* <div>
                                            <a href="https://ba.linkedin.com/in/emir-corbo">Linkedin</a>
                                            <a href="tel:+38760 315 9309">+38760 315 9309</a>
                                        </div> */}
                                        <div className="linkedin">
                                            <a href="https://ba.linkedin.com/in/emir-corbo" target="_blank" rel="noreferrer">
                                            <img src={LinkeBlack} alt="linkedin"/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                  </div>
                  <div className="hireBot">
                    <div className="partners">
                        <PartnersLogo/>
                    </div>
                  </div>
                </section>
            </PageTransition>
            </Layout>
        )
}
export default HireUsPage
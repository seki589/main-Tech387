import * as React from "react"
import Form from "../components/form";

import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import Mail from "../assets/ic_email.svg"
import Phone from "../assets/ic_phone.svg"
import PageTransition from 'gatsby-plugin-page-transitions';


const HireUsPage = () => {


     return   (
            
            <Layout>
            <PageTransition>
            <Seo title="Work with us" />
            {/* <div className="container"> */}
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
                            <div className="team-cards">
                                <div className="team-card">
                                <div className="team-img">
                                <StaticImage src="../images/hire_samir.png" alt="Samir Avdibegović" className="profile"/>
                                </div>
                                
                                <div className="team-name">
                                    <p>Samir Avdibegović</p>
                                    <h6>Head of Partnerships and <br></br>Business Development</h6>
                                    <div className="contact">
                                    <a href="tel:+38761 209 884">+38761 209 884</a>
                                    </div>
                                    <div className="contact">
                                    <a href="mailto:savdibegovic@tech387.com" 
                                    >savdibegovic@tech387.com</a>
                                    </div>
                                </div>
                                </div> 
                            </div>
                            <div className="team-cards">
                                <div className="team-card">
                                <div className="team-img">
                                <StaticImage src="../images/hire_emir.png" alt="Emir Čorbo" className="profile"/>
                                </div>  
                                <div className="team-name">
                                    <p>Emir Čorbo</p>
                                    <h6>Business Development <br></br>Executive</h6>
                                    <div className="contact">
                                        <div>
                                            <a href="tel:+447402 947 615">+447402 947 615</a><br></br>
                                            <a href="tel:+38760 315 9309">+38760 315 9309</a>
                                        </div>
                                    </div>
                                    <div className="contact">
                                    <a href="mailto:ecorbo@tech387.com">ecorbo@tech387.com</a>
                                    </div>
                                </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                  </div>
                  <div className="hireBot">
                    <div className="partners">
                        <div className="img">
                        <StaticImage src="../images/volkswagen group.svg" className="partners-logo" alt="volkswagen" placeholder="tracedSVG"/>
                        <StaticImage src="../images/Samsung.svg" className="partners-logo" alt="samsung" placeholder="tracedSVG"/>
                        <StaticImage src="../images/Huawei.svg" className="partners-logo" alt="huawei" placeholder="tracedSVG"/>
                        <StaticImage src="../images/goCloudGroup.svg" className="partners-logo" alt="goCloudgroup" placeholder="tracedSVG"/>
                        <StaticImage src="../images/DiamoundApp Group.svg" className="partners-logo" alt="DiamountAppLogo.png" placeholder="tracedSVG"/>
                        
                        </div>
                    </div>
                  </div>
                </section>
            {/* </div> */}
            </PageTransition>
            </Layout>
        )
}
export default HireUsPage
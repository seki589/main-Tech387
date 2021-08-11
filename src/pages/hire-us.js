import * as React from "react"
import Form from "../components/form";

import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import Mail from "../images/ic_email.svg"
import Phone from "../images/ic_phone.svg"
import PageTransition from 'gatsby-plugin-page-transitions';


const HireUsPage = () => {


     return   (
            
            <Layout>
            <PageTransition
            >
            <div className="container">
                <section className="hireUs">
                    <div className="client">
                        <div className="text">
                         <h1>Work with us</h1> 
                         <p>
                         Our clients get the best results when they have our team dedicated
                         to their business for extended periods of time. This is why we are 
                         looking for ongoing collaboration where our professionals are like 
                         your team members who just happen to be remote.<br></br>                   
                         </p>  
                         <p>
                         We believe in power of partnership where 1+1 makes 3.
                         Contact our partnerships team to connect.    
                         </p> 
                        </div>
                        <Form/>
                    </div>
                    <div className="team">
                        <div className="team-box">
                            <h2>Partnerships Team:</h2>
                            <div className="team-cards">
                                <div className="team-card">
                                <StaticImage src="../images/Samir.png" alt="Samir Avdibegović" className="profile"/>
                                <div className="team-name">
                                    <p>Samir Avdibegović</p>
                                    <h6>Head of Partnerships and <br></br>Business Development</h6>
                                </div>
                                </div>
                                <div className="contact">
                                    <img src={Mail} alt="mail"/> 
                                    <a href="mailto:savdibegovic@tech387.com" 
                                    
                                    >savdibegovic@tech387.com</a>
                                </div>
                                <div className="contact">
                                    <img src={Phone} alt="phone"/> 
                                    <a href="tel:+38761 209 884">+38761 209 884</a>
                                </div>
                            </div>
                            <div className="team-cards">
                                <div className="team-card">
                                <StaticImage src="../images/Emir.jpg" alt="Emir Čorbo" className="profile"/>
                                <div className="team-name">
                                    <p>Emir Čorbo</p>
                                    <h6>Business Development <br></br>Executive</h6>
                                </div>
                                </div>
                                <div className="contact">
                                    <img src={Mail} alt="mail"/> 
                                    <a href="mailto:ecorbo@tech387.com">ecorbo@tech387.com</a>
                                </div>
                                <div className="contact">
                                     <img src={Phone} alt="phone"/>
                                     <div>
                                        <a href="tel:+447402 947 615">+447402 947 615</a><br></br>
                                        <a href="tel:+38760 315 9309">+38760 315 9309</a>
                                     </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>

                </section>
            </div>
            </PageTransition>
            </Layout>
        )
}
export default HireUsPage
import * as React from "react"
import Form from "../components/form";

import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import Mail from "../images/mail.png"
import Phone from "../images/phone-1.png"


const HireUsPage = () => {
//     const [darkMode, setDarkMode] = useState(false);
  
  
//   useEffect((darkMode) => {
//     const body = document.body
    
//     if( darkMode === false) {
    
//           body.classList.remove('dark')
//     }
//   }, [darkMode],)
     return   (
            <Layout>
            <div className="container">
                <section className="hireUs">
                    <div className="client">
                        <div className="text">
                         <h1>Work with us</h1> 
                         <p>
                         Our clients get the best results when they have our team dedicated
                         to their business for extended periods of time. This is why we are 
                         looking for ongoing collaboration where our professionals are like 
                         your team members who just happen to be remote. Ready to move forward?<br></br>                   
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
                                <StaticImage src="../images/Samir.png" alt="team-member" className="profile"/>
                                <div className="team-name">
                                    <p>Samir Avdibegović</p>
                                    <h6>Head of Partnerships and <br></br>Business Development</h6>
                                </div>
                                </div>
                                <div className="contact">
                                    <img src={Mail} alt="mail"/> 
                                    <h5>savdibegovic@tech387.com</h5>
                                </div>
                                <div className="contact">
                                    <img src={Phone} alt="phone"/> 
                                    <h5>+38761 209 884</h5>
                                </div>
                            </div>
                            <div className="team-cards">
                                <div className="team-card">
                                <StaticImage src="../images/Emir.jpg" alt="team-member" className="profile"/>
                                <div className="team-name">
                                    <p>Emir Čorbo</p>
                                    <h6>Business Development <br></br>Executive</h6>
                                </div>
                                </div>
                                <div className="contact">
                                    <img src={Mail} alt="mail"/> 
                                    <h5>ecorbo@tech387.com</h5>
                                </div>
                                <div className="contact">
                                     <img src={Phone} alt="phone"/>
                                     <div>
                                        <h5>+447402 947 615</h5>
                                        <h5>+38760 315 9309</h5>
                                     </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>

                </section>
            </div>
            </Layout>
        )
}
export default HireUsPage
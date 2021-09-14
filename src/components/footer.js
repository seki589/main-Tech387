import * as React from 'react'
import { useState, useEffect } from 'react'
// import {StaticImage} from 'gatsby-plugin-image'
import LinkeWhite from '../images/linkedin.png'
import Mail from '../images/mail .png'
// import { Link } from "gatsby"
import '../styles/styles.css'


const Footer = () => {
    const [light, setLight] = useState('dark')

    useEffect(() => {
        const body = document.body
        if(body === 'dark'){
            body.classList.remove('dark')
        } 
        else{
            body.classList.remove('dark')
        }
    },[light])

        
    return(
        <div className="footer">
        <div className="footer-iner">
            
            <div className="left">
                <div className="footer-head">
                    <h1>Let's work together!</h1>
                </div>
                <div className="left-mid">
                    <div className="linkedin">
                            <a href="https://www.linkedin.com/company/tech-387">
                            <img src={LinkeWhite} alt="linkedin"/> <p>Follow us</p>
                            </a>
                    </div>
                    <div className="linkedin">
                            <a href="mailto:support@tech387.com">
                            <img src={Mail} alt="linkedin"/> <p>Work with us</p>
                            </a>
                    </div>
                    <div className="linkedin">
                            <a href="mailto:mail@tech387.com"><p>mail@tech387.com</p>
                            </a>
                    </div>
                    <div className="linkedin">
                            <a href="tel:+38762667266"><p>+387 62667266</p>
                            </a>
                    </div>
                </div>
                <div className="left-bottom">
                
                  <div className="copy">
                      <p>2021© Copyright by Tech 387 All rights received.</p>
                  </div>
                </div>
                {/* <div className="footer-mid">
                    <div className="left-li">
                    <h3>Work with us</h3>
                        <ul>
                            <li> <Link to="/hire-us" onClick={() => setLight(!light)}>Hire us</Link> </li>
                            <li> <a href="#">Start-Up Calculator</a> </li>
                        </ul>
                        <h3>Contact</h3>
                        <ul>
                            <li className="contact"> <a href="mailto:support@tech387.com">support@tech387.com</a> </li>
                            <li className="contact"> <a >+387 62 667 266</a> </li>
                        </ul>
                     <div>
                     <h3>Capabilities</h3>
                     </div>
                        <ul>
                            <li> <a href="#">App Development</a> </li>
                            <li> <a href="#">Web Development</a> </li>
                            <li> <a href="#">Backend Solutions</a> </li>
                            <li> <a href="#">Data Analytics</a> </li>  
                        </ul>
                         
                              
                    </div>
                    <div className="right-li">                       
                        <ul>
                            <li> <a href="#">Branding</a> </li>
                            <li> <a href="#">Design System</a> </li>
                            <li> <a href="#">UI/UX</a> </li>
                        </ul>                           
                    </div>
                </div> */}
                
            </div>
            <div className="right">
            <div>
                <h3>End-to-end development</h3>
                <ul>
                    <li><span>&#8226;</span>No management overhead costs & synergy of teams </li>
                    <li><span>&#8226;</span>Cost-saving option by understanding full product picture in long run </li>
                    <li><span>&#8226;</span>Flexibility when scaling up </li>
                    <li><span>&#8226;</span>We take full responsibility for the process </li>
                    
                </ul>
             </div>
            <div>
                <h3>Dedicated team</h3>
                <ul>
                    <li><span>&#8226;</span>No need for staff management (hiring and talent acquisition) </li>
                    <li><span>&#8226;</span>Learning stays within the team </li>
                    <li><span>&#8226;</span>Team does not change </li>
                    <li><span>&#8226;</span>Pick specific teams for your product (eg. design, development, QA) </li>
                    
                </ul>
             </div>
            <div>
                <h3>Combined development</h3>
                <ul>
                    <li><span>&#8226;</span>Your to date product progress with our next stage design and development </li>
                    <li><span>&#8226;</span>Your to date product with our testing support </li>
                    <li><span>&#8226;</span>Flexibility to intervene at any stage of development</li>
                    <li><span>&#8226;</span>Our expertise in specific areas</li>
                    
                </ul>
             </div>
            </div>
            {/* <div className="mid">
                
            </div> */}
        </div>
        </div>
    )
}


export default Footer

// export const query = graphql`
//     query {
//        plantImage: file(relativePath: {eq: "plant_2.png"}) {
//             childImageSharp {
//               fluid(maxWidth: 2000) {
//                 ...GatsbyImageSharpFluid
//               }
//             }
//           }
//     }
// `
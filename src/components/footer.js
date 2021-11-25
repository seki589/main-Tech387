import * as React from 'react'
import { useState, useEffect } from 'react'
import PangeaLogo from './pangeaLogo'
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
                    <div>
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
                    </div>
                    <div>
                        <div className="linkedin">
                                <a href="mailto:hello@tech387.com"><p>hello@tech387.com</p>
                                </a>
                        </div>
                        <div className="linkedin">
                                <a href="mailto:hello@tech387.com"><PangeaLogo/>
                                </a>
                        </div>
                    </div>
                </div>
                <div className="left-bottom">
                
                  <div className="copy"> 
                      <p>2021© Copyright by Tech 387 All rights reserved.</p>
                  </div>
                </div>
            </div>
            <div className="right">
            <div className="right-list">
                <h3>End-to-end development<span className="span">&gt;</span></h3>
                <ul>
                    <li><span>&#8226;</span>No management overhead costs & synergy of teams </li>
                    <li><span>&#8226;</span>Cost-saving option by understanding full product picture in long run </li>
                    <li><span>&#8226;</span>Flexibility when scaling up </li>
                    <li><span>&#8226;</span>We take full responsibility for the process </li>
                    
                </ul>
             </div>
            <div className="right-list">
                <h3>Dedicated team<span className="span">&gt;</span></h3>
                <ul>
                    <li><span>&#8226;</span>No need for staff management (hiring and talent acquisition) </li>
                    <li><span>&#8226;</span>Learning stays within the team </li>
                    <li><span>&#8226;</span>Team does not change </li>
                    <li><span>&#8226;</span>Pick specific teams for your product (eg. design, development, QA) </li>
                    
                </ul>
             </div>
            <div className="right-list">
                <h3>Combined development<span className="span">&gt;</span></h3>
                <ul>
                    <li><span>&#8226;</span>Your to date product progress with our next stage design and development </li>
                    <li><span>&#8226;</span>Your to date product with our testing support </li>
                    <li><span>&#8226;</span>Flexibility to intervene at any stage of development</li>
                    <li><span>&#8226;</span>Our expertise in specific areas</li>
                    
                </ul>
             </div>
            </div>
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
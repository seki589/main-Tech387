import * as React from 'react'

// import { graphql } from 'gatsby'
import {StaticImage} from 'gatsby-plugin-image'
import LinkeWhite from '../images/linkedin-white.png'
import '../styles/styles.css'


const Footer = () => {

    return(
        <div className="footer">
            <div className="left">
                <div className="footer-head">
                    <h1>Create your digital<br></br> products</h1>
                </div>
                <div className="footer-mid">
                    <div className="left-li">
                        <h3>Capabilities</h3>
                        <ul>
                            <li> <a href="#">App Development</a> </li>
                            <li> <a href="#">Web Development</a> </li>
                            <li> <a href="#">Backend Solutions</a> </li>
                            <li> <a href="#">Data Analytics</a> </li>
                            <li> <a href="#">Branding</a> </li>
                            <li> <a href="#">Design System</a> </li>
                            <li> <a href="#">UI/UX</a> </li>
                        </ul>
                    </div>
                    <div className="right-li">
                        <h3>Work with us</h3>
                        <ul>
                            <li> <a href="#">Hire us</a> </li>
                            <li> <a href="#">Start-Up Calculator</a> </li>
                        </ul>
                        <h3>Contact</h3>
                        <ul>
                            <li className="contact"> <a >mail@tech387.com</a> </li>
                            <li className="contact"> <a >+387 62 667 266</a> </li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bot">
                <div className="linkedin">
                  <a href="https://www.linkedin.com/company/tech-387">
                  <img src={LinkeWhite} alt="linkedin"/> <p>Follow us</p>
                  </a>
                  </div>
                  <div className="copy">
                      <p>2021© Copyright by Tech387 All rights received.</p>
                  </div>
                </div>
            </div>
            <div className="right">
                <StaticImage src="../images/plant_2.png"  alt="plant"/>
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
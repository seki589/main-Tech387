import * as React from 'react'

import { graphql,useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import LinkeWhite from '../images/linkedin-white.png'
import '../styles/styles.css'
// neka funkcija


const Footer = () => {
    // const data = useStaticQuery(graphql`
    // query ImgPlant {
    //     file(relativePath: {eq: "plant_2.png"}) {
    //       childImageSharp {
    //         fluid {
    //           ...GatsbyImageSharpFluid
    
    //         }
    //       }
    //     }
    //   }
    // `)

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
                {/* <Img fluid={data.file.childImageSharp.fluid}/> */}
            </div>

        </div>
    )
}


export default Footer

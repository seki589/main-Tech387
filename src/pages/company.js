import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Footer from "../components/footer"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import PageTransition from 'gatsby-plugin-page-transitions'

const CompanyPage = () => (
    <Layout>
     <PageTransition>
            <Seo title="Company" />
            <section className={`work-container topPad`}>
            <div className="top-company">
                    <div className="companyLeft">
                        <div>
                        <h1>Our Culture</h1>
                        <p>
                        We are a young, dynamic and positive organisation where every person is part of our success. The same transparency we offer our customers applies internally: we believe in honest, open communication and giving everyone a chance to contribute to achieving our goals.
                        </p>
                        </div>
                    </div>
                    <div className="workRight">

                    </div>
                </div>
                <div className="bottom-company">
                   <div className={`compRight text`} >
                      <Link to="/work"><p>See more &gt; </p></Link>
                   </div>
                    <div className="compLeft">
                         <StaticImage src="../images/plant_11.png" className="plant-2" alt="plant" placeholder="blurred"/>
                        <div className="icon-name">

                        </div>
                    </div>
                </div>
            </section>
            <div className={`work-container vision`}>
                <div className="vision-card">
                    <div className="vision-title">
                        <h4>
                        About us and our Vision
                        </h4>
                        <div className="text">
                        <Link to="/work"><p>READ MORE &gt; </p></Link>
                        </div>
                    </div>
                    <div className="vision-text">
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                        sed do eiusmod tempor incididunt ut ero labore et dolore 
                        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                        ullamco poriti laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in uienply voluptate 
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
                        sint occaecat cupidatat norin proident, sunt in culpa qui officia 
                        deserunt mollit anim id est laborum.
                        </p>
                        <p className="text-grean">
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
                        officia deserunt mollit anim id est laborum.  
                        </p>
                    </div>
                </div>
            </div>
            <div className="work-container">
                <div className="benefits">
                    <div className="benefit-text">
                        <h3>
                        Benefits
                        </h3>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                        sed do eiusmod tempor incididunt ut ero labore et dolore magna 
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                        poriti laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                        irure dolor in reprehenderit in uienply voluptate velit esse cillum 
                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                        norin proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <div className="text">
                        <Link to="/work"><p>See more benefits &gt; </p></Link>
                        </div>
                    </div>
                    <div className="benefit-img">
                    <StaticImage src="../images/company_1.jpg" className="company1" alt="plant" placeholder="blurred"/>  
                    </div>
                </div>
            </div>
            <div className="work-container">
                <div className="team-section">
                    <div className="team-head">
                        <div>
                            <h3>Our Team</h3>
                        </div>
                        <div className="text">
                        <Link to="/work"><p>See the full team &gt; </p></Link>
                        </div>
                    </div>
                    <div className="sub-text">
                        <p >
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do 
                        eiusmod tempor incididunt ut ero labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco poriti 
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                        dolor in reprehenderit in uienply voluptate velit esse cillum dolore 
                        eu fugiat nulla pariatur.
                        </p>
                        <p></p>
                    </div>
                    
                    <div className="team-images">
                    <StaticImage src="../images/team1.jpg" className="team-img" alt="plant" placeholder="blurred"/>    
                    <StaticImage src="../images/team2.jpg" className="team-img" alt="plant" placeholder="blurred"/>    
                    <StaticImage src="../images/team3.jpg" className="team-img" alt="plant" placeholder="blurred"/>    
                    </div>
                </div>
            </div>
            <div className="work-container">
                <div className={`team-section padBot`}>
                    <div className="team-head">
                        <div>
                            <h3>Carier</h3>
                        </div>
                        <div className="text">
                        <Link to="/work"><p>Read our Company Culture blog &gt; </p></Link>
                        </div>
                    </div>
                    <div className="sub-text">
                        <p >
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do 
                        eiusmod tempor incididunt ut ero labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco poriti 
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                        dolor in reprehenderit in uienply voluptate velit esse cillum dolore 
                        eu fugiat nulla pariatur.
                        </p>
                        <p >
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do 
                        eiusmod tempor incididunt ut ero labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco poriti 
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                        dolor in reprehenderit in uienply voluptate velit esse cillum dolore 
                        eu fugiat nulla pariatur.
                        </p>
                    </div>
                    <div className="carirer-cards">
                        <div className="carirer-card">
                        <StaticImage src="../images//brush_2.svg"  className="card-icon" alt="icon" placeholder="blurred" />
                        <h5>UI/UX Designer</h5>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod 
                        tempor incididunt ut ero labore et dolore magna aliqua. Ut enim ad minim 
                        veniam, quis nostrud exercitation ullamco poriti laboris nisi ut aliquip 
                        ex ea commodo consequat.
                        </p>
                        </div>
                        <div className="carirer-card">
                        <StaticImage src="../images//brush_2.svg"  className="card-icon" alt="icon" placeholder="blurred" />
                        <h5>Front-End Developer</h5>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod 
                        tempor incididunt ut ero labore et dolore magna aliqua. Ut enim ad minim 
                        veniam, quis nostrud exercitation ullamco poriti laboris nisi ut aliquip 
                        ex ea commodo consequat.
                        </p>
                        </div>
                        <div className="carirer-card">
                        <StaticImage src="../images//brush_2.svg" className="card-icon" alt="icon" placeholder="blurred" />
                        <h5>Back-End Developer</h5>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod 
                        tempor incididunt ut ero labore et dolore magna aliqua. Ut enim ad minim 
                        veniam, quis nostrud exercitation ullamco poriti laboris nisi ut aliquip 
                        ex ea commodo consequat.
                        </p>
                        </div>
                    </div>  
                    <div className="carirer-cards">
                        <div className="carirer-card">
                        <StaticImage src="../images//brush_2.svg"  className="card-icon" alt="icon" placeholder="blurred" />
                        <h5>UI/UX Designer</h5>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod 
                        tempor incididunt ut ero labore et dolore magna aliqua. Ut enim ad minim 
                        veniam, quis nostrud exercitation ullamco poriti laboris nisi ut aliquip 
                        ex ea commodo consequat.
                        </p>
                        </div>
                        <div className="carirer-card">
                        <StaticImage src="../images//brush_2.svg"  className="card-icon" alt="icon" placeholder="blurred" />
                        <h5>Front-End Developer</h5>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod 
                        tempor incididunt ut ero labore et dolore magna aliqua. Ut enim ad minim 
                        veniam, quis nostrud exercitation ullamco poriti laboris nisi ut aliquip 
                        ex ea commodo consequat.
                        </p>
                        </div>
                        <div className="carirer-card">
                        <StaticImage src="../images//brush_2.svg"  className="card-icon" alt="icon" placeholder="blurred" />
                        <h5>Back-End Developer</h5>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod 
                        tempor incididunt ut ero labore et dolore magna aliqua. Ut enim ad minim 
                        veniam, quis nostrud exercitation ullamco poriti laboris nisi ut aliquip 
                        ex ea commodo consequat.
                        </p>
                        </div>
                    </div>  
                </div>
            </div>
            <div className="footer-service" >
                <Footer />
            </div>
    </PageTransition>
    </Layout>
)

export default CompanyPage
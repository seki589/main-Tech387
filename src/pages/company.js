import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Footer from "../components/footer"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import PageTransition from 'gatsby-plugin-page-transitions'
import '../styles/styles.css'

const CompanyPage = () => (
    <Layout>
     <PageTransition>
            <Seo title="Company" />
            <section className={`work-container topPad`}>
            <div className="top-company">
                    <div className="companyLeft">
                        <div>
                        <h1>We make<br/> products shine</h1>
                        <p>
                        We are a young, dynamic and positive organisation where every person is part of our success. The same transparency we offer our customers applies internally: we believe in honest, open communication and giving everyone a chance to contribute to achieving our goals.
                        </p>
                        </div>
                    </div>
                    <div className="companyRight">
                    <StaticImage src="../images/pointilism.png" alt="cover" className="cover"/>
                    </div>
                </div>
                <div className="bottom-company">
                   <div className={`compRight text`} >
                      {/* <Link to="/work"><p>See more &gt; </p></Link> */}
                   </div>
                    <div className="compLeft">
                    
                        <div className="icon-name">

                        </div>
                    </div>
                </div>
            </section>
            {/* <div className={`work-container vision`}>
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
            </div> */}
            
            <div className="work-container">
                <div className="team-section">
                    {/* <div className="team-head">
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
                    </div> */}
                    
                    <div className="team-images">
                    <div className="img-wraper"><StaticImage src="../images/company_1.jpg" className="team-img" alt="team" placeholder="blurred"/> </div>
                    <div className="img-wraper"><StaticImage src="../images/company_2.jpg" className="team-img" alt="team" placeholder="blurred"/>  </div>
                    <div className="img-wraper"><StaticImage src="../images/company_3.jpg" className="team-img" alt="team" placeholder="blurred"/></div>
                    </div>
                </div>
            </div>
            <div className="work-container">
                <div className="benefits">
                    <div className="benefit-text">
                        <h3>
                        Take a closer<br/> look at us
                        </h3>
                        <p>
                        Tubik is the team of bright creative people from various areas: UI/UX, graphic and motion design, 
                        mobile and web development, digital art, project management and copywriting. We are all united 
                        with a desire to do our work the best way possible. We aren’t afraid of challenges and know the 
                        power of teamwork. Let’s work together!
                        </p>
                    </div>
                    <div className="benefit-img">
                    <StaticImage src="../images/team.jpg"  className="company1" alt="plant" placeholder="blurred"/>  
                    </div>
                </div>
            </div>
            <div className="work-container">
                <div className={`team-section padBot`}>
                    <div className="benefits">
                        <div className="benefit-text">
                            <h3>
                            Current Openings
                            </h3>
                            <p>
                            Our amazing team continues to grow as we expand to new cities around the world, 
                            so if you would like to join us we’d love to hear from you.
                            </p>
                        </div>
                        <div className="benefit-img">
                        {/* <StaticImage src="../images/team.jpg"  className="company1" alt="plant" placeholder="blurred"/>   */}
                        </div>
                    </div>
                    <div className="carier-bot">
                    <div className="carier-cards">
                        <div className="carier-card">
                        <div className='top-card'>
                        <h5>UI/UX Designer</h5>
                        <StaticImage src="../images//rightArrow.png"  className="card-icon" alt="icon" placeholder="blurred" />
                        </div>                       
                        <p>
                        Full Time
                        </p>
                        </div>
                        <div className="carier-card">
                        <div className='top-card'>
                        <h5>Flutter Developer</h5>
                        <StaticImage src="../images//rightArrow.png"  className="card-icon" alt="icon" placeholder="blurred" />
                        </div>
                        <p>
                        Full Time
                        </p>
                        </div>
                        <div className="carier-card">
                        <div className='top-card'>
                        <h5>Project Manager</h5>
                        <StaticImage src="../images//rightArrow.png"  className="card-icon" alt="icon" placeholder="blurred" />
                        </div>
                        <p>
                        Full Time
                        </p>
                        </div>
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
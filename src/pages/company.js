import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Footer from "../components/footer"
import { StaticImage } from "gatsby-plugin-image"
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
                   </div>
                    <div className="compLeft">
                    
                        <div className="icon-name">

                        </div>
                    </div>
                </div>
            </section>
            
            <div className="work-container">
                <div className="team-section">
                    <div className="team-images">
                    <div className="img-wraper1"><StaticImage src="../images/company_1.jpg" className="team-img" alt="team" placeholder="blurred"/> </div>
                    <div className="img-wraper2"><StaticImage src="../images/company_2.jpg" className="team-img" alt="team" placeholder="blurred"/>  </div>
                    <div className="img-wraper3"><StaticImage src="../images/company_3.jpg" className="team-img" alt="team" placeholder="blurred"/></div>
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
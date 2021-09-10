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
                        People are always more important than numbers.
                        </p>
                        <p>
                        We believe that if our employees are looked after, our clients will be too. Our people are 
                        fundamental to our success and represent a core tenant of our mission, vision and values. 
                        We believe that diversity and inclusion are a source of our innovation.
                        </p>
                        <p>
                        We strive to create a thriving and encouraging environment where everyone’s contribution is valued, 
                        and where mutual trust and respect generate excellence. We are a team of professionals united by a common 
                        desire to push the boundaries with our creative minds and innovative technologies. We promote excellence in 
                        every aspect of our operations by investing in our people to foster their development and encourage their passion to excel.
                        </p>
                    </div>
                    <div className="benefit-img">
                    <StaticImage src="../images/team.jpg"  className="company1" alt="plant" placeholder="blurred"/>  
                    </div>
                </div>
            </div>
            <div className="work-container">
                <div className={`team-section padBot`}>
                    <div className={'benefits opening'}>
                        <div className='benefits-title'>
                               <h3>
                                Current Openings
                                </h3>
                            </div>
                        <div className="benefit-text">
                            
                            <p>
                            Working at Tech 387 is not just about technical knowledge. With Tech 387 you'll work in the industry you love, 
                            all while improving people’s experiences and working with colleagues who share your passion. Being part of the 
                            team is a great opportunity for you to develop and grow in a wide range of roles.
                            </p>
                            <p>
                            Here at Tech 387 we’re fortunate enough to be growing as rapidly as our business, with an ever expanding list of our clients. 
                            In that light, we're always looking for talented people who want to join our team.<br/><br/>
                            <span>We are not afraid of challenges and we understand the power of teamwork. Let’s work together!</span>
                            </p>
                        </div>
                    </div>
                    <div className="carier-bot">
                    <div className="carier-cards">
                        <a  href="https://www.linkedin.com/jobs/view/2694596165/?refId=ZelDaHCjNwUBxs2LcNpM%2FQ%3D%3D&trackingId=a9aAv0MMEJgqsh8YkPYlsg%3D%3D&trk=d_flagship3_company" className="carier-card" target="_blank" rel="noreferrer">
                            <div className='top-card'>
                            <h5>Angular Developer</h5>
                            <StaticImage src="../images//rightArrow.png"  className="card-icon" alt="icon" placeholder="blurred" />
                            </div>                       
                            <p>
                            Full Time
                            </p>
                        </a>
                        <a  className="carier-card" href="https://www.linkedin.com/jobs/view/2691829142/?refId=ZelDaHCjNwUBxs2LcNpM%2FQ%3D%3D&trackingId=AURUNtl7FYp6bogzGku3Kg%3D%3D&trk=d_flagship3_company" target="_blank" rel="noreferrer">
                            <div className='top-card'>
                            <h5>Flutter Developer</h5>
                            <StaticImage src="../images//rightArrow.png"  className="card-icon" alt="icon" placeholder="blurred" />
                            </div>
                            <p>
                            Full Time
                            </p>
                        </a>
                        {/* <div className="carier-card">
                        <div className='top-card'>
                        <h5>Project Manager</h5>
                        <StaticImage src="../images//rightArrow.png"  className="card-icon" alt="icon" placeholder="blurred" />
                        </div>
                        <p>
                        Full Time
                        </p>
                        </div> */}
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
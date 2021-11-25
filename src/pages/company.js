import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Footer from "../components/footer"
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Mousewheel} from 'swiper';
import PangeaLogoDark from '../components/pangeaLogoDark'
import { StaticImage } from "gatsby-plugin-image"
import PageTransition from 'gatsby-plugin-page-transitions'
import '../styles/styles.css'

SwiperCore.use(Mousewheel);
const CompanyPage = () => {

    return(
    <Layout>
     <PageTransition>
            <Seo title="Company" />
            <section className={`work-container topPad`}>
            <div className="top-company">
                    <div className="companyLeft">
                        <div>
                        <h1>Expand your horizons</h1>
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
            
            <div className={'work-container image-container'}>
                <div className="team-section">
                    <div className="team-images">
                    <Swiper 
                    direction={'horizontal'}
                    slidesPerView={3} 
                    centeredSlides={true}
                    freeMode= {{
                        'enabled': true,
                        'sticky': false,
                        'momentum': true,
                        'momentumBounce': false,
                    }}
                    spaceBetween={20} 
                    grabCursor={true}
                    mousewheel={true}
                    className="swiper-images">
                    <SwiperSlide className="team-img2">
                      <StaticImage src="../images/company_2.jpg" className="team-img2-img" alt="team" placeholder="blurred"/>
                    </SwiperSlide>
                    <SwiperSlide className="team-img1">
                    <StaticImage src="../images/company_1.png" className="team-img1-img" alt="team" placeholder="blurred"/>
                    </SwiperSlide>
                    <SwiperSlide className="team-img2">
                    <StaticImage src="../images/company_3.jpg" className="team-img2-img" alt="team" placeholder="blurred"/>
                    </SwiperSlide>
                    <SwiperSlide className="team-img1">
                    <StaticImage src="../images/company_4.jpg" className="team-img1-img" alt="team" placeholder="blurred"/>
                    </SwiperSlide>
                    <SwiperSlide className={`team-img1 none-img`}>
                    </SwiperSlide>
                    <SwiperSlide className={`team-img1 none-img`}>
                    </SwiperSlide>
                    <SwiperSlide className={`team-img1 none-img`}>
                    </SwiperSlide>
                    </Swiper>
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
                        People are always more important than numbers.<br/>
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
                    <StaticImage src="../images/team.jpg"  className="company1" alt="team" placeholder="blurred"/>  
                    </div>
                </div>
            </div>
            <div className="work-container">
                <div className={`team-section padBot`}>
                    <div className={'benefits opening'}>
                        <div className='benefits-title'>
                               <h3>
                               Careers
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
                        <a  href="https://lnkd.in/enHvWhdQ" className="carier-card" target="_blank" rel="noreferrer">
                            <div className='top-card'>
                            <h5>Full Stack</h5>
                            <StaticImage src="../images//rightArrow.png"  className="card-icon" alt="icon" placeholder="blurred" />
                            </div>                       
                            <p>
                            Full Time
                            </p>
                        </a>
                        <a  className="carier-card" href="https://lnkd.in/gxePP7e8" target="_blank" rel="noreferrer">
                            <div className='top-card'>
                            <h5>Flutter Developer</h5>
                            <StaticImage src="../images//rightArrow.png"  className="card-icon" alt="icon" placeholder="blurred" />
                            </div>
                            <p>
                            Full Time
                            </p>
                        </a>
                    </div>  
                    </div>  
                </div>
                <div className={`team-section padBot`}>
                <div className={'benefits opening'}>
                        <div className='benefits-title'>
                               <h3>
                               Join our Internship Program
                                </h3>
                            </div>
                        <div className="benefit-text">
                            <p>
                            The internship that Tech 387 provides is a great way to gain a hands-on experience, build connections, and make the first step
                             into your chosen industry. Our talented and devoted team of developers will help you gain new knowledge, pick up new skills 
                             and choose your path. Check out our available internships, submit your application, and prepare for a rewarding experience.
                            </p>
                            <p>
                            
                            </p>
                        </div>
                    </div>
                    <div className="carier-bot">
                    <div className="carier-cards">
                        <a  href="https://www.linkedin.com/jobs/view/2699359663" className="carier-card" target="_blank" rel="noreferrer">
                            <div className='top-card'>
                            <h5>Internship</h5>
                            <StaticImage src="../images//rightArrow.png"  className="card-icon" alt="icon" placeholder="blurred" />
                            </div>                       
                            <p>
                            Full Time
                            </p>
                        </a>
                        {/* <a  className="carier-card" href="https://lnkd.in/gxePP7e8" target="_blank" rel="noreferrer">
                            <div className='top-card'>
                            <h5>Flutter Developer</h5>
                            <StaticImage src="../images//rightArrow.png"  className="card-icon" alt="icon" placeholder="blurred" />
                            </div>
                            <p>
                            Full Time
                            </p>
                        </a> */}
                    </div>  
                    </div>
                    <div className={'benefits opening'}>
                        <div className='benefits-title'>
                               <h3>
                               Blog
                                </h3>
                        </div>
                        <div className="benefit-text">
                            <p>
                            We are proud to announce that Tech 387 successfully joined the community of the top 7% global software engineering vendors. 
                            With an overall score of 9.6, Tech 387 tops the Pangea ranks for New Product Development after being rated 9.7 by our clients and 9.5 by our team. 
                            From now on, our current and future partners will have a completely transparent overview of our organization.
                            </p>
                            <p>
                            
                            </p>
                        </div>
                    </div>
                    <div className="carier-bot">
                    <div className="carier-cards">
                        <a  href="https://www.linkedin.com/pulse/tech-387-joins-pangea-highest-rated-software-development-vendor-/?published=t" className="carier-card" target="_blank" rel="noreferrer">
                            <div className='top-card'>
                            <h5>Pangea Verification</h5>
                            <StaticImage src="../images//rightArrow.png"  className="card-icon" alt="icon" placeholder="blurred" />
                            </div>                                                  
                            <PangeaLogoDark/>                           
                        </a>
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
}

export default CompanyPage
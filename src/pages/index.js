import * as React from "react"
import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"
import {Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Mousewheel } from 'swiper';


import Layout from "../components/layout"
import Seo from "../components/seo"
import Lottie from "../components/lottie"
import Triangle from "../components/triangle"
import LinkeBlack from "../images/linkedin-black.png"
import Samsung from "../images/samsung-logo.png"
// import Draggable from "../gsap/Draggable3.min.js"
// import gsap from "../gsap/gsap.min.js"
// import Triangle from "../images/triangle.svg"
import "swiper/swiper-bundle.css";
import "../styles/styles-1.css"
import '../styles/styles.css'

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Mousewheel]);
const IndexPage = () => (
     
    
  <Layout>
  <Seo title="Home" />
   <div className="container">
   <Swiper
      
      direction={'vertical'} 
      slidesPerView={1}
      spaceBetween={5} 
      mousewheel={true}
      // scrollbar={{ "hide": true}}
      pagination={{ "clickable": true }} 
      className="mySwiper"
      >
      <SwiperSlide className="box">
      <section className={` slide-1`}>
          <main className="main">
              <div className="main-text">
                  <div className="text">
                  <h1>
                  Design,<br></br> development &<br></br> identity for your<br></br> product
                  </h1>
                  <Link to="/hire-us"><p>Let’s create something together &gt; </p></Link>
                  </div>
                  <div className="lottie"  >
                  <Lottie/>
                  </div>
              </div>
              <div className="main-links">
                  <p>Partners</p>
                  <div className="partners">
                  <div className="img"> <img src={Samsung} alt="samsung"/></div>
                  </div>
                  <div className="linkedin">
                  <a href="https://www.linkedin.com/company/tech-387">
                  <img src={LinkeBlack} alt="linkedin"/> <p>Follow us</p>
                  </a>
                  </div>
              </div>
          </main>
      </section>
      </SwiperSlide>
      <SwiperSlide >
      <section className={` slide-2`}>
          <main className="main">
              <div className="main-text">
                  <div className="text">
                  <h1>
                  Innovating the<br></br> fitness industry
                  </h1>
                  <Link to="/hire-us"><p>Read more about SpartanApps &gt; </p></Link>
                  </div>
                  <div className="lottie"  >
                  <Lottie/>
                  </div>
              </div>
          </main>
      </section>
      </SwiperSlide>
      <SwiperSlide >
      <section className={` slide-3`}>
        <main className="main">
          <div className="main-text">
              <div className="text">
              <h1>
              Efficient electric<br></br> vehicle charging
              </h1>
              <Link to="/hire-us"><p>Read more about 12Charge &gt; </p></Link>
              </div>
              <div className="lottie"  >
              <Lottie/>
              </div>
          </div>
        </main>
      </section>
      </SwiperSlide>
      <SwiperSlide >
      <section className={` slide-4`}>
          <main className="main">
          
          </main>
      </section>
      </SwiperSlide>
      {/* <div className="triangle">
        <img src={TriangleSvg} alt="triangle" />
        <img src={TriangleSvg} alt="triangle" />
        <img src={TriangleSvg} alt="triangle" />
        <img src={TriangleSvg} alt="triangle" />
      </div> */}
    </Swiper>
    
     </div>
    </Layout>
);
export default IndexPage
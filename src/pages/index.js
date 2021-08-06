import * as React from "react"
import {useState, useEffect} from "react"
import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"
import {Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Mousewheel, Keyboard } from 'swiper';

import Layout from "../components/layout"
import Seo from "../components/seo"
import Footer from "../components/footer"
import Lottie from "../components/lottie"
import Spartan from "../images/spartan_dark.png"
import Echarge from "../images/echarge.svg"
import LinkeBlack from "../images/linkedin-black.png"
import Samsung from "../images/samsung-logo.png"
// import Draggable from "../gsap/Draggable3.min.js"
// import gsap from "../gsap/gsap.min.js"
// import Triangle from "../images/triangle.svg"
import "swiper/swiper-bundle.css";
import "../styles/styles-1.css"
import '../styles/styles.css'

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Mousewheel, Keyboard]);
const IndexPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  

  useEffect(() => {
    const body = document.body
    
    if( darkMode === true) {
    
        body.classList.add('dark')
       } else {
          body.classList.remove('dark')
    }
  }, [darkMode],)

  // var menu = ['Slide-1', 'Slide-2', 'Slide-3', 'Slide-4']
  // var mySwiper = new Swiper ('.swiper-container', {
  //   // If we need pagination
  //   pagination: {
  //     el: '.swiper-pagination',
	// 		clickable: true,
  //       renderBullet: function (index, className) {
  //         return '<span class="' + triSvg + '">' + (menu[index]) + '</span>';
  //       },
  //   },
  // })
  
     
  return(
  <Layout >
  <Seo title="Home" />
   <div className="container">
   <Swiper      
      direction={'vertical'} 
      slidesPerView={1}
      spaceBetween={5}
      speed={400} 
      draggable={true}
      keyboard={true}
      mousewheel={{
        "thresholdDelta": 70,
        "forceToAxis": true,
        "releaseOnEdges": true,
      }}

      pagination={{ 
        "clickable": true, 
        "bulletClass": `swiper-pagination-bullet`,
        // "type": `custom`,
        "pagination": `swiper-pagination `,
        "bulletElement": "span",
        renderBullet: function(index, className) {
          return '<span class="' + className + '">' + `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
       <style type="text/css">
         .triSvg{fill:none;stroke:#0C2317;stroke-width:4;stroke-miterlimit:10;}
       </style>
       <polygon class="st0" points="255.97,68.84 38.71,445.15 473.29,445.15 "/>
       </svg>` + "</span>";
        }
      }} 
      className="mySwiper"
      onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() =>  setDarkMode(!darkMode)}
      onSlideChange={(swiper) => swiper.activeIndex === 1||swiper.activeIndex === 3? setDarkMode(true): setDarkMode(false)}
      >
      <div className={`swiper-pagination`}>
        {/* <span className="swiper-pagination-bullet " aria-label="Go to slide 1" tabIndex="" role="button"><SvgTri className={` st0 `} onClick={console.log("eeeeeeeeeee")} /></span>
        <span className="swiper-pagination-bullet " aria-label="Go to slide 2" tabIndex=""><SvgTri className={` st0 `}/></span>
        <span className="swiper-pagination-bullet " aria-label="Go to slide 3" tabIndex=""><SvgTri className={` st0 `}/></span>
        <span className="swiper-pagination-bullet " aria-label="Go to slide 4" tabIndex=""><SvgTri className={` st0 `}/></span> */}
    </div>
      <SwiperSlide
      >

      <section className={` slide-1`}>
          <main className="main">
              <div className="main-text">
                  <div className="text">
                  <h1>
                  Design,<br></br> development <br></br>& identity for your<br></br> product
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
                  <img src={Spartan} alt="spartan-logo"/>
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
              <img src={Echarge} alt="e-charge-logo"/>
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
          <Footer/>
          </main>
      </section>
      </SwiperSlide>
    </Swiper>
    
     </div>
    </Layout>
);}
export default IndexPage
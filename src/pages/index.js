import * as React from "react"
import {useState, useEffect,useRef} from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import {Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Mousewheel, Keyboard} from 'swiper';

import Layout from "../components/layout"
import Seo from "../components/seo"
import Footer from "../components/footer"
// import Lottie from "../components/lottie"
import Spartan from "../images/spartan_dark.png"
import Echarge from "../images/echarge.svg"
import LinkeBlack from "../images/linkedin_light.png"
import PartnersLogo from "../components/partnersLogo"
import PageTransition from 'gatsby-plugin-page-transitions';
import gsap from "gsap";
import "swiper/swiper-bundle.css";
import '../styles/styles.css'

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Mousewheel, Keyboard]);
const IndexPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const headText1 = useRef()
  // const headText2 = useRef()
  // const headText3 = useRef()


  useEffect(() => {
    const body = document.body
    
    if( darkMode === true) {
        body.classList.add('dark')
       } else {
          body.classList.remove('dark')
       }

  }, [darkMode],)


  // useEffect(() => {
  //       gsap.to(
  //         headText1.current,
  //         .8,
  //         {
  //           opacity: 1,
  //           y: 0,
  //           ease : "Power3.easeOut"
  //         }
  //       )
  //   },[])
   
  return(
  
  <Layout  >
    <PageTransition>
    <Seo title="Home" />
    <div className="container">
    <Swiper     
      // modules={[Navigation, Pagination, Scrollbar, A11y, Mousewheel, Keyboard, EffectCreative]} 
      direction={'vertical'} 
      slidesPerView={1}
      spaceBetween={5}
      speed={400} 
      draggable={true}
      keyboard={true}
      grabCursor={true}
      effect={'creative'}
      
      
      mousewheel={{
        "thresholdDelta": 50,
        "lastScrollTime":500,
        "forceToAxis": true,
        "releaseOnEdges": false,
      }}
      pagination={{ 
        "clickable": true, 
        "bulletClass": `swiper-pagination-bullet`,
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
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() =>  setDarkMode(!darkMode)}
      onSlideChange={(swiper) => swiper.activeIndex === 1||swiper.activeIndex === 3? setDarkMode(true): setDarkMode(false) }
      >
      <div className={`swiper-pagination`}></div>
      <SwiperSlide >

      <section className={` slide-1`}>
          <main className="main">
              <div className={`main-text `} ref={headText1}>
                  <div className="text" >
                  <h1>
                  Designing and developing ideas into data-driven digital products
                  </h1>
                  <Link to="/hire-us"><p>Let’s create something together &gt; </p></Link>
                  </div>
                  <div className="lottie">
                  <StaticImage src="../images/main.png"  alt="main" placeholder="tracedSVG"/>
                  {/* <Lottie/> */}
                  </div>
              </div>
              <div className="main-links">
                  <p className="partners-title">Partners</p>
                  <div className="partners">
                    <PartnersLogo/>
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
                  <div className="text" >
                  <img src={Spartan} alt="spartan-logo"/>
                  <h1>
                  Innovating the<br></br> fitness industry
                  </h1>
                  <Link to="/hire-us" onClick={() => setDarkMode(false)}><p>Read more about SpartanApps &gt; </p></Link>
                  </div>
                  <div className="lottie"  >
                  <StaticImage src="../images/spartan.png" className="main-image" alt="spartan" placeholder="tracedSVG"/>
                  {/* <Lottie/> */}
                  </div>
              </div>
          </main>
      </section>
      </SwiperSlide>
      <SwiperSlide >
        
      <section className={` slide-3`}>
        
        <main className="main">
          <div className="main-text">
              <div className="text" >
              <img src={Echarge} alt="e-charge-logo"/>
              <h1>
              Efficient electric<br></br> vehicle charging
              </h1>
              <Link to="/hire-us"><p>Read more about 12Charge &gt; </p></Link>
              </div>
              <div className="lottie"  >
              <StaticImage src="../images/masu.png" className="main-image" alt="masu" placeholder="tracedSVG"/>
              {/* <Lottie/> */}
              </div>
          </div>
        </main>
      </section>
      </SwiperSlide>
      <SwiperSlide >
      <div className={` slide-4`}>
          {/* <main className="main"> */}
      
          <Footer/>
          {/* </main> */}
      </div>
      </SwiperSlide>
    </Swiper>
    
     </div>
     </PageTransition>
    </Layout>
    
);}
export default IndexPage

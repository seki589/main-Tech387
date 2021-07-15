import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import '../styles/styles.css'
import Layout from "../components/layout"
import Seo from "../components/seo"
import Lottie from "../components/lottie"
import Triangle from "../components/triangle"
import LinkeBlack from "../images/linkedin-black.png"
import Samsung from "../images/samsung-logo.png"
// import Triangle from "../images/triangle.svg"


const IndexPage = () => (

    
    <Layout>
    <Seo title="Home" />
    <Triangle/>
    <div className="container">
    
    <section className={` slide-1`}>
      {/* <div className="triangle">
      <img src={Triangle} alt="triangle"/>
      <img src={Triangle} alt="triangle"/>
      <img src={Triangle} alt="triangle"/>
      <img src={Triangle} alt="triangle"/>
      </div> */}
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
    </div>
  </Layout>
  
);
export default IndexPage
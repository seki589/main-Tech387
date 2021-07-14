import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import '../styles/styles.css'
import Layout from "../components/layout"
import Seo from "../components/seo"
import Lottie from "../components/lottie"
import LinkeBlack from "../images/linkedin-black.png"
import Samsung from "../images/samsung-logo.png"


const IndexPage = () => (


    <Layout>
    <Seo title="Home" />
    <div className="container">
    <main className="main">
      <div className="main-text">
        <div className="text">
          <h1>
          Design,<br></br> development & identity for your<br></br> product
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
    </div>
  </Layout>
  
);
export default IndexPage
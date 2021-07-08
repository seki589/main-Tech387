import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import '../styles/styles.css'
import Layout from "../components/layout"
import Seo from "../components/seo"
import Lottie from "../components/lottie"


const IndexPage = () => (


    <Layout>
    <Seo title="Home" />
    <div className="container">
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

        </div>
        <div className="linkedin">
          <h3>Follow us</h3>
        </div>
      </div>
    </main>
    </div>
  </Layout>
  
);
export default IndexPage
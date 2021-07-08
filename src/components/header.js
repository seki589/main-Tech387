import * as React from "react"
import { Link } from "gatsby"

import Logo from "../images/logo_horizontal_light.png"
import '../styles/styles.css'

const Header = () => (
  <header>
    <div className="container">
      <div className="header">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="logo"/>
          </Link>
        </div>
        <div className="navigation">
          <nav>
            <Link to="/work">Work</Link>
            <Link to="/services">Services</Link>
            <Link to="/company">Company</Link>
            <Link to="/hire-us">Hire Us</Link>
          </nav>
        </div>
      </div>
    </div>
    
  </header>
)



export default Header

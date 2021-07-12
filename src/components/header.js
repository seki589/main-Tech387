import React,{useState} from "react"
import { Link } from "gatsby"

import LogoLight from "../images/logo_horizontal_light.png"
import LogoDark from "../images/logo_horizontal_dark.png"
import LinkeWhite from "../images/linkedin-white.png"
import '../styles/styles.css'

const Header = () => {
  const [nav, showNav] = useState(false);
 return(
  <header>
    <div className="container">
      <div className="header">
        <div className="logo">
          <Link to="/">
            <img src={LogoLight} alt="logo"/>
            <img src={LogoDark} alt="logo"/>
          </Link>
        </div>
        <div className="menuIcon">
          <div/>
          <div/>
          <div/>
        </div>
        <div className="navigation">
          <nav>
            <Link to="/work">Work</Link>
            <Link to="/services">Services</Link>
            <Link to="/company">Company</Link>
            <Link to="/hire-us">Hire Us</Link>
          </nav>
          <div className="linkedin">
          <a href="https://www.linkedin.com/company/tech-387">
          <img src={LinkeWhite} alt="linkedin"/> <p>Follow us</p>
          </a>
          </div>
        </div>       
      </div>
    </div>
  </header>
 )
}



export default Header

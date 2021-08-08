import React from "react"
import { Link } from "gatsby"

import { StaticImage } from "gatsby-plugin-image"
import LogoLight from "../images/logo_horizontal_light.png"
import LogoDark from "../images/logo_horizontal_dark.png"
// import LinkLight from "../images/logo_horizontal_light.png"
// import LinkDark from "../images/logo_horizontal_dark.png"
import '../styles/styles.css'

class Header extends React.Component {
  constructor(props) {
    super(props)
}
  
  state = { showMenu: false }

  toggleMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu
    });
  }
  setLight() {
   document.body.classList.remove('dark')
  }
  

 render() {
  const menuActive = this.state.showMenu ? 'is-active' : '';
  return(
    <header>
      <div className="wraper">
        <div className="header">
          <div className="logo">
            <Link to="/">
              <img src={LogoLight} className="logoDark" alt="logo"/>
              <img src={LogoDark} className="logoLight" alt="logo"/>
            </Link>
          </div>
          <div className="menuIcon"
          role="button"
          onClick={this.toggleMenu}>
            <div className={`menuIcon>div ${menuActive}`}/>
            <div className={`menuIcon>div ${menuActive}`}/>
            <div className={`menuIcon>div ${menuActive}`}/>
          </div>
          <div className={`navigation ${menuActive}`} >
            <nav>
              <Link to="/work" onClick={this.toggleMenu,this.setLight} activeClassName="active">Work</Link>
              <Link to="/services" onClick={this.toggleMenu,this.setLight} activeClassName="active">Services</Link>
              <Link to="/company" onClick={this.toggleMenu,this.setLight} activeClassName="active">Company</Link>
              <Link to="/hire-us" onClick={this.toggleMenu,this.setLight}activeClassName="active">Hire Us</Link>
            </nav>
            <div className="linkedin-menu">
            <a href="https://www.linkedin.com/company/tech-387">
            <StaticImage src="../images/linkedin-white.png" className="link-white" alt="linkedin"/>
            <StaticImage src="../images/linkedin-black.png" className="link-black" alt="linkedin"/>
             <p>Follow us</p>
            </a>
            </div>
          </div>       
        </div>
      </div>
    </header>
   )
 }
}



export default Header

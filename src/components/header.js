import React,{useState} from "react"
import { Link } from "gatsby"

import LogoLight from "../images/logo_horizontal_light.png"
import LogoDark from "../images/logo_horizontal_dark.png"
import LinkeWhite from "../images/linkedin-white.png"
import '../styles/styles.css'

class Header extends React.Component {
  
  state = { showMenu: false }

  toggleMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu
    });
  }

 render() {
  const menuActive = this.state.showMenu ? 'is-active' : '';
  return(
    <header>
      <div className="wraper">
        <div className="header">
          <div className="logo">
            <Link to="/">
              <img src={LogoLight} alt="logo"/>
              <img src={LogoDark} alt="logo"/>
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
              <Link to="/work" onClick={this.toggleMenu} activeClassName="active">Work</Link>
              <Link to="/services" onClick={this.toggleMenu} activeClassName="active">Services</Link>
              <Link to="/company" onClick={this.toggleMenu} activeClassName="active">Company</Link>
              <Link to="/hire-us" onClick={this.toggleMenu}activeClassName="active">Hire Us</Link>
            </nav>
            <div className="linkedin-menu">
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
}



export default Header

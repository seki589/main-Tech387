import React from "react"
import { Link } from "gatsby"

import { StaticImage } from "gatsby-plugin-image"
import LogoLight from "../images/Logo - horizontal - Light.svg"
import LogoDark from "../images/Logo - horizontal - Dark.svg"
import '../styles/styles.css'

class Header extends React.Component {

  
  state = { showMenu: false }

  toggleMenu = () => {
    
    this.setState({
      
      showMenu: !this.state.showMenu
    });
  }
  setLight = async () => {
   document.body.classList.remove('dark')
  }
  closeMenu = () => {

       setTimeout(() => {
        this.toggleMenu();
       },400)
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
          aria-hidden="true"
          onClick={this.toggleMenu}>
            <div className={`menuIcon>div ${menuActive}`}/>
            <div className={`menuIcon>div ${menuActive}`}/>
            <div className={`menuIcon>div ${menuActive}`}/>
          </div>
          <div className={`navigation ${menuActive}`} >
            <nav>
              <Link to="/work" onClick={this.toggleMenu,this.setLight} activeClassName="active" partiallyActive={true}>Work</Link>
              <Link to="/services" onClick={this.toggleMenu, this.setLight} activeClassName="active" partiallyActive={true}>Services</Link>
              <Link to="/company" onClick={this.toggleMenu, this.setLight} activeClassName="active" partiallyActive={true}>Company</Link>
              <Link to="/hire-us" onClick={this.toggleMenu, this.setLight} activeClassName="active" partiallyActive={true}>Hire Us</Link>
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

import React from "react"
import { Link } from "gatsby"

import { StaticImage } from "gatsby-plugin-image"
// import LogoLight from "../images/Logo - horizontal - Light.svg"
import LogoLight from "../assets/LogoHorizontalLight.svg"
// import LogoDark from "../images/Logo - horizontal - Dark.svg"
import LogoDark from "../assets/LogoHorizontalDark.svg"
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
  console.log(LogoDark)
  const menuActive = this.state.showMenu ? 'is-active' : '';
  return(
    <header>
      <div className="wraper">
        <div className="header">
          <div >
            <Link className="logo" to="/">
              {/* <img src={LogoLight} className="logoDark" alt="logo"/> */}
              <LogoLight className="logoDark"/>
              {/* <img src={LogoDark} className="logoLight" alt="logo"/> */}
              <LogoDark className="logoLight"/>
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
              <Link to="/hire-us" onClick={this.toggleMenu, this.setLight} activeClassName="active" partiallyActive={true}>Work With Us</Link>
            </nav>
            <div className="linkedin-menu">
            <a href="https://www.linkedin.com/company/tech-387">
            <StaticImage src="../images/linkedin.png" className="link-white" alt="linkedin"/>
            <StaticImage src="../images/linkedin_light.png" className="link-black" alt="linkedin"/>
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

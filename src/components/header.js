import React from "react"
import { Link } from "gatsby"

import { StaticImage } from "gatsby-plugin-image"
import LogoLight from "../assets/LogoHorizontalLight.svg"
import LogoDark from "../assets/LogoHorizontalDark.svg"
import menuData from "../data/menu.json"
import '../styles/styles.css'

class Header extends React.Component {
  
  state = { showMenu: false }

  toggleMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu
    });
  }
  setLight = () => {
   document.body.classList.remove('dark')
  }
  
  
  

 render() {

  const menuActive = this.state.showMenu ? 'is-active' : '';
  return(
    <header>
      <div className="wraper">
        <div className="header">
          <div >
            <Link className="logo" to="/">
              <LogoLight className="logoDark"/>
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
            {menuData.map((li, id )=> (
                <Link to={li.link} key={id} onClick={() => {this.toggleMenu(); this.setLight();}} activeClassName="active" partiallyActive={true}>{li.name}</Link>
            )
            )}
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

import React from "react"
import { Link } from "gatsby"

import { StaticImage } from "gatsby-plugin-image"
import LogoLight from "../assets/LogoHorizontalLight.svg"
import LogoDark from "../assets/LogoHorizontalDark.svg"
import Menu from "../data/menu.json"
import '../styles/styles.css'

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      show: true,
      scrollPos: -1,
      showMenu: false
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  handleScroll = () => {
    // console.log(document.body.getBoundingClientRect());
    this.setState({
      scrollPos: document.body.getBoundingClientRect().top,
      show: document.body.getBoundingClientRect().top > this.state.scrollPos
    });
  };
  
  // state = { showMenu: false }

  toggleMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu,
    });
  }
  // componentDidMount() {    
  //   if(this.state.showMenu){
  //     document.body.style.overflowY = 'hidden';
  //   }    
  // }
  
  // componentWillUnmount() {
  //     document.body.style.overflowY = 'unset' ;
  // }
  
  
  
  setLight = () => {
    document.body.classList.remove('dark')
   }
 render() {
  // console.log(this.state);
  const menuActive = this.state.showMenu ? 'is-active' : '';
  return(
    <header >
      <div className="wraper">
        <div className={`header  ${!this.state.showMenu&&!this.state.show ? "hidden-nav" : ""}`}>
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
            {Menu.map((li, id )=> (
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

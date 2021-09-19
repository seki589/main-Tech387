import React from "react"
import { Link } from "gatsby"

import { motion} from "framer-motion"
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

  toggleMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu,
    });
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
    // console.log(this.state.scrollPos);
    // console.log(this.state.show)
  };
  


  setLight = () => {
    document.body.classList.remove('dark')
   }
  

  
  
 render() {
   const boxVariant = {
       hidden : {
         opacity : 1,
       },
       visible : {
         opacity :[0.5,1],
         transition : {
           duration: 0,
           staggerChildren: 0.2,
           when: "beforeChildren"
         },
         exit : {
          opacity : 1,
         }
       }
   }
   const listVariant = {
       hidden : {
         opacity : 1,
         x: 0,
       },
       visible : {
         opacity :[0,0.5,1],
         x : [60,30,0],
         transition : {        
           duration : 0.2,
           ease: 'linear',
         }
       },
       exit : {
        opacity : 1,
        x: 0,
       }
   }
   
  const menuActive = this.state.showMenu ? 'is-active' : '';
  return(
    <header>
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
            <motion.nav
            variants={boxVariant}
            initial ={this.state.showMenu?"hidden" : ""}
            animate = {this.state.showMenu? "visible" : ""}
            exit ={!this.state.showMenu?"hidden" : ""}
            >
            {Menu.map((li, id )=> {
                return  <motion.li
                         key={id}
                         variants={listVariant}
                         >
                         <Link
                        to={li.link} 
                        key={id}
                        onClick={() => {this.toggleMenu(); this.setLight();}} 
                        activeClassName="active" 
                        partiallyActive={true}
                        >{li.name}
                        </Link>
                       </motion.li>
                      }
            )}
            </motion.nav>
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

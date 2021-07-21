import * as React from "react"
import { Helmet } from "react-helmet"
import { withPrefix} from "gatsby"
import { useEffect } from "react"
import gsap from "gsap"
import Draggable from "gsap/Draggable"

import Seo from "../components/seo"
// import '../styles/stylesWork.css'

gsap.registerPlugin(Draggable);
const TestPage = () => {
  
    // useScript(withPrefix('script.js' ));
    // useScript(withPrefix('/gsap.min.js'));
    // useScript(withPrefix('/Draggable3.min.js'));
    // useScript(withPrefix('/InertiaPlugin.min.js'));

    
        // const myScrypt1 = require('../../public/static/gsap.min.js')
        // const myScrypt2 = require('../../public/static/Draggable3.min.js')
        // const myScrypt3 = require('../../public/static/InertiaPlugin.min.js')
        // const useScript = require('../../public/static/script.js')
         

       

        
          

     return(

   
        <div className="hideMe">
        {/* <Helmet>        
        <script src={withPrefix('/script.js')} type="text/babel"></script> 
        <script src={withPrefix('/gsap.min.js')} type="text/jsx"></script>
        <script src={withPrefix('/Draggable3.min.js')} type="text/jsx"></script>
        <script src={withPrefix('/InertiaPlugin.min.js')} type="text/jsx"/> 
       </Helmet> */}
        <Seo title="Work" />
            <div className="masterWrap">
              <div className="panelWrap">
                <section>
                
			        <p>This slider demo is powered by GSAP along with the Draggable and Inertia plugins.</p>
                </section>
                <section>
                <h3>Side Dot Animation</h3>
			         <p>See that animation on the right with the navigation dots? Its time is based on the position of the draggable element. Keep an eye on it as you drag the slides.</p>
                </section>
                <section>
                <h3>Random dog </h3>
			       <p>Why? Because dogs are cool.</p>
                </section>
                <section>
                <h3>Handy for many things</h3>
			       <p>We all need a full-screen slider from time to time.</p>
                </section>
                <section>
                <h3>Like this demo?</h3>
			<p>Follow me on Twitter.</p>
                </section>
                <section>
                <h3>Controls</h3>
			<p>You can control the slider in 4 ways.</p>
                </section>
              </div>
            </div>
            <div className="dots">
	</div>
	<div className="toolTips">
		<div className="toolTip">
			Slider Control
		</div>
		<div className="toolTip">
			Powered by GSAP
		</div>
		<div className="toolTip">
			Side animation
		</div>
		<div className="toolTip">
			Random dog
		</div>
		<div className="toolTip">
			Sliders are useful
		</div>
		<div className="toolTip">
			Desing
		</div>
	</div>
        </div>
 )
}
export default TestPage
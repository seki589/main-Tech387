import * as React from "react"
import { Helmet } from "react-helmet"
import { withPrefix} from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
// import '../styles/stylesWork.css'



const WorkPage = () => (
    <Layout>
        {/* <Helmet>
        <script src={withPrefix('./script.js')} type="text/jsx"></script>
        <script src={withPrefix('./gsap.min.js')} type="text/jsx"></script>
        <script src={withPrefix('./Draggable3.min.js')} type="text/jsx"></script>
        <script src={withPrefix('./InertiaPlugin.min.js')} type="text/jsx"></script>      
       </Helmet> */}
        <Seo title="Work" />
        <div className="hideMe">
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
    </Layout>
)


export default WorkPage
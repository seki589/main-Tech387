import * as React from "react"

import TriangleSvg from "../images/triangle.svg"
import '../styles/styles.css'
import DarkModeToggle from "./dark-mode-toggle"

const Triangle = () => (

    <div className="wraper">
        <div className="triangle">
          <img src={TriangleSvg} alt="triangle"  />
          <img src={TriangleSvg} alt="triangle"/>
          <img src={TriangleSvg} alt="triangle"/>
          <img src={TriangleSvg} alt="triangle"/>
          </div>
    </div>
)


export default Triangle


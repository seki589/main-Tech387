import * as React from "react"
import {useState, useEffect} from "react"

import Layout from "../components/layout"

const HireUsPage = () => {
    const [darkMode, setDarkMode] = useState(false);
  
  
  useEffect((darkMode) => {
    const body = document.body
    
    if( darkMode === false) {
    
          body.classList.remove('dark')
    }
  }, [darkMode],)
     return   (
            <Layout>
            <div></div>
            </Layout>
        )
}
export default HireUsPage
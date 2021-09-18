/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useRef, useEffect,useState } from "react"
import useDimension from "../hooks/useDimension";
import {isBrowser} from "./utils"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import { render } from "react-dom";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const divRef = useRef(null);
  // const { height } = useDimension(divRef);
  // useEffect(() => {
  //   function resize() {

  //     let vh = height * 0.01;
  //     document.documentElement.style.setProperty('--vh', `${vh}px`);
  //   }

  //   window.addEventListener('load', resize);
  //   window.addEventListener('resize', resize);
    
  // },[height]);


     useEffect(() => {

      function resize() {

          let vh = window.innerHeight * 0.01;
          document.documentElement.style.setProperty('--vh', `${vh}px`);
          console.log("reeeeerender");
        };
        setTimeout(() => {
          resize();
        }, 3000);
      
      window.addEventListener('resize', resize);

    
      },[]);



  
  
  
  
  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
      ref={divRef}
        style={{
          margin: `0 auto`,
        
        }}
      >
        <main >{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

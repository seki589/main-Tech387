/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useRef, useEffect } from "react"
import useDimension from "../hooks/useDimension";
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

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
  const { height } = useDimension(divRef);
  // useEffect(() => {
  //   function resize() {

  //     let vh = height * 0.01;
  //     document.documentElement.style.setProperty('--vh', `${vh}px`);
  //   }

  //   window.addEventListener('load', resize);
  //   window.addEventListener('resize', resize);
    
  // },[height]);
  useEffect(() => {
    window.addEventListener('resize', () => {
      // We execute the same script as before
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
  },[window.innerHeight])

  console.log(window.innerHeight);

  
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

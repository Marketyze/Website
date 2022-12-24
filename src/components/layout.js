/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import "./layout.css"
import Navbar from "./Navbar/navBarIndex"
import Footer from "./Footer/footerElements"

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

  return (
    <>
      <Navbar />
        <main>{children}</main>
      <Footer/>
    </>
  )
}

export default Layout


//metadata stuff? SEO? 
/**
 * 
 * <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
 */
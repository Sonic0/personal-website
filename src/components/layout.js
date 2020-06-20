/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import MainFooter from "./footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          shortName
        }
      }
    }
  `)

  return (
    <>
      {/* Wrapper for sticky footer */}
      <div className="site">
        <Header nickName={data.site.siteMetadata.shortName} />
        <main className="site-content">{children}</main>
        <MainFooter />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

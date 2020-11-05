import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import About from "../components/about";

const IndexPage = ({ data }) => {
  const page = data.site.siteMetadata
  const files = data.file
  return (
    <Layout>
      <SEO labg="en" title="Home" />
      <About
        shortName={page.shortName}
        authorName={page.authorName}
        author={page.author}
        authorDescription={page.authorDescription}
        avatar={files.childImageSharp.fluid}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  site: PropTypes.shape({
    siteMetadata: PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  }),
}
export default IndexPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        shortName
        description
        author
        authorName
        authorDescription
      }
    }
    file(relativePath: { eq: "avatar.png" }) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

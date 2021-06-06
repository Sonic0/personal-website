import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { SEO as seo } from "../components/seo";
import About from "../components/about";

const IndexPage = ({ data }) => {
  const page = data.site.siteMetadata
  const files = data.file
  return (
    <Layout>
      <seo lang="en" title="Home" />
      <About
        shortName={page.shortName}
        authorName={page.authorName}
        author={page.author}
        authorDescription={page.authorDescription}
        avatar={files.childImageSharp.gatsbyImageData}
        userLinks={page.userLinks}
      />
    </Layout>
  );
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

export const query = graphql`{
  site {
    siteMetadata {
      title
      shortName
      description
      author
      authorName
      authorDescription
      userLinks {
        label
        url
        iconClassName
      }
    }
  }
  file(relativePath: {eq: "avatar.png"}) {
    childImageSharp {
      gatsbyImageData(width: 500, quality: 100, layout: CONSTRAINED)
    }
  }
}
`

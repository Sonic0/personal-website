import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import NickName from "../components/nickname";
import Img from "gatsby-image";

const IndexPage = ({ data }) => {
  const page = data.site.siteMetadata;
  return (
    <Layout>
      <SEO title="Home" />
      {/* <Hero siteTitle={page.title} description={page.description} /> */}
      <section class="personalized-main">
        {/* Intro section  */}
        <div class="box-flex">
          <div
            style={{
              width: "35vh",
              borderStyle: "dotted",
              borderWidth: "5px",
              borderRadius: "50%",
              padding: "15px",
              marginTop: "10px",
            }}
          >
            <Img
              style={{ borderRadius: "40%" }}
              fluid={data.file.childImageSharp.fluid}
              alt="Lezzo..."
            />
          </div>

          <div
            class="is-size-2 is-size-4-mobile has-text-centered"
            style={{ marginTop: "20px" }}
          >
            <NickName
              nickName={page.title}
              authorName={page.authorName}
              author={page.author}
            />
          </div>

          <div class="is-size-3 is-size-6-mobile has-text-centered">
            <span>
              Software developer, network and system administrator, electronics
              and telecommunications technician
            </span>
          </div>

          <div style={{ marginTop: "30px", width: "50vh" }}>
            {/* List of social icons flex */}
            <ul class="icons-box is-size-7-mobile">
              <li>
                <span class="icon">
                  <a
                    href="https://github.com/Sonic0"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fab fa-4x fa-github"></i>
                  </a>
                </span>
              </li>
              <li>
                <span class="icon">
                  <a
                    href="https://twitter.com/IU6FZL"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fab fa-4x fa-twitter"></i>
                  </a>
                </span>
              </li>
              <li>
                <span class="icon">
                  <a
                    href="https://www.linkedin.com/in/andrea-salvatori-432929166/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="fab fa-4x fa-linkedin-in"></i>
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>
        {/* Features section begins */}
      </section>
    </Layout>
  );
};

IndexPage.propTypes = {
  site: PropTypes.shape({
    siteMetadata: PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  }),
};
export default IndexPage;

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
        authorName
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
`;

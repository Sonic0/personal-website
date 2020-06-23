import React, { Component } from "react"
import Img from "gatsby-image"
import NickName from "../components/nickname"
import SocialLinks from "../components/socialLinks"

export default class About extends Component {
  render() {
    return (
      // <Hero siteTitle={page.title} description={page.description} />
      <section class="about">
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
            {/* The avatar image using gatsby image plugin*/}
            <Img
              style={{ borderRadius: "40%" }}
              fluid={this.props.avatar}
              alt="Sonic0 unicorn avatar"
            />
          </div>

          <div
            class="is-size-2 is-size-4-mobile has-text-centered"
            style={{ marginTop: "20px" }}
          >
            <NickName
              nickName={this.props.shortName}
              authorName={this.props.authorName}
              author={this.props.author}
            />
          </div>

          <div class="is-size-3 is-size-6-mobile has-text-centered">
            <span>
              {this.props.authorDescription}
            </span>
          </div>
          
          {/* List of social icons flex */}
          <div
            class="is-size-7-mobile"
            style={{ marginTop: "30px", width: "50vh" }}
          >
            <SocialLinks />
          </div>

        </div>
        {/* Features section begins */}
      </section>
    )
  }
}

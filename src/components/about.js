import React, { Component } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import NickName from "../components/nickname";
import SocialLinks from "../components/socialLinks";

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
            <GatsbyImage
              image={this.props.avatar}
              style={{ borderRadius: "40%" }}
              alt="Sonic0 unicorn avatar" />
          </div>

          <div
            class="is-size-2 is-size-5-touch has-text-centered mt-5"
          >
            <NickName
              nickName={this.props.shortName}
              authorName={this.props.authorName}
              author={this.props.author}
            />
          </div>

          <div class="is-size-3 is-size-5-touch has-text-centered">
            <span>
              {this.props.authorDescription}
            </span>
          </div>
          
          {/* List of social icons flex */}
          <div>
              <SocialLinks userLinks={this.props.userLinks} />
          </div>

        </div>
        {/* Features section begins */}
      </section>
    );
  }
}

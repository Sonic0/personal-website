import React, { Component } from "react"

export default class MainFooter extends Component {
  render() {
    return (
      <footer class="personalized-footer is-size-7-touch has-background-primary">
        {/* Made by */}
        <div class="content mt-5 has-text-centered">
          <p>
            Made with{" "}
            <span class="icon has-text-danger">
              <i class="fa fa-heart"></i>
            </span>{" "}
            by Me <span> (づ￣ ³￣)づ━☆ﾟ.*･｡ﾟ</span>
          </p>
          {/* Built with... / thanks to... */}
          <p>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a
              href="https://www.gatsbyjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gatsby
            </a>
            ,{" "}
            <a
              href="https://bulma.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bulma
            </a>{" "}
            and{" "}
            <a
              href="https://fontawesome.com"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
            Fontawesome. Video music by{" "}
            <a
              href="https://soundcloud.com/argofox/from-the-dust-interstellar-rush"
              target="_blank"
              rel="noopener noreferrer"
            >
              Argofox
            </a>
          </p>
        </div>
      </footer>
    )
  }
}

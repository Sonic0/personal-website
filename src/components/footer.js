import React, { Component } from "react"

export default class MainFooter extends Component {
  render() {
    return (
      <footer class="personalized-footer is-size-7-touch has-background-primary">
        <div class="content mt-5 has-text-centered">
          {/* Made by... */}
          <p>
            Made with{" "}
            <span><b>(づ￣ ³￣)づ━☆ﾟ.*･｡ﾟ</b></span>
            {" "}by Me 
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
            >Fontawesome</a>.
            Video by{" "}
            <a
              href="https://www.youtube.com/c/Sotaa"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sota
            </a>
          </p>
        </div>
      </footer>
    )
  }
}

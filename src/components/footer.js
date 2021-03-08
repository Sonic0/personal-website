import React, { Component } from "react"

export default class MainFooter extends Component {
  render() {
    return (
      <footer class="personalized-footer is-size-7-touch has-background-primary">
        <div class="content mt-5 has-text-centered">
          {/* Built with... / thanks to... */}
          <p>
            © {new Date().getFullYear()}{` `}Andrea Salvatori -
            {` `}<span><b>(づ￣ ³￣)づ━☆ﾟ.*･｡ﾟ</b></span>{` `} 
            <a
              href="https://github.com/Sonic0/personal-website"
              target="_blank"
              rel="noopener noreferrer"
            >
              Source Code
            </a>
            {` - `}Thanks AMV creators
          </p>
        </div>
      </footer>
    )
  }
}

import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <header class="head-video-wrapper">
        <iframe
          src="https://youtube.com/embed/qY7rpWA-D4w?autoplay=1&loop=1&rel=0&modestbranding=1&autohide=1&showinfo=0&controls=0&playlist=qY7rpWA-D4w"
          title="Background video"
          frameBorder="0"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          allowFullScreen
          allow="autoplay"
        ></iframe>

        <div class="header-container">
          <div class="top-texts has-text-centered mt-3">
            <span class="is-size-5 has-text-weight-bold has-text-heliotrope">
              {this.props.nickName}
            </span>
          </div>

          {/* <div class="middle-texts">
            <div class="has-text-centered">
              <span class="is-size-4-touch is-size-3-desktop is-uppercase has-text-white">
                In open source, we feel strongly that to really do something well, you have to get a lot of people involved.
              </span>{" "} <cite class="has-text-white">Linus Torvalds</cite>
            </div>
          </div> */}

          <span class="bottom-texts icon mb-3 has-text-heliotrope scroll-down">
            <i class="fas fa-2x fa-chevron-down"></i>
          </span>
        </div>
      </header>
    )
  }
}

import React, { Component } from "react"
import Img from "gatsby-image"


export default class Avatar extends Component {
  render() {
    return (
      <figure class="image is-128x128">
        <img
          src="https://bulma.io/images/placeholders/128x128.png"
          alt="Avatar"
        ></img>
      </figure>
    )
  }
}

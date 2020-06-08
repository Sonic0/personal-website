import React, { Component } from "react"

export default class NickName extends Component {
  render() {
    return (
      <span>
        <strong>{this.props.authorName}</strong>{" "}
        <span class="is-italic">{this.props.author}</span> aka{" "}
        <strong>{this.props.nickName}</strong>
      </span>
    )
  }
}

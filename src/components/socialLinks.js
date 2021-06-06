import React, { Component } from "react";

export default class SocialLinks extends Component {
  render() {
    let socialLinks = this.props.userLinks.map((element) => 
      <li class="px-5 my-4" key={element.label}>
        <span class="is-size-7-touch">
          <a
            href={element.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class={element.iconClassName} aria-hidden="true"></i>
          </a> 
        </span>
      </li>
    )

    return (
      <ul class="is-inline-flex">{socialLinks}</ul>
    )
  }
}

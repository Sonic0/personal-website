import React, { Component } from "react";
import { config } from '../../data/siteConfig';

export default class SocialLinks extends Component {
  render() {
    return (
      <ul class="icons-box">
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
    )
  }
}

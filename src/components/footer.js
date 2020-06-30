import React from "react";

const MainFooter = () => {
  return (
    <footer class="personalized-footer is-size-7-touch has-background-primary">
      {/* Made by */}
      <div class="content has-text-centered">
        <p>
          Made with{" "}
          <span class="icon has-text-danger">
            <i class="fa fa-heart"></i>
          </span>{" "}
          by Me{" "}
          <span> (づ￣ ³￣)づ━☆ﾟ.*･｡ﾟ</span>
        </p>
      </div>
      {/* Built with Gatsby, Bulma, and Fontawesome */}
      <div class="content has-text-centered">
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
          <a href="https://bulma.io" target="_blank" rel="noopener noreferrer">
            Bulma
          </a>{" "}
          and{" "}
          <a
            href="https://fontawesome.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fontawesome
          </a>
        </p>
      </div>
    </footer>
  );
};

export default MainFooter;

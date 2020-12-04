import React from "react";

// import Layout from "../components/layout";
import SEO from "../components/seo";

const NotFoundPage = () => (
  <div>
    <SEO title="404: Not found" />
    <section class="section has-text-centered">
      <div class="container">
        <p>
        <span class="has-text-mauve is-size-1">4</span>
        <span class="has-text-primary is-size-1">0</span>
        <span class="has-text-heliotrope is-size-1">4</span> {" "}
        <span class="is-size-1"> page not found </span>{" "}
        </p>
        <p>
        <br></br>
        <span class="has-text-heliotrope is-size-1">(╯°□°）╯︵ ┻━┻</span>
        </p>
      </div>
    </section>
  </div>
)

export default NotFoundPage

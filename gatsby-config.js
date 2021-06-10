const urljoin = require("url-join");
const config = require("./data/siteConfig");

module.exports = {
  siteMetadata: {
    title: config.siteTitle,
    shortName: config.siteTitleShort,
    description: config.siteDescription,
    author: config.author,
    authorName: config.authorName,
    authorDescription: config.userDescription,
    siteUrl: urljoin(config.siteUrl, config.pathPrefix),
    userLinks: config.userLinks
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.siteTitle,
        short_name: config.shortName,
        description: config.siteDescription,
        start_url: config.pathPrefix,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: `minimal-ui`,
        icon: config.userAvatar, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-cookiehub-banner`,
      options: {
          cookieHubId: config.cookieHubID,
          // Optional parameter (default false) - Use new v2 API.
          cookieHubV2Api: true,
          // Categories configured with CookieHub
          categories: [
            { 
                categoryName: 'analytics', // CookieHub Unique ID
                cookieName: 'gatsby-plugin-google-analytics-gdpr_cookies-enabled'
            }
          ]
      }
    }
  ],
  flags: {
    DEV_SSR: true,
    PRESERVE_WEBPACK_CACHE: false,
    PRESERVE_FILE_DOWNLOAD_CACHE: false,
    PARALLEL_SOURCING: true
  }
}

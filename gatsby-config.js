module.exports = {
  siteMetadata: {
    title: `Sonic0`,
    description: `My personal site`,
    author: `@IU6FZL`,
    authorName: `Andrea Salvatori`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Andrea Salvatori's site`,
        short_name: `Andrea Salvatori`,
        description: `The personal site of a very cute developer called Andrea Salvatori (｡◕‿◕｡)`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#A449FF`,
        display: `minimal-ui`,
        icon: `src/images/avatar.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}

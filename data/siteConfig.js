const config = {
  author: "@IU6FZL",
  authorName: "Andrea Salvatori",
  siteTitle: "Andrea Salvatori - Sonic0", // Site title.
  siteTitleShort: "Sonic0", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Sonic0", // Alternative site title for SEO.
  // siteLogo: "/images/avatar.png", // Logo used for SEO and manifest.
  siteUrl: "https://andreasalvatori.info", // Domain of your website without pathPrefix.
  pathPrefix: "", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription:
    "The personal site of a very cute developer called Andrea Salvatori ᕕ( ᐛ )ᕗ", // Website description used for meta description tag.
  // siteFBAppID: "", // FB Application ID for using app insights
  cookieHubID: "ee2f58f9", // CookieHub ID
  googleAnalyticsID: "UA-37839374-4", // GA tracking ID.
  userTwitter: "IU6FZL", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Italy", // User location to display in the author segment.
  userAvatar: "src/images/avatar.png", // User avatar to display in the author segment.
  userDescription: 
    "Software developer, Linux and Open Source enthusiast, Radio-ham ", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [  // useful for some social plugins
    {
      label: "Twitter",
      url: "https://twitter.com/IU6FZL",
      iconClassName: "fa fa-twitter",
      icon: "/icons/twitter.svg"
    },
    {
      label: "Linkedin",
      url: "https://aaa.xx",
      iconClassName: "fa fa-linkedin",
      icon: "/icons/linkedin.svg"
    },
  ],
  themeColor: "#A449FF", // Used for setting manifest and progress theme colors.
  backgroundColor: "#fff", // Used for setting manifest background color.
}

// --- Validate ---

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = ""
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1)

module.exports = config

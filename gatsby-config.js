module.exports = {
  siteMetadata: {
    title: `Appbox sample site`,
    description: `This site has been powered by AppBox. `,
    author: `@gatsbyjs`,
    color: `#f57832`,
    menus: {
      main: [
        { label: "About me", to: "/about-me" },
        { label: "Contact me", to: "/contact-me" },
      ],
    },
  },
  plugins: [
    {
      resolve: "gatsby-source-custom-api",
      options: {
        url: "https://appbox.vicvan.co/api/publish-sample1-blog/read",
        rootKey: "posts",
      },
    },
    {
      resolve: "gatsby-source-custom-api",
      options: {
        url: "https://appbox.vicvan.co/api/publish-sample1-pages/read",
        rootKey: "pages",
      },
    },
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

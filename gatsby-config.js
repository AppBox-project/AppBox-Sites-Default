module.exports = {
  siteMetadata: {
    title: `Appbox Sample Site`,
    description: `This site has been powered by AppBox. `,
    author: `@AppBox`,
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
        url: "https://appbox.vicvancooten.nl/api/publish-sample1-blog/read",
        rootKey: "posts",
      },
    },
    {
      resolve: "gatsby-source-custom-api",
      options: {
        url: "https://appbox.vicvancooten.nl/api/publish-sample1-pages/read",
        rootKey: "pages",
        schemas: {
          pages: `
        _id: String
        data: data
        objectId: String
        `,
          data: `name: String
        name: String
        slug: String
        title: String
        image: image`,
          image: `
          url: String
          `,
        },
      },
    },
    `gatsby-plugin-react-helmet`,
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

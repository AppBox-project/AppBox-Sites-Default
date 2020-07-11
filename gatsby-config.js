const map = require("lodash/map")

// Require information from site
const siteData = require("./siteData.json")

// Create a map of required objects.
const srces = []
map(siteData.objects, (value, key) => {
  // First create schema based on model
  let schema = ``
  const imageKeys = []
  map(value, (value, key) => {
    if (value.type === "picture") {
      imageKeys.push(key)
      schema += `
${key}: image`
    } else {
      schema += `
${key}: String`
    }
  })

  // Then push schema to the config
  srces.push({
    resolve: "gatsby-source-custom-api",
    options: {
      url: `${siteData.baseUrl}/api/${key}/read?baseUrl=http://localhost:8600`,
      rootKey: key.replace("-", ""),
      schemas: {
        [key.replace("-", "")]: `
          _id: String
          data: data
          objectId: String
      `,
        data: schema,
        image: `
          url: String
        `,
      },
      imageKeys,
    },
  })
})

// Export configuration
module.exports = {
  siteMetadata: {
    author: `@AppBox`,
    site: siteData.data,
    menus: siteData.menus,
  },
  plugins: [
    ...srces,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
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

const path = require("path")
const siteData = require("./siteData.json")
const map = require("lodash/map")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  let gql = `{
    allPublisherpages {
      nodes {
        data {
          title
          slug
          body
        }
      }
    }
  `

  map(siteData.objects, (value, key) => {
    let newKey = key.replace("-", "")
    newKey = newKey.charAt(0).toUpperCase() + newKey.slice(1)
    gql += `all${newKey} {
      nodes {
        data {
          title
          slug
          content
          id
        }
      }
    }`
  })
  gql += "}"
  const result = await graphql(gql)
  return Promise.all(
    // Pages
    result.data.allPublisherpages.nodes.map(async node => {
      console.log(`Making page ${node.data.slug}`)
      await createPage({
        path: node.data.slug,
        component: path.resolve("./src/pages/page.js"),
        context: {
          url: node.data.slug,
        },
      })
    }),
    map(siteData.objects, (value, key) => {
      if (key !== "publisher-pages") {
        let newKey = key.replace("-", "")
        newKey = newKey.charAt(0).toUpperCase() + newKey.slice(1)

        result.data[`all${newKey}`].nodes.map(async node => {
          console.log(`Making ${key} ${node.data.slug}`)
          await createPage({
            path: `${key}/${node.data.slug}`,
            component: path.resolve("./src/pages/data_item.js"),
            context: {
              url: node.data.slug,
              key: key.replace("-", ""),
              id: node.data.id,
            },
          })
        })
      }
    })
  )
}

const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`{
    allPublisherpages {
      nodes {
        data {
          title
          slug
          body
        }
      }
    }
  }  
  `)
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
  )
}
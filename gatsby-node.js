const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allPosts {
        nodes {
          data {
            slug
          }
        }
      }
    }
  `)
  return Promise.all(
    result.data.allPosts.nodes.map(async node => {
      console.log(node.data)
      await createPage({
        path: node.data.slug,
        component: path.resolve("./src/pages/post.js"),
        context: {
          url: node.data.slug,
        },
      })
    })
  )
}

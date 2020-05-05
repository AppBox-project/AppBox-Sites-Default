const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allPages {
        nodes {
          data {
            slug
          }
        }
      }
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
    // Pages
    result.data.allPages.nodes.map(async node => {
      console.log(`Making page ${node.data.slug}`)
      await createPage({
        path: node.data.slug,
        component: path.resolve("./src/pages/page.js"),
        context: {
          url: node.data.slug,
        },
      })
    }),

    // Posts
    result.data.allPosts.nodes.map(async node => {
      console.log(`Making post ${node.data.slug}`)
      await createPage({
        path: `posts/${node.data.slug}`,
        component: path.resolve("./src/pages/post.js"),
        context: {
          url: node.data.slug,
        },
      })
    })
  )
}

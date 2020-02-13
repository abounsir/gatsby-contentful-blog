const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const result = await graphql(
    `
    {
      posts: allContentfulPost {
        edges {
          node{
            slug
          }
        }
      }
    }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  result.data.posts.edges.forEach((post, index) => {

    createPage({
      path: post.node.slug,
      component: blogPost,
      context: {
        slug: post.node.slug,
      },
    })
  })
}


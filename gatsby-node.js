const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage, createRedirect } = actions

  const blogPostTemplate = path.resolve(`./src/templates/BlogPost.tsx`)
  const markdownPageTemplate = path.resolve(`./src/templates/MarkdownPage.tsx`)

  const markdownFilesResult = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  )

  if (markdownFilesResult.errors) {
    reporter.panicOnBuild(`Error while running markdown GraphQL query.`)
    return
  }

  const markdownFileEdges = markdownFilesResult.data.allMarkdownRemark.edges

  const isBlogPost = edge => edge.node.fields.slug.startsWith('/blog')

  // Create blog posts pages.
  const posts = markdownFileEdges.filter(edge => isBlogPost(edge))

  posts.forEach((post, index) => {
    const { slug } = post.node.fields

    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: slug,
      component: blogPostTemplate,
      context: {
        slug,
        previous,
        next,
      },
    })

    // Before all blog posts were prefixed /blog
    createRedirect({
      fromPath: slug.replace('/blog', ''),
      isPermanent: true,
      redirectInBrowser: true,
      toPath: slug,
    })
  })

  // Create markdown pages
  const markdownPages = markdownFileEdges.filter(edge => !isBlogPost(edge))

  markdownPages.forEach(page => {
    const { slug } = page.node.fields
    createPage({
      path: slug,
      component: markdownPageTemplate,
      context: {
        slug,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

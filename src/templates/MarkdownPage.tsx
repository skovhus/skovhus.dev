import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/Seo'

import { MarkdownPageBySlugQuery } from '../__generated__/gatsby-types'

type Props = {
  data: MarkdownPageBySlugQuery
  location: Location
}

export default function MarkdownPageTemplate({ data, location }: Props) {
  const post = data.markdownRemark

  if (!post || !post.html || !post.frontmatter || !post.frontmatter.title) {
    throw new Error('post or frontmatter is missing')
  }
  const { title } = post.frontmatter

  return (
    <Layout location={location} showHeaderIntro>
      <SEO location={location} pageTitle={title} />
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query MarkdownPageBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
      }
    }

    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`

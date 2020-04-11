import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from '@emotion/styled'

import BlogBio from '../components/BlogBio'
import ExternalLink from '../components/ExternalLink'
import Layout from '../components/Layout'
import SEO from '../components/Seo'
import { rhythm, scale } from '../utils/typography'

import './BlogPost.css'
import { BlogPostBySlugQuery } from '../__generated__/gatsby-types'

export const Title = styled.h1`
  margin-top: 3rem;
`

const Subtitle = styled.p`
  font-size: ${scale(-1 / 5).fontSize};
  line-height: ${scale(-1 / 5).lineHeight};
  display: block;
  margin-bottom: ${rhythm(1)};
  margin-top: ${rhythm(-1)};
`

const BlogNavigation = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0;
`

const HorizontalLine = styled.hr`
  margin-bottom: ${rhythm(1)};
  margin-top: ${rhythm(1)};
`

type Props = {
  data: BlogPostBySlugQuery
  location: Location
  pageContext: any
}

export default function BlogPostTemplate({ data, location, pageContext }: Props) {
  const post = data.markdownRemark

  if (!post || !data.site || !data.site.siteMetadata || !post.frontmatter || !post.html) {
    throw new Error('post or site or frontmatter is missing')
  }

  const { previous, next, slug } = pageContext
  const { siteUrl } = data.site.siteMetadata
  const { date, description, devToLink, featuredImage, title } = post.frontmatter

  const featuredImageSrc = featuredImage?.childImageSharp?.fixed
    ? `${siteUrl}${featuredImage.childImageSharp.fixed.src}`
    : undefined

  const twitterDiscussUrl = `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `https://skovhus.github.io${slug}`
  )}`

  if (!description) {
    throw new Error('Expected blog description')
  }

  return (
    <Layout location={location}>
      <SEO
        description={description}
        image={featuredImageSrc}
        location={location}
        pageTitle={title}
      />

      <article>
        <Title>{title}</Title>
        <Subtitle>
          {date} • {post.timeToRead} minute read
        </Subtitle>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        Discuss this post{' '}
        <ExternalLink linkTo={twitterDiscussUrl}>on Twitter</ExternalLink>
        {devToLink && (
          <>
            {' or '}
            <ExternalLink linkTo={devToLink}>on DEV Community</ExternalLink>
          </>
        )}
        .
        <HorizontalLine />
      </article>

      <BlogBio />

      <BlogNavigation>
        <li>
          {previous && (
            <Link to={previous.fields.slug} rel="prev">
              ← {previous.frontmatter.title}
            </Link>
          )}
        </li>
        <li>
          {next && (
            <Link to={next.fields.slug} rel="next">
              {next.frontmatter.title} →
            </Link>
          )}
        </li>
      </BlogNavigation>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      timeToRead
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        devToLink
        featuredImage {
          childImageSharp {
            fixed(width: 500, height: 500) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }

    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`

import React from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'

import { getPostBySlug, getAllPosts, Post } from '../../libs/blog'

import BlogBio from '../../components/BlogBio'
import ExternalLink from '../../components/ExternalLink'
import Layout from '../../components/Layout'
import SEO from '../../components/Seo'
import { rhythm, scale } from '../../libs/typography'
import { markdownToHtml } from '../../libs/markdown'
import { siteUrl } from '../../config'

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

export async function getStaticProps({ params: { slug } }: { params: { slug: string } }) {
  const posts = getAllPosts().map((post) => {
    return {
      href: `/blog/${post.slug}`,
      title: post.frontmatter.title,
      slug: post.slug,
    }
  })
  const postIndex = posts.findIndex((post) => post.slug == slug)

  const post = getPostBySlug(slug)
  const content = await markdownToHtml(post.content)

  return {
    props: {
      post: {
        ...post,
        content,
      },
      links: {
        previous: posts[postIndex + 1] || null,
        next: posts[postIndex - 1] || null,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts()

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}

type Props = {
  post: Post
  links: {
    previous: null | { href: string; title: string }
    next: null | { href: string; title: string }
  }
}

export default function BlogPostTemplate({
  post: { slug, frontmatter, content, timeToRead },
  links: { previous, next },
}: Props) {
  const { date, description, devToLink, featuredImage, title } = frontmatter

  const twitterDiscussUrl = `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `${siteUrl}/blog/${slug}`
  )}`

  return (
    <Layout>
      <SEO description={description} image={featuredImage} pageTitle={title} />

      <article>
        <Title>{title}</Title>
        <Subtitle>
          {date} • {timeToRead} minute read
        </Subtitle>
        <div dangerouslySetInnerHTML={{ __html: content }} />
        Discuss this post <ExternalLink href={twitterDiscussUrl}>on Twitter</ExternalLink>
        {devToLink && (
          <>
            {' or '}
            <ExternalLink href={devToLink}>on DEV Community</ExternalLink>
          </>
        )}
        .
        <HorizontalLine />
      </article>

      <BlogBio />

      <BlogNavigation>
        <li>
          {previous && (
            <Link href={previous.href}>
              <a rel="prev">← {previous.title}</a>
            </Link>
          )}
        </li>
        <li>
          {next && (
            <Link href={next.href}>
              <a rel="next">{next.title} →</a>
            </Link>
          )}
        </li>
      </BlogNavigation>
    </Layout>
  )
}

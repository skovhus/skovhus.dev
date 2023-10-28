import styled from '@emotion/styled'
import React from 'react'

import { ExternalLink } from '../../components/ExternalLink'
import { HugeHeading } from '../../components/HugeHeading'
import { Layout } from '../../components/Layout'
import SEO from '../../components/Seo'
import { getAllPosts, getPostBySlug, Post } from '../../libs/blog'
import { markdownToHtml } from '../../libs/markdown'
import { rhythm } from '../../libs/typography'

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
  post: { frontmatter, content, timeToRead },
}: Props) {
  const { date, description, devToLink, featuredImage, title } = frontmatter

  return (
    <Layout showBackButton>
      <SEO description={description} image={featuredImage} pageTitle={title} />

      <Article>
        <Title>{title}</Title>
        <Subtitle>
          {date} • {timeToRead} minute read
        </Subtitle>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </Article>

      {devToLink && (
        <LinkOutContainer>
          Discuss this post on <ExternalLink href={devToLink}>dev.to</ExternalLink>.
        </LinkOutContainer>
      )}
    </Layout>
  )
}

const Title = styled(HugeHeading)`
  margin-top: 3rem;
  font-size: 2.5rem;
`

const Subtitle = styled.p`
  font-size: 0.83255rem;
  line-height: 1.75rem;
  display: block;
  margin-bottom: ${rhythm(1)};
  margin-top: ${rhythm(-1)};
`

const Article = styled.article`
  margin-bottom: ${rhythm(2)};
  margin-top: -0.3rem;
`

const LinkOutContainer = styled.div`
  margin-bottom: ${rhythm(1)};
  opacity: 0.8;
`

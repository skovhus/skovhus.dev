import Link from 'next/link'
import { useMDXComponent } from 'next-contentlayer/hooks'
import React from 'react'
import styled from 'styled-components'

import { ExternalLink } from '../../components/ExternalLink'
import { HugeHeading } from '../../components/HugeHeading'
import { Layout } from '../../components/Layout'
import SEO from '../../components/Seo'
import { BlogPost, getAllBlogPosts, getPostBySlug } from '../../libs/blog'
import { rhythm } from '../../libs/typography'

export async function getStaticProps({
  params: { slug },
}: {
  params: { slug: string }
}): Promise<{ props: { post: BlogPost } }> {
  const post = getPostBySlug(slug)

  return {
    props: {
      post,
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllBlogPosts()

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

export default function BlogPostTemplate({ post }: { post: BlogPost }) {
  const { formattedDate, description, devToLink, featuredImage, title, timeToRead } = post

  return (
    <Layout showBackButton>
      <SEO description={description} image={featuredImage} pageTitle={title} />

      <Article>
        <Title>{title}</Title>
        <Subtitle>
          {formattedDate} • {timeToRead} minute read
        </Subtitle>
        <Mdx code={post.body.code} />
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

// Mdx

const CustomLink = (props: any) => {
  const { href } = props

  if (href.startsWith('/')) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    )
  }

  if (href.startsWith('#')) {
    return <a {...props} />
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />
}

const components = {
  //  Image: RoundedImage,
  a: CustomLink,
}

function Mdx({ code }: { code: string }) {
  const Component = useMDXComponent(code)

  return (
    <article className="prose">
      <Component components={components} />
    </article>
  )
}

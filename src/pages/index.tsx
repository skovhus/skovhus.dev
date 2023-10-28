import React from 'react'
import styled from '@emotion/styled'

import Discography from '../components/Discography'
import ExternalLink from '../components/ExternalLink'
import Layout from '../components/Layout'
import SEO from '../components/Seo'
import { TALKS } from '../content/talks'
import { getAllPosts, Post } from '../libs/blog'
import { generateRssFeed } from '../libs/rss'
import { Link } from '../components/Link'

const Heading = styled.h1`
  font-size: 2rem;
  margin-top: 5rem;
`

const NegativeHeadingSpacingHack = styled.div`
  margin-top: -1rem;
`

const HeadingSpacingHack = styled.div`
  margin-top: 3rem;
`

export async function getStaticProps() {
  const posts = getAllPosts()

  generateRssFeed({ posts })

  return {
    props: {
      posts,
    },
  }
}

type Props = { posts: Post[] }

export default function Index({ posts }: Props) {
  return (
    <Layout showHeaderIntro>
      <SEO />
      <p style={{ marginTop: '2rem' }}>
        I&apos;m a software engineer based in Copenhagen, Denmark. MSc in Computer Science
        and Engineering from the Technical University of Denmark (2012).
      </p>
      <p>
        I love mentoring, sharing knowledge, doing a bit of everything, and excel at
        working full-stack with web technologies.
      </p>
      <p>
        This is my portfolio where I gather random bits and pieces. I hope you find
        something useful in my attempt to fight digital sharecropping. Feel free to
        connect with me on{' '}
        <ExternalLink href="https://twitter.com/kenneth_skovhus" noUnderline>
          Twitter
        </ExternalLink>{' '}
        or{' '}
        <ExternalLink href="https://www.linkedin.com/in/skovhus" noUnderline>
          LinkedIn
        </ExternalLink>
        .
      </p>

      <NegativeHeadingSpacingHack />
      <Heading id="posts">I occasionally blog</Heading>
      <NegativeHeadingSpacingHack />
      {posts
        .filter((post) => !post.frontmatter.draft)
        .map((post) => {
          const { frontmatter, slug, timeToRead } = post
          const { date, description, title } = frontmatter

          return (
            <Link
              description={description}
              key={slug}
              linkTo={`/blog/${slug}`}
              subTitle={`${date} • ${timeToRead} minute read`}
              title={title}
            />
          )
        })}

      <Heading id="talks">I enjoy giving talks</Heading>
      <NegativeHeadingSpacingHack />
      {TALKS.map((talk) => (
        <Link {...talk} key={talk.title} />
      ))}

      <Heading id="oss">I contribute to open source</Heading>
      <p>
        I&apos;m a strong advocate for giving back to the open source software community,
        that I depend on to do my job and projects.
      </p>
      <p>Highlights:</p>
      <ul>
        <li>
          <ExternalLink href="https://github.com/skovhus/jest-codemods">
            skovhus/jest-codemods
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://github.com/skovhus/css-modules-flow-types">
            skovhus/css-modules-flow-types
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://hatch.sh/">hatch.sh</ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://github.com/mads-hartmann/bash-language-server">
            bash-language-server
          </ExternalLink>
          {` `}+ bash extensions for code editors
        </li>
        <li>
          <ExternalLink href="https://github.com/facebook/jest">jest</ExternalLink>
        </li>
      </ul>

      <Heading id="music">I play &amp; record music</Heading>
      <HeadingSpacingHack />
      <Discography />
    </Layout>
  )
}

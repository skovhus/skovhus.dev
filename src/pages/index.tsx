import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import styled from '@emotion/styled'

import Discography from '../components/Discography'
import ExternalLink from '../components/ExternalLink'
import Layout from '../components/Layout'
import SEO from '../components/Seo'
import { rhythm } from '../utils/typography'
import { TALKS } from '../content/talks'

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

const LinkEntity = ({
  description,
  linkTo,
  subTitle,
  title,
}: {
  subTitle: string
  description: string
  linkTo: string
  title: string
}) => {
  const linkElement = linkTo.startsWith('http') ? (
    <ExternalLink linkTo={linkTo} noUnderline>
      {title}
    </ExternalLink>
  ) : (
    <Link style={{ boxShadow: `none` }} to={linkTo}>
      {title}
    </Link>
  )

  return (
    <div>
      <h3
        style={{
          marginBottom: rhythm(1 / 4),
          lineHeight: 1.4,
        }}
      >
        {linkElement}
      </h3>
      <small>{subTitle}</small>
      <p
        dangerouslySetInnerHTML={{
          __html: description,
        }}
      />
    </div>
  )
}

type Props = {
  location: Location
}

export default function Index({ location }: Props) {
  const data = useStaticQuery(
    graphql`
      query Index {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
          edges {
            node {
              fields {
                slug
              }
              timeToRead
              frontmatter {
                date(formatString: "MMMM DD, YYYY")
                title
                description
              }
            }
          }
        }
      }
    `
  )

  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} showHeaderIntro>
      <SEO location={location} />
      <p style={{ marginTop: '2rem' }}>
        I have been messing around with computers and music for as long as I remember.
        Building meaningful products together with talented people is my passion. I love
        mentoring, sharing knowledge, and excel in working full-stack with web
        technologies. MSc in Computer Science from the Technical University of Denmark.
      </p>
      <p>
        This is my portfolio where I gather random bits and pieces. I hope you find
        something useful in my attempt to fight digital sharecropping.
      </p>

      <NegativeHeadingSpacingHack />
      <Heading id="posts">I occasionally blog</Heading>
      <NegativeHeadingSpacingHack />
      {posts.map(({ node }: any) => {
        if (!node.frontmatter || !node.fields) {
          throw new Error('missing frontmatter or fields on post')
        }

        const { description, title } = node.frontmatter
        const { slug } = node.fields

        if (!description || !title) {
          throw new Error('missing description or title on post')
        }

        if (!slug) {
          throw new Error('missing slug on post')
        }

        return (
          <LinkEntity
            description={description}
            key={slug}
            linkTo={slug}
            subTitle={`${node.frontmatter.date} • ${node.timeToRead} minute read`}
            title={title}
          />
        )
      })}

      <Heading id="talks">I enjoy giving talks</Heading>
      <NegativeHeadingSpacingHack />
      {TALKS.map(talk => (
        <LinkEntity {...talk} key={talk.title} />
      ))}

      <Heading id="oss">I contribute to open source</Heading>
      <p>
        I&apos;m a strong advocate for giving back to the open source software community,
        that I depend on to do my job and projects.
      </p>
      <p>Highlights:</p>
      <ul>
        <li>
          <ExternalLink linkTo="https://github.com/skovhus/jest-codemods">
            skovhus/jest-codemods
          </ExternalLink>
        </li>
        <li>
          <ExternalLink linkTo="https://github.com/skovhus/css-modules-flow-types">
            skovhus/css-modules-flow-types
          </ExternalLink>
        </li>
        <li>
          <ExternalLink linkTo="https://hatch.sh/">hatch.sh</ExternalLink>
        </li>
        <li>
          <ExternalLink linkTo="https://github.com/mads-hartmann/bash-language-server">
            bash-language-server
          </ExternalLink>
          {` `}+ bash extensions for code editors
        </li>
        <li>
          <ExternalLink linkTo="https://github.com/facebook/jest">jest</ExternalLink>
        </li>
      </ul>

      <Heading id="music">I play &amp; record music</Heading>
      <HeadingSpacingHack />
      <Discography />
    </Layout>
  )
}

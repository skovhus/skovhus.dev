import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from '@emotion/styled'

import Discography from '../components/Discography'
import ExternalLink from '../components/ExternalLink'
import Layout from '../components/Layout'
import SEO from '../components/Seo'
import { rhythm } from '../utils/typography'
import { TALKS } from '../content/talks'

type HeadingProps = {
  children: React.ReactNode
  id?: string
  dense?: boolean
}

const Heading = styled.h1<HeadingProps>`
  font-size: 2rem;
  margin-top: ${props => (props.dense ? '3rem' : '5rem')};
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
  // FIXME: this should really be auto generated by Gatsby tooling
  data: {
    allMarkdownRemark: {
      edges: {
        node: {
          excerpt: string
          fields: {
            slug: string
          }
          frontmatter: {
            description: string
            date: string
            title: string
          }
          timeToRead: string
        }
      }[]
    }
  }
  location: Location
}

export default function Index({ data, location }: Props) {
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location}>
      <SEO location={location} />

      <Heading dense>
        Hello, I&apos;m Kenneth. I&apos;m so happy you found your way here!
      </Heading>
      <p>
        I&apos;ve been messing around with computers and music for as long as I can
        remember. I hold an MSc in Computer Science from the Technical University of
        Denmark and enjoys life in beautiful Copenhagen.
      </p>
      <p>
        I&apos;m passionate about building meaningful products together with talented
        people. I love mentoring, sharing knowledge, and excel in working full-stack.
      </p>
      <p>
        This is my portfolio where I gather random bits and pieces. I hope you find
        something useful in my attempt to fight digital sharecropping.
      </p>

      <Heading id="posts">I occasionally blog</Heading>
      {posts.map(({ node }) => {
        const { title } = node.frontmatter
        return (
          <LinkEntity
            description={node.frontmatter.description || node.excerpt}
            key={node.fields.slug}
            linkTo={node.fields.slug}
            subTitle={`${node.frontmatter.date} • ${node.timeToRead} minute read`}
            title={title}
          />
        )
      })}

      <Heading id="talks">I enjoy giving talks</Heading>
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
      <Discography />
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
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

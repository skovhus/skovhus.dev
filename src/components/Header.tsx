import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import Image from 'gatsby-image'

import { rhythm } from '../utils/typography'
import './Header.css'

const HeaderLink = ({
  children,
  to,
  style = {},
}: {
  children: React.ReactNode
  to: string
  style?: React.CSSProperties
}) => (
  <Link
    style={{
      boxShadow: 'none',
      textDecoration: 'none',
      color: 'inherit',
      ...style,
    }}
    to={to}
  >
    {children}
  </Link>
)

type Props = {
  pageWidthStyles: React.CSSProperties
}

export default function Header({ pageWidthStyles }: Props) {
  return (
    <StaticQuery
      query={headerQuery}
      render={data => {
        return (
          <header>
            <nav
              style={{
                ...pageWidthStyles,
              }}
            >
              <HeaderLink
                to={'/'}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Image
                  fixed={data.avatar.childImageSharp.fixed}
                  alt={'Kenneth Skovhus'}
                  style={{
                    marginRight: rhythm(1 / 2),
                    marginBottom: 0,
                    minWidth: 60,
                    borderRadius: '100%',
                  }}
                  imgStyle={{
                    borderRadius: '50%',
                  }}
                />
                <span>Kenneth Skovhus</span>
              </HeaderLink>
              <div>
                <HeaderLink to={'/#posts'}>POSTS</HeaderLink>
                <HeaderLink
                  style={{
                    marginLeft: '20px',
                  }}
                  to={'/#talks'}
                >
                  TALKS
                </HeaderLink>
              </div>
            </nav>
          </header>
        )
      }}
    />
  )
}

const headerQuery = graphql`
  query HeaderQuery {
    avatar: file(absolutePath: { regex: "/skovhus.jpg/" }) {
      childImageSharp {
        fixed(width: 60, height: 60) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

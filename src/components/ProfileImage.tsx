import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import GatsbyImage from 'gatsby-image'

import { rhythm } from '../utils/typography'
import styled from '@emotion/styled'

export const PROFILE_IMAGE_WIDTH = 80

const Image = styled(GatsbyImage)`
  margin-right: ${rhythm(1 / 2)};
  margin-bottom: 0;
  min-width: ${PROFILE_IMAGE_WIDTH}px;
  border-radius: 100%;
`

export default function ProfileImage() {
  return (
    <StaticQuery
      query={graphql`
        query ProfileImageQuery {
          avatar: file(absolutePath: { regex: "/skovhus.jpg/" }) {
            childImageSharp {
              fixed(width: 80, height: 80) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      `}
      render={data => {
        return (
          <Image
            fixed={data.avatar.childImageSharp.fixed}
            alt={'Kenneth Skovhus'}
            imgStyle={{
              borderRadius: '50%',
            }}
          />
        )
      }}
    />
  )
}

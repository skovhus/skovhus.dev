import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import GatsbyImage from 'gatsby-image'

import { rhythm } from '../utils/typography'
import styled from '@emotion/styled'

export const PROFILE_IMAGE_WIDTH = 70

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
              fixed(width: 70, height: 70) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      `}
      render={data => {
        return (
          <Image
            alt={'Kenneth Skovhus'}
            fixed={data.avatar.childImageSharp.fixed}
            imgStyle={{
              borderRadius: '50%',
            }}
          />
        )
      }}
    />
  )
}

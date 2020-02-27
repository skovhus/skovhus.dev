import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
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
  const { avatar } = useStaticQuery(graphql`
    query ProfileImage {
      avatar: file(absolutePath: { regex: "/skovhus.jpg/" }) {
        childImageSharp {
          fixed(width: 70, height: 70) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Image
      alt={'Kenneth Skovhus'}
      fixed={avatar.childImageSharp.fixed}
      imgStyle={{
        borderRadius: '50%',
      }}
    />
  )
}

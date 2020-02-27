import React from 'react'
import styled from '@emotion/styled'
import GatsbyImage from 'gatsby-image'

import { rhythm } from '../utils/typography'
import { useDiscographyData } from '../content/discography/index'

const SPACING = rhythm(2 / 4)

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  grid-gap: ${SPACING};
  align-items: stretch;
`

const Link = styled.a`
  color: inherit;
  display: flex;
  flex-direction: column;

  box-shadow: 0.8px 0.9px 3px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.5s ease-in-out;

  &:hover {
    box-shadow: 1px 8px 20px rgba(0, 0, 0, 0.3);
  }
`

const Image = styled(GatsbyImage)`
  max-width: 100%;
  margin-bottom: 0;
  border-bottom: 1px solid #eee;
`

const InfoContainer = styled.div`
  padding: 0 ${SPACING} ${SPACING} ${SPACING};
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 70%;
`

const Title = styled.div`
  font-weight: bold;
  margin-top: ${SPACING};
  margin-bottom: ${SPACING};
`

export default function Discography() {
  const discography = useDiscographyData()

  return (
    <Container>
      {discography.map(({ image, linkTo, subTitle, title }, idx) => (
        <Link href={linkTo} target="_blank" rel="nofollow noopener noreferrer" key={idx}>
          <Image fluid={image} alt={title} />
          <InfoContainer>
            <Title>{title}</Title>
            <div>{subTitle}</div>
          </InfoContainer>
        </Link>
      ))}
    </Container>
  )
}

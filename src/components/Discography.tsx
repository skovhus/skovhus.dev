import React from 'react'
import styled from '@emotion/styled'

import { rhythm } from '../utils/typography'
import { DISCOGRAPHY } from '../content/discography/index'

const SPACING = rhythm(2 / 4)

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  grid-gap: ${SPACING};
  align-items: stretch;
`

const Link = styled.a`
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14),
    0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  color: inherit;
  display: flex;
  flex-direction: column;
`

const Image = styled.img`
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
  return (
    <Container>
      {DISCOGRAPHY.map(({ image, linkTo, subTitle, title }, idx) => (
        <Link href={linkTo} target="_blank" rel="nofollow noopener noreferrer" key={idx}>
          <Image src={image} alt={title} />
          <InfoContainer>
            <Title>{title}</Title>
            <div>{subTitle}</div>
          </InfoContainer>
        </Link>
      ))}
    </Container>
  )
}

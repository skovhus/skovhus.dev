'use client'
import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

const DISCOGRAPHY_DATA = [
  {
    linkTo: 'https://open.spotify.com/album/5m2T9VPMmzXIR3zXSkiVDz',
    title: 'Freddy and the Phantoms: A Universe From Nothing (2020)',
    subTitle: 'Engineering, co-production',
    image: '/discography/freddy-a-universe-from-nothing.jpeg',
  },
  {
    linkTo: 'https://open.spotify.com/album/4ggXw0iv9LuhuQVYfxII9H',
    title: 'Go for Gold: Canned Goods Never Say Die (2018)',
    subTitle: 'Bass, engineering, mix, production',
    image: '/discography/go-for-gold-canned-goods.jpeg',
  },

  {
    linkTo: 'https://open.spotify.com/album/7dRSHYf2qgKGXyUaa2uTI1',
    title:
      'Go for Gold: Kunst – How to Be Something for Others, While Being Completely Self​-​Absorbed (2014)',
    subTitle: 'Bass, engineering',
    image: '/discography/go-for-gold-kunst.jpeg',
  },
  {
    linkTo: 'https://open.spotify.com/album/6Kkgu8GsxGKgBIwQ6XMrpm',
    title: 'Go for Gold: EP (2011)',
    subTitle: 'Bass, engineering, mix, production',
    image: '/discography/go-for-gold-ep.jpeg',
  },
  {
    linkTo: 'https://open.spotify.com/album/7Iyek8NrjlyGUJ5fTw0BOA',
    title: 'Freddy and the Phantoms: Leaving the Landscape (2010)',
    subTitle: 'Engineering, mix, production',
    image: '/discography/freddy-leaving-the-landscape.jpeg',
  },
  {
    linkTo: 'https://soundcloud.com/cleomalone/sets/fear-comes-with-imagination-ep-2008',
    title: 'Cleo Malone: Fear Comes With Imagination (2008)',
    subTitle: 'Bass, engineering',
    image: '/discography/cleo-malone-fear.jpeg',
  },
]

export default function Discography() {
  return (
    <Container>
      {DISCOGRAPHY_DATA.map(({ image, linkTo, subTitle, title }, idx) => (
        <Link
          href={linkTo}
          target="_blank"
          rel="nofollow noopener noreferrer"
          key={idx}
          style={{ textDecoration: 'none' }}
        >
          <div>
            <Image
              alt={title}
              src={image}
              width={0}
              height={0}
              sizes="100vw"
              style={{
                width: '100%',
                height: 'auto',
              }}
            />
            <InfoContainer>
              <Title>{title}</Title>
              <div>{subTitle}</div>
            </InfoContainer>
          </div>
        </Link>
      ))}
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  grid-gap: 12px;
  align-items: stretch;
`

const Link = styled.a`
  color: inherit;
  display: flex;
  flex-direction: column;

  transition: box-shadow 0.3s ease-in-out;

  box-shadow: var(--color-shadow) 0px 1px 4px;

  &:hover,
  &:focus {
    box-shadow: var(--color-shadow) 0px 1px 20px;
  }
`

const InfoContainer = styled.div`
  padding: 12px;
  padding-top: 0;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 70%;
`

const Title = styled.div`
  font-weight: bold;
  margin: 12px 0;
`

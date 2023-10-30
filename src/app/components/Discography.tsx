import Image from 'next/image'
import React from 'react'

import styles from './Discography.module.css'

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
    <div className={styles.container}>
      {DISCOGRAPHY_DATA.map(({ image, linkTo, subTitle, title }, idx) => (
        <a
          href={linkTo}
          target="_blank"
          rel="nofollow noopener noreferrer"
          key={idx}
          className={styles.link}
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
            <div className={styles.infoContainer}>
              <div className={styles.title}>{title}</div>
              <div>{subTitle}</div>
            </div>
          </div>
        </a>
      ))}
    </div>
  )
}

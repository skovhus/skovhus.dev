import Image from 'next/image'
import { Fragment } from 'react'

import styles from './Discography.module.css'

type Release = {
  artist: string
  title: string
  year: number
  credits: string[]
  image: string
  linkTo: string
}

const RELEASES: Release[] = [
  {
    artist: 'Freddy and the Phantoms',
    title: 'A Universe From Nothing',
    year: 2020,
    credits: ['engineering', 'co-production'],
    image: '/discography/freddy-a-universe-from-nothing.jpeg',
    linkTo: 'https://open.spotify.com/album/5m2T9VPMmzXIR3zXSkiVDz',
  },
  {
    artist: 'Go for Gold',
    title: 'Canned Goods Never Say Die',
    year: 2018,
    credits: ['bass', 'engineering', 'mix', 'production'],
    image: '/discography/go-for-gold-canned-goods.jpeg',
    linkTo: 'https://open.spotify.com/album/4ggXw0iv9LuhuQVYfxII9H',
  },
  {
    artist: 'Go for Gold',
    title: 'Kunst — How to Be Something for Others, While Being Completely Self-Absorbed',
    year: 2014,
    credits: ['bass', 'engineering'],
    image: '/discography/go-for-gold-kunst.jpeg',
    linkTo: 'https://open.spotify.com/album/7dRSHYf2qgKGXyUaa2uTI1',
  },
  {
    artist: 'Go for Gold',
    title: 'EP',
    year: 2011,
    credits: ['bass', 'engineering', 'mix', 'production'],
    image: '/discography/go-for-gold-ep.jpeg',
    linkTo: 'https://open.spotify.com/album/6Kkgu8GsxGKgBIwQ6XMrpm',
  },
  {
    artist: 'Freddy and the Phantoms',
    title: 'Leaving the Landscape',
    year: 2010,
    credits: ['engineering', 'mix', 'production'],
    image: '/discography/freddy-leaving-the-landscape.jpeg',
    linkTo: 'https://open.spotify.com/album/7Iyek8NrjlyGUJ5fTw0BOA',
  },
  {
    artist: 'Cleo Malone',
    title: 'Fear Comes With Imagination',
    year: 2008,
    credits: ['bass', 'engineering'],
    image: '/discography/cleo-malone-fear.jpeg',
    linkTo: 'https://soundcloud.com/cleomalone/sets/fear-comes-with-imagination-ep-2008',
  },
]

export default function Discography() {
  const years = RELEASES.map((release) => release.year)
  const span = `${Math.min(...years)} – ${Math.max(...years)}`

  return (
    <section className={styles.discography} aria-label="Discography">
      <header className={styles.header}>
        <span>discography</span>
        <span className={styles.rule} aria-hidden="true" />
        <span>
          <span className={styles.hideOnNarrow}>{RELEASES.length} releases · </span>
          {span}
        </span>
      </header>

      <div className={styles.releases}>
        {RELEASES.map((release, index) => (
          <a
            key={release.linkTo}
            href={release.linkTo}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className={styles.release}
          >
            <div className={styles.artwork}>
              <Image
                alt={`Cover art for ${release.title} by ${release.artist}`}
                src={release.image}
                width={350}
                height={350}
                sizes="(max-width: 720px) 100vw, 320px"
              />
            </div>

            <div className={styles.details}>
              <div className={styles.rowHeader}>
                <span>{formatIndex(index)}</span>
                <span className={styles.rule} aria-hidden="true" />
                <span>{release.year}</span>
              </div>

              <div className={styles.heading}>
                <h2 className={styles.title}>{release.title}</h2>
                <div className={styles.artist}>{release.artist}</div>
              </div>

              <dl className={styles.meta}>
                <dt>credits</dt>
                <dd className={styles.credits}>
                  {release.credits.map((credit, i) => (
                    <Fragment key={credit}>
                      {i > 0 && ', '}
                      <span>{credit}</span>
                    </Fragment>
                  ))}
                </dd>
                <dt>listen</dt>
                <dd className={styles.listen}>{formatHost(release.linkTo)} ↗</dd>
              </dl>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

function formatIndex(index: number) {
  return String(index + 1).padStart(2, '0')
}

function formatHost(url: string) {
  return new URL(url).hostname.replace(/^open\./, '')
}

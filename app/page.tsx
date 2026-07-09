import { ExternalLink } from '#/components/ExternalLink'
import { FeaturedVideo } from '#/components/FeaturedVideo'
import { HugeHeading } from '#/components/HugeHeading'
import { TypewriterPhrase } from '#/components/TypewriterPhrase'
import { TALKS } from '#/content/talks'

import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <HugeHeading aria-label="Hey, I’m Kenneth. I’m a software engineer, 2x dad, and music nerd.">
        <span aria-hidden="true">
          Hey, I’m Kenneth. I’m a software engineer, 2x dad, and{' '}
          <TypewriterPhrase
            phrases={[
              'music nerd.',
              'sourdough feeder.',
              'pizza baker.',
              'kombucha feeder.',
              'vinyl digger.',
            ]}
          />
        </span>
      </HugeHeading>
      <p style={{ marginTop: '2rem' }}>
        Based in Copenhagen, Denmark. Currently building{' '}
        <ExternalLink href="https://linear.app/">Linear</ExternalLink>.
      </p>

      <p>
        This is my digital notebook — a collection of writings, talks, and things I’ve
        built. Think of it as my drawer of interesting bits, fighting digital
        sharecropping one post at a time.
      </p>
      <span
        className={styles.label}
        style={{ marginTop: '5rem', marginBottom: '0.5rem' }}
      >
        RECENT STUFF
      </span>
      {TALKS[0] && <FeaturedVideo talk={TALKS[0]} />}
      {TALKS[1] && <FeaturedVideo talk={TALKS[1]} />}
    </>
  )
}

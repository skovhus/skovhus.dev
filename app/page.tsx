import Link from 'next/link'

import { ExternalLink } from '../components/ExternalLink'
import { HugeHeading } from '../components/HugeHeading'

export default function Home() {
  return (
    <>
      <HugeHeading>
        Hey, I&apos;m Kenneth. I&apos;m a software engineer, 2x dad, and music nerd.
      </HugeHeading>
      <p style={{ marginTop: '2rem' }}>
        Based in Copenhagen, Denmark. Currently building{' '}
        <ExternalLink href="https://linear.app/">Linear</ExternalLink>.
      </p>

      <p>
        This is my digital notebook — a collection of writings, talks, and things I've
        built. Think of it as my drawer of interesting bits, fighting digital
        sharecropping one post at a time.
      </p>
      <p>
        Follow via <Link href="/feed">RSS</Link> or connect on{' '}
        <ExternalLink href="https://www.linkedin.com/in/skovhus">LinkedIn</ExternalLink>{' '}
        or <ExternalLink href="https://x.com/kenneth_skovhus">Twitter/X</ExternalLink>.
      </p>
    </>
  )
}

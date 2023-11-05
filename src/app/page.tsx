import { ExternalLink } from './components/ExternalLink'
import { HugeHeading } from './components/HugeHeading'

export default function Home() {
  return (
    <>
      <HugeHeading>
        Hey, I&apos;m Kenneth. I&apos;m a software engineer, 2 x dad, and music nerd.
      </HugeHeading>
      <p style={{ marginTop: '2rem' }}>
        Based in Copenhagen, Denmark. Writes code for{' '}
        <ExternalLink href="https://linear.app/">Linear</ExternalLink>.
      </p>

      <p>
        This is my portfolio where I gather random bits and pieces – my attempt to fight
        digital sharecropping and distilling knowledge. Feel free to connect on{' '}
        <ExternalLink href="https://twitter.com/kenneth_skovhus" noUnderline>
          Twitter
        </ExternalLink>{' '}
        or{' '}
        <ExternalLink href="https://www.linkedin.com/in/skovhus" noUnderline>
          LinkedIn
        </ExternalLink>
        .
      </p>
    </>
  )
}

import styled from '@emotion/styled'
import { ExternalLink } from '../components/ExternalLink'
import { Layout } from '../components/Layout'
import SEO from '../components/Seo'

export default function About() {
  return (
    <Layout>
      <SEO />? CV?
      <Heading>I contribute to open source</Heading>
      <p>
        I&apos;m a strong advocate for giving back to the open source software community,
        that I depend on to do my job and projects.
      </p>
      <p>Highlights:</p>
      <ul>
        <li>
          <ExternalLink href="https://github.com/skovhus/jest-codemods">
            skovhus/jest-codemods
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://github.com/skovhus/css-modules-flow-types">
            skovhus/css-modules-flow-types
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://hatch.sh/">hatch.sh</ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://github.com/mads-hartmann/bash-language-server">
            bash-language-server
          </ExternalLink>
          {` `}+ bash extensions for code editors
        </li>
        <li>
          <ExternalLink href="https://github.com/facebook/jest">jest</ExternalLink>
        </li>
      </ul>
    </Layout>
  )
}

const Heading = styled.h1`
  font-size: 2rem;
  margin-top: 5rem;
`

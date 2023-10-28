import { HugeHeading } from '../components/HugeHeading'
import { Layout } from '../components/Layout'
import { Link } from '../components/Link'
import SEO from '../components/Seo'
import { TALKS } from '../content/talks'

export default function About() {
  return (
    <Layout>
      <SEO pageTitle="Talks" />
      <HugeHeading>
        I enjoy giving talks. Here are some recordings and slides.
      </HugeHeading>
      {TALKS.map((talk) => (
        <Link {...talk} key={talk.title} />
      ))}
    </Layout>
  )
}

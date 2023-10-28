import Discography from '../components/Discography'
import { Layout } from '../components/Layout'
import SEO from '../components/Seo'
import { HugeHeading } from '../components/HugeHeading'

export default function Music() {
  return (
    <Layout>
      <SEO pageTitle="Music" />
      <HugeHeading style={{ marginBottom: '3.5rem' }}>
        Music has always been a big part of my life. Here&apos;s some recording I made.
      </HugeHeading>
      <Discography />
    </Layout>
  )
}

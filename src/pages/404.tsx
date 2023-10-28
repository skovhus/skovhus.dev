import React from 'react'

import { Layout } from '../components/Layout'
import SEO from '../components/Seo'
import { HugeHeading } from '../components/HugeHeading'

export default function NotFoundPage() {
  return (
    <Layout>
      <SEO pageTitle="404" />
      <HugeHeading>Not Found</HugeHeading>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
}

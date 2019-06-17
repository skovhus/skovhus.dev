import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/Seo'

type Props = {
  location: Location
}

export default function NotFoundPage({ location }: Props) {
  return (
    <Layout location={location}>
      <SEO title="404: Not Found" />
      <h1>Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
}

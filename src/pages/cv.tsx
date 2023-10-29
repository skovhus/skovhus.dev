import { curriculumVitae } from 'contentlayer/generated'
import { getMDXComponent } from 'next-contentlayer/hooks'
import React from 'react'

import { HugeHeading } from '../components/HugeHeading'
import { Layout } from '../components/Layout'
import SEO from '../components/Seo'

export default function CVPage() {
  const Component = getMDXComponent(curriculumVitae.body.code)
  return (
    <Layout showBackButton>
      <SEO pageTitle={'CV'} />
      <HugeHeading>Curriculum vitae</HugeHeading>
      <Component />
    </Layout>
  )
}

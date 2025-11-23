import { curriculumVitae } from 'contentlayer/generated'
import { Metadata } from 'next'
import { getMDXComponent } from 'next-contentlayer/hooks'

import { HugeHeading } from '#/components/HugeHeading'

export const metadata: Metadata = {
  title: 'About',
}

export default function AboutPage() {
  const Component = getMDXComponent(curriculumVitae.body.code)
  return (
    <>
      <HugeHeading>Kenneth Skovhus</HugeHeading>
      <Component />
    </>
  )
}

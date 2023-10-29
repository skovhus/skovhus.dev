import { curriculumVitae } from 'contentlayer/generated'
import { Metadata } from 'next'
import { getMDXComponent } from 'next-contentlayer/hooks'

import { HugeHeading } from '../../components/HugeHeading'

export const metadata: Metadata = {
  title: 'CV',
}

export default function CVPage() {
  const Component = getMDXComponent(curriculumVitae.body.code)
  return (
    <>
      <HugeHeading>Curriculum vitae</HugeHeading>
      <Component />
    </>
  )
}

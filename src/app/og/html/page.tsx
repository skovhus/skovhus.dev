import { Metadata } from 'next'
import React from 'react'

import { HugeHeading } from '../../components/HugeHeading'
import { OgImagePlayground } from '../../components/OgImagePlayground'

export const metadata: Metadata = {
  title: 'OpenGraph Playground',
  robots: 'noindex, nofollow',
}

export default function OgTest() {
  return (
    <>
      <HugeHeading>OpenGraph image playground</HugeHeading>
      <OgImagePlayground />
    </>
  )
}

import { getBaseMetadata } from 'lib/constants'
import React from 'react'

import { HugeHeading } from '../../../components/HugeHeading'
import { OgImagePlayground } from '../../../components/OgImagePlayground'

export const metadata = getBaseMetadata({
  title: 'OpenGraph playground',
  robots: { index: false, follow: true },
})

export default function OgTest() {
  return (
    <>
      <HugeHeading>OpenGraph image playground</HugeHeading>
      <OgImagePlayground />
    </>
  )
}

import { Metadata } from 'next'

import Discography from '../../components/Discography'
import { HugeHeading } from '../../components/HugeHeading'

export const metadata: Metadata = {
  title: 'Music',
}

export default function Music() {
  return (
    <>
      <HugeHeading style={{ marginBottom: '3.5rem' }}>
        Music has always been a big part of my life. Here&apos;s some recording I made.
      </HugeHeading>
      <Discography />
    </>
  )
}

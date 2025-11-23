import { Metadata } from 'next'

import Discography from '#/components/Discography'
import { EmptyTopSpace } from '#/components/HugeHeading'

export const metadata: Metadata = {
  title: 'Music',
}

export default function Music() {
  return (
    <>
      <EmptyTopSpace />
      <Discography />
    </>
  )
}

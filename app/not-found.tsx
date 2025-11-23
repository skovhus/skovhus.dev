import { Metadata } from 'next'
import React from 'react'

import { HugeHeading } from '#/components/HugeHeading'

export const metadata: Metadata = {
  title: '404',
  robots: { index: false, follow: true },
}

export default function NotFoundPage() {
  return (
    <>
      <HugeHeading>Not Found</HugeHeading>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </>
  )
}

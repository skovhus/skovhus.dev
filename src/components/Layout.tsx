import React from 'react'

import { rhythm } from '../utils/typography'

import Footer from './Footer'
import Header from './Header'

type Props = {
  children: any
  location: Location
}

export default function Layout({ children }: Props) {
  const styleWidthContained = {
    marginLeft: `auto`,
    marginRight: `auto`,
    maxWidth: rhythm(24),
    padding: `0 ${rhythm(3 / 4)}`,
  }

  return (
    <>
      <Header pageWidthStyles={styleWidthContained} />
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          ...styleWidthContained,
        }}
      >
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

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
    <div style={{ display: 'flex', flexFlow: 'column', height: '100%' }}>
      <Header pageWidthStyles={styleWidthContained} />
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          flexGrow: 1,
          ...styleWidthContained,
        }}
      >
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  )
}

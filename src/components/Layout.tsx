import React from 'react'

import { rhythm } from '../utils/typography'

import Footer from './Footer'
import Header from './Header'

type Props = {
  children: React.ReactNode
  showHeaderIntro?: boolean
  location: Location
}

export default function Layout({ children, showHeaderIntro = false }: Props) {
  const styleWidthContained = {
    marginLeft: `auto`,
    marginRight: `auto`,
    maxWidth: rhythm(24),
    padding: `0 ${rhythm(3 / 4)}`,
  }

  return (
    <>
      <Header pageWidthStyles={styleWidthContained} showIntro={showHeaderIntro} />
      <div
        style={{
          background: 'var(--background-content)',
        }}
      >
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            flexGrow: 1,

            ...styleWidthContained,
            paddingTop: '1px', // There is probably a better way to break out of the box model
            paddingBottom: '60px',
          }}
        >
          <main>{children}</main>
        </div>
      </div>

      <Footer />
    </>
  )
}

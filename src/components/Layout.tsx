import React from 'react'

import Footer from './Footer'
import Header from './Header'
import { PageWidthContainer } from './PageContainer'

type Props = {
  children: React.ReactNode
  showHeaderIntro?: boolean
}

export default function Layout({ children, showHeaderIntro = false }: Props) {
  return (
    <>
      <Header showIntro={showHeaderIntro} />
      <div
        style={{
          color: 'var(--color-text-body)',
          background: 'var(--background-content)',
          transition: 'color 0.2s ease-out, background 0.2s ease-out',
        }}
      >
        <PageWidthContainer
          style={{
            flexGrow: 1,
            paddingTop: '1px', // There is probably a better way to break out of the box model
            paddingBottom: '60px',
          }}
        >
          <main>{children}</main>
        </PageWidthContainer>
      </div>

      <Footer />
    </>
  )
}

import React from 'react'

import { Footer } from './Footer'
import { Header } from './Header'
import styles from './Layout.module.css'

export function LegacyLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.container}>
      <Header />
      <section>{children}</section>
      <Footer />
    </div>
  )
}

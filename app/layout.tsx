import 'typeface-merriweather'
import 'typeface-montserrat'
import './globals.css'

import Script from 'next/script'
import { Suspense } from 'react'

import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { NavigationTracking } from '../components/NavigationTracking'
import { getBaseMetadata } from '../lib/constants'
import styles from './layout.module.css'

export const metadata = getBaseMetadata()

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main className={styles.main}>
          <Header />
          <section>{children}</section>
          <Footer />
        </main>
        <Suspense fallback={null}>
          <NavigationTracking />
        </Suspense>
      </body>
      <Script
        async
        data-goatcounter="https://skovhus-dev.goatcounter.com/count"
        src="//gc.zgo.at/count.js"
        strategy="afterInteractive"
      />
    </html>
  )
}

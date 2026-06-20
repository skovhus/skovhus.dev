import { IBM_Plex_Mono, Plus_Jakarta_Sans } from 'next/font/google'
import Script from 'next/script'
import { Suspense } from 'react'

import { Footer } from '#/components/Footer'
import { Header } from '#/components/Header'
import { NavigationTracking } from '#/components/NavigationTracking'
import { getBaseMetadata } from '#/lib/constants'
import { getSlideAnimationProps } from '#/lib/slide-animation'

import './globals.css'
import styles from './layout.module.css'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '500'],
  style: ['normal', 'italic'],
  fallback: ['system-ui', 'sans-serif'],
  display: 'swap',
})

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-mono-display',
  display: 'swap',
})

export const metadata = getBaseMetadata()

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jakarta.className} ${plexMono.variable}`}>
      <body>
        <main className={styles.main}>
          <Header />
          <section {...getSlideAnimationProps({ stage: 1 })}>{children}</section>
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

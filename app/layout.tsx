import { Newsreader, VT323 } from 'next/font/google'
import Script from 'next/script'
import { Suspense } from 'react'

import { Footer } from '#/components/Footer'
import { Header } from '#/components/Header'
import { NavigationTracking } from '#/components/NavigationTracking'
import { getBaseMetadata } from '#/lib/constants'
import { getSlideAnimationProps } from '#/lib/slide-animation'

import './globals.css'
import styles from './layout.module.css'

// Serif body text designed for on-screen news reading
const newsreader = Newsreader({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  fallback: ['Georgia', 'Times New Roman', 'serif'],
  display: 'swap',
})

// Pixel display font for a hint of 90s point-and-click adventure nostalgia
const vt323 = VT323({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-pixel',
  fallback: ['Courier New', 'monospace'],
  display: 'swap',
})

export const metadata = getBaseMetadata()

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${newsreader.className} ${vt323.variable}`}>
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

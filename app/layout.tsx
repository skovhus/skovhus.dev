import 'typeface-merriweather'
import 'typeface-montserrat'
import './globals.css'

import type { Metadata } from 'next'
import Script from 'next/script'
import { Suspense } from 'react'

import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { NavigationTracking } from '../components/NavigationTracking'
import { siteMetadata } from '../lib/constants'
import styles from './layout.module.css'

export const metadata: Metadata = {
  title: { default: siteMetadata.title, template: `%s | ${siteMetadata.title}` },
  description: siteMetadata.description,
  robots: 'follow, index',
  metadataBase: new URL(siteMetadata.siteUrl),
  authors: { name: 'Kenneth Skovhus', url: siteMetadata.siteUrl },
  alternates: {
    canonical: siteMetadata.siteUrl,
    types: {
      'application/rss+xml': [{ url: 'feed', title: 'rss' }],
    },
  },
  openGraph: {
    locale: 'en_US',
    type: 'website',
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.title,
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: [
      {
        url: `${siteMetadata.siteUrl}/og`,
        width: 1200,
        height: 630,
        alt: siteMetadata.title,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@kenneth_skovhus',
    description: siteMetadata.description,
    title: siteMetadata.title,
  },
}

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

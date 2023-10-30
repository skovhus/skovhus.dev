import 'typeface-montserrat'
import 'typeface-merriweather'
import './globals.css'

import type { Metadata } from 'next'

import { siteMetadata } from '../config'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import styles from './layout.module.css'
import { StyledComponentsRegistry } from './libs/registry'

// FIXME: seo stuff
export const metadata: Metadata = {
  title: { default: siteMetadata.title, template: `%s | ${siteMetadata.title}` },
  description: siteMetadata.description,
  robots: 'follow, index',
  // openGraph: {
  //   type: 'website',
  //   locale: 'en_US',
  //   url: siteMetadata.siteUrl,
  //   images: [
  //     {
  //       url: `${siteMetadata.siteUrl}/skovhus.jpg`,
  //       width: 1200,
  //       height: 630,
  //       alt: siteMetadata.title,
  //     },
  //   ],
  // },
  // }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // useEffect(() => {
  //   const handleRouteChange = (path: string) => {
  //     window?.goatcounter?.count?.({
  //       path,
  //     })
  //   }
  //   router.events.on('routeChangeComplete', handleRouteChange)
  //   return () => {
  //     router.events.off('routeChangeComplete', handleRouteChange)
  //   }
  // }, [router.events])

  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <main className={styles.main}>
            <Header />
            <section>{children}</section>
            <Footer />
          </main>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}

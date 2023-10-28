import 'typeface-montserrat'
import 'typeface-merriweather'
import '../libs/global-styles.css'

import { useRouter } from 'next/router'
import Script from 'next/script'
import React, { useEffect } from 'react'

declare global {
  interface Window {
    goatcounter: any
  }
}

function MyApp({ Component, pageProps }: any) {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (path: string) => {
      window?.goatcounter?.count?.({
        path,
      })
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <Component {...pageProps} />
      <Script
        async
        data-goatcounter="https://skovhus-dev.goatcounter.com/count"
        src="//gc.zgo.at/count.js"
        strategy="afterInteractive"
      />
    </>
  )
}

export default MyApp

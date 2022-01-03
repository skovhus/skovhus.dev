import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

import '../libs/global-styles.css'
import * as gtag from '../libs/google-tag'

function MyApp({ Component, pageProps }: any) {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return <Component {...pageProps} />
}

export default MyApp

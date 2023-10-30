'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

declare global {
  interface Window {
    goatcounter: {
      count: (opts: { path: string }) => void
    }
  }
}

let pathQueueAwaitingInitialization: string[] = []

export function NavigationTracking() {
  const pathname = usePathname()

  useEffect(() => {
    if (!window.goatcounter) {
      pathQueueAwaitingInitialization.push(pathname)
      return
    }

    window.goatcounter.count({
      path: pathname,
    })
  }, [pathname])

  useEffect(() => {
    const id = setInterval(() => {
      if (!window.goatcounter) {
        return
      }

      if (pathQueueAwaitingInitialization.length > 0) {
        pathQueueAwaitingInitialization.forEach((path) => {
          window.goatcounter.count({
            path,
          })
        })

        pathQueueAwaitingInitialization = []
      }

      clearInterval(id)
    }, 50)

    return () => clearInterval(id)
  }, [])

  return null
}

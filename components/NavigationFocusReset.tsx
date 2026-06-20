'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useLayoutEffect, useRef } from 'react'

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect

// After client-side navigation Next.js focuses the first DOM node of the new
// page; on list pages that is a link, which then shows a focus ring. Move that
// focus to <body> so the first item isn’t highlighted. This component renders
// after <main>, so its layout effect runs after Next has set focus but before
// paint — no visible flash. Blurring (rather than focusing an element) avoids
// scrolling the page.
export function NavigationFocusReset() {
  const pathname = usePathname()
  const isInitial = useRef(true)

  useIsomorphicLayoutEffect(() => {
    if (isInitial.current) {
      isInitial.current = false
      return
    }
    const active = document.activeElement
    if (active instanceof HTMLElement && active !== document.body) {
      active.blur()
    }
  }, [pathname])

  return null
}

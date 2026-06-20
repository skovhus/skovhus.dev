'use client'

import React, { useEffect, useLayoutEffect, useRef } from 'react'

import { getSlideAnimationProps } from '#/lib/slide-animation'

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect

// A template re-mounts on every navigation, which replays the slide-in
// animation. After navigation Next.js focuses the first DOM node of the new
// page (often a link, which then shows a focus ring). We move focus to this
// non-interactive wrapper instead. The wrapper is an ancestor of Next’s focus
// handler, so this layout effect runs after Next has set focus but before
// paint, avoiding any visible flicker.
export default function Template({ children }: { children: React.ReactNode }) {
  const { className, style } = getSlideAnimationProps({ stage: 0 })
  const ref = useRef<HTMLDivElement>(null)

  useIsomorphicLayoutEffect(() => {
    const node = ref.current
    if (!node) {
      return
    }
    if (node.contains(document.activeElement) && document.activeElement !== node) {
      node.focus({ preventScroll: true })
    }
  }, [])

  return (
    <div
      ref={ref}
      className={className}
      style={{ ...style, outline: 'none' }}
      tabIndex={-1}
    >
      {children}
    </div>
  )
}

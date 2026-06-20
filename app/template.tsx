import React from 'react'

import { getSlideAnimationProps } from '#/lib/slide-animation'

// A template re-mounts on every navigation, which replays the slide-in
// animation. It also gives Next.js a non-interactive element to move focus to
// after navigation, instead of focusing the first link on the page.
export default function Template({ children }: { children: React.ReactNode }) {
  const { className, style } = getSlideAnimationProps({ stage: 0 })

  return (
    <div className={className} style={{ ...style, outline: 'none' }} tabIndex={-1}>
      {children}
    </div>
  )
}

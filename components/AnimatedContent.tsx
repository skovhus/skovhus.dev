'use client'

import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import { consumeNavigationAnimation } from '#/lib/navigation-animation'
import { getSlideAnimationProps } from '#/lib/slide-animation'

export function AnimatedContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [animationCounter, setAnimationCounter] = useState(0)

  useEffect(() => {
    if (consumeNavigationAnimation()) {
      setAnimationCounter((c) => c + 1)
    }
  }, [pathname])

  return (
    <section key={animationCounter} {...getSlideAnimationProps({ stage: 0 })}>
      {children}
    </section>
  )
}

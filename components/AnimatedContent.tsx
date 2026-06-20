'use client'

import { usePathname } from 'next/navigation'
import React from 'react'

import { getSlideAnimationProps } from '#/lib/slide-animation'

export function AnimatedContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <section key={pathname} {...getSlideAnimationProps({ stage: 0 })}>
      {children}
    </section>
  )
}

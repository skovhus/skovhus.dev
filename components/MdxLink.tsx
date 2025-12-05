'use client'

import Link from 'next/link'
import { ComponentProps } from 'react'

import { triggerNavigationAnimation } from '#/lib/navigation-animation'

export function MdxLink({ href, ...props }: ComponentProps<'a'>) {
  if (href?.startsWith('/')) {
    return <Link href={href} onClick={triggerNavigationAnimation} {...props} />
  }
  return <a href={href} {...props} />
}

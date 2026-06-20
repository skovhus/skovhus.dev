'use client'

import Link from 'next/link'
import { ComponentProps } from 'react'

export function MdxLink({ href, ...props }: ComponentProps<'a'>) {
  if (href?.startsWith('/')) {
    return <Link href={href} {...props} />
  }
  return <a href={href} {...props} />
}

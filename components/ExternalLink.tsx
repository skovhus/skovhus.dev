import React from 'react'

import { ExternalIcon } from './ExternalIcon'

export const ExternalLink = ({
  children,
  showIcon = false,
  href,
}: {
  children: JSX.Element | string
  href: string
  showIcon?: boolean
}) => (
  <a target="_blank" rel="nofollow noopener noreferrer" href={href}>
    {children}
    {showIcon && <ExternalIcon />}
  </a>
)

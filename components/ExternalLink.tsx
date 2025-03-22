import React from 'react'

export const ExternalLink = ({
  children,
  href,
}: {
  children: JSX.Element | string
  href: string
}) => (
  <a target="_blank" rel="nofollow noopener noreferrer" href={href}>
    {children}
  </a>
)

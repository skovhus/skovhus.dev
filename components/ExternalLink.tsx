import React from 'react'
import styles from './ExternalLink.module.css'

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
    {showIcon && (
      <svg
        className={styles.externalIcon}
        width="12"
        height="13"
        viewBox="0 0 12 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M3.2 9.5L2.5 8.8L7.3 4H3V3H9V9H8V4.7L3.2 9.5Z" fill="currentColor" />
      </svg>
    )}
  </a>
)

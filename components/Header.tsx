'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

import { getSlideAnimationProps } from '#/lib/slide-animation'

import styles from './Header.module.css'
import ProfileImage from './ProfileImage'

const pages: { path: string; label: string }[] = [
  { path: '/', label: 'index' },
  { path: '/stream', label: 'stream' },
  { path: '/music', label: 'music' },
  { path: '/about', label: 'about' },
]

export function Header() {
  const pathname = usePathname()
  const slideAnimation = getSlideAnimationProps({ stage: 0 })

  const isActive = (path: string) => {
    if (pathname === path || (path.length > 1 && pathname.startsWith(path))) {
      return true
    }
    // Highlight "stream" when viewing blog posts
    if (path === '/stream' && pathname.startsWith('/blog')) {
      return true
    }
    return false
  }

  return (
    <header className={styles.header}>
      <nav
        className={`${styles.nav} ${slideAnimation.className}`}
        style={slideAnimation.style}
      >
        <div className={styles.navLinkContainer}>
          {pages.map(({ path, label }) => (
            <Link
              href={path}
              className={[
                styles.navLink,
                isActive(path) ? styles.navLinkActive : '',
              ].join(' ')}
              key={path}
            >
              {label}
            </Link>
          ))}
        </div>
        <div style={{ flexGrow: 1 }} />
        <ProfileImage />
      </nav>
    </header>
  )
}

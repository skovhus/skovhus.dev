'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

import { getSlideAnimationProps } from '../lib/slide-animation'
import styles from './Header.module.css'
import ProfileImage from './ProfileImage'

const pages: { path: string; label: string }[] = [
  { path: '/', label: 'index' },
  { path: '/blog', label: 'writing' },
  { path: '/talks', label: 'talks' },
  { path: '/music', label: 'discography' },
  { path: '/about', label: 'about' },
]

export function Header() {
  const pathname = usePathname()
  const slideAnimation = getSlideAnimationProps({ stage: 0 })

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
                pathname == path ? styles.navLinkActive : '',
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

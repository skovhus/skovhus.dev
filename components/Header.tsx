'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

import { getSlideAnimationProps } from '../lib/slide-animation'
import styles from './Header.module.css'
import ProfileImage from './ProfileImage'

const pages: { link: string; label?: string }[] = [
  { link: 'blog', label: 'writing' },
  { link: 'talks' },
  { link: 'music' },
  { link: 'about' },
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
          <Link
            href="/"
            className={styles.navLink}
            style={{ opacity: pathname == '/' ? 1 : 0.7 }}
          >
            index
          </Link>
          {pages.map(({ link, label }) => (
            <Link
              href={`/${link}`}
              className={[
                styles.navLink,
                pathname == `/${link}` ? styles.navLinkActive : '',
              ].join(' ')}
              key={link}
            >
              {label || link}
            </Link>
          ))}
        </div>
        <div style={{ flexGrow: 1 }} />
        <ProfileImage />
      </nav>
    </header>
  )
}

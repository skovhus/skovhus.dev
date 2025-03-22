'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

import { getSlideAnimationProps } from '../lib/slide-animation'
import styles from './Header.module.css'
import ProfileImage from './ProfileImage'

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
          {['blog', 'talks', 'music'].map((link) => (
            <Link
              href={`/${link}`}
              className={[
                styles.navLink,
                pathname == `/${link}` ? styles.navLinkActive : '',
              ].join(' ')}
              key={link}
            >
              {link}
            </Link>
          ))}
        </div>
        <div style={{ flexGrow: 1 }} />
        <ProfileImage />
      </nav>
    </header>
  )
}

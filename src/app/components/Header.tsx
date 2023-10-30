'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

import styles from './Header.module.css'
import ProfileImage from './ProfileImage'

export function Header() {
  const pathname = usePathname()

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
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
              className={styles.navLink}
              style={{ opacity: pathname == `/${link}` ? 1 : 0.7 }}
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

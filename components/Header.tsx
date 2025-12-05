'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import { getSlideAnimationProps } from '#/lib/slide-animation'

import styles from './Header.module.css'

const pages: { path: string; label: string }[] = [
  { path: '/', label: 'index' },
  // { path: '/stream', label: 'stream' },
  { path: '/blog', label: 'writing' },
  { path: '/talks', label: 'talks' },
  { path: '/ships', label: 'ships' },
  { path: '/music', label: 'music' },
  { path: '/about', label: 'about' },
]

export function Header() {
  const pathname = usePathname()
  const slideAnimation = getSlideAnimationProps({ stage: 0 })
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setScrollY(window.scrollY)
  }, [pathname])

  const isActive = (path: string) => {
    if (pathname === path || (path.length > 1 && pathname.startsWith(path))) {
      return true
    }
    return false
  }

  const isScrolled = scrollY > 10
  const nameOpacity = Math.max(0.5, 1 - scrollY / 160)

  return (
    <header className={`${styles.header} ${isScrolled ? styles.headerScrolled : ''}`}>
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
        <Link
          href="/"
          className={`${styles.navLink} ${styles.siteName}`}
          style={{ opacity: nameOpacity }}
        >
          Kenneth Skovhus
        </Link>
      </nav>
    </header>
  )
}

'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { type MouseEvent, useEffect, useState } from 'react'

import { getSlideAnimationProps } from '#/lib/slide-animation'

import styles from './Header.module.css'

const pages = [
  { path: '/', label: 'index' },
  { path: '/blog', label: 'writing' },
  { path: '/talks', label: 'talks' },
  { path: '/ships', label: 'ships' },
  { path: '/music', label: 'music' },
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
        <Link href="/" className={styles.prompt} aria-label="skovhus.dev home">
          <span className={styles.hideOnMobile}>
            <span className={styles.promptUser}>skovhus</span>
            <span className={styles.promptPunct}>@</span>
            <span className={styles.promptHost}>dev</span>
            <span className={styles.promptPunct}>:</span>
          </span>
          <span className={styles.promptPath}>~</span>
          <span className={styles.promptSign}>$</span>
        </Link>

        <div className={styles.navLinkContainer}>
          {pages.map(({ path, label }) => (
            <Link
              href={path}
              className={[
                styles.navLink,
                isActive(path) && styles.navLinkActive,
                path === '/' && styles.hideOnMobile,
              ]
                .filter(Boolean)
                .join(' ')}
              key={path}
              onClick={handleHeaderNavigation}
              scroll={false}
            >
              {label}
            </Link>
          ))}
          <span className={styles.cursor} aria-hidden="true" />
        </div>

        <div style={{ flexGrow: 1 }} />

        <Link
          href="/"
          className={`${styles.navLink} ${styles.siteName}`}
          onClick={handleHeaderNavigation}
          scroll={false}
          style={{ opacity: nameOpacity }}
        >
          <span className={styles.hideOnMobile}>// kenneth skovhus</span>
          <span className={styles.showOnMobile}>// skovhus</span>
        </Link>
      </nav>
    </header>
  )
}

function handleHeaderNavigation(event: MouseEvent<HTMLAnchorElement>) {
  if (event.defaultPrevented || event.button !== 0) {
    return
  }

  if (event.metaKey || event.altKey || event.ctrlKey || event.shiftKey) {
    return
  }

  window.scrollTo(0, 0)
}

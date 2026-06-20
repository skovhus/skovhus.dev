'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { type MouseEvent, useEffect, useState } from 'react'

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

  return (
    <header className={`${styles.header} ${isScrolled ? styles.headerScrolled : ''}`}>
      <nav className={styles.nav}>
        <Link
          href="/"
          className={styles.prompt}
          aria-label="skovhus.dev home"
          onClick={handleHeaderNavigation}
          scroll={false}
        >
          <span className={styles.promptUser}>skovhus</span>
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
        </div>
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

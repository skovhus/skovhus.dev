import React from 'react'
import { Link } from 'gatsby'

import ProfileImage from './ProfileImage'
import './Header.css'
import { Menu } from './Menu'

const HeaderLink = ({
  children,
  to,
  style = {},
}: {
  children: React.ReactNode
  to: string
  style?: React.CSSProperties
}) => (
  <Link
    style={{
      boxShadow: 'none',
      textDecoration: 'none',
      color: 'inherit',
      ...style,
    }}
    to={to}
  >
    {children}
  </Link>
)

type Props = {
  pageWidthStyles: React.CSSProperties
}

export default function Header({ pageWidthStyles }: Props) {
  return (
    <header>
      <nav
        style={{
          ...pageWidthStyles,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <HeaderLink
          to={'/'}
          style={{
            display: 'flex',
            alignItems: 'center',
            flexGrow: 1,
          }}
        >
          <ProfileImage />
          <span>Kenneth Skovhus</span>
        </HeaderLink>
        <Menu />
      </nav>
    </header>
  )
}

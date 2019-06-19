import React from 'react'
import { Link } from 'gatsby'

import ProfileImage from './ProfileImage'
import './Header.css'

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
        }}
      >
        <HeaderLink
          to={'/'}
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <ProfileImage />
          <span>Kenneth Skovhus</span>
        </HeaderLink>
      </nav>
    </header>
  )
}

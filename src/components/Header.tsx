import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

import ProfileImage from './ProfileImage'
import { Menu } from './Menu'

const StyledHeader = styled.header`
  background-color: var(--primary-color);
  background: var(--gradient-background);
  padding: 10px 0;
`

const StyledNav = styled.nav`
  font-family: Montserrat, sans-serif;
  font-weight: 200;
  color: white;
`

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
    <StyledHeader>
      <StyledNav
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
      </StyledNav>
    </StyledHeader>
  )
}

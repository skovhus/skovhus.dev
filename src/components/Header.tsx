import React from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'

import { PageWidthContainer } from './PageContainer'
import { useRouter } from 'next/router'
import ProfileImage from './ProfileImage'

export function Header({ showBackButton }: { showBackButton: boolean }) {
  const router = useRouter()

  const navigation = (
    <Nav>
      <NavLink href="/" isActive={router.pathname == '/'}>
        index
      </NavLink>
      {['blog', 'talks', 'music'].map((link) => (
        <NavLink href={`/${link}`} isActive={router.pathname == `/${link}`} key={link}>
          {link}
        </NavLink>
      ))}
    </Nav>
  )

  return (
    <StyledHeader>
      <PageWidthContainer>
        <StyledNav>
          {showBackButton ? <BackButton /> : navigation}
          <div style={{ flexGrow: 1 }} />
          <ProfileImage />
        </StyledNav>
      </PageWidthContainer>
    </StyledHeader>
  )
}

const BackButton = () => (
  <Link
    href={'/'}
    style={{
      boxShadow: 'none',
      textDecoration: 'none',
      color: 'inherit',
      display: 'flex',
      alignItems: 'center',
    }}
  >
    <BackArrow />
  </Link>
)

const NavLink = styled(Link)<{ isActive: boolean }>`
  opacity: ${({ isActive }) => (isActive ? 1 : 0.7)};
  text-decoration: none;

  &:hover {
    opacity: 1;
  }
`

const StyledHeader = styled.header`
  padding: 10px 0;
`

const StyledNav = styled.nav`
  color: white;
  display: flex;
  align-items: center;
  height: 80px;
`

const BackArrow = styled.div`
  border: solid white;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 6px;
  transform: rotate(135deg);
  margin-left: 10px;
`

const Nav = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`

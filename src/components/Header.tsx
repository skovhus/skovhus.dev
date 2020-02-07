import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

import ProfileImage, { PROFILE_IMAGE_WIDTH } from './ProfileImage'
import { Menu } from './Menu'
import { useWindowSize } from '../utils/useWindowSize'

const StyledHeader = styled.header`
  background: var(--background-context-image);
  padding: 10px 0;
`

const Title = styled.h1`
  font-size: 1.2rem;
  line-height: 1.5;
  margin: 0;
  color: white;
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
  margin-left: ${PROFILE_IMAGE_WIDTH / 2}px;
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
  showIntro: boolean
}

export default function Header({ showIntro, pageWidthStyles }: Props) {
  const windowSize = useWindowSize()
  const hasRoomForIntro = windowSize.innerWidth >= 630

  return (
    <StyledHeader>
      <div style={{ ...pageWidthStyles }}>
        <StyledNav>
          <HeaderLink
            to={'/'}
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            {showIntro ? (
              <>
                <ProfileImage />
                {hasRoomForIntro && (
                  <Title>
                    Kenneth Skovhus. 👋
                    <>
                      <br />
                      Software developer based in Copenhagen.
                    </>
                  </Title>
                )}
              </>
            ) : (
              <>
                <BackArrow />
              </>
            )}
          </HeaderLink>
          <div style={{ flexGrow: 1 }} />
          <Menu />
        </StyledNav>
      </div>
    </StyledHeader>
  )
}

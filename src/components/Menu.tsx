import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'

import { BurgerIcon } from './BurgerIcon'
import { Link as GatsbyLink } from 'gatsby'

const MenuContainer = styled.div`
  user-select: none;
  position: fixed;
  z-index: 20;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background: var(--background-context-color);
`

const MenuContent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`

const StyledGatsbyLink = styled(GatsbyLink)`
  color: white;
  padding: 20px;
  box-shadow: none;
`

export function Menu() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflowY = isOpen ? 'hidden' : ''
  }, [isOpen])

  const Link = ({ to, label }: { to: string; label: string }) => (
    <StyledGatsbyLink
      aria-label={`View ${label.toLowerCase()} page`}
      to={to}
      onClick={() => setIsOpen(false)}
    >
      {label}
    </StyledGatsbyLink>
  )

  return (
    <>
      <BurgerIcon isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      {isOpen && (
        <MenuContainer>
          <MenuContent>
            <Link to="#posts" label="Blog" />
            <Link to="#talks" label="Talks" />
            <Link to="#oss" label="Open source" />
            <Link to="#music" label="Music" />
            <Link to="/cv" label="CV" />
          </MenuContent>
        </MenuContainer>
      )}
    </>
  )
}

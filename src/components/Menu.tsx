import React, { useState, useEffect } from 'react'

import { BurgerIcon } from './BurgerIcon'
import { Link as GatsbyLink } from 'gatsby'

import './Menu.css'

export function Menu() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // FIXME: test on mobile safari
    document.body.style.overflowY = isOpen ? 'hidden' : ''
  }, [isOpen])

  const Link = ({ to, label }: { to: string; label: string }) => (
    <GatsbyLink
      aria-label={`View ${label.toLowerCase()} page`}
      to={to}
      onClick={() => setIsOpen(false)}
    >
      {label}
    </GatsbyLink>
  )

  return (
    <>
      <BurgerIcon isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      {isOpen && (
        <div className="MenuWrapper">
          <div className="MenuContent">
            <Link to="#posts" label="Blog" />
            <Link to="#talks" label="Talks" />
            <Link to="#oss" label="Open source" />
            <Link to="#music" label="Music" />
          </div>
        </div>
      )}
    </>
  )
}

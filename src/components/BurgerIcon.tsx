import React from 'react'

import './BurgerIcon.css'

type Props = {
  isOpen: boolean
  onClick: () => void
}

export function BurgerIcon({ isOpen, onClick }: Props) {
  return (
    <div className={isOpen ? 'BurgerIcon open' : 'BurgerIcon'} onClick={onClick}>
      <div className="BurgerIcon-bar1" key="b1" />
      <div className="BurgerIcon-bar2" key="b2" />
      <div className="BurgerIcon-bar3" key="b3" />
    </div>
  )
}

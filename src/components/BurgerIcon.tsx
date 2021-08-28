import React from 'react'
import styled from '@emotion/styled'

type BarProps = {
  isOpen: boolean
}

const BarContainer = styled.div`
  cursor: pointer;
  padding: 10px;
  z-index: 50;
`

const BaseBar = styled.div<BarProps>`
  width: 25px;
  height: 3px;
  background-color: #fff;
  margin: 4px 0;
  transition: 0.4s;
`

const Bar1 = styled(BaseBar)`
  transform: ${(props) =>
    props.isOpen ? `rotate(-45deg) translate(-4px, 4px)` : 'none'};
`

const Bar2 = styled(BaseBar)`
  opacity: ${(props) => (props.isOpen ? 0 : 1)};
`

const Bar3 = styled(BaseBar)`
  transform: ${(props) =>
    props.isOpen ? `rotate(45deg) translate(-6px, -6px)` : 'none'};
`

type Props = {
  isOpen: boolean
  onClick: () => void
}

export function BurgerIcon({ isOpen, onClick }: Props) {
  return (
    <BarContainer onClick={onClick}>
      <Bar1 isOpen={isOpen} />
      <Bar2 isOpen={isOpen} />
      <Bar3 isOpen={isOpen} />
    </BarContainer>
  )
}

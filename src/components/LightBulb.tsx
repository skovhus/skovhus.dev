import React from 'react'
import styled from '@emotion/styled'

type Props = {
  active: boolean
  onClick: () => void
}

const Svg = styled.svg`
  cursor: pointer;
  height: 40px;
  margin-right: 10px;
`

const Light = styled.path<{ active: boolean }>`
  transform: ${props =>
    props.active ? 'translate(0) scale(1)' : 'translate(50%, 50%) scale(0)'};
  transition: all 0.14s ease-in;
  opacity: ${props => (props.active ? 1 : 0)};
`

export const LightBulb = ({ active, onClick }: Props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    x="0"
    y="0"
    viewBox="0 0 275.3 413.3"
    onClick={onClick}
  >
    <path
      fill="#E2ECF1"
      d="M137.7 13.7C67.2 13.7 10 70.9 10 141.4c0 58.3 72.8 118.2 79.9 162.3h95.6c7.1-44 79.9-103.9 79.9-162.3-.1-70.5-57.2-127.7-127.7-127.7z"
    ></path>
    <Light
      active={active}
      fill="#FFDB55"
      d="M137.7 13.7C67.2 13.7 10 70.9 10 141.4c0 58.3 72.8 118.2 79.9
      162.3h95.6c7.1-44 79.9-103.9 79.9-162.3-.1-70.5-57.2-127.7-127.7-127.7z"
    ></Light>

    <g stroke="#38434A" strokeMiterlimit="10" strokeWidth="19.102">
      <path
        fill="#F1F2F2"
        d="M168.5 375.5h-61.7c-8.9 0-16-7.2-16-16v-55.8h93.8v55.8c0 8.8-7.2 16-16.1 16zM151.2 401.5h-27.1c-3.9 0-7-3.2-7-7v-19h41.1v19c0 3.9-3.1 7-7 7z"
      ></path>
      <path fill="none" d="M184.6 339.6L90.8 339.6"></path>
      <path
        fill="none"
        d="M137.7 13.7C67.2 13.7 10 70.9 10 141.4c0 58.3 72.8 118.2 79.9 162.3h95.6c7.1-44 79.9-103.9 79.9-162.3-.1-70.5-57.2-127.7-127.7-127.7z"
      ></path>
    </g>
    <g
      fill="#FFDB55"
      stroke="#FFF"
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="21.012"
    >
      <path d="M207.1 89.5c-12.3-16.1-28.4-29.1-46.9-37.8M225 121.4c-.8-2.2-1.8-4.4-2.7-6.5"></path>
    </g>
  </Svg>
)

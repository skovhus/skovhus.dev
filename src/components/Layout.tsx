import styled from '@emotion/styled'
import React from 'react'

import { Footer } from './Footer'
import { Header } from './Header'
import { PageWidthContainer } from './PageContainer'

type Props = {
  children: React.ReactNode
  showBackButton?: boolean
}

export function Layout({ children, showBackButton = false }: Props) {
  return (
    <Main>
      <Header showBackButton={showBackButton} />
      <PageWidthContainer>{children}</PageWidthContainer>
      <Footer />
    </Main>
  )
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

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
    <Container>
      <Header showBackButton={showBackButton} />
      <PageWidthContainer>{children}</PageWidthContainer>
      <Footer />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

'use client'
import React from 'react'
import styled from 'styled-components'

import { Footer } from './Footer'
import { Header } from './Header'

export function LegacyLayout({ children }: { children: React.ReactNode }) {
  return (
    <Container>
      <Header />
      <section>{children}</section>
      <Footer />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

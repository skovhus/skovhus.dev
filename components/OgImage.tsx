/* eslint-disable @next/next/no-img-element */
import React from 'react'

import { shortSiteDescription } from '../lib/constants'

export const OG_IMAGE_WIDTH = 1200
export const OG_IMAGE_HEIGHT = 630

const FONT_FAMILY = 'Montserrat' // Og Playground requires 'var(--font-montserrat)'
const BOLD_FONT_WEIGHT = 700
const REGULAR_FONT_WEIGHT = 400

const MARGIN = 80

export function OgImageDefault() {
  return (
    <Container>
      <div
        style={{
          alignItems: 'flex-end',
          display: 'flex',
        }}
      >
        <div
          style={{
            alignItems: 'center',
            display: 'flex',
            width: '100%',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', flexShrink: 1 }}>
            <Heading style={{ lineHeight: 1.2 }}>skovhus.dev</Heading>
            <SmallText
              style={{
                paddingTop: 12,
              }}
            >
              {shortSiteDescription}
            </SmallText>
          </div>
          <ProfileImage size={170} />
        </div>
      </div>
    </Container>
  )
}

export function OgImage(props: { title: string | null }) {
  return (
    <Container>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexGrow: 1,
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            gap: MARGIN / 2,
          }}
        >
          <Heading>{props.title}</Heading>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: MARGIN / 4,
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: MARGIN / 3,
            }}
          >
            <ProfileImage size={110} />
            <SmallText
              style={{
                fontWeight: BOLD_FONT_WEIGHT,
              }}
            >
              Kenneth Skovhus
            </SmallText>
          </div>
          <div style={{ flexGrow: 1, display: 'flex' }} />
          <SmallText>skovhus.dev</SmallText>
        </div>
      </div>
    </Container>
  )
}

function Container(props: { children: React.ReactNode }) {
  return (
    <div
      style={{
        background:
          'linear-gradient(to bottom, rgba(0,0,0,0) 40%, rgba(0,0,0,0.6)), url(https://www.skovhus.dev/assets/unsplash-ryan_hutton.jpg)',
        backgroundPosition: 'bottom',
        display: 'flex',
        height: '100%',
        padding: MARGIN,
        width: '100%',
      }}
    >
      {props.children}
    </div>
  )
}

function Heading(props: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div
      style={{
        display: 'flex',
        color: 'white',
        fontFamily: FONT_FAMILY,
        fontSize: 70,
        fontStyle: 'normal',
        fontWeight: BOLD_FONT_WEIGHT,
        letterSpacing: '-0.02em',
        lineHeight: '85px',
        // @ts-ignore text wrap is actually supported by Next image generation
        textWrap: 'balance',
        ...props.style,
      }}
    >
      {props.children}
    </div>
  )
}

function ProfileImage({ size }: { size: number }) {
  return (
    <div
      style={{
        marginBottom: 0,
        width: size,
        height: size,
        position: 'relative',
        flexShrink: 0,
        display: 'flex',
      }}
    >
      <img
        src={`https://www.skovhus.dev/skovhus.jpg`}
        alt={'Kenneth Skovhus'}
        width={size}
        height={size}
        style={{ borderRadius: '100%', display: 'flex' }}
      />
    </div>
  )
}

function SmallText(props: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div
      style={{
        color: 'white',
        fontFamily: FONT_FAMILY,
        fontSize: 35,
        fontStyle: 'normal',
        fontWeight: REGULAR_FONT_WEIGHT,
        letterSpacing: '-0.02em',
        lineHeight: 1.2,
        whiteSpace: 'pre-wrap',
        ...props.style,
      }}
    >
      {props.children}
    </div>
  )
}

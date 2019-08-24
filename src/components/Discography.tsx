import React from 'react'
import { rhythm } from '../utils/typography'

import { DISCOGRAPHY } from '../content/discography/index'

const SPACING = rhythm(2 / 4)

export default function Discography() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(auto-fill, minmax(160px, 1fr))`,
        gridGap: SPACING,
        alignItems: 'stretch',
      }}
    >
      {DISCOGRAPHY.map(({ image, linkTo, subTitle, title }, idx) => (
        <a
          href={linkTo}
          style={{
            boxShadow:
              '0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)',
            color: 'inherit',
            display: 'flex',
            flexDirection: 'column',
          }}
          target="_blank"
          rel="nofollow noopener noreferrer"
          key={idx}
        >
          <img
            src={image}
            alt={title}
            style={{
              maxWidth: '100%',
              marginBottom: 0,
              borderBottom: '1px solid #eee',
            }}
          />
          <div
            style={{
              padding: `0 ${SPACING} ${SPACING} ${SPACING}`,
              flexGrow: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              fontSize: '70%',
            }}
          >
            <div
              style={{
                fontWeight: 'bold',
                marginTop: SPACING,
                marginBottom: SPACING,
              }}
            >
              {title}
            </div>
            <div>{subTitle}</div>
          </div>
        </a>
      ))}
    </div>
  )
}

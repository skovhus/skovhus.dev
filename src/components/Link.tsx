import React from 'react'
import NextLink from 'next/link'

import { rhythm } from '../libs/typography'
import { ExternalLink } from './ExternalLink'

export const Link = ({
  description,
  linkTo,
  subTitle,
  title,
}: {
  subTitle: string
  description: string
  linkTo: string
  title: string
}) => {
  const linkElement = linkTo.startsWith('http') ? (
    <ExternalLink href={linkTo} noUnderline>
      {title}
    </ExternalLink>
  ) : (
    <NextLink href={linkTo} style={{ boxShadow: `none` }}>
      {title}
    </NextLink>
  )

  return (
    <>
      <h3
        style={{
          marginBottom: rhythm(1 / 4),
        }}
      >
        {linkElement}
      </h3>
      <small>{subTitle}</small>
      <p
        dangerouslySetInnerHTML={{
          __html: description,
        }}
      />
    </>
  )
}

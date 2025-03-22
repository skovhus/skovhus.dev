import NextLink from 'next/link'
import React from 'react'

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
    <ExternalLink href={linkTo}>{title}</ExternalLink>
  ) : (
    <NextLink href={linkTo} style={{ boxShadow: `none` }}>
      {title}
    </NextLink>
  )

  return (
    <>
      <h3
        style={{
          marginBottom: '0.4375rem',
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

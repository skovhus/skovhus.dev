import NextLink from 'next/link'
import React from 'react'

import { ExternalLink } from './ExternalLink'
import styles from './Link.module.css'

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
    <NextLink href={linkTo} className={styles.link}>
      {title}
    </NextLink>
  )

  return (
    <>
      <h2
        style={{
          marginBottom: 0,
        }}
      >
        {linkElement}
      </h2>
      <small style={{ opacity: 0.8 }}>{subTitle}</small>
      <p
        dangerouslySetInnerHTML={{
          __html: description,
        }}
      />
    </>
  )
}

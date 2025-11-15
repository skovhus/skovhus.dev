import NextLink from 'next/link'
import React from 'react'

import { ExternalLink } from './ExternalLink'
import styles from './FeedItem.module.css'

export const FeedItem = ({
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
  const isExternal = linkTo.startsWith('http')

  const linkElement = isExternal ? (
    <ExternalLink href={linkTo} showIcon>
      {title}
    </ExternalLink>
  ) : (
    <NextLink href={linkTo} className={styles.link}>
      {title}
    </NextLink>
  )

  return (
    <div className={styles.feedItem}>
      <h2 className={styles.title}>{linkElement}</h2>
      <small className={styles.subtitle}>{subTitle}</small>
      <p
        dangerouslySetInnerHTML={{
          __html: description,
        }}
      />
    </div>
  )
}

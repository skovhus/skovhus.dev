import NextLink from 'next/link'
import React from 'react'

import { FeedItem as FeedItemProps } from '../lib/feed'
import { ExternalLink } from './ExternalLink'
import { FeedItemTag } from './FeedItemTag'
import styles from './FeedItem.module.css'

export const FeedItem = ({
  type,
  description,
  linkTo,
  subTitle,
  title,
}: Omit<FeedItemProps, 'date'>) => {
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
      <small className={styles.subtitle}>
        <FeedItemTag>{type}</FeedItemTag>
        {subTitle}
      </small>
      <p
        dangerouslySetInnerHTML={{
          __html: description,
        }}
      />
    </div>
  )
}

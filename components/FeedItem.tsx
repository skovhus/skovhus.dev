import NextLink from 'next/link'
import React from 'react'

import { FeedItem as FeedItemProps } from '../lib/feed'
import { ExternalLink } from './ExternalLink'
import styles from './FeedItem.module.css'
import { FeedItemTag } from './FeedItemTag'

export const FeedItem = ({
  type,
  description,
  linkTo,
  subTitle,
  title,
}: Omit<FeedItemProps, 'date'>) => {
  const isExternal = linkTo?.startsWith('http')

  const content = (
    <>
      <h2 className={styles.title}>
        {isExternal && linkTo ? (
          <ExternalLink href={linkTo} showIcon={true}>
            {title}
          </ExternalLink>
        ) : (
          title
        )}
      </h2>
      <small className={styles.subtitle}>
        <FeedItemTag>{type}</FeedItemTag>
        {subTitle}
      </small>
      <p
        dangerouslySetInnerHTML={{
          __html: description,
        }}
      />
    </>
  )

  if (!linkTo) {
    return <div className={styles.feedItemStatic}>{content}</div>
  }

  if (isExternal) {
    return <div className={styles.feedItem}>{content}</div>
  }

  return (
    <NextLink href={linkTo} className={styles.feedItem}>
      {content}
    </NextLink>
  )
}

import NextLink from 'next/link'
import React from 'react'

import { FeedItem as FeedItemProps } from '#/lib/feed'

import { ExternalIcon } from './ExternalIcon'
import styles from './FeedItem.module.css'
import { FeedItemTag } from './FeedItemTag'

export const FeedItem = ({
  type,
  description,
  linkTo,
  subTitle,
  title,
}: Omit<FeedItemProps, 'date' | 'type'> & { type?: FeedItemProps['type'] }) => {
  const isExternal = linkTo?.startsWith('http')
  const shouldOpenInNewTab = isExternal && !linkTo?.startsWith('https://linear')

  const content = (
    <>
      <h2 className={styles.title}>
        {title}
        {isExternal && <ExternalIcon />}
      </h2>
      <small className={styles.subtitle}>
        {type && <FeedItemTag>{type}</FeedItemTag>}
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
    return (
      <a
        href={linkTo}
        className={styles.feedItem}
        {...(shouldOpenInNewTab && {
          target: '_blank',
          rel: 'noopener noreferrer',
        })}
      >
        {content}
      </a>
    )
  }

  return (
    <NextLink href={linkTo} className={styles.feedItem}>
      {content}
    </NextLink>
  )
}

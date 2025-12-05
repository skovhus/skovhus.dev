import { format } from 'date-fns'
import { Metadata } from 'next'
import NextLink from 'next/link'

import { ExternalIcon } from '#/components/ExternalIcon'
import { getAllFeedItems } from '#/lib/feed'

import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Stream',
  description: 'A running log of things I’ve built and learned along the way.',
}

export default function Stream() {
  const items = getAllFeedItems()

  return (
    <>
      <p className={styles.intro}>{metadata.description}</p>
      <div className={styles.changelog}>
        {items.map((item) => {
          const isExternal = item.linkTo?.startsWith('http')
          const shouldOpenInNewTab =
            isExternal && !item.linkTo?.startsWith('https://linear')

          const content = (
            <>
              <span className={styles.date}>{format(item.date, 'MMM yyyy')}</span>
              <span className={styles.tag}>{item.type}</span>
              <span className={styles.title}>
                {item.title}
                {isExternal && (
                  <span className={styles.externalIcon}>
                    <ExternalIcon />
                  </span>
                )}
              </span>
            </>
          )

          if (!item.linkTo) {
            return (
              <div key={item.title} className={styles.entry}>
                {content}
              </div>
            )
          }

          if (isExternal) {
            return (
              <a
                key={item.linkTo}
                href={item.linkTo}
                className={styles.entry}
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
            <NextLink key={item.linkTo} href={item.linkTo} className={styles.entry}>
              {content}
            </NextLink>
          )
        })}
      </div>
    </>
  )
}

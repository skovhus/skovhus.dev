import React from 'react'

import styles from './FeedList.module.css'

export function FeedList({ children }: { children: React.ReactNode }) {
  return (
    <section className={styles.feedList} tabIndex={-1}>
      {children}
    </section>
  )
}

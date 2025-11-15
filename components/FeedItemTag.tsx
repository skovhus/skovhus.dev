import React from 'react'

import styles from './FeedItemTag.module.css'

export const FeedItemTag = ({ children }: { children: React.ReactNode }) => {
  return <span className={styles.tag}>{children}</span>
}

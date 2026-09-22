import { Metadata } from 'next'

import Discography from '#/components/Discography'

import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Music',
  description: 'Records I’ve played bass on, engineered, mixed, or produced.',
}

export default function Music() {
  return (
    <>
      <p className={styles.intro}>{metadata.description}</p>
      <Discography />
    </>
  )
}

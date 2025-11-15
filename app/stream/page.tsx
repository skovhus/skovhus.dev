import { Metadata } from 'next'

import { FeedItem } from '../../components/FeedItem'
import { getAllFeedItems } from '../../lib/feed'

export const metadata: Metadata = {
  title: 'Stream',
  description: 'A stream of bits and pieces on building software.',
}

export default function Stream() {
  const items = getAllFeedItems()

  return (
    <>
      <p style={{ marginBottom: '2rem', opacity: 0.8 }}>
        A stream of bits and pieces on building software.
      </p>
      {items.map((item) => (
        <FeedItem
          description={item.description}
          key={item.linkTo}
          linkTo={item.linkTo}
          subTitle={item.subTitle}
          title={item.title}
        />
      ))}
    </>
  )
}

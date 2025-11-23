import { Metadata } from 'next'

import { FeedItem } from '../../components/FeedItem'
import { getAllFeedItems } from '../../lib/feed'

export const metadata: Metadata = {
  title: 'Stream',
  description: 'A running log of things I’ve built and learned along the way.',
}

export default function Stream() {
  const items = getAllFeedItems()

  return (
    <>
      <p style={{ marginTop: '1.3rem', marginBottom: '2.5rem' }}>
        {metadata.description}
      </p>
      {items.map((item) => (
        <FeedItem {...item} key={item.linkTo} />
      ))}
    </>
  )
}

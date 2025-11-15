import { Metadata } from 'next'

import { FeedItem } from '../../components/FeedItem'
import { getAllFeedItems } from '../../lib/feed'

export const metadata: Metadata = {
  title: 'Feed',
  description: 'A unified feed of blog posts and talks',
}

export default function Feed() {
  const items = getAllFeedItems()

  return (
    <>
      <p style={{ marginBottom: '2rem', opacity: 0.8 }}>
        A unified feed of blog posts and talks, sorted by date.
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

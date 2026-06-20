import { Metadata } from 'next'

import { FeedItem } from '#/components/FeedItem'
import { FeedList } from '#/components/FeedList'
import { SHIPS } from '#/content/ships'
import { formatItemSubtitle } from '#/lib/feed'

export const metadata: Metadata = {
  title: 'Ships',
}

export default function Ships() {
  return (
    <FeedList>
      {SHIPS.map((ship) => (
        <FeedItem
          description={ship.description}
          key={ship.title}
          linkTo={ship.linkTo}
          subTitle={formatItemSubtitle(ship.date, ship.subTitle)}
          title={ship.title}
        />
      ))}
    </FeedList>
  )
}

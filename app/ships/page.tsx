import { Metadata } from 'next'

import { FeedItem } from '#/components/FeedItem'
import { SHIPS } from '#/content/ships'

export const metadata: Metadata = {
  title: 'Ships',
}

export default function Ships() {
  return (
    <>
      {SHIPS.map((ship) => (
        <FeedItem
          description={ship.description}
          key={ship.title}
          linkTo={ship.linkTo}
          subTitle={ship.subTitle}
          title={ship.title}
        />
      ))}
    </>
  )
}


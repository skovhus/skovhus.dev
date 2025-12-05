import { Metadata } from 'next'

import { FeedItem } from '#/components/FeedItem'
import { TALKS } from '#/content/talks'

export const metadata: Metadata = {
  title: 'Talks',
}

export default function Talks() {
  return (
    <>
      {TALKS.map((talk) => (
        <FeedItem
          type={
            talk.linkTo.includes('speakerdeck.com')
              ? ('slides' as const)
              : ('talk' as const)
          }
          description={talk.description}
          key={talk.linkTo}
          linkTo={talk.linkTo}
          subTitle={talk.subTitle}
          title={talk.title}
        />
      ))}
    </>
  )
}

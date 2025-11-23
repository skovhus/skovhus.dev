import { compareDesc } from 'date-fns'

import { Ship, SHIPS } from '../content/ships'
import { Talk, TALKS } from '../content/talks'
import { BlogPost, formatBlogMetadata, getAllBlogPosts } from './blog'
import { formatDate } from './date-utils'

export type FeedItemType = 'blog' | 'talk' | 'slides' | 'ship'

export type FeedItem = {
  type: FeedItemType
  title: string
  description: string
  linkTo?: string
  subTitle: string
  date: Date
  // Blog-specific fields
  timeToRead?: number
}

/**
 * Returns all feed items (blogs + talks + ships) sorted by date.
 */
export function getAllFeedItems(): FeedItem[] {
  const blogPosts: FeedItem[] = getAllBlogPosts().map((post: BlogPost) => ({
    type: 'blog' as const,
    title: post.title,
    description: post.description,
    linkTo: post.url,
    subTitle: formatBlogMetadata(post),
    date: new Date(post.publishedAt),
    timeToRead: post.timeToRead,
  }))

  const talks: FeedItem[] = TALKS.map((talk: Talk) => ({
    type: talk.linkTo.includes('speakerdeck.com')
      ? ('slides' as const)
      : ('talk' as const),
    title: talk.title,
    description: talk.description,
    linkTo: talk.linkTo,
    subTitle: formatExternalItemSubtitle(talk.date, talk.subTitle),
    date: new Date(talk.date),
  }))

  const ships: FeedItem[] = SHIPS.map((ship: Ship) => ({
    type: 'ship' as const,
    title: ship.title,
    description: ship.description,
    linkTo: ship.linkTo,
    subTitle: formatExternalItemSubtitle(ship.date, ship.subTitle),
    date: new Date(ship.date),
  }))

  const allItems = [...blogPosts, ...talks, ...ships]

  // Sort by date, most recent first
  return allItems.sort((a, b) => compareDesc(a.date, b.date))
}

function formatExternalItemSubtitle(dateString: string, subtitle: string): string {
  return `${formatDate(dateString)}\u00A0\u00A0·\u00A0\u00A0${subtitle}`
}

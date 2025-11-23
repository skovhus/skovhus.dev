import { compareDesc } from 'date-fns'
import { format, parseISO } from 'date-fns'

import { Ship, SHIPS } from '#/content/ships'
import { Talk, TALKS } from '#/content/talks'
import { BlogPost, getAllBlogPosts } from './blog'

export type FeedItemType = 'blog' | 'talk' | 'slides' | 'ship'

export type FeedItem = {
  type: FeedItemType
  title: string
  description: string
  linkTo?: string
  subTitle: string
  date: Date
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
    subTitle: formatItemSubtitle(post.publishedAt, `${post.timeToRead} minute read`),
    date: new Date(post.publishedAt),
  }))

  const talks: FeedItem[] = TALKS.map((talk: Talk) => ({
    type: talk.linkTo.includes('speakerdeck.com')
      ? ('slides' as const)
      : ('talk' as const),
    title: talk.title,
    description: talk.description.trim(),
    linkTo: talk.linkTo,
    subTitle: formatItemSubtitle(talk.date, talk.subTitle),
    date: new Date(talk.date),
  }))

  const ships: FeedItem[] = SHIPS.map((ship: Ship) => ({
    type: 'ship' as const,
    title: ship.title,
    description: ship.description.trim(),
    linkTo: ship.linkTo,
    subTitle: formatItemSubtitle(ship.date, ship.subTitle),
    date: new Date(ship.date),
  }))

  const allItems = [...blogPosts, ...talks, ...ships]

  // Sort by date, most recent first
  return allItems.sort((a, b) => compareDesc(a.date, b.date))
}

function formatItemSubtitle(dateString: string, subtitle?: string): string {
  const date = format(parseISO(dateString), 'MMMM yyyy')
  return subtitle ? `${date}\u00A0\u00A0·\u00A0\u00A0${subtitle}` : date
}

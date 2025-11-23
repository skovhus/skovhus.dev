import { compareDesc } from 'date-fns'

import { BlogPost, formatBlogMetadata, getAllBlogPosts } from './blog'
import { Talk, TALKS } from './talks'

export type FeedItemType = 'blog' | 'talk' | 'slides'

export type FeedItem = {
  type: FeedItemType
  title: string
  description: string
  linkTo: string
  subTitle: string
  date: Date
  // Blog-specific fields
  timeToRead?: number
}

/**
 * Returns all feed items (blogs + talks) sorted by date.
 */
export function getAllFeedItems(): FeedItem[] {
  const blogPosts: FeedItem[] = getAllBlogPosts().map((post: BlogPost) => ({
    type: 'blog' as const,
    title: post.title,
    description: post.description,
    linkTo: post.url,
    subTitle: formatBlogMetadata(post.formattedDate, post.timeToRead),
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
    subTitle: talk.subTitle,
    date: new Date(talk.date),
  }))

  const allItems = [...blogPosts, ...talks]

  // Sort by date, most recent first
  return allItems.sort((a, b) => compareDesc(a.date, b.date))
}

import { compareDesc } from 'date-fns'

import { BlogPost, getAllBlogPosts } from './blog'
import { Talk, TALKS } from './talks'

export type FeedItemType = 'blog' | 'talk'

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
    subTitle: `${post.formattedDate} • ${post.timeToRead} minute read`,
    date: new Date(post.publishedAt),
    timeToRead: post.timeToRead,
  }))

  const talks: FeedItem[] = TALKS.map((talk: Talk) => {
    const isSpeakerDeck = talk.linkTo.includes('speakerdeck.com')
    const mediaType = isSpeakerDeck ? 'slides' : 'video'
    return {
      type: 'talk' as const,
      title: talk.title,
      description: talk.description,
      linkTo: talk.linkTo,
      subTitle: `${talk.subTitle} • ${mediaType}`,
      date: new Date(talk.date),
    }
  })

  const allItems = [...blogPosts, ...talks]

  // Sort by date, most recent first
  return allItems.sort((a, b) => compareDesc(a.date, b.date))
}

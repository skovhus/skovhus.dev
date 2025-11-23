import { allBlogPosts, BlogPost as ContentlayerBlogPost } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'
import readingTime from 'reading-time'

import { formatDate } from './date-utils'

export type BlogPost = ContentlayerBlogPost & {
  timeToRead: number
}

export function getPostBySlug(slug: string): BlogPost {
  const post = getAllBlogPosts().find((p) => p.slug === slug)
  if (!post) {
    throw new Error(`No post found for slug: ${slug}`)
  }

  return post
}

/**
 * Returns all blog posts sorted by date.
 */
export function getAllBlogPosts(): BlogPost[] {
  const posts = allBlogPosts.sort((a, b) =>
    compareDesc(new Date(a.publishedAt), new Date(b.publishedAt)),
  )

  return posts.map((post) => {
    const timeToRead = Math.round(readingTime(post.body.code).minutes)

    return {
      ...post,
      timeToRead,
    }
  })
}

/**
 * Formats blog post metadata subtitle.
 */
export function formatBlogMetadata(post: BlogPost): string {
  return `${formatDate(post.publishedAt)}\u00A0\u00A0·\u00A0\u00A0${post.timeToRead} minute read`
}

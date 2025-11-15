import { allBlogPosts, BlogPost as ContentlayerBlogPost } from 'contentlayer/generated'
import { compareDesc, format, parseISO } from 'date-fns'
import readingTime from 'reading-time'

export type BlogPost = ContentlayerBlogPost & {
  formattedDate: string
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
    const formattedDate = format(parseISO(post.publishedAt), 'MMMM dd, yyyy')

    const timeToRead = Math.round(readingTime(post.body.code).minutes)

    return {
      ...post,
      formattedDate,
      timeToRead,
    }
  })
}

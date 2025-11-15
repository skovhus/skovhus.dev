import { Metadata } from 'next'

import { FeedItem } from '../../components/FeedItem'
import { getAllBlogPosts } from '../../lib/blog'

export const metadata: Metadata = {
  title: 'Blog',
}

export default function BlogIndex() {
  const posts = getAllBlogPosts()

  return (
    <>
      {posts.map((post) => (
        <FeedItem
          type="blog"
          description={post.description}
          key={post.url}
          linkTo={post.url}
          subTitle={`${post.formattedDate} • ${post.timeToRead} minute read`}
          title={post.title}
        />
      ))}
    </>
  )
}

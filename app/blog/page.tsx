import { Metadata } from 'next'

import { FeedItem } from '#/components/FeedItem'
import { FeedList } from '#/components/FeedList'
import { formatBlogMetadata, getAllBlogPosts } from '#/lib/blog'

export const metadata: Metadata = {
  title: 'Blog',
}

export default function BlogIndex() {
  const posts = getAllBlogPosts()

  return (
    <FeedList>
      {posts.map((post) => (
        <FeedItem
          description={post.description}
          key={post.url}
          linkTo={post.url}
          subTitle={formatBlogMetadata(post)}
          title={post.title}
        />
      ))}
    </FeedList>
  )
}

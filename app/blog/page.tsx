import { Metadata } from 'next'

import { Link } from '../../components/Link'
import { getAllBlogPosts } from '../../lib/blog'

export const metadata: Metadata = {
  title: 'Blog',
}

export default function BlogIndex() {
  const posts = getAllBlogPosts()

  return (
    <>
      {posts.map((post) => (
        <Link
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

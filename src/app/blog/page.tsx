import { Metadata } from 'next'

import { getAllBlogPosts } from '@/src/libs/blog'

import { HugeHeading } from '../../components/HugeHeading'
import { Link } from '../../components/Link'

export const metadata: Metadata = {
  title: 'Blog',
}

export default function BlogIndex() {
  const posts = getAllBlogPosts()

  return (
    <>
      <HugeHeading>
        I occasionally write things down to share and distill learnings.
      </HugeHeading>
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

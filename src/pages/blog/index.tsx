import React from 'react'

import { HugeHeading } from '../../components/HugeHeading'
import { Layout } from '../../components/Layout'
import { Link } from '../../components/Link'
import SEO from '../../components/Seo'
import { getAllPosts, Post } from '../../libs/blog'
import { generateRssFeed } from '../../libs/rss'

export async function getStaticProps() {
  const posts = getAllPosts()

  generateRssFeed({ posts })

  return {
    props: {
      posts,
    },
  }
}

export default function Index({ posts }: { posts: Post[] }) {
  return (
    <Layout>
      <SEO pageTitle="Blog" />
      <HugeHeading>
        I occasionally write things down to share and distill learnings.
      </HugeHeading>
      {posts
        .filter((post) => !post.frontmatter.draft)
        .map((post) => {
          const { frontmatter, slug, timeToRead } = post
          const { date, description, title } = frontmatter

          return (
            <Link
              description={description}
              key={slug}
              linkTo={`/blog/${slug}`}
              subTitle={`${date} • ${timeToRead} minute read`}
              title={title}
            />
          )
        })}
    </Layout>
  )
}

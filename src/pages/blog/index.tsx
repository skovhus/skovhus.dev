import React from 'react'

import Layout from '../../components/Layout'
import SEO from '../../components/Seo'
import { getAllPosts, Post } from '../../libs/blog'
import { generateRssFeed } from '../../libs/rss'
import { Link } from '../../components/Link'

export async function getStaticProps() {
  const posts = getAllPosts()

  generateRssFeed({ posts })

  return {
    props: {
      posts,
    },
  }
}

type Props = { posts: Post[] }

export default function Index({ posts }: Props) {
  return (
    <Layout>
      <SEO />
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

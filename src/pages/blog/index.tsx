import React from 'react'

import { HugeHeading } from '../../components/HugeHeading'
import { Layout } from '../../components/Layout'
import { Link } from '../../components/Link'
import SEO from '../../components/Seo'
import { BlogPost, getAllBlogPosts } from '../../libs/blog'
import { generateRssFeed } from '../../libs/rss'

export async function getStaticProps() {
  const posts = getAllBlogPosts()

  generateRssFeed({ posts })

  return {
    props: {
      posts,
    },
  }
}

export default function Index({ posts }: { posts: BlogPost[] }) {
  return (
    <Layout>
      <SEO pageTitle="Blog" />
      <HugeHeading>
        I occasionally write things down to share and distill learnings.
      </HugeHeading>
      {posts.map((post) => {
        const { formattedDate, description, title, slug, timeToRead } = post

        return (
          <Link
            description={description}
            key={slug}
            linkTo={`/blog/${slug}`}
            subTitle={`${formattedDate} • ${timeToRead} minute read`}
            title={title}
          />
        )
      })}
    </Layout>
  )
}

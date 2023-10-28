import fs from 'node:fs'
import { Feed } from 'feed'

import { siteUrl, siteMetadata } from '../config'
import { Post } from './blog'

export const generateRssFeed = async ({ posts }: { posts: Post[] }) => {
  const date = new Date()
  const author = {
    name: 'Kenneth Skovhus',
    email: 'kenneth.skovhus@gmail.com',
    link: 'https://twitter.com/kenneth_skovhus',
  }

  const feed = new Feed({
    title: siteMetadata.title,
    description: siteMetadata.description,
    language: 'en',
    id: siteUrl,
    link: siteUrl,
    favicon: `${siteUrl}/favicon.png`,
    copyright: `All rights reserved ${date.getFullYear()}, ${author.name}`,
    updated: date,
    feedLinks: {
      rss2: `${siteUrl}/rss.xml`,
    },
    author,
  })

  posts.forEach((post: Post) => {
    const url = `${siteUrl}/blog/${post.slug}`

    feed.addItem({
      title: post.frontmatter.title,
      id: url,
      link: url,
      description: post.frontmatter.description,
      content: post.content,
      date: new Date(post.frontmatter.isoDate),
    })
  })

  fs.writeFileSync('./public/rss.xml', feed.rss2())
}

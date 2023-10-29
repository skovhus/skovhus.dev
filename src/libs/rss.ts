import fs from 'node:fs'

import { parseISO } from 'date-fns'
import { Feed } from 'feed'

import { siteMetadata, siteUrl } from '../config'
import { BlogPost } from './blog'

export const generateRssFeed = async ({ posts }: { posts: BlogPost[] }) => {
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

  posts.forEach((post: BlogPost) => {
    const url = `${siteUrl}/blog/${post.slug}`

    feed.addItem({
      title: post.title,
      id: url,
      link: url,
      description: post.description,
      content: post.body.code,
      date: parseISO(post.date),
    })
  })

  fs.writeFileSync('./public/rss.xml', feed.rss2())
}

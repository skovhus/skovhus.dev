import { Feed } from 'feed'

import { siteMetadata, siteUrl } from '../../config'
import { getAllBlogPosts } from './blog'

const generateRssFeed = async (): Promise<Feed> => {
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

  getAllBlogPosts().forEach((post) => {
    const url = `${siteUrl}/blog/${post.slug}`

    feed.addItem({
      title: post.title,
      id: url,
      link: url,
      description: post.description,
      date: new Date(post.date),
    })
  })

  return feed
}

export async function makeRssResponse(): Promise<Response> {
  const feed = await generateRssFeed()
  return new Response(feed.rss2(), {
    headers: {
      'Content-Type': 'application/atom+xml; charset=utf-8',
    },
  })
}

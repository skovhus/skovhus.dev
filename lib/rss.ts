import { Feed } from 'feed'

import { siteMetadata, siteUrl } from './constants'
import { getAllFeedItems } from './feed'

const generateRssFeed = async (): Promise<Feed> => {
  const date = new Date()
  const author = {
    name: 'Kenneth Skovhus',
    email: 'kenneth.skovhus@gmail.com',
    link: 'https://x.com/kenneth_skovhus',
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

  // Add all feed items (blogs + talks)
  getAllFeedItems().forEach((item) => {
    const description =
      item.type === 'blog' ? item.description : `${item.subTitle}. ${item.description}`
    const type = item.type.charAt(0).toUpperCase() + item.type.slice(1)
    feed.addItem({
      title: `[${type}] ${item.title}`,
      id: item.linkTo,
      link: item.linkTo,
      description,
      date: item.date,
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

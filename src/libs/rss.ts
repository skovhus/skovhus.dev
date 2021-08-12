import fs from "fs";
import { Feed } from "feed";
import { getAllPosts, Post } from "./blog";
import { siteUrl, siteMetadata } from "../config";

export const generateRssFeed = async ({posts}: {posts: Post[]}) => {
  const date = new Date();
  const author = {
    name: "Kenneth Skovhus",
    email: "kenneth.skovhus@gmail.com",
    link: "https://twitter.com/kenneth_skovhus",
  };

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
      rss2: `${siteUrl}/rss/feed.xml`,
      json: `${siteUrl}/rss/feed.json`,
      atom: `${siteUrl}/rss/atom.xml`,
    },
    //author,
  });

  posts.forEach((post: Post) => {
    const url = `${siteUrl}/blog/${post.slug}`;

    feed.addItem({
      title: post.frontmatter.title,
      id: url,
      link: url,
      description: post.frontmatter.description,
      content: post.content,
      date: new Date(post.frontmatter.isoDate),
    });
  });

  fs.mkdirSync("./public/rss", { recursive: true });
  fs.writeFileSync("./public/rss/feed.xml", feed.rss2());
  fs.writeFileSync("./public/rss/atom.xml", feed.atom1());
  fs.writeFileSync("./public/rss/feed.json", feed.json1());
};

import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { siteMetadata } from '../config'

type Props = {
  description?: string
  image?: string
  pageTitle?: string
}

export default function SEO({ description, image, pageTitle }: Props) {
  const router = useRouter()
  const metaDescription = description || siteMetadata.description

  const { siteUrl, title: siteTitle } = siteMetadata
  const metaImageSrc = `${siteUrl}${image || '/skovhus.jpg'}`
  const url = `${siteUrl}${router.pathname || '/'}`
  const title = pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle

  return (
    <Head>
      <title>{title}</title>
      <meta name="robots" content="follow, index" />
      <meta name="description" content={metaDescription} />
      <meta property="image" content={image} />

      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={metaImageSrc} />
      <meta property="og:site_name" content={title} />

      <meta property="twitter:card" content="summary" />
      <meta property="twitter:site" content="@kenneth_skovhus" />
      <meta property="twitter:creator" content="@kenneth_skovhus" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={metaDescription} />
      <meta property="twitter:image" content={metaImageSrc} />

      <link rel="alternate" type="application/rss+xml" href="/rss.xml"/>
    </Head>
  )
}

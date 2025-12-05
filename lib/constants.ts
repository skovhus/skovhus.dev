import { Metadata } from 'next'

import { BlogPost } from '#/.contentlayer/generated'
import { OG_IMAGE_HEIGHT, OG_IMAGE_WIDTH } from '#/components/OgImage'

export const siteUrl = `https://www.skovhus.dev`

export const shortSiteDescription =
  'Bits, bytes, and beats. A collection of words, talks, and music by software engineer Kenneth Skovhus.'

export const siteMetadata = {
  siteUrl,
  description: `${shortSiteDescription} Portfolio, blog, talks, discography.`,
  title: 'Kenneth Skovhus',
} as const

export function getBaseMetadata(
  props: {
    article?: BlogPost & {
      url: string
    }
    title?: string
    robots?: Metadata['robots']
  } = {},
): Metadata {
  const { article } = props
  const ogImageParam = article ? `?title=${article.ogImageTitle ?? article.title}` : ''
  const description = article?.description ?? siteMetadata.description
  const title = props.title ?? article?.title ?? siteMetadata.title

  return {
    title: props.title ??
      article?.title ?? {
        default: siteMetadata.title,
        template: `${siteMetadata.title} | %s`,
      },
    description,
    robots: props.robots ?? { follow: true, index: true },
    metadataBase: new URL(siteMetadata.siteUrl),
    authors: { name: 'Kenneth Skovhus', url: siteMetadata.siteUrl },
    openGraph: {
      locale: 'en_US',
      publishedTime: article?.publishedAt,
      type: article ? 'article' : 'website',
      url: article ? article.url : siteMetadata.siteUrl,
      siteName: siteMetadata.title,
      title,
      description,
      images: [
        {
          url: `${siteMetadata.siteUrl}/og${ogImageParam}`,
          width: OG_IMAGE_WIDTH,
          height: OG_IMAGE_HEIGHT,
          alt: article?.title ?? siteMetadata.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      creator: '@kenneth_skovhus',
      description,
      title,
    },
  }
}

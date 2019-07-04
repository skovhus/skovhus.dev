import React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

import defaultMetaImage from '../../static/skovhus.jpg'

type Props = {
  description?: string
  lang?: string
  meta: { name: string; content: string }[]
  title: string
  image?: string
}

export default function SEO({ description, lang, meta, title, image }: Props) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  const { siteUrl } = site.siteMetadata
  const metaImageSrc = image || `${siteUrl}${defaultMetaImage}`

  if (!metaImageSrc.startsWith('https')) {
    throw new Error(`Invalid metaImageSrc ${metaImageSrc}`)
  }

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:site`,
          content: `@kenneth_skovhus`,
        },
        {
          name: `twitter:creator`,
          content: '@kenneth_skovhus',
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: 'twitter:image',
          content: metaImageSrc,
        },
        {
          name: 'og:image',
          content: metaImageSrc,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

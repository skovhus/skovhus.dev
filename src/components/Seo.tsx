import React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

import defaultMetaImage from '../../static/skovhus.jpg'

type Props = {
  description?: string
  image?: string
  location: Location
  meta: { name: string; content: string }[]
  pageTitle?: string
}

export default function SEO({ description, image, location, meta, pageTitle }: Props) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteUrl
            description
            title
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  const { siteUrl, title: siteTitle } = site.siteMetadata
  const metaImageSrc = image || `${siteUrl}${defaultMetaImage}`
  const url = `${siteUrl}${location.pathname || '/'}`

  if (!metaImageSrc.startsWith('https')) {
    throw new Error(`Invalid metaImageSrc ${metaImageSrc}`)
  }

  const title = pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle

  return (
    <Helmet
      htmlAttributes={{
        lang: 'en',
      }}
      title={title}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `image`,
          content: metaImageSrc,
        },
        {
          property: 'og:url',
          content: url,
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
          property: 'og:image',
          content: metaImageSrc,
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
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

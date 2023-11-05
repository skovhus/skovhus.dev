import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Metadata } from 'next/types'
import { useMDXComponent } from 'next-contentlayer/hooks'

import { ExternalLink } from '../../../components/ExternalLink'
import { HugeHeading } from '../../../components/HugeHeading'
import { getPostBySlug } from '../../../lib/blog'
import { getBaseMetadata, siteMetadata } from '../../../lib/constants'
import styles from './page.module.css'

export const dynamic = 'force-static'

export async function generateMetadata({
  params,
}: SlugProps): Promise<Metadata | undefined> {
  const post = getPostBySlug(params.slug)
  if (!post) {
    return
  }
  const { siteUrl } = siteMetadata
  const { title, publishedAt: publishedTime, description, slug } = post

  return getBaseMetadata({
    title,
    publishedTime,
    description,
    url: `${siteUrl}/blog/${slug}`,
    ogType: 'article',
  })
}

export default function BlogPostTemplate({ params }: SlugProps) {
  const post = getPostBySlug(params.slug)
  if (!post) {
    return notFound()
  }

  const { devToLink, title, timeToRead, formattedDate } = post

  return (
    <section>
      <article className={styles.article}>
        <HugeHeading style={{ marginTop: '3rem', fontSize: '2.5rem' }}>
          {title}
        </HugeHeading>
        <p className={styles.subtitle}>
          {formattedDate} • {timeToRead} minute read
        </p>
        <Mdx code={post.body.code} />
      </article>

      {devToLink && (
        <div className={styles.linkOut}>
          Discuss this post on <ExternalLink href={devToLink}>dev.to</ExternalLink>.
        </div>
      )}
    </section>
  )
}

type SlugProps = {
  params: { slug: string }
}

// Mdx

const CustomLink = (props: any) => {
  const { href } = props

  if (href.startsWith('/')) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    )
  }

  if (href.startsWith('#')) {
    return <a {...props} />
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />
}

const components = {
  //  Image: RoundedImage,
  a: CustomLink,
}

function Mdx({ code }: { code: string }) {
  const Component = useMDXComponent(code)

  return (
    <article className="prose">
      <Component components={components} />
    </article>
  )
}

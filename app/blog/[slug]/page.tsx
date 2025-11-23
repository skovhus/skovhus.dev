import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Metadata } from 'next/types'
import { useMDXComponent } from 'next-contentlayer2/hooks'

import { ExternalLink } from '#/components/ExternalLink'
import { HugeHeading } from '#/components/HugeHeading'
import { formatBlogMetadata, getPostBySlug } from '#/lib/blog'
import { getBaseMetadata, siteMetadata } from '#/lib/constants'
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

  return getBaseMetadata({
    article: {
      ...post,
      url: `${siteUrl}/blog/${post.slug}`,
    },
  })
}

export default function BlogPostTemplate({ params }: SlugProps) {
  const post = getPostBySlug(params.slug)
  if (!post) {
    return notFound()
  }

  const { devToLink, title } = post

  return (
    <section>
      <article className={styles.article}>
        <HugeHeading style={{ fontSize: '2.5rem' }}>{title}</HugeHeading>
        <p className={styles.subtitle}>{formatBlogMetadata(post)}</p>
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

import { format, parseISO } from 'date-fns'
import Link from 'next/link'

import { ExternalLink } from '#/components/ExternalLink'
import { FeaturedVideo } from '#/components/FeaturedVideo'
import ProfileImage from '#/components/ProfileImage'
import { TALKS } from '#/content/talks'
import { getAllBlogPosts } from '#/lib/blog'

import styles from './page.module.css'

export default function Home() {
  const recentPosts = getAllBlogPosts().slice(0, 3)

  return (
    <>
      <div className={styles.heroImage}>
        <ProfileImage size={72} />
      </div>
      <h1 className={styles.heroHeading}>
        Hey, I’m Kenneth. I’m a software engineer, 2x dad, and{' '}
        <Link href="/music">music nerd</Link>.
      </h1>
      <p>
        Based in Copenhagen, Denmark. Currently building{' '}
        <ExternalLink href="https://linear.app/">Linear</ExternalLink>.
      </p>

      <p>
        This is my digital notebook — a collection of <Link href="/blog">writings</Link>,{' '}
        <Link href="/talks">talks</Link>, and <Link href="/ships">things I’ve built</Link>
        . Think of it as my drawer of interesting bits, fighting digital sharecropping one
        post at a time.
      </p>
      <p>
        Follow via <Link href="/feed">RSS</Link> or connect on{' '}
        <ExternalLink href="https://www.linkedin.com/in/skovhus">LinkedIn</ExternalLink>{' '}
        or <ExternalLink href="https://x.com/kenneth_skovhus">Twitter/X</ExternalLink>.
      </p>

      <div className={styles.sectionHeader}>
        <span className={styles.label}>Recent writing</span>
        <Link href="/blog" className={styles.sectionLink}>
          All writing →
        </Link>
      </div>
      <div className={styles.postList}>
        {recentPosts.map((post) => (
          <Link key={post.url} href={post.url} className={styles.post}>
            <span className={styles.postTitle}>{post.title}</span>
            <span className={styles.postDate}>
              {format(parseISO(post.publishedAt), 'MMM yyyy')}
            </span>
          </Link>
        ))}
      </div>

      <div className={styles.sectionHeader}>
        <span className={styles.label}>Latest talk</span>
        <Link href="/talks" className={styles.sectionLink}>
          All talks →
        </Link>
      </div>
      {TALKS[0] && <FeaturedVideo talk={TALKS[0]} />}
    </>
  )
}

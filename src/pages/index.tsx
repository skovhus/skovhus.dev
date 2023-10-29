import { ExternalLink } from '../components/ExternalLink'
import { HugeHeading } from '../components/HugeHeading'
import { Layout } from '../components/Layout'
import SEO from '../components/Seo'
import { BlogPost, getAllBlogPosts } from '../libs/blog'
import { generateRssFeed } from '../libs/rss'

export async function getStaticProps() {
  const posts = getAllBlogPosts()

  generateRssFeed({ posts })

  return {
    props: {
      posts,
    },
  }
}

export default function Index({ posts }: { posts: BlogPost[] }) {
  return (
    <Layout>
      <SEO />
      <HugeHeading>
        Hey, I&apos;m Kenneth. I&apos;m a software engineer, 2 x dad, and music nerd.
      </HugeHeading>
      <p style={{ marginTop: '2rem' }}>
        Based in Copenhagen, Denmark. Writes code for{' '}
        <ExternalLink href="https://linear.app/">Linear</ExternalLink>.
      </p>

      <p>
        This is my portfolio where I gather random bits and pieces – my attempt to fight
        digital sharecropping. Feel free to connect on{' '}
        <ExternalLink href="https://twitter.com/kenneth_skovhus" noUnderline>
          Twitter
        </ExternalLink>{' '}
        or{' '}
        <ExternalLink href="https://www.linkedin.com/in/skovhus" noUnderline>
          LinkedIn
        </ExternalLink>
        .
      </p>
    </Layout>
  )
}

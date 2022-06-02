// NOTE: this could be as generic as the blogs if more markdown pages should be added

import React, { useEffect } from 'react'
import matter from 'gray-matter'
import fs from 'fs'
import { join } from 'path'

import Layout from '../components/Layout'
import SEO from '../components/Seo'
import { markdownToHtml } from '../libs/markdown'

const CV_MD_PATH = join(process.cwd(), 'src', 'content', 'markdown', `cv.md`)

export async function getStaticProps() {
  const fileContents = fs.readFileSync(CV_MD_PATH, 'utf8')
  const node = matter(fileContents)
  const content = await markdownToHtml(node.content)

  return {
    props: {
      content,
    },
  }
}

export default function CvPage({ content }: { content: string }) {
  useEffect(() => {
    const intervalId = setInterval(() => {
      fetch('api/test')
        .then((res) => res.json())
        .then((data) => {
          console.warn('Data returned', data)
        })
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <Layout showHeaderIntro>
      <SEO pageTitle={'CV'} />
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </Layout>
  )
}

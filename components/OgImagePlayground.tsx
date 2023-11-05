'use client'
import { useSearchParams } from 'next/navigation'
import React from 'react'

import { getAllBlogPosts } from '../lib/blog'
import { OG_IMAGE_HEIGHT, OG_IMAGE_WIDTH, OgImage, OgImageDefault } from './OgImage'

export function OgImagePlayground() {
  const searchParams = useSearchParams()
  const [title, setTitle] = React.useState(searchParams.get('title'))
  const random = searchParams.get('random') === '1'

  const Component = title ? OgImage : OgImageDefault

  React.useEffect(() => {
    if (!random) {
      return
    }

    function updateTitle() {
      const posts = getAllBlogPosts()
      const randomPost = posts[Math.floor(Math.random() * posts.length)]
      setTitle(randomPost!.title)
    }

    updateTitle()

    const interval = setInterval(updateTitle, 1000)
    return () => clearInterval(interval)
  }, [random])

  return (
    <div
      style={{
        height: OG_IMAGE_HEIGHT,
        width: OG_IMAGE_WIDTH,
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <Component title={title} />
    </div>
  )
}

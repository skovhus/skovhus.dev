import type { Talk } from '#/content/talks'

import styles from './FeaturedVideo.module.css'

export function FeaturedVideo({ talk }: { talk: Talk }) {
  const youtubeId = extractYouTubeId(talk.linkTo)
  if (!youtubeId) {
    return null
  }

  return (
    <section className={styles.featured}>
      <h2 className={styles.title}>{talk.title}</h2>
      <small className={styles.subtitle}>{talk.subTitle}</small>
      <p className={styles.description}>{talk.description}</p>
      <div className={styles.videoWrapper}>
        <iframe
          src={`https://www.youtube.com/embed/${youtubeId}`}
          title={talk.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </section>
  )
}

function extractYouTubeId(url: string): string | null {
  const match = url.match(/youtube\.com\/watch\?v=([^&]+)/)
  return match?.[1] ?? null
}

import { Metadata } from 'next'

import { Link } from '../../components/Link'
import { TALKS } from '../../lib/talks'

export const metadata: Metadata = {
  title: 'Talks',
}

export default function Talks() {
  return (
    <>
      {TALKS.map((talk) => (
        <Link {...talk} key={talk.title} />
      ))}
    </>
  )
}

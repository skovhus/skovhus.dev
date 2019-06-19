import React from 'react'

import { rhythm } from '../utils/typography'
import ProfileImage from './ProfileImage'

export default function Bio() {
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
      }}
    >
      <ProfileImage />
      <p>
        Kenneth Skovhus is a full-stack engineer and music recording enthusiast from
        Copenhagen, Denmark.
        {` `}
        <a href={`https://twitter.com/kenneth_skovhus`}>Follow him on Twitter</a>
      </p>
    </div>
  )
}

import NextImage from 'next/image'
import React from 'react'

export const PROFILE_IMAGE_WIDTH = 50

export default function ProfileImage() {
  return (
    <div
      style={{
        marginBottom: 0,
        width: PROFILE_IMAGE_WIDTH,
        height: PROFILE_IMAGE_WIDTH,
        position: 'relative',
        flexShrink: 0,
      }}
    >
      {/* Type instantiation is excessively deep and possibly infinite.
       // @ts-ignore*/}
      <NextImage
        src="/skovhus.jpg"
        alt={'Kenneth Skovhus'}
        width={PROFILE_IMAGE_WIDTH}
        height={PROFILE_IMAGE_WIDTH}
        style={{ borderRadius: '100%' }}
      />
    </div>
  )
}

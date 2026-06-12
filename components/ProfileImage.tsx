import NextImage from 'next/image'
import React from 'react'

export default function ProfileImage({ size = 50 }: { size?: number }) {
  return (
    <NextImage
      src="/skovhus.jpg"
      alt="Kenneth Skovhus"
      width={size}
      height={size}
      priority
      style={{ borderRadius: '100%', marginBottom: 0 }}
    />
  )
}

import styled from '@emotion/styled'
import NextImage from 'next/legacy/image'
import React from 'react'

export const PROFILE_IMAGE_WIDTH = 50

const ImageContainer = styled.div`
  margin-bottom: 0;
  width: ${PROFILE_IMAGE_WIDTH}px;
  height: ${PROFILE_IMAGE_WIDTH}px;
  position: relative;
  flex-shrink: 0;
`

const RoundedImage = styled(NextImage)`
  border-radius: 100%;
`

export default function ProfileImage() {
  return (
    <ImageContainer>
      {/* Type instantiation is excessively deep and possibly infinite.
       // @ts-ignore*/}
      <RoundedImage
        src="/skovhus.jpg"
        alt={'Kenneth Skovhus'}
        layout="fixed"
        width={PROFILE_IMAGE_WIDTH}
        height={PROFILE_IMAGE_WIDTH}
      />
    </ImageContainer>
  )
}

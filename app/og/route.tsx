import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server'
import React from 'react'

import {
  OG_IMAGE_HEIGHT,
  OG_IMAGE_WIDTH,
  OgImage,
  OgImageDefault,
} from '../../components/OgImage'

export const runtime = 'edge'

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl
  const title = searchParams.get('title')

  return new ImageResponse(title ? <OgImage title={title} /> : <OgImageDefault />, {
    width: OG_IMAGE_WIDTH,
    height: OG_IMAGE_HEIGHT,
    fonts: [
      {
        name: 'Montserrat',
        data: await fetch(
          new URL('../../public/fonts/Montserrat-Bold.ttf', import.meta.url),
        ).then((res) => res.arrayBuffer()),
        weight: 700,
        style: 'normal',
      },
      {
        name: 'Montserrat',
        data: await fetch(
          new URL('../../public/fonts/Montserrat-Regular.ttf', import.meta.url),
        ).then((res) => res.arrayBuffer()),
        weight: 400,
        style: 'normal',
      },
    ],
  })
}

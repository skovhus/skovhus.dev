import { makeRssResponse } from '@/src/libs/rss'

export async function GET() {
  return makeRssResponse()
}

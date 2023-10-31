import { makeRssResponse } from '../libs/rss'

export async function GET() {
  return makeRssResponse()
}

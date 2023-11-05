import { makeRssResponse } from '../../lib/rss'

export async function GET() {
  return makeRssResponse()
}

import remark from 'remark'
import html from 'remark-html'
import prism from 'remark-prism'
import smartypants from '@silvenon/remark-smartypants'

export async function markdownToHtml(markdownString: string) {
  const result = await remark()
    .use(prism)
    .use(smartypants)
    .use(html)
    .process(markdownString)
  // FIXME: markdown image captions lost (okay I guess...)

  // FIXME: gatsby-remark-external-links _target blank
  return result.toString()
}

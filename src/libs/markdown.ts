import remark from 'remark'
import html from 'remark-html'
import prism from 'remark-prism'
import smartypants from '@silvenon/remark-smartypants'
import figureCaption from 'gridsome-remark-figure-caption'
import remarkExternalLinks from 'remark-external-links'

export async function markdownToHtml(markdownString: string) {
  const result = await remark()
    // https://github.com/sergioramos/remark-prism/issues/265
    .use(html, { sanitize: false })
    .use(prism)
    .use(smartypants)
    .use(remarkExternalLinks, { target: '_blank', rel: ['nofollow'] })
    .use(figureCaption, {
      figureClassName: 'figure-block',
      imageClassName: 'figure-image',
      captionClassName: 'figure-caption',
    })
    .process(markdownString)

  return result.toString()
}

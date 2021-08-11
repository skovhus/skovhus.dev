import remark from 'remark'
import html from 'remark-html'
import prism from 'remark-prism'
import smartypants from '@silvenon/remark-smartypants'
import figureCaption from 'gridsome-remark-figure-caption'

export async function markdownToHtml(markdownString: string) {
  const result = await remark()
    .use(prism)
    .use(smartypants)
    .use(html)
    .use(figureCaption, {
      figureClassName: "figure-block",
      imageClassName: "figure-image",
      captionClassName: "figure-caption",
    })
    .process(markdownString)

  // FIXME: gatsby-remark-external-links _target blank
  return result.toString()
}

import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeFigure from 'rehype-figure'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'

const BlogPost = defineDocumentType(() => ({
  name: 'BlogPost',
  filePathPattern: `posts/**/*.md*`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    ogImageTitle: {
      type: 'string',
      description: 'The open graph image title of the post',
      required: false,
    },
    description: {
      type: 'string',
      description: 'A short description of the post',
      required: true,
    },
    publishedAt: {
      type: 'date',
      description: 'The publish date of the post',
      required: true,
    },
    devToLink: {
      type: 'string',
      description: 'A link to the post on dev.to',
      required: false,
    },
    featuredImage: {
      type: 'string',
      description: 'A path to the featured image. Current not used for anything...',
      required: false,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => `/blog/${doc._raw.flattenedPath.replace('posts/', '')}`,
    },
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath.replace('posts/', ''),
    },
  },
}))

const CurriculumVitae = defineDocumentType(() => ({
  name: 'CurriculumVitae',
  filePathPattern: `cv.md`,
  isSingleton: true,
  contentType: 'mdx',
  fields: {},
}))

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [BlogPost, CurriculumVitae],
  mdx: {
    rehypePlugins: [
      rehypeSlug,
      [rehypeFigure, { className: 'figure-with-caption' }],

      [
        rehypePrettyCode,
        {
          theme: 'material-theme-palenight',
          onVisitLine(node: any) {
            // Prevent lines from collapsing in `display: grid` mode, and allow empty
            // lines to be copy/pasted
            if (node.children.length === 0) {
              node.children = [{ type: 'text', value: ' ' }]
            }
          },
          onVisitHighlightedLine(node: any) {
            node.properties.className.push('line--highlighted')
          },
          onVisitHighlightedWord(node: any) {
            node.properties.className = ['word--highlighted']
          },
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['anchor'],
          },
        },
      ],
    ],
  },
})

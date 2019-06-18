type Talk = {
  description: string
  linkTo: string
  title: string
  subTitle: string
}

export const TALKS: Talk[] = [
  {
    description:
      'As frameworks come and go and best practices see constant change, it is increasingly challenging to make confident decisions about client-side code. We present our experiences in search for the right abstractions and architecture optimized for change. We also elaborate on how selecting the React ecosystem for our stack improved our workflow and product quality, as well as examine problems we faced.',
    linkTo: 'https://vimeo.com/168543655',
    title: 'Rethinking front-end development at issuu.com',
    subTitle: 'At the Frontend Conference (May 2016)',
  },
]

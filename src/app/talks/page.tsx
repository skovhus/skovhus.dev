import { Metadata } from 'next'

import { HugeHeading } from '../../components/HugeHeading'
import { Link } from '../../components/Link'

export const metadata: Metadata = {
  title: 'Talks',
}

export default function Talks() {
  return (
    <>
      <HugeHeading>
        I enjoy giving talks. Here are some recordings and slides.
      </HugeHeading>
      {TALKS.map((talk) => (
        <Link {...talk} key={talk.title} />
      ))}
    </>
  )
}

type Talk = {
  description: string
  linkTo: string
  title: string
  subTitle: string
}

// TODO: images
// TODO: slides
const TALKS: Talk[] = [
  {
    description:
      'Summing up 2+ years of learnings from my journey into the React Native jungle. How to get started? What to be aware of? Lessons learned and battles fought.',
    linkTo: 'https://www.youtube.com/watch?v=S12ypU2VFfU',
    title: 'A journey into React Native development 🌴',
    subTitle: 'Copenhagen React Meetup at Leo Innovation Lab (May 2019)',
  },
  {
    description:
      'My motivation for making contributing to open source software my new year’s resolution in 2017. Hopefully, this will motivate people to do the same thing.',
    linkTo: 'https://speakerdeck.com/skovhus/making-open-source-my-new-years-resolution',
    title: 'Making open source my new year’s resolution',
    subTitle: 'Tech festival (September 2017)',
  },
  {
    description:
      'A brief motivation for the importance of static type safety in larger codebases. Comparison of different static type-checkers options for front-end code: TypeScript, Flow, Reason, Elm. Trade-offs and recommendations.',
    linkTo: 'https://speakerdeck.com/skovhus/type-safety-plus-front-end-code-equals',
    title: 'type safety + front-end code =',
    subTitle: 'Copenhagen.js Meetup at issuu.com (June 2017)',
  },
  {
    description:
      'Short and practical introduction to codemods. They are "scripted search and replace" and super useful for automation and refactoring.',
    linkTo: 'https://www.youtube.com/watch?v=eMI0UBav8Q4',
    title: 'An introduction to automated refactoring with JavaScript codemods 👾',
    subTitle: 'Copenhagen.js Meetup (December 2016)',
  },
  {
    description:
      'As frameworks come and go and best practices see constant change, it is increasingly challenging to make confident decisions about client-side code. We present our experiences in search for the right abstractions and architecture optimized for change. We also elaborate on how selecting the React ecosystem for our stack improved our workflow and product quality, as well as examine problems we faced.',
    linkTo: 'https://vimeo.com/168543655',
    title: 'Rethinking front-end development at issuu.com',
    subTitle: 'At the Frontend Conference (May 2016)',
  },
  {
    description:
      'After using React since early 2015 it was time to evaluate the first year. Where did we come from? What improvements to our codebase did React introduce? Based on learnings from issuu.com.',
    linkTo:
      'https://speakerdeck.com/skovhus/evaluating-a-year-working-with-react-and-redux',
    title: 'Evaluating a year working with React & Redux',
    subTitle: 'React and Redux Copenhagen Meetup (April 2016)',
  },
]

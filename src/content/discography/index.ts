import { useStaticQuery, graphql } from 'gatsby'
import { FluidObject } from 'gatsby-image'
import { DiscographyImageQuery } from '../../__generated__/gatsby-types'

type Image = FluidObject

type DiscographyElement = {
  linkTo: string
  title: string
  subTitle: string
  image: Image
}

export const useDiscographyData = (): DiscographyElement[] => {
  const {
    allFile: { edges },
  } = useStaticQuery<DiscographyImageQuery>(
    graphql`
      query DiscographyImage {
        allFile(filter: { sourceInstanceName: { eq: "discography" } }) {
          edges {
            node {
              name
              childImageSharp {
                fluid(maxWidth: 350) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `
  )

  type ImageMap = { [name: string]: Image }

  const nameToImage: ImageMap = edges
    .map(edge => edge.node)
    .filter(node => node.childImageSharp)
    .reduce((acc: ImageMap, { childImageSharp, name }) => {
      if (!childImageSharp || !name || !childImageSharp.fluid) {
        throw new Error(`childImageSharp or name was missing`)
      }

      acc[name] = childImageSharp.fluid
      return acc
    }, {})

  const getImage = (fileName: string): Image => {
    if (!(fileName in nameToImage)) {
      throw new Error(`Image ${fileName} not found`)
    }
    return nameToImage[fileName]
  }

  return [
    {
      linkTo: 'https://open.spotify.com/album/5m2T9VPMmzXIR3zXSkiVDz',
      title: 'Freddy and the Phantoms: "First Blood Universe" (2019)',
      subTitle: 'Engineering, co-production',
      image: getImage('freddy-first-blood-universe'),
    },
    {
      linkTo: 'https://open.spotify.com/album/4ggXw0iv9LuhuQVYfxII9H',
      title: 'Go for Gold: "Canned Goods Never Say Die" (2018)',
      subTitle: 'Bass, engineering, mix, production',
      image: getImage('go-for-gold-canned-goods'),
    },

    {
      linkTo: 'https://open.spotify.com/album/7dRSHYf2qgKGXyUaa2uTI1',
      title:
        'Go for Gold: "Kunst – How to Be Something for Others, While Being Completely Self​-​Absorbed" (2014)',
      subTitle: 'Bass, engineering',
      image: getImage('go-for-gold-kunst'),
    },
    {
      linkTo: 'https://open.spotify.com/album/6Kkgu8GsxGKgBIwQ6XMrpm',
      title: 'Go for Gold: EP (2011)',
      subTitle: 'Bass, engineering, mix, production',
      image: getImage('go-for-gold-ep'),
    },
    {
      linkTo: 'https://open.spotify.com/album/7Iyek8NrjlyGUJ5fTw0BOA',
      title: 'Freddy and the Phantoms: "Leaving the Landscape" (2010)',
      subTitle: 'Engineering, mix, production',
      image: getImage('freddy-leaving-the-landscape'),
    },
    {
      linkTo:
        'https://soundcloud.com/cleomalone/sets/fear-comes-with-imagination-ep-2008',
      title: 'Cleo Malone: "Fear Comes With Imagination" (2008)',
      subTitle: 'Bass, engineering',
      image: getImage('cleo-malone-fear'),
    },
  ]
}

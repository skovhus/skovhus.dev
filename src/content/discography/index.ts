import coverCleoMaloneFear from './cleo-malone-fear.jpeg'
import coverFreddyFirstBlood from './freddy-first-blood-universe.jpeg'
import coverFreddyLeaving from './freddy-leaving-the-landscape.jpeg'
import coverGoForGoldCannedGoods from './go-for-gold-canned-goods.jpeg'
import coverGoForGoldEp from './go-for-gold-ep.jpeg'
import coverGoForGoldKunst from './go-for-gold-kunst.jpeg'

type DiscographyElement = {
  linkTo: string
  title: string
  subTitle: string
  image: string
}

export const DISCOGRAPHY: DiscographyElement[] = [
  {
    linkTo: 'https://open.spotify.com/album/5m2T9VPMmzXIR3zXSkiVDz',
    title: 'Freddy and the Phantoms: "First Blood Universe" (2019)',
    subTitle: 'Engineering, co-production',
    image: coverFreddyFirstBlood,
  },
  {
    linkTo: 'https://open.spotify.com/album/4ggXw0iv9LuhuQVYfxII9H',
    title: 'Go for Gold: "Canned Goods Never Say Die" (2018)',
    subTitle: 'Bass, engineering, mix, production',
    image: coverGoForGoldCannedGoods,
  },

  {
    linkTo: 'https://open.spotify.com/album/7dRSHYf2qgKGXyUaa2uTI1',
    title:
      'Go for Gold: "Kunst – How to Be Something for Others, While Being Completely Self​-​Absorbed" (2014)',
    subTitle: 'Bass, engineering',
    image: coverGoForGoldKunst,
  },
  {
    linkTo: 'https://open.spotify.com/album/6Kkgu8GsxGKgBIwQ6XMrpm',
    title: 'Go for Gold: EP (2011)',
    subTitle: 'Bass, engineering, mix, production',
    image: coverGoForGoldEp,
  },
  {
    linkTo: 'https://open.spotify.com/album/7Iyek8NrjlyGUJ5fTw0BOA',
    title: 'Freddy and the Phantoms: "Leaving the Landscape" (2010)',
    subTitle: 'Engineering, mix, production',
    image: coverFreddyLeaving,
  },
  {
    linkTo: 'https://soundcloud.com/cleomalone/sets/fear-comes-with-imagination-ep-2008',
    title: 'Cleo Malone: "Fear Comes With Imagination" (2008)',
    subTitle: 'Bass, engineering',
    image: coverCleoMaloneFear,
  },
  /*
  {
    linkTo: 'https://soundcloud.com/cleomalone/sets/demo-ii-2007',
    title: 'Cleo Malone: "Demo II" (2007)',
    subTitle: 'Bass, engineering, mix, production',
    image: coverCleoMalone2,
  },
  {
    linkTo: 'https://soundcloud.com/cleomalone/sets/demo-i-2006',
    title: 'Cleo Malone: "Demo I" (2006)',
    subTitle: 'Bass, engineering, mix, production',
    image: coverCleoMalone1,
  },
  */
]

// Set published: false to hide a piece without deleting it. This replaces the
// commented-out markup blocks in the old index.html.

export const works = [
  {
    id: 'vertigo-x',
    title: 'Vertigo X',
    href: 'https://the-genesis.notion.site/Vertigo-X-4646624ff0614964846af59a1955ec4e',
    description: 'Redefining e-sports in Africa.',
    image: '/assets/Vertigo.png',
    alt: 'Vertigo X',
    published: true,
  },
  {
    id: 'shakad',
    title: 'Shakad',
    href: 'https://dribbble.com/shots/11217015-SHAKAD',
    description:
      'SHAKAD is a profile sharing app that helps business people, entrepreneurs and professionals connect and network on a more intuitive level. It shares contact information through QR Codes.',
    image: '/assets/shakad.png',
    alt: 'Shakad',
    // styles/style.css has a dedicated #shakad width rule at the 1440px breakpoint
    imageId: 'shakad',
    published: false,
  },
]

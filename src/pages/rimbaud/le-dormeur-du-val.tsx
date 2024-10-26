import { NextSeo } from 'next-seo'
import PoemDisplay from '../../components/layout/PoemDisplay'
import { SITE_URL } from '../../utils/config'

export default function DormeurDuVal() {
  const poemTitle = 'Le Dormeur du val'
  const poemAuthor = 'Arthur Rimbaud'
  const poemDate = 'Octobre 1870'

  const poemStrophes = [
    [
      "C'est un trou de verdure où chante une rivière",
      'Accrochant follement aux herbes des haillons',
      "D'argent ; où le soleil, de la montagne fière,",
      "Luit : c'est un petit val qui mousse de rayons.",
    ],
    [
      'Un soldat jeune, bouche ouverte, tête nue,',
      'Et la nuque baignant dans le frais cresson bleu,',
      "Dort ; il est étendu dans l'herbe, sous la nue,",
      'Pâle dans son lit vert où la lumière pleut.',
    ],
    [
      'Les pieds dans les glaïeuls, il dort. Souriant comme',
      'Sourirait un enfant malade, il fait un somme :',
      'Nature, berce-le chaudement : il a froid.',
      'Les parfums ne font pas frissonner sa narine ;',
    ],
    ['Il dort dans le soleil, la main sur sa poitrine', 'Tranquille. Il a deux trous rouges au côté droit.'],
  ]

  const seoTitle = 'Le Dormeur du val - Arthur Rimbaud'
  const seoDescription = "C'est un trou de verdure où chante une rivière - Accrochant follement aux herbes des haillons..."

  return (
    <>
      <NextSeo
        title={seoTitle}
        description={seoDescription}
        canonical={`${SITE_URL}/rimbaud/le-dormeur-du-val`}
        openGraph={{
          title: seoTitle,
          description: seoDescription,
          url: `${SITE_URL}/rimbaud/le-dormeur-du-val`,
          type: 'article',
          article: {
            authors: ['Arthur Rimbaud'],
            publishedTime: '1870-10-01',
            tags: ['poésie', 'poème', 'Rimbaud', 'symbolisme'],
          },
          site_name: 'Par coeur',
          images: [
            {
              url: `${SITE_URL}/huangshan.png`,
              width: 1200,
              height: 630,
              alt: 'Le Dormeur du val - Poème de Rimbaud',
            },
          ],
        }}
        twitter={{
          cardType: 'summary_large_image',
          site: '@w3hc8',
        }}
      />
      <main>
        <PoemDisplay title={poemTitle} author={poemAuthor} date={poemDate} strophes={poemStrophes} />
      </main>
    </>
  )
}

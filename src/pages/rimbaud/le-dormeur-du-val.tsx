import { Seo } from '../../components/layout/Seo'
import PoemDisplay from '../../components/layout/PoemDisplay'

export default function Poesie() {
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

  return (
    <>
      <Seo title={poemTitle} description={poemAuthor} isPoem={true} author={poemAuthor} poemFirstLine={poemStrophes[0][0]} />
      <main>
        <PoemDisplay title={poemTitle} author={poemAuthor} date={poemDate} strophes={poemStrophes} />
      </main>
    </>
  )
}

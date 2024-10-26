import { NextSeo } from 'next-seo'
import PoemDisplay from '../../components/layout/PoemDisplay'
import { SITE_URL } from '../../utils/config'

export default function LionEtMoucheron() {
  const poemTitle = 'Le Lion et le Moucheron'
  const poemAuthor = 'Jean de La Fontaine'
  const poemDate = '1668'

  const poemStrophes = [
    [
      '"Va-t\'en, chétif insecte, excrément de la terre! "',
      "C'est en ces mots que le Lion",
      'Parlait un jour au Moucheron.',
      "L'autre lui déclara la guerre.",
      '"Penses-tu, lui dit-il, que ton titre de Roi',
      'Me fasse peur ni me soucie ?',
      'Un boeuf est plus puissant que toi :',
      'Je le mène à ma fantaisie. "',
      'A peine il achevait ces mots',
      'Que lui-même il sonna la charge,',
      'Fut le Trompette et le Héros.',
      "Dans l'abord il se met au large ;",
      'Puis prend son temps, fond sur le cou',
      "Du Lion, qu'il rend presque fou.",
      'Le quadrupède écume, et son oeil étincelle ;',
      "Il rugit ; on se cache, on tremble à l'environ ;",
      'Et cette alarme universelle',
      "Est l'ouvrage d'un Moucheron.",
      'Un avorton de Mouche en cent lieux le harcelle :',
      "Tantôt pique l'échine, et tantôt le museau,",
      'Tantôt entre au fond du naseau.',
      'La rage alors se trouve à son faîte montée.',
      "L'invisible ennemi triomphe, et rit de voir",
      "Qu'il n'est griffe ni dent en la bête irritée",
      'Qui de la mettre en sang ne fasse son devoir.',
      'Le malheureux Lion se déchire lui-même,',
      "Fait résonner sa queue à l'entour de ses flancs,",
      "Bat l'air, qui n'en peut mais ; et sa fureur extrême",
      "Le fatigue, l'abat : le voilà sur les dents.",
      "L'insecte du combat se retire avec gloire :",
      'Comme il sonna la charge, il sonne la victoire,',
      "Va partout l'annoncer, et rencontre en chemin",
      "L'embuscade d'une araignée ;",
      'Il y rencontre aussi sa fin.',
    ],
    [
      'Quelle chose par là nous peut être enseignée ?',
      "J'en vois deux, dont l'une est qu'entre nos ennemis",
      'Les plus à craindre sont souvent les plus petits ;',
      "L'autre, qu'aux grands périls tel a pu se soustraire,",
      'Qui périt pour la moindre affaire.',
    ],
  ]

  const fullTitle = `${poemTitle} - ${poemAuthor}`
  const fullDescription = `${poemStrophes[0][0]} | Un poème de ${poemAuthor}, ${poemDate}`
  const canonicalUrl = `${SITE_URL}/lafontaine/le-lion-et-le-moucheron`

  return (
    <>
      <NextSeo
        title={fullTitle}
        titleTemplate={`%s`}
        description={fullDescription}
        canonical={canonicalUrl}
        openGraph={{
          title: fullTitle,
          description: fullDescription,
          url: canonicalUrl,
          type: 'article',
          article: {
            authors: [poemAuthor],
            publishedTime: '1668-01-01',
            tags: ['poésie', 'poème', 'littérature française', 'La Fontaine', 'fables'],
          },
          images: [
            {
              url: `${SITE_URL}/huangshan.png`,
              width: 1200,
              height: 630,
              alt: fullTitle,
            },
          ],
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
      />
      <main>
        <PoemDisplay title={poemTitle} author={poemAuthor} date={poemDate} strophes={poemStrophes} />
      </main>
    </>
  )
}

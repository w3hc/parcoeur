import { Seo } from '../../components/layout/Seo'
import PoemDisplay from '../../components/layout/PoemDisplay'

export default function Poesie() {
  const poemTitle = 'Le Cimetière marin'
  const poemAuthor = 'Paul Valéry'
  const poemDate = '1920'

  const poemStrophes = [
    [
      'Ce toit tranquille, où marchent des colombes,',
      'Entre les pins palpite, entre les tombes ;',
      'Midi le juste y compose de feux',
      'La mer, la mer, toujours recommencée !',
      'Ô récompense après une pensée',
      "Qu'un long regard sur le calme des dieux !",
    ],
    [
      'Quel pur travail de fins éclairs consume',
      "Maint diamant d'imperceptible écume,",
      'Et quelle paix semble se concevoir !',
      "Quand sur l'abîme un soleil se repose,",
      "Ouvrages purs d'une éternelle cause,",
      'Le Temps scintille et le Songe est savoir.',
    ],
    [
      'Stable trésor, temple simple à Minerve,',
      'Masse de calme, et visible réserve,',
      'Eau sourcilleuse, Œil qui gardes en toi',
      'Tant de sommeil sous un voile de flamme,',
      "Ô mon silence !… Édifice dans l'âme,",
      "Mais comble d'or aux mille tuiles, Toit !",
    ],
    [
      "Temple du Temps, qu'un seul soupir résume,",
      "À ce point pur je monte et m'accoutume,",
      'Tout entouré de mon regard marin ;',
      'Et comme aux dieux mon offrande suprême,',
      'La scintillation sereine sème',
      "Sur l'altitude un dédain souverain.",
    ],
    [
      'Comme le fruit se fond en jouissance,',
      'Comme en délice il change son absence',
      'Dans une bouche où sa forme se meurt,',
      'Je hume ici ma future fumée,',
      "Et le ciel chante à l'âme consumée",
      'Le changement des rives en rumeur.',
    ],
    [
      'Beau ciel, vrai ciel, regarde-moi qui change !',
      "Après tant d'orgueil, après tant d'étrange",
      'Oisiveté, mais pleine de pouvoir,',
      "Je m'abandonne à ce brillant espace,",
      'Sur les maisons des morts mon ombre passe',
      "Qui m'apprivoise à son frêle mouvoir.",
    ],
    [
      "L'âme exposée aux torches du solstice,",
      'Je te soutiens, admirable justice',
      'De la lumière aux armes sans pitié !',
      'Je te rends pure à ta place première :',
      'Regarde-toi !… Mais rendre la lumière',
      "Suppose d'ombre une morne moitié.",
    ],
    [
      'Ô pour moi seul, à moi seul, en moi-même,',
      "Auprès d'un cœur, aux sources du poème,",
      "Entre le vide et l'événement pur,",
      "J'attends l'écho de ma grandeur interne,",
      'Amère, sombre, et sonore citerne,',
      "Sonnant dans l'âme un creux toujours futur !",
    ],
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

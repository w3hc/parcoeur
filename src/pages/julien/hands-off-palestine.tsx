import { NextSeo } from 'next-seo'
import PoemDisplay, { PoemDisplayRef } from '../../components/layout/PoemDisplay'
import { SITE_URL } from '../../utils/config'
import { useRef, useEffect } from 'react'
import { usePoemContext } from '../../components/layout/PoemContext'

export default function HandsOffPalestine() {
  const textTitle = 'Hands Off Palestine'
  const textAuthor = 'Julien Béranger'
  const textDate = '2025'
  const textRef = useRef<PoemDisplayRef>(null)
  const { setToggleFunction, setAllStrophesVisible } = usePoemContext()

  const textStrophes = [
    [
      "Ils disent qu'ils ont le droit de se défendre, mais ils ont lâché des dizaines de milliers de tonnes de bombes sur les gens qui vivaient là.",
      "Ils disent qu'ils gèrent l'aide humanitaire, mais ils ont tué des gamins qui venaient chercher un sac de farine.",
    ],
    [
      "Ils disent qu'il suffirait de libérer les otages pour que le massacre s'arrête, mais ce sont eux-même qui ont saboté toutes les négociations, ils ont frappé aveuglément, ils ont tout détruit.",
      'En Cisjordanie, les colons harcèlent, humilient, enferment, et tuent sans pitié.',
    ],
    [
      'Combien de milliers de Palestiniens ont été arrêtés et emprisonnés sans procès ?',
      'Combien sont torturés dans ces prisons depuis des années ? Quand seront-ils libérés ?',
    ],
    [
      'La stratégie israélienne est connue : ils rendent la vie impossible aux Palestiniennes et Palestiniens pour les chasser et prendre leur terre.',
      "À Jérusalem-Est et en Cisjordanie cela fait des décennies qu'ils divisent méthodiquement les villages les uns des autres, qu'ils détruisent les maisons et déracinent les cultures à coup de bulldozers en espérant que les gens désespèrent et s'en aillent.",
    ],
    ['À Gaza, ils affament de façon cynique celles et ceux qui ont survécu aux bombardements.', "Les gens s'entretuent pour un paquet de gâteaux."],
    ["Ils les assoiffent jusqu'à ce qu'ils craquent et décident de partir.", 'Mais Gaza est assiégée. Ils ne peuvent pas partir. Ils sont piégés.'],
    [
      "Ce qui se passe n'est ni une guerre ni une catastrophe naturelle, c'est un génocide.",
      'Le nettoyage ethnique en cours depuis des années est devenu en génocide. Nous ne le laisserons pas faire.',
    ],
    [
      "L'attaque d'octobre 2023 ne peut en rien justifier la mort de centaines d'humanitaires, de centaines de journalistes, de milliers de soignants et de dizaines de milliers d'enfants.",
      'Le monde entier est horrifié de ce déferlement de violence aveugle.',
    ],
    [
      "L'Histoire n'a pas commencé le 7 octobre : au début des années 80, il n'y avait ni Hezbollah ni Hamas, et pourtant Israël terrorisait déjà le peuple palestinien en toute impunité.",
      "Et aujourd'hui on ampute des enfants sans anesthésie tous les jours parce que des soldats israéliens s'amusent à leur tirer dessus au sniper avant de s'en vanter sur les réseaux.",
    ],
    ['Nous ne pourrons pas dire que nous ne savions pas.', "Que dirons nos enfants si nous n'agissons pas aujourd'hui ?"],
    [
      'La Palestine vit sous occupation étrangère depuis un siècle.',
      "Malgré les résolutions de l'ONU, les déclarations et les bonnes intentions des uns et des autres, très peu d'actions contraignantes ont été engagées contre Israël.",
    ],
    ["C'est nous qui paierons cash le prix de la lâcheté politique généralisée.", 'La colonisation doit cesser.'],
    [
      'Le Groupe de La Haye est une coalition internationale créée pour coordonner des mesures juridiques, diplomatiques et économiques contre les violations du droit international en Palestine.',
      'Lancé par 8 pays, ce mouvement rassemble désormais 30 participants déterminés à faire respecter le droit international.',
    ],
    [
      "Six mesures concrètes ont été adoptées lors de la conférence de Bogotá pour briser l'impunité d'Israël : un embargo total sur les armes et équipements militaires, l'interdiction d'accostage des navires transportant du matériel militaire vers Israël, le contrôle systématique des navires battant pavillon national, la révision de tous les contrats publics avec des entreprises complices, l'engagement de poursuites judiciaires nationales contre les responsables de crimes de guerre, et l'application du principe de compétence universelle pour que les criminels soient jugés et condamnés.",
    ],
    [
      "La Namibie et la Malaisie ont bloqué l'accès à leurs ports aux navires transportant des armes vers Israël.",
      "La Colombie a suspendu ses exportations et rappelé son ambassadeur d'Israël. La Bolivie a également rappelé son ambassadeur.",
    ],
    [
      'Nous appelons tous les pays du monde à rejoindre le Groupe de La Haye et à mettre en place immédiatement ces mesures décisives.',
      "Ils ont l'obligation juridique d'agir, et c'est à nous de leur rappeler avec la plus grande force : c'est la seule façon de mettre fin au génocide et à l'occupation.",
    ],
    [
      "Faisons l'effort de la compréhension de l'autre. C'est l'affaire de tous.",
      'Portez aussi loin que possible la voix des Palestiniennes et de Palestiniens.',
    ],
    [
      "Quoi qu'il arrive dans le futur, nous les aiderons à reconstruire la Palestine de demain.",
      "Par le dialogue et par l'entraide, nous ferons taire les armes, les mensonges et la bêtise. Nous ferons respecter le droit pour que vive la Palestine.",
    ],
  ]

  const handleToggleAllStrophes = () => {
    if (textRef.current) {
      textRef.current.toggleAllStrophes()
      // Update the context state to reflect the current visibility
      setAllStrophesVisible(textRef.current.getAllStrophesVisible())
    }
  }

  // Set up the toggle function and initial state when component mounts
  useEffect(() => {
    setToggleFunction(handleToggleAllStrophes)
    if (textRef.current) {
      setAllStrophesVisible(textRef.current.getAllStrophesVisible())
    }

    // Clean up when component unmounts
    return () => {
      setToggleFunction(null)
    }
  }, [])

  const seoTitle = 'Hands Off Palestine - Julien Béranger'
  const seoDescription = "Ils disent qu'ils ont le droit de se défendre, mais ils ont lâché des dizaines de milliers de tonnes de bombes..."

  return (
    <>
      <NextSeo
        title={seoTitle}
        description={seoDescription}
        canonical={`${SITE_URL}/julien/hands-off-palestine`}
        openGraph={{
          title: seoTitle,
          description: seoDescription,
          url: `${SITE_URL}/julien/hands-off-palestine`,
          type: 'article',
          article: {
            authors: ['Julien Béranger'],
            publishedTime: '2025-01-01',
            tags: ['texte', 'politique', 'Palestine', 'droits humains'],
          },
          site_name: 'Par coeur',
          images: [
            {
              url: `${SITE_URL}/huangshan.png`,
              width: 1200,
              height: 630,
              alt: 'Hands Off Palestine - Texte de Julien Béranger',
            },
          ],
        }}
        twitter={{
          cardType: 'summary_large_image',
          site: '@w3hc8',
        }}
      />
      <main>
        <PoemDisplay ref={textRef} title={textTitle} author={textAuthor} date={textDate} strophes={textStrophes} />
      </main>
    </>
  )
}

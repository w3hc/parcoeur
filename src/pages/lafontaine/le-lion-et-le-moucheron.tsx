import { Text, VStack, Box, Flex, useColorModeValue } from '@chakra-ui/react'
import { Seo } from '../../components/layout/Seo'
import { useState } from 'react'

export default function Poesie() {
  const [visibleStates, setVisibleStates] = useState(new Array(2).fill(true))

  const hoverVisibleBg = useColorModeValue('rgba(69, 162, 248, 0.1)', 'rgba(69, 162, 248, 0.2)')
  const hoverHiddenBg = useColorModeValue('rgba(69, 162, 248, 0.05)', 'rgba(69, 162, 248, 0.1)')

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

  const toggleStrophe = (index: number) => {
    setVisibleStates((current) => current.map((state, i) => (i === index ? !state : state)))
  }

  return (
    <>
      <Seo title={poemTitle} description={poemAuthor} isPoem={true} author={poemAuthor} poemFirstLine={poemStrophes[0][0]} />
      <main>
        <VStack spacing={1} px={1}>
          <Box maxW="600px" w="100%">
            <Box fontSize="xl" textAlign="left" display="flex" flexDirection="column" gap={4}>
              {poemStrophes.map((strophe, index) => (
                <Box
                  key={index}
                  onClick={() => toggleStrophe(index)}
                  cursor="pointer"
                  _hover={{
                    bg: visibleStates[index] ? hoverVisibleBg : hoverHiddenBg,
                    border: '1px solid #8c1c84',
                    borderRadius: '10px',
                  }}
                  transition="all 1s"
                  display="block"
                  width="100%"
                  borderRadius="10px"
                  mb={1}
                  style={{
                    border: !visibleStates[index] ? '1px solid #8c1c84' : 'none',
                    borderRadius: !visibleStates[index] ? '10px' : '10px',
                    padding: !visibleStates[index] ? '20px' : '22px',
                  }}>
                  <Flex direction="column" gap={3} lineHeight="2.2em">
                    {visibleStates[index]
                      ? strophe.map((line, lineIndex) => (
                          <Box
                            key={lineIndex}
                            style={{
                              transition: 'none',
                              opacity: 1,
                            }}>
                            {line}
                          </Box>
                        ))
                      : strophe.map((line, lineIndex) => (
                          <Box
                            key={lineIndex}
                            style={{
                              transition: 'opacity 0.8s ease-out',
                              opacity: 0,
                            }}>
                            {line}
                          </Box>
                        ))}
                  </Flex>
                </Box>
              ))}
            </Box>
            <Flex justify="flex-end" mt={10} mb={20}>
              <Text fontSize="md" color={'#45a2f8'}>
                — {poemAuthor}, <i>{poemTitle}</i>, {poemDate}
              </Text>
            </Flex>
          </Box>
        </VStack>
      </main>
    </>
  )
}

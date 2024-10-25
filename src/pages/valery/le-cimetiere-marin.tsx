import { Text, VStack, Box, Flex, useColorModeValue } from '@chakra-ui/react'
import { Seo } from '../../components/layout/Seo'
import { useState } from 'react'

export default function Poesie() {
  const [visibleStates, setVisibleStates] = useState(new Array(24).fill(true))

  const hoverVisibleBg = useColorModeValue('rgba(69, 162, 248, 0.1)', 'rgba(69, 162, 248, 0.2)')
  const hoverHiddenBg = useColorModeValue('rgba(69, 162, 248, 0.05)', 'rgba(69, 162, 248, 0.1)')

  const poemTitle = 'Le Cimetière marin'
  const poemAuthor = 'Paul Valéry'
  const poemDate = '1920'

  const poemLines = [
    [
      ['Ce toit tranquille, où marchent des colombes,', 'Entre les pins palpite, entre les tombes ;'],
      ['Midi le juste y compose de feux', 'La mer, la mer, toujours recommencée !'],
      ['Ô récompense après une pensée', "Qu'un long regard sur le calme des dieux !"],
    ],
    [
      ['Quel pur travail de fins éclairs consume', "Maint diamant d'imperceptible écume,"],
      ['Et quelle paix semble se concevoir !', "Quand sur l'abîme un soleil se repose,"],
      ["Ouvrages purs d'une éternelle cause,", 'Le Temps scintille et le Songe est savoir.'],
    ],
    [
      ['Stable trésor, temple simple à Minerve,', 'Masse de calme, et visible réserve,'],
      ['Eau sourcilleuse, Œil qui gardes en toi', 'Tant de sommeil sous un voile de flamme,'],
      ["Ô mon silence !… Édifice dans l'âme,", "Mais comble d'or aux mille tuiles, Toit !"],
    ],
    [
      ["Temple du Temps, qu'un seul soupir résume,", "À ce point pur je monte et m'accoutume,"],
      ['Tout entouré de mon regard marin ;', 'Et comme aux dieux mon offrande suprême,'],
      ['La scintillation sereine sème', "Sur l'altitude un dédain souverain."],
    ],
    [
      ['Comme le fruit se fond en jouissance,', 'Comme en délice il change son absence'],
      ['Dans une bouche où sa forme se meurt,', 'Je hume ici ma future fumée,'],
      ["Et le ciel chante à l'âme consumée", 'Le changement des rives en rumeur.'],
    ],
    [
      ['Beau ciel, vrai ciel, regarde-moi qui change !', "Après tant d'orgueil, après tant d'étrange"],
      ['Oisiveté, mais pleine de pouvoir,', "Je m'abandonne à ce brillant espace,"],
      ['Sur les maisons des morts mon ombre passe', "Qui m'apprivoise à son frêle mouvoir."],
    ],
    [
      ["L'âme exposée aux torches du solstice,", 'Je te soutiens, admirable justice'],
      ['De la lumière aux armes sans pitié !', 'Je te rends pure à ta place première :'],
      ['Regarde-toi !… Mais rendre la lumière', "Suppose d'ombre une morne moitié."],
    ],
    [
      ['Ô pour moi seul, à moi seul, en moi-même,', "Auprès d'un cœur, aux sources du poème,"],
      ["Entre le vide et l'événement pur,", "J'attends l'écho de ma grandeur interne,"],
      ['Amère, sombre, et sonore citerne,', "Sonnant dans l'âme un creux toujours futur !"],
    ],
  ]

  const togglePair = (blockIndex: number, pairIndex: number) => {
    const index = blockIndex * 3 + pairIndex
    setVisibleStates((current) => current.map((state, i) => (i === index ? !state : state)))
  }

  return (
    <>
      <Seo title={poemTitle} description={poemAuthor} isPoem={true} />{' '}
      <main>
        <VStack spacing={8} px={4}>
          <Box maxW="600px" w="100%">
            {poemLines.map((block, blockIndex) => (
              <Box key={blockIndex} mb={6}>
                <Box fontSize="xl" textAlign="left" display="flex" flexDirection="column" gap={3}>
                  {block.map((pair, pairIndex) => {
                    const index = blockIndex * 3 + pairIndex
                    return (
                      <Box
                        key={pairIndex}
                        onClick={() => togglePair(blockIndex, pairIndex)}
                        cursor="pointer"
                        _hover={{
                          bg: visibleStates[index] ? hoverVisibleBg : hoverHiddenBg,
                          border: '1px solid #8c1c84',
                          borderRadius: '10px',
                        }}
                        transition="all 0.5s"
                        display="block"
                        width="100%"
                        borderRadius="10px"
                        style={{
                          border: !visibleStates[index] ? '1px solid #8c1c84' : 'none',
                          borderRadius: !visibleStates[index] ? '10px' : '10px',
                          padding: !visibleStates[index] ? '10px' : '12px',
                        }}>
                        <Flex direction="column" lineHeight="2em">
                          {visibleStates[index] ? (
                            <>
                              <Box style={{ transition: 'none', opacity: 1 }}>{pair[0]}</Box>
                              <Box style={{ transition: 'none', opacity: 1 }}>{pair[1]}</Box>
                            </>
                          ) : (
                            <>
                              <Box style={{ transition: 'opacity 0.5s ease-out', opacity: 0 }}>{pair[0]}</Box>
                              <Box style={{ transition: 'opacity 0.5s ease-out', opacity: 0 }}>{pair[1]}</Box>
                            </>
                          )}
                        </Flex>
                      </Box>
                    )
                  })}
                </Box>
              </Box>
            ))}
            <Flex justify="flex-end" mt={6} mb={20}>
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

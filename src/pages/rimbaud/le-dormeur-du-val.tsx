import { Text, VStack, Box, Flex, useColorModeValue } from '@chakra-ui/react'
import { Seo } from '../../components/layout/Seo'
import { useState } from 'react'

export default function Poesie() {
  const [visibleStates, setVisibleStates] = useState(new Array(7).fill(true))

  const hoverVisibleBg = useColorModeValue('rgba(69, 162, 248, 0.1)', 'rgba(69, 162, 248, 0.2)')
  const hoverHiddenBg = useColorModeValue('rgba(69, 162, 248, 0.05)', 'rgba(69, 162, 248, 0.1)')

  const poemTitle = 'Le Dormeur du Val'
  const poemAuthor = 'Arthur Rimbaud'
  const poemDate = 'Octobre 1870'

  const poemStrophes = [
    [["C'est un trou de verdure où chante une rivière"], ['Accrochant follement aux herbes des haillons']],
    [["D'argent ; où le soleil, de la montagne fière,"], ["Luit : c'est un petit val qui mousse de rayons."]],
    [['Un soldat jeune, bouche ouverte, tête nue,'], ['Et la nuque baignant dans le frais cresson bleu,']],
    [["Dort ; il est étendu dans l'herbe, sous la nue,"], ['Pâle dans son lit vert où la lumière pleut.']],
    [['Les pieds dans les glaïeuls, il dort. Souriant comme'], ['Sourirait un enfant malade, il fait un somme :']],
    [['Nature, berce-le chaudement : il a froid.'], ['Les parfums ne font pas frissonner sa narine ;']],
    [['Il dort dans le soleil, la main sur sa poitrine'], ['Tranquille. Il a deux trous rouges au côté droit.']],
  ]

  const toggleStrophe = (index: number) => {
    setVisibleStates((current) => current.map((state, i) => (i === index ? !state : state)))
  }

  return (
    <>
      <Seo title={poemTitle} description={poemAuthor} isPoem={true} />
      <main>
        {/* Ajustez VStack spacing pour l'espacement général */}
        <VStack spacing={1} px={1}>
          <Box maxW="600px" w="100%">
            {/* Ajustez le "gap" ici pour l'espace entre les strophes */}
            <Box fontSize="xl" textAlign="left" display="flex" flexDirection="column" gap={1}>
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
                  transition="all 0.5s"
                  display="block"
                  width="100%"
                  borderRadius="10px"
                  // Vous pouvez aussi ajouter une marge en bas de chaque strophe
                  mb={1}
                  style={{
                    border: !visibleStates[index] ? '1px solid #8c1c84' : 'none',
                    borderRadius: !visibleStates[index] ? '10px' : '10px',
                    // Ajustez le padding interne de chaque strophe
                    padding: !visibleStates[index] ? '16px' : '18px',
                  }}>
                  <Flex
                    direction="column"
                    // Ajustez l'espacement entre les lignes dans une strophe
                    gap={2}
                    // Ajustez la hauteur de ligne
                    lineHeight="2.2em">
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
                              transition: 'opacity 0.5s ease-out',
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

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
  const poemDescription = "C'est un trou de verdure où chante une rivière ... "

  const poemLines = [
    ["C'est un trou de verdure où chante une rivière", 'Accrochant follement aux herbes des haillons'],
    ["D'argent ; où le soleil, de la montagne fière,", "Luit : c'est un petit val qui mousse de rayons."],
    ['Un soldat jeune, bouche ouverte, tête nue,', 'Et la nuque baignant dans le frais cresson bleu,'],
    ["Dort ; il est étendu dans l'herbe, sous la nue,", 'Pâle dans son lit vert où la lumière pleut.'],
    ['Les pieds dans les glaïeuls, il dort. Souriant comme', 'Sourirait un enfant malade, il fait un somme :'],
    ['Nature, berce-le chaudement : il a froid.', 'Les parfums ne font pas frissonner sa narine ;'],
    ['Il dort dans le soleil, la main sur sa poitrine', 'Tranquille. Il a deux trous rouges au côté droit.'],
  ]

  const togglePair = (index: number) => {
    setVisibleStates((current) => current.map((state, i) => (i === index ? !state : state)))
  }

  return (
    <>
      <Seo title={`${poemTitle} - ${poemAuthor}`} description={`${poemDescription}. Poème écrit en ${poemDate}`} />
      <main>
        <VStack spacing={8} px={4}>
          <Box maxW="600px" w="100%">
            <Box fontSize="xl" textAlign="left" display="flex" flexDirection="column" gap={3}>
              {poemLines.map((pair, index) => (
                <Box
                  key={index}
                  onClick={() => togglePair(index)}
                  cursor="pointer"
                  _hover={{
                    bg: visibleStates[index] ? hoverVisibleBg : hoverHiddenBg,
                  }}
                  transition="all 0.2s"
                  display="block"
                  width="100%"
                  borderRadius="md"
                  style={{
                    border: !visibleStates[index] ? '1px solid #8c1c84' : 'none',
                    borderRadius: !visibleStates[index] ? '10px' : '4px',
                    padding: !visibleStates[index] ? '10px' : '12px',
                  }}>
                  <Flex direction="column" lineHeight="2em">
                    {visibleStates[index] ? (
                      <>
                        <Box
                          style={{
                            transition: 'none',
                            opacity: 1,
                          }}>
                          {pair[0]}
                        </Box>
                        <Box
                          style={{
                            transition: 'none',
                            opacity: 1,
                          }}>
                          {pair[1]}
                        </Box>
                      </>
                    ) : (
                      <>
                        <Box
                          style={{
                            transition: 'opacity 0.5s ease-out',
                            opacity: 0,
                          }}>
                          {pair[0]}
                        </Box>
                        <Box
                          style={{
                            transition: 'opacity 0.5s ease-out',
                            opacity: 0,
                          }}>
                          {pair[1]}
                        </Box>
                      </>
                    )}
                  </Flex>
                </Box>
              ))}
            </Box>
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

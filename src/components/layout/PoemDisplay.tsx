import { Text, VStack, Box, Flex, useColorModeValue } from '@chakra-ui/react'
import { useState } from 'react'

interface PoemDisplayProps {
  title: string
  author: string
  date: string
  strophes: string[][]
}

const PoemDisplay: React.FC<PoemDisplayProps> = ({ title, author, date, strophes }) => {
  const getAllVerses = strophes.flat()
  const numPairs = Math.ceil(getAllVerses.length / 2)
  const [visibleStates, setVisibleStates] = useState(new Array(numPairs).fill(true))

  const hoverVisibleBg = useColorModeValue('rgba(69, 162, 248, 0.1)', 'rgba(69, 162, 248, 0.2)')
  const hoverHiddenBg = useColorModeValue('rgba(69, 162, 248, 0.05)', 'rgba(69, 162, 248, 0.1)')

  const renderVersePairs = () => {
    let currentPairIndex = 0

    return strophes.map((strophe, stropheIndex) => (
      <Box key={`strophe-${stropheIndex}`} mb={4}>
        {chunk(strophe, 2).map((versePair, pairIndex) => {
          const pairIndexGlobal = currentPairIndex++

          return (
            <Box
              key={`pair-${pairIndexGlobal}`}
              onClick={() => togglePair(pairIndexGlobal)}
              cursor="pointer"
              _hover={{
                bg: visibleStates[pairIndexGlobal] ? hoverVisibleBg : hoverHiddenBg,
                border: '1px solid #8c1c84',
                borderRadius: '10px',
              }}
              transition="all 0.5s"
              width="100%"
              borderRadius="10px"
              mb={1}
              style={{
                border: !visibleStates[pairIndexGlobal] ? '1px solid #8c1c84' : 'none',
                padding: !visibleStates[pairIndexGlobal] ? '0 16px' : '0 18px', // Changed to only horizontal padding
              }}>
              <Flex direction="column" gap={2} lineHeight="2.2em">
                {versePair.map((verse, index) => (
                  <Box
                    key={index}
                    style={{
                      transition: visibleStates[pairIndexGlobal] ? 'none' : 'opacity 0.5s ease-out',
                      opacity: visibleStates[pairIndexGlobal] ? 1 : 0,
                    }}>
                    {verse}
                  </Box>
                ))}
              </Flex>
            </Box>
          )
        })}
      </Box>
    ))
  }

  const togglePair = (index: number) => {
    setVisibleStates((current) => current.map((state, i) => (i === index ? !state : state)))
  }

  const chunk = <T,>(array: T[], size: number): T[][] => {
    return Array.from({ length: Math.ceil(array.length / size) }, (_, i) => array.slice(i * size, i * size + size))
  }

  return (
    <VStack spacing={1} px={1}>
      <Box maxW="600px" w="100%">
        <Box fontSize="xl" textAlign="left" display="flex" flexDirection="column" gap={4}>
          {renderVersePairs()}
        </Box>
        <Flex justify="flex-end" mt={10} mb={20}>
          <Text fontSize="md" color={'#45a2f8'}>
            — {author}, <i>{title}</i>, {date}
          </Text>
        </Flex>
      </Box>
    </VStack>
  )
}

export default PoemDisplay
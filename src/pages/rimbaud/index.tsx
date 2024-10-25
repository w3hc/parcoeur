import React from 'react'
import { VStack, Box, Text, List, ListItem, useColorModeValue } from '@chakra-ui/react'
import { LinkComponent } from '../../components/layout/LinkComponent'
import { Seo } from '../../components/layout/Seo'
import { HeadingComponent } from '../../components/layout/HeadingComponent'

const poems = [
  {
    title: 'Le Dormeur du val',
    path: '/rimbaud/le-dormeur-du-val',
    date: 'Octobre 1870',
    description: "C'est un trou de verdure où chante une rivière... ",
  },
]

export default function Rimbaud() {
  const descriptionColor = '#45a2f8'
  const hoverBg = useColorModeValue('rgba(69, 162, 248, 0.1)', 'rgba(69, 162, 248, 0.2)')
  const dateColor = useColorModeValue('rgba(69, 162, 248, 0.7)', 'rgba(69, 162, 248, 0.5)')

  return (
    <>
      <Seo title="Arthur Rimbaud" description="Poèmes d'Arthur Rimbaud" />
      <VStack spacing={8} align="stretch">
        <HeadingComponent as="h1">Arthur Rimbaud</HeadingComponent>
        {/* <Text fontSize="lg" color={descriptionColor} mb={6}>
          Jean Nicolas Arthur Rimbaud (1854-1891) fut un poète français majeur du XIXe siècle.
        </Text> */}
        <List spacing={4}>
          {poems.map((poem) => (
            <ListItem
              key={poem.title}
              p={4}
              borderRadius="md"
              _hover={{
                bg: hoverBg,
                transform: 'translateX(8px)',
                transition: 'all 0.2s',
              }}>
              <LinkComponent href={poem.path}>
                <Box>
                  <Text fontSize="xl" fontWeight="bold">
                    {poem.title}
                  </Text>
                  <Text fontSize="sm" color={dateColor}>
                    {poem.date}
                  </Text>
                  <Text fontSize="md" mt={1} color={descriptionColor}>
                    {poem.description}
                  </Text>
                </Box>
              </LinkComponent>
            </ListItem>
          ))}
        </List>
      </VStack>
    </>
  )
}

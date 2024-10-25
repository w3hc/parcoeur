import React from 'react'
import { VStack, Box, Text, List, ListItem, useColorModeValue } from '@chakra-ui/react'
import { LinkComponent } from '../components/layout/LinkComponent'
import { Seo } from '../components/layout/Seo'
import { HeadingComponent } from '../components/layout/HeadingComponent'

const poets = [
  {
    name: 'Arthur Rimbaud',
    path: '/rimbaud',
    description: '1854-1891',
  },
]

export default function Home() {
  const descriptionColor = useColorModeValue('rgba(69, 162, 248, 0.8)', 'rgba(69, 162, 248, 0.6)')
  const hoverBg = useColorModeValue('rgba(69, 162, 248, 0.1)', 'rgba(69, 162, 248, 0.2)')

  return (
    <>
      <Seo />
      <VStack spacing={8} align="stretch">
        <List spacing={4}>
          {poets.map((poet) => (
            <ListItem
              key={poet.name}
              p={4}
              borderRadius="md"
              _hover={{
                bg: hoverBg,
                transform: 'translateX(8px)',
                transition: 'all 0.2s',
              }}>
              <LinkComponent href={poet.path}>
                <Box>
                  <Text fontSize="xl" fontWeight="bold">
                    {poet.name}
                  </Text>
                  <Text fontSize="md" color="#45a2f8">
                    {poet.description}
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

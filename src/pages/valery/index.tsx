import React from 'react'
import { VStack, Box, Text, List, ListItem, useColorModeValue } from '@chakra-ui/react'
import { LinkComponent } from '../../components/layout/LinkComponent'
import { HeadingComponent } from '../../components/layout/HeadingComponent'
import { NextSeo } from 'next-seo'
import { SITE_URL } from '../../utils/config'

const poems = [
  {
    title: 'Le Cimetière marin',
    path: '/valery/le-cimetiere-marin',
    date: '1920',
    description: 'Ce toit tranquille, où marchent des colombes...',
  },
]

export default function Valery() {
  const descriptionColor = '#45a2f8'
  const hoverBg = useColorModeValue('rgba(69, 162, 248, 0.1)', 'rgba(69, 162, 248, 0.2)')
  const dateColor = useColorModeValue('rgba(69, 162, 248, 0.7)', 'rgba(69, 162, 248, 0.5)')

  // SEO constants
  const authorName = 'Paul Valéry'
  const description = 'Découvrez quelques beaux poèmes de Paul Valéry.'
  const canonicalUrl = `${SITE_URL}/valery`

  return (
    <>
      <NextSeo
        title={authorName}
        description={description}
        canonical={canonicalUrl}
        openGraph={{
          title: authorName,
          description: description,
          url: canonicalUrl,
          type: 'profile',
          profile: {
            firstName: 'Paul',
            lastName: 'Valéry',
          },
          images: [
            {
              url: `${SITE_URL}/huangshan.png`,
              width: 1200,
              height: 630,
              alt: authorName,
            },
          ],
        }}
      />{' '}
      <VStack spacing={8} align="stretch">
        <HeadingComponent as="h1">Paul Valéry</HeadingComponent>
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

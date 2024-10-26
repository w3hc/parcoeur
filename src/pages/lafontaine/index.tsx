import React from 'react'
import { VStack, Box, Text, List, ListItem, useColorModeValue } from '@chakra-ui/react'
import { LinkComponent } from '../../components/layout/LinkComponent'
import { HeadingComponent } from '../../components/layout/HeadingComponent'
import { NextSeo } from 'next-seo'
import { SITE_URL } from '../../utils/config'

const poems = [
  {
    title: 'Le Lion et le Moucheron',
    path: '/lafontaine/le-lion-et-le-moucheron',
    date: '1668',
    description: "Va-t'en, chétif insecte, excrément de la terre!",
  },
]

export default function LaFontaine() {
  const descriptionColor = '#45a2f8'
  const hoverBg = useColorModeValue('rgba(69, 162, 248, 0.1)', 'rgba(69, 162, 248, 0.2)')
  const dateColor = useColorModeValue('rgba(69, 162, 248, 0.7)', 'rgba(69, 162, 248, 0.5)')

  const seoTitle = 'Jean de La Fontaine - Fables et Poèmes'
  const seoDescription = 'Quelques belles fables de La Fontaine : Le Lion et le moucheron et autres fables'

  return (
    <>
      <NextSeo
        title={seoTitle}
        description={seoDescription}
        canonical={`${SITE_URL}/lafontaine`}
        openGraph={{
          title: seoTitle,
          description: seoDescription,
          url: `${SITE_URL}/lafontaine`,
          type: 'profile',
          profile: {
            firstName: 'Jean',
            lastName: 'de La Fontaine',
          },
          site_name: 'Par coeur',
          images: [
            {
              url: `${SITE_URL}/huangshan.png`,
              width: 1200,
              height: 630,
              alt: 'Jean de La Fontaine - Fables célèbres',
            },
          ],
        }}
        twitter={{
          cardType: 'summary_large_image',
          site: '@w3hc8',
        }}
      />
      <VStack spacing={8} align="stretch">
        <HeadingComponent as="h1">Jean de La Fontaine</HeadingComponent>
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

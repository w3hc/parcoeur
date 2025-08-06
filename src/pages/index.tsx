import React from 'react'
import { VStack, Box, Text, List, ListItem, useColorModeValue } from '@chakra-ui/react'
import { LinkComponent } from '../components/layout/LinkComponent'
import { NextSeo } from 'next-seo'
import { SITE_URL } from '../utils/config'

const authors = [
  {
    name: 'Jean de La Fontaine',
    path: '/lafontaine',
    description: '1621-1695',
  },
  {
    name: 'Arthur Rimbaud',
    path: '/rimbaud',
    description: '1854-1891',
  },
  {
    name: 'Paul Valéry',
    path: '/valery',
    description: '1871-1945',
  },
  {
    name: '李白 (Li Bai)',
    path: '/libai',
    description: '701-762',
  },
]

export default function Home() {
  const hoverBg = useColorModeValue('rgba(69, 162, 248, 0.1)', 'rgba(69, 162, 248, 0.2)')

  const seoTitle = 'Par coeur - Poèmes et textes classiques'
  const seoDescription = 'Apprenez par coeur quelques beaux poèmes de La Fontaine, Rimbaud, Valéry, Li Bai et des textes contemporains'

  return (
    <>
      <NextSeo
        title={seoTitle}
        titleTemplate="%s"
        description={seoDescription}
        canonical={SITE_URL}
        openGraph={{
          type: 'website',
          url: SITE_URL,
          title: seoTitle,
          description: seoDescription,
          site_name: 'Par coeur',
          images: [
            {
              url: `${SITE_URL}/huangshan.png`,
              width: 1200,
              height: 630,
              alt: 'Par coeur - Poésie et littérature',
            },
          ],
        }}
        twitter={{
          cardType: 'summary_large_image',
          site: '@w3hc8',
        }}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: 'poésie, poèmes, littérature française, La Fontaine, Rimbaud, Valéry, Li Bai, Julien Béranger, apprendre par coeur',
          },
          {
            name: 'author',
            content: 'WH3C',
          },
        ]}
      />
      <VStack spacing={8} align="stretch">
        <List spacing={4}>
          {authors.map((author) => (
            <ListItem
              key={author.name}
              p={4}
              borderRadius="md"
              _hover={{
                bg: hoverBg,
                transform: 'translateX(8px)',
                transition: 'all 0.2s',
              }}>
              <LinkComponent href={author.path}>
                <Box>
                  <Text fontSize="xl" fontWeight="bold">
                    {author.name}
                  </Text>
                  <Text fontSize="md" color="#45a2f8">
                    {author.description}
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

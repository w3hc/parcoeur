import React from 'react'
import { VStack, Box, Text, List, ListItem, useColorModeValue } from '@chakra-ui/react'
import { LinkComponent } from '../components/layout/LinkComponent'
import { NextSeo } from 'next-seo'
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from '../utils/config'

const poets = [
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
]

export default function Home() {
  const hoverBg = useColorModeValue('rgba(69, 162, 248, 0.1)', 'rgba(69, 162, 248, 0.2)')

  return (
    <>
      <NextSeo
        title={SITE_NAME}
        titleTemplate="%s"
        description={`${SITE_DESCRIPTION}`}
        canonical={SITE_URL}
        openGraph={{
          type: 'website',
          url: SITE_URL,
          title: SITE_NAME,
          description: SITE_DESCRIPTION,
          siteName: SITE_NAME,
          images: [
            {
              url: `${SITE_URL}/huangshan.png`,
              width: 1200,
              height: 630,
              alt: SITE_NAME,
            },
          ],
        }}
        twitter={{
          cardType: 'summary_large_image',
          site: SITE_URL,
        }}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: 'poésie, poèmes, littérature française, La Fontaine, Rimbaud, Valéry, apprendre par coeur',
          },
          {
            name: 'author',
            content: 'WH3C',
          },
        ]}
      />
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

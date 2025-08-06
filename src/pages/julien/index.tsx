import React from 'react'
import { VStack, Box, Text, List, ListItem, useColorModeValue } from '@chakra-ui/react'
import { LinkComponent } from '../../components/layout/LinkComponent'
import { HeadingComponent } from '../../components/layout/HeadingComponent'
import { NextSeo } from 'next-seo'
import { SITE_URL } from '../../utils/config'

const texts = [
  {
    title: 'Hands Off Palestine',
    path: '/julien/hands-off-palestine',
    date: '2025',
    description: "Ils disent qu'ils ont le droit de se défendre, mais ils ont lâché des dizaines de milliers de tonnes de bombes...",
  },
]

export default function JulienBeranger() {
  const descriptionColor = '#45a2f8'
  const hoverBg = useColorModeValue('rgba(69, 162, 248, 0.1)', 'rgba(69, 162, 248, 0.2)')
  const dateColor = useColorModeValue('rgba(69, 162, 248, 0.7)', 'rgba(69, 162, 248, 0.5)')

  const seoTitle = 'Julien Béranger - Textes contemporains'
  const seoDescription = 'Quelques textes contemporains de Julien Béranger : Hands Off Palestine et autres écrits engagés'

  return (
    <>
      <NextSeo
        title={seoTitle}
        description={seoDescription}
        canonical={`${SITE_URL}/julien`}
        openGraph={{
          title: seoTitle,
          description: seoDescription,
          url: `${SITE_URL}/julien`,
          type: 'profile',
          profile: {
            firstName: 'Julien',
            lastName: 'Béranger',
          },
          site_name: 'Par coeur',
          images: [
            {
              url: `${SITE_URL}/huangshan.png`,
              width: 1200,
              height: 630,
              alt: 'Julien Béranger - Textes contemporains',
            },
          ],
        }}
        twitter={{
          cardType: 'summary_large_image',
          site: '@w3hc8',
        }}
      />
      <VStack spacing={8} align="stretch">
        <HeadingComponent as="h1">Julien Béranger</HeadingComponent>
        <List spacing={4}>
          {texts.map((text) => (
            <ListItem
              key={text.title}
              p={4}
              borderRadius="md"
              _hover={{
                bg: hoverBg,
                transform: 'translateX(8px)',
                transition: 'all 0.2s',
              }}>
              <LinkComponent href={text.path}>
                <Box>
                  <Text fontSize="xl" fontWeight="bold">
                    {text.title}
                  </Text>
                  <Text fontSize="sm" color={dateColor}>
                    {text.date}
                  </Text>
                  <Text fontSize="md" mt={1} color={descriptionColor}>
                    {text.description}
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

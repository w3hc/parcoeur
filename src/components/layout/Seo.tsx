import React from 'react'
import { NextSeo } from 'next-seo'
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL, SOCIAL_TWITTER } from '../../utils/config'

interface Props {
  title?: string
  description?: string
  isPoem?: boolean
  author?: string
  poemFirstLine?: string
}

export function Seo({ title, description, isPoem, author, poemFirstLine }: Props = {}) {
  const origin = typeof window !== 'undefined' && window.location.origin ? window.location.origin : SITE_URL

  // Handle different page types
  let pageTitle = title || SITE_NAME
  let pageDescription = description || SITE_DESCRIPTION

  if (isPoem && author) {
    pageTitle = `${title} - ${author}`
    pageDescription = poemFirstLine || `Un poème de ${author}`
  } else if (!isPoem && title) {
    pageTitle = `${title} | ${SITE_NAME}`
  }

  return (
    <NextSeo
      title={pageTitle}
      description={pageDescription}
      openGraph={{
        type: 'website',
        locale: 'fr_FR',
        url: origin,
        siteName: SITE_NAME,
        title: pageTitle,
        description: pageDescription,
        images: [
          {
            url: `${origin}/huangshan.png`,
            width: 1200,
            height: 630,
            alt: isPoem ? `${title} - Un poème de ${author}` : `${SITE_NAME} - ${pageDescription}`,
          },
        ],
      }}
      twitter={{
        handle: `@${SOCIAL_TWITTER}`,
        site: `@${SOCIAL_TWITTER}`,
        cardType: 'summary_large_image',
      }}
      additionalMetaTags={[
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
        {
          name: 'og:type',
          content: isPoem ? 'article' : 'website',
        },
        {
          name: 'article:author',
          content: author || '',
        },
      ]}
    />
  )
}

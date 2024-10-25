import React from 'react'
import { NextSeo } from 'next-seo'
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL, SOCIAL_TWITTER } from '../../utils/config'

interface Props {
  title?: string
  description?: string
}

export function Seo({ title, description }: Props = {}) {
  const origin = typeof window !== 'undefined' && window.location.origin ? window.location.origin : SITE_URL
  const pageTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME
  const pageDescription = description || SITE_DESCRIPTION

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
            alt: `${SITE_NAME} Open Graph Image`,
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
      ]}
    />
  )
}

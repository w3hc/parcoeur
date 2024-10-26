import React from 'react'
import { default as NextHead } from 'next/head'
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from '../../utils/config'

interface Props {
  title?: string
  description?: string
  isPoem?: boolean
  author?: string
  poemFirstLine?: string
}

export function Head({ title, description, isPoem, author, poemFirstLine }: Props) {
  const origin = typeof window !== 'undefined' && window.location.origin ? window.location.origin : SITE_URL
  const img = `${origin}/huangshan.png`

  let pageTitle = title || SITE_NAME
  let pageDescription = description || SITE_DESCRIPTION

  if (isPoem && author) {
    pageTitle = `${title} - ${author}`
    pageDescription = poemFirstLine || `Un poème de ${author}`
  } else if (!isPoem && title) {
    pageTitle = `${title} | ${SITE_NAME}`
  }

  return (
    <NextHead>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />

      {/* Open Graph */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={img} />
      <meta property="og:url" content={origin} />
      <meta property="og:type" content={isPoem ? 'article' : 'website'} />
      <meta property="og:site_name" content={SITE_NAME} />
      {author && <meta property="article:author" content={author} />}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@W3HC8" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={img} />
    </NextHead>
  )
}

import React from 'react'
import { default as NextHead } from 'next/head'
import { SITE_URL } from '../../utils/config'

interface Props {
  title?: string
  description?: string
  isPoem?: boolean
}

export function Head({ title, description, isPoem }: Props) {
  const origin = typeof window !== 'undefined' && window.location.origin ? window.location.origin : SITE_URL
  const img = `${origin}/huangshan.png`

  const pageTitle = isPoem ? title : title ? `${title} | Par coeur` : 'Par coeur'

  return (
    <NextHead>
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={img} />
      <meta property="og:url" content={origin} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@W3HC8" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={img} />
    </NextHead>
  )
}

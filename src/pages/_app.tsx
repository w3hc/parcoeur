import type { AppProps } from 'next/app'
import Layout from '../components/layout'
import { ChakraProvider } from '@chakra-ui/react'
import { Seo } from '../components/layout/Seo'
import { useIsMounted } from '../hooks/useIsMounted'
import ErrorBoundary from '../components/layout/ErrorBoundary'

export default function App({ Component, pageProps }: AppProps) {
  const isMounted = useIsMounted()

  return (
    <>
      <ErrorBoundary>
        <ChakraProvider>
          <Seo />
          {isMounted && (
            <Layout>
              <Component {...pageProps} />
            </Layout>
          )}
        </ChakraProvider>
      </ErrorBoundary>
    </>
  )
}

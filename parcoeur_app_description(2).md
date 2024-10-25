# parcoeur


### .eslintignore

```
# Ignore everything
# *
```

### .eslintrc.json

```json
{
  "extends": "next/core-web-vitals"
}

```

### .gitignore

```
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local
.env

# vercel
.vercel

# typescript

*.tsbuildinfo
next-env.d.ts
/.history

# Misc

NOTES.md
```

### .prettierrc.json

```json
{
    "trailingComma": "es5",
    "semi": false,
    "singleQuote": true,
    "printWidth": 150,
    "bracketSameLine": true,
    "useTabs": false,
    "tabWidth": 2
}
```

### README.md

```markdown
# Par coeur

Apprenons quelques beaux poèmes par coeur !

## Install

```bash
pnpm i
```

## Run

```bash
pnpm dev
```

## Support

You can contact me via [Element](https://matrix.to/#/@julienbrg:matrix.org), [Farcaster](https://warpcast.com/julien-), [Telegram](https://t.me/julienbrg), [Twitter](https://twitter.com/julienbrg), [Discord](https://discordapp.com/users/julienbrg), or [LinkedIn](https://www.linkedin.com/in/julienberanger/).

```

### jest.config.ts

```typescript
import type { Config } from 'jest'
import nextJest from 'next/jest'

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig: Config = {
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jest-environment-jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
}

export default createJestConfig(customJestConfig)

```

### jest.setup.ts

```typescript
import '@testing-library/jest-dom'
import { TextEncoder, TextDecoder } from 'util'

global.TextEncoder = TextEncoder
global.TextDecoder = TextDecoder as any

// Add any required mock implementations
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
})

```

### next.config.js

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig

```

### package.json

```json
{
  "name": "parcoeur",
  "description": "Apprenons quelques beaux poèmes par coeur !",
  "version": "0.1.0",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "test": "jest",
    "test:watch": "jest --watch"
  },
  "dependencies": {
    "@chakra-ui/icons": "^2.1.1",
    "@chakra-ui/next-js": "^2.2.0",
    "@chakra-ui/react": "^2.8.2",
    "@emotion/react": "^11.13.3",
    "@emotion/styled": "^11.13.0",
    "@types/react": "18.3.5",
    "@types/react-dom": "18.3.0",
    "autoprefixer": "10.4.20",
    "eslint": "8.57.1",
    "eslint-config-next": "14.2.7",
    "framer-motion": "^11.7.0",
    "next": "14.2.12",
    "next-seo": "^6.6.0",
    "postcss": "8.4.44",
    "react": "18.3.1",
    "react-device-detect": "^2.2.3",
    "react-dom": "18.3.1",
    "react-icons": "^5.3.0",
    "typescript": "5.5.4"
  },
  "devDependencies": {
    "@testing-library/jest-dom": "^6.5.0",
    "@testing-library/react": "^16.0.1",
    "@types/jest": "^29.5.13",
    "@types/node": "22.5.2",
    "jest": "^29.7.0",
    "jest-environment-jsdom": "^29.7.0",
    "ts-jest": "^29.1.0",
    "ts-node": "^10.9.2"
  }
}
```

### parcoeur_app_description(1).md

```markdown
# parcoeur


### .eslintignore

```
# Ignore everything
# *
```

### .eslintrc.json

```json
{
  "extends": "next/core-web-vitals"
}

```

### .gitignore

```
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js

# testing
```

[This file was cut: it has more than 500 lines]

```

### parcoeur_app_description(2).md

```markdown
# parcoeur


### .eslintignore

```
# Ignore everything
# *
```

### .eslintrc.json

```json
{
  "extends": "next/core-web-vitals"
}

```

### .gitignore

```
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local
.env

# vercel
.vercel

# typescript

*.tsbuildinfo
next-env.d.ts
/.history

# Misc

NOTES.md
```

### .prettierrc.json

```json
{
    "trailingComma": "es5",
    "semi": false,
    "singleQuote": true,
    "printWidth": 150,
    "bracketSameLine": true,
    "useTabs": false,
    "tabWidth": 2
}
```

### README.md

```markdown
# Par coeur

Apprenons quelques beaux poèmes par coeur !

## Install

```bash
pnpm i
```

## Run

```bash
pnpm dev
```

## Support

You can contact me via [Element](https://matrix.to/#/@julienbrg:matrix.org), [Farcaster](https://warpcast.com/julien-), [Telegram](https://t.me/julienbrg), [Twitter](https://twitter.com/julienbrg), [Discord](https://discordapp.com/users/julienbrg), or [LinkedIn](https://www.linkedin.com/in/julienberanger/).

```

### jest.config.ts

```typescript
import type { Config } from 'jest'
import nextJest from 'next/jest'

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig: Config = {
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jest-environment-jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
}

export default createJestConfig(customJestConfig)

```

### jest.setup.ts

```typescript
import '@testing-library/jest-dom'
import { TextEncoder, TextDecoder } from 'util'

global.TextEncoder = TextEncoder
global.TextDecoder = TextDecoder as any

// Add any required mock implementations
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
})

```

### next.config.js

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig

```

### package.json

```json
{
  "name": "parcoeur",
  "description": "Apprenons quelques beaux poèmes par coeur !",
  "version": "0.1.0",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "test": "jest",
    "test:watch": "jest --watch"
  },
  "dependencies": {
    "@chakra-ui/icons": "^2.1.1",
    "@chakra-ui/next-js": "^2.2.0",
    "@chakra-ui/react": "^2.8.2",
    "@emotion/react": "^11.13.3",
    "@emotion/styled": "^11.13.0",
    "@types/react": "18.3.5",
    "@types/react-dom": "18.3.0",
    "autoprefixer": "10.4.20",
    "eslint": "8.57.1",
    "eslint-config-next": "14.2.7",
    "framer-motion": "^11.7.0",
    "next": "14.2.12",
    "next-seo": "^6.6.0",
    "postcss": "8.4.44",
    "react": "18.3.1",
    "react-device-detect": "^2.2.3",
    "react-dom": "18.3.1",
    "react-icons": "^5.3.0",
    "typescript": "5.5.4"
  },
  "devDependencies": {
    "@testing-library/jest-dom": "^6.5.0",
    "@testing-library/react": "^16.0.1",
    "@types/jest": "^29.5.13",
    "@types/node": "22.5.2",
    "jest": "^29.7.0",
    "jest-environment-jsdom": "^29.7.0",
    "ts-jest": "^29.1.0",
    "ts-node": "^10.9.2"
  }
}
```

### parcoeur_app_description(1).md

```markdown
# parcoeur


### .eslintignore

```
# Ignore everything
# *
```

### .eslintrc.json

```json
{
  "extends": "next/core-web-vitals"
}

```

### .gitignore

```
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js

# testing
```

[This file was cut: it has more than 500 lines]

```

### parcoeur_app_description(2).md

```markdown

```

### parcoeur_app_description.md

```markdown
# parcoeur


### .eslintignore

```
# Ignore everything
# *
```

### .eslintrc.json

```json
{
  "extends": "next/core-web-vitals"
}

```

### .gitignore

```
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js

# testing
```

[This file was cut: it has more than 500 lines]

```

### pnpm-lock.yaml

```yaml
lockfileVersion: '9.0'

settings:
  autoInstallPeers: true
  excludeLinksFromLockfile: false

importers:

  .:
    dependencies:
      '@chakra-ui/icons':
        specifier: ^2.1.1
        version: 2.2.4(@chakra-ui/react@2.10.3(@emotion/react@11.13.3(@types/react@18.3.5)(react@18.3.1))(@emotion/styled@11.13.0(@emotion/react@11.13.3(@types/react@18.3.5)(react@18.3.1))(@types/react@18.3.5)(react@18.3.1))(@types/react@18.3.5)(framer-motion@11.11.10(@emotion/is-prop-valid@1.3.1)(react-dom@18.3.1(react@18.3.1))(react@18.3.1))(react-dom@18.3.1(react@18.3.1))(react@18.3.1))(react@18.3.1)
      '@chakra-ui/next-js':
        specifier: ^2.2.0
        version: 2.4.2(@chakra-ui/react@2.10.3(@emotion/react@11.13.3(@types/react@18.3.5)(react@18.3.1))(@emotion/styled@11.13.0(@emotion/react@11.13.3(@types/react@18.3.5)(react@18.3.1))(@types/react@18.3.5)(react@18.3.1))(@types/react@18.3.5)(framer-motion@11.11.10(@emotion/is-prop-valid@1.3.1)(react-dom@18.3.1(react@18.3.1))(react@18.3.1))(react-dom@18.3.1(react@18.3.1))(react@18.3.1))(@emotion/react@11.13.3(@types/react@18.3.5)(react@18.3.1))(next@14.2.12(@babel/core@7.25.9)(babel-plugin-macros@3.1.0)(react-dom@18.3.1(react@18.3.1))(react@18.3.1))(react@18.3.1)
      '@chakra-ui/react':
        specifier: ^2.8.2
        version: 2.10.3(@emotion/react@11.13.3(@types/react@18.3.5)(react@18.3.1))(@emotion/styled@11.13.0(@emotion/react@11.13.3(@types/react@18.3.5)(react@18.3.1))(@types/react@18.3.5)(react@18.3.1))(@types/react@18.3.5)(framer-motion@11.11.10(@emotion/is-prop-valid@1.3.1)(react-dom@18.3.1(react@18.3.1))(react@18.3.1))(react-dom@18.3.1(react@18.3.1))(react@18.3.1)
      '@emotion/react':
        specifier: ^11.13.3
        version: 11.13.3(@types/react@18.3.5)(react@18.3.1)
      '@emotion/styled':
        specifier: ^11.13.0
        version: 11.13.0(@emotion/react@11.13.3(@types/react@18.3.5)(react@18.3.1))(@types/react@18.3.5)(react@18.3.1)
      '@types/react':
        specifier: 18.3.5
        version: 18.3.5
      '@types/react-dom':
        specifier: 18.3.0
```

[This file was cut: it has more than 500 lines]

```

## public


### public/favicon.ico

```
[This is an image file]
```

### public/huangshan.png

```
[This is an image file]
```

## src


## src/__tests__


### src/__tests__/Header.test.tsx

```
import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Header } from '../components/layout/Header'
import { ChakraProvider } from '@chakra-ui/react'

describe('Header', () => {
  it('renders the site name and navigation elements', () => {
    render(
      <ChakraProvider>
        <Header />
      </ChakraProvider>
    )

    // Check if site name is rendered
    const siteName = screen.getByText('Par coeur')
    expect(siteName).toBeInTheDocument()

    // Check if menu button exists
    const menuButton = screen.getByRole('button', { name: /options/i })
    expect(menuButton).toBeInTheDocument()
  })
})

```

### src/__tests__/index.test.tsx

```
import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from '../pages/index'
import { ChakraProvider } from '@chakra-ui/react'

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: '',
      asPath: '',
    }
  },
}))

describe('Home page', () => {
  it('renders without crashing', () => {
    render(
      <ChakraProvider>
        <Home />
      </ChakraProvider>
    )
    expect(document.body).toBeInTheDocument()
  })
})

```

## src/components


## src/components/layout


### src/components/layout/ErrorBoundary.tsx

```
import React, { ErrorInfo, ReactNode } from 'react'
import { mobileModel, mobileVendor } from 'react-device-detect'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
  deviceInfo: string
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false, deviceInfo: '' }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, deviceInfo: '' }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by ErrorBoundary:', error, errorInfo)
  }

  componentDidMount() {
    const deviceInfo = `${mobileVendor} ${mobileModel}`
    this.setState({ deviceInfo })
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <h3>All apologies, the app is not yet available on this type of device.</h3>
          <br />
          <p>{this.state.deviceInfo}</p>
          <br />
          <p>Thank you for using the app from another device.</p>
          <br />
          <p>
            Feel free to report this to Julien via <a href="https://matrix.to/#/@julienbrg:matrix.org">Element</a>,{' '}
            <a href="https://warpcast.com/julien-">Farcaster</a>, <a href="https://t.me/julienbrg">Telegram</a>,{' '}
            <a href="https://twitter.com/julienbrg">Twitter</a>, <a href="https://discordapp.com/users/julienbrg">Discord</a> or{' '}
            <a href="https://www.linkedin.com/in/julienberanger/">LinkedIn</a>.
          </p>
        </>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary

```

### src/components/layout/Head.tsx

```
import React from 'react'
import { default as NextHead } from 'next/head'
import { SITE_URL } from '../../utils/config'

interface Props {
  title?: string
  description?: string
}

export function Head({ title, description }: Props) {
  const origin = typeof window !== 'undefined' && window.location.origin ? window.location.origin : SITE_URL
  const img = `${origin}/huangshan.png`

  return (
    <NextHead>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={img} />
      <meta property="og:url" content={origin} />
      <meta name="twitter:card" content={img} />
      <meta name="twitter:site" content="@W3HC8" />
      <meta name="twitter:title" content="Par coeur" />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={img} />
    </NextHead>
  )
}

```

### src/components/layout/Header.tsx

```
import React from 'react'
import { Flex, useColorModeValue, Spacer, Heading, Box, Link, Icon, MenuList, MenuItem, Menu, MenuButton, IconButton } from '@chakra-ui/react'
import { LinkComponent } from './LinkComponent'
import { ThemeSwitcher } from './ThemeSwitcher'
import { SITE_NAME } from '../../utils/config'
import { FaGithub } from 'react-icons/fa'
import { HamburgerIcon } from '@chakra-ui/icons'

interface Props {
  className?: string
}

export function Header(props: Props) {
  const className = props.className ?? ''
  const bgColor = useColorModeValue('rgba(69, 162, 248, 0.1)', 'gray.900')
  const menuHoverBg = useColorModeValue('rgba(69, 162, 248, 0.2)', 'gray.700')

  return (
    <Flex as="header" className={className} bg={bgColor} px={4} py={5} mb={8} alignItems="center">
      <LinkComponent href="/">
        <Heading as="h1" size="md">
          {SITE_NAME}
        </Heading>
      </LinkComponent>

      <Spacer />
      <Menu>
        <MenuButton as={IconButton} aria-label="Options" icon={<HamburgerIcon />} size={'sm'} mr={4} _hover={{ bg: menuHoverBg }} />
        <MenuList>
          <LinkComponent href="/">
            <MenuItem fontSize="md" _hover={{ bg: menuHoverBg }}>
              Page d&apos;accueil
            </MenuItem>
          </LinkComponent>
          <LinkComponent href="/rimbaud">
            <MenuItem fontSize="md" _hover={{ bg: menuHoverBg }}>
              Rimbaud
            </MenuItem>
          </LinkComponent>
        </MenuList>
      </Menu>
      <Flex alignItems="center" gap={4}>
        <Flex alignItems="center">
          <ThemeSwitcher />
          <Box mt={2} ml={4}>
            <Link href="https://github.com/w3hc/parcoeur" isExternal>
              <Icon as={FaGithub} boxSize={5} _hover={{ color: '#45a2f8' }} />
            </Link>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  )
}

```

### src/components/layout/HeadingComponent.tsx

```
import { ReactNode } from 'react'
import { Heading } from '@chakra-ui/react'

interface Props {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'
  children: ReactNode
  className?: string
}

export function HeadingComponent(props: Props) {
  const className = props.className ?? ''
  let size
  switch (props.as) {
    case 'h1':
      size = props.size ?? '2xl'
      break
    case 'h2':
      size = props.size ?? 'xl'
      break
    case 'h3':
      size = props.size ?? 'lg'
      break
    case 'h4':
      size = props.size ?? 'md'
      break
    case 'h5':
      size = props.size ?? 'sm'
      break
    case 'h6':
      size = props.size ?? 'xs'
      break
  }

  return (
    <Heading as={props.as} size={size} className={className} mb={2}>
      {props.children}
    </Heading>
  )
}

```

### src/components/layout/LinkComponent.tsx

```
import React, { ReactNode } from 'react'
import NextLink from 'next/link'
import { Link, useColorModeValue } from '@chakra-ui/react'
import { THEME_COLOR_SCHEME } from '../../utils/config'

interface Props {
  href: string
  children: ReactNode
  isExternal?: boolean
  className?: string
}

export function LinkComponent(props: Props) {
  const className = props.className ?? ''
  const isExternal = props.href.match(/^([a-z0-9]*:|.{0})\/\/.*$/) || props.isExternal
  const color = useColorModeValue(`${THEME_COLOR_SCHEME}.600`, `${THEME_COLOR_SCHEME}.400`)

  if (isExternal) {
    return (
      <Link className={className} _hover={{ color: '#8c1c84' }} href={props.href} target="_blank" rel="noopener noreferrer">
        {props.children}
      </Link>
    )
  }

  return (
    <Link as={NextLink} className={className} _hover={{ color: color }} href={props.href}>
      {props.children}
    </Link>
  )
}

```

### src/components/layout/Seo.tsx

```
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

```

### src/components/layout/ThemeSwitcher.tsx

```
import React from 'react'
import { Box, useColorMode } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

interface Props {
  className?: string
}

export function ThemeSwitcher(props: Props) {
  const className = props.className ?? ''
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box className={className} onClick={toggleColorMode} _hover={{ cursor: 'pointer' }}>
      {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
    </Box>
  )
}

```

### src/components/layout/index.tsx

```
import { ReactNode } from 'react'
import { Box, Container } from '@chakra-ui/react'
import { Header } from './Header'

interface Props {
  children?: ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <Box margin="0 auto" minH="100vh">
      <Header />
      <Container maxW="container.lg">{children}</Container>
    </Box>
  )
}

```

## src/hooks


### src/hooks/useIsMounted.tsx

```
import { useState, useEffect } from 'react'

export function useIsMounted(): boolean {
  let [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return isMounted
}

```

## src/pages


### src/pages/_app.tsx

```
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

```

### src/pages/_document.tsx

```
import { Html, Head, Main, NextScript } from 'next/document'
import { ColorModeScript } from '@chakra-ui/react'

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <ColorModeScript initialColorMode={'dark'} />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

```

### src/pages/index.tsx

```
import React from 'react'
import { VStack, Box, Text, List, ListItem, useColorModeValue } from '@chakra-ui/react'
import { LinkComponent } from '../components/layout/LinkComponent'
import { Seo } from '../components/layout/Seo'
import { HeadingComponent } from '../components/layout/HeadingComponent'

const poets = [
  {
    name: 'Arthur Rimbaud',
    path: '/rimbaud',
    description: 'Poète symboliste français (1854-1891)',
  },
]

export default function Home() {
  const descriptionColor = useColorModeValue('rgba(69, 162, 248, 0.8)', 'rgba(69, 162, 248, 0.6)')
  const hoverBg = useColorModeValue('rgba(69, 162, 248, 0.1)', 'rgba(69, 162, 248, 0.2)')

  return (
    <>
      <Seo />
      <VStack spacing={8} align="stretch">
        <HeadingComponent as="h1">Les Poètes</HeadingComponent>
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
                  <Text fontSize="md" color={descriptionColor}>
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

```

## src/pages/rimbaud


### src/pages/rimbaud/index.tsx

```
import React from 'react'
import { VStack, Box, Text, List, ListItem, useColorModeValue } from '@chakra-ui/react'
import { LinkComponent } from '../../components/layout/LinkComponent'
import { Seo } from '../../components/layout/Seo'
import { HeadingComponent } from '../../components/layout/HeadingComponent'

const poems = [
  {
    title: 'Le Dormeur du val',
    path: '/rimbaud/le-dormeur-du-val',
    date: 'octobre 1870',
    description: 'Poème sur un jeune soldat trouvé dans un val verdoyant',
  },
]

export default function Rimbaud() {
  const descriptionColor = useColorModeValue('rgba(69, 162, 248, 0.8)', 'rgba(69, 162, 248, 0.6)')
  const hoverBg = useColorModeValue('rgba(69, 162, 248, 0.1)', 'rgba(69, 162, 248, 0.2)')
  const dateColor = useColorModeValue('rgba(69, 162, 248, 0.7)', 'rgba(69, 162, 248, 0.5)')

  return (
    <>
      <Seo title="Arthur Rimbaud" description="Poèmes d'Arthur Rimbaud" />
      <VStack spacing={8} align="stretch">
        <HeadingComponent as="h1">Arthur Rimbaud</HeadingComponent>
        <Text fontSize="lg" color={descriptionColor} mb={6}>
          Jean Nicolas Arthur Rimbaud (1854-1891) fut un poète français majeur du XIXe siècle.
        </Text>
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

```

### src/pages/rimbaud/le-dormeur-du-val.tsx

```
import { Text, VStack, Box, Flex, useColorModeValue } from '@chakra-ui/react'
import { Head } from '../../components/layout/Head'
import { useState } from 'react'

export default function Poesie() {
  const [visibleStates, setVisibleStates] = useState(new Array(7).fill(true))

  const hoverVisibleBg = useColorModeValue('rgba(69, 162, 248, 0.1)', 'rgba(69, 162, 248, 0.2)')
  const hoverHiddenBg = useColorModeValue('rgba(69, 162, 248, 0.05)', 'rgba(69, 162, 248, 0.1)')

  const poemLines = [
    ["C'est un trou de verdure où chante une rivière", 'Accrochant follement aux herbes des haillons'],
    ["D'argent ; où le soleil, de la montagne fière,", "Luit : c'est un petit val qui mousse de rayons."],
    ['Un soldat jeune, bouche ouverte, tête nue,', 'Et la nuque baignant dans le frais cresson bleu,'],
    ["Dort ; il est étendu dans l'herbe, sous la nue,", 'Pâle dans son lit vert où la lumière pleut.'],
    ['Les pieds dans les glaïeuls, il dort. Souriant comme', 'Sourirait un enfant malade, il fait un somme :'],
    ['Nature, berce-le chaudement : il a froid.', 'Les parfums ne font pas frissonner sa narine ;'],
    ['Il dort dans le soleil, la main sur sa poitrine', 'Tranquille. Il a deux trous rouges au côté droit.'],
  ]

  const togglePair = (index: number) => {
    setVisibleStates((current) => current.map((state, i) => (i === index ? !state : state)))
  }

  return (
    <>
      <Head title="Le Dormeur du Val - Arthur Rimbaud" description="Poème d'Arthur Rimbaud - Le Dormeur du Val" />
      <main>
        <VStack spacing={8} px={4}>
          <Box maxW="600px" w="100%">
            <Box fontSize="xl" textAlign="left" display="flex" flexDirection="column" gap={3}>
              {poemLines.map((pair, index) => (
                <Box
                  key={index}
                  onClick={() => togglePair(index)}
                  cursor="pointer"
                  _hover={{
                    bg: visibleStates[index] ? hoverVisibleBg : hoverHiddenBg,
                  }}
                  transition="all 0.2s"
                  display="block"
                  width="100%"
                  borderRadius="md"
                  style={{
                    border: !visibleStates[index] ? '1px solid #8c1c84' : 'none',
                    borderRadius: !visibleStates[index] ? '10px' : '4px',
                    padding: !visibleStates[index] ? '10px' : '12px', // Increased padding
                  }}>
                  <Flex direction="column" lineHeight="2em">
                    {visibleStates[index] ? (
                      <>
                        <Box
                          style={{
                            transition: 'none',
                            opacity: 1,
                          }}>
                          {pair[0]}
                        </Box>
                        <Box
                          style={{
                            transition: 'none',
                            opacity: 1,
                          }}>
                          {pair[1]}
                        </Box>
                      </>
                    ) : (
                      <>
                        <Box
                          style={{
                            transition: 'opacity 0.5s ease-out',
                            opacity: 0,
                          }}>
                          {pair[0]}
                        </Box>
                        <Box
                          style={{
                            transition: 'opacity 0.5s ease-out',
                            opacity: 0,
                          }}>
                          {pair[1]}
                        </Box>
                      </>
                    )}
                  </Flex>
                </Box>
              ))}
            </Box>
            <Flex justify="flex-end" mt={6} mb={20}>
              <Text fontSize="md" color={useColorModeValue('rgba(69, 162, 248, 0.8)', 'rgba(69, 162, 248, 0.6)')}>
                — Arthur Rimbaud, <i>Le Dormeur du val</i>, octobre 1870
              </Text>
            </Flex>
          </Box>
        </VStack>
      </main>
    </>
  )
}

```

## src/utils


### src/utils/config.ts

```typescript
import { ThemingProps } from '@chakra-ui/react'
export const SITE_DESCRIPTION = 'Apprenons quelques beaux poèmes par coeur !'
export const SITE_NAME = 'Par coeur'
export const SITE_URL = 'https://parcoeur.netlify.app'

export const THEME_INITIAL_COLOR = 'system'
export const THEME_COLOR_SCHEME: ThemingProps['colorScheme'] = 'blue'
export const THEME_CONFIG = {
  initialColorMode: THEME_INITIAL_COLOR,
}

export const SOCIAL_TWITTER = 'w3hc8'
export const SOCIAL_GITHUB = 'w3hc/parcoeur'

export const SERVER_SESSION_SETTINGS = {
  cookieName: SITE_NAME,
  password: process.env.SESSION_PASSWORD ?? 'UPDATE_TO_complex_password_at_least_32_characters_long',
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
  },
}

```

### tsconfig.json

```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "noEmit": true,
    "incremental": true
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"],
  "types": ["jest", "node"],
  "esModuleInterop": true
}

```

## Structure

```
├── .eslintignore
├── .eslintrc.json
├── .github
    └── workflows
    │   └── run-tests.yml
├── .gitignore
├── .next
├── .prettierrc.json
├── .swc
    └── plugins
    │   └── v7_macos_aarch64_0.106.15
├── .vscode
    ├── extensions.json
    └── settings.json
├── README.md
├── jest.config.ts
├── jest.setup.ts
├── next.config.js
├── package.json
├── parcoeur_app_description(1).md
├── parcoeur_app_description(2).md
├── parcoeur_app_description.md
├── pnpm-lock.yaml
├── public
    ├── favicon.ico
    └── huangshan.png
├── src
    ├── __tests__
    │   ├── Header.test.tsx
    │   └── index.test.tsx
    ├── components
    │   └── layout
    │   │   ├── ErrorBoundary.tsx
    │   │   ├── Head.tsx
    │   │   ├── Header.tsx
    │   │   ├── HeadingComponent.tsx
    │   │   ├── LinkComponent.tsx
    │   │   ├── Seo.tsx
    │   │   ├── ThemeSwitcher.tsx
    │   │   └── index.tsx
    ├── hooks
    │   └── useIsMounted.tsx
    ├── pages
    │   ├── _app.tsx
    │   ├── _document.tsx
    │   ├── index.tsx
    │   └── rimbaud
    │   │   ├── index.tsx
    │   │   └── le-dormeur-du-val.tsx
    └── utils
    │   └── config.ts
└── tsconfig.json
```

Timestamp: Oct 25 2024 12:53:26 PM UTC
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
  const renderHome = () => {
    return render(
      <ChakraProvider>
        <Home />
      </ChakraProvider>
    )
  }

  it('renders without crashing', () => {
    renderHome()
    expect(document.body).toBeInTheDocument()
  })

  it('displays all poets', () => {
    renderHome()
    expect(screen.getByText('Jean de La Fontaine')).toBeInTheDocument()
    expect(screen.getByText('Arthur Rimbaud')).toBeInTheDocument()
    expect(screen.getByText('Paul Valéry')).toBeInTheDocument()
  })

  it('displays poet dates', () => {
    renderHome()
    expect(screen.getByText('1621-1695')).toBeInTheDocument()
    expect(screen.getByText('1854-1891')).toBeInTheDocument()
    expect(screen.getByText('1871-1945')).toBeInTheDocument()
  })

  it('contains navigation links to poet pages', () => {
    renderHome()
    expect(screen.getByRole('link', { name: /Jean de La Fontaine 1621-1695/i })).toHaveAttribute('href', '/lafontaine')
    expect(screen.getByRole('link', { name: /Arthur Rimbaud 1854-1891/i })).toHaveAttribute('href', '/rimbaud')
    expect(screen.getByRole('link', { name: /Paul Valéry 1871-1945/i })).toHaveAttribute('href', '/valery')
  })
})

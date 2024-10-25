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

    const siteName = screen.getByText('Par coeur')
    expect(siteName).toBeInTheDocument()

    const menuButton = screen.getByRole('button', { name: /options/i })
    expect(menuButton).toBeInTheDocument()
  })
})

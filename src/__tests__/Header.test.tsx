import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Header } from '../components/layout/Header'
import { ChakraProvider } from '@chakra-ui/react'

describe('Header', () => {
  const renderHeader = () => {
    return render(
      <ChakraProvider>
        <Header />
      </ChakraProvider>
    )
  }

  it('renders the site name', () => {
    renderHeader()
    const siteName = screen.getByText('Par coeur')
    expect(siteName).toBeInTheDocument()
  })

  it('renders the menu button', () => {
    renderHeader()
    const menuButton = screen.getByRole('button', { name: /options/i })
    expect(menuButton).toBeInTheDocument()
  })

  it('displays navigation menu when menu button is clicked', () => {
    renderHeader()
    const menuButton = screen.getByRole('button', { name: /options/i })
    fireEvent.click(menuButton)

    expect(screen.getByText('La Fontaine')).toBeInTheDocument()
    expect(screen.getByText('Rimbaud')).toBeInTheDocument()
    expect(screen.getByText('Valéry')).toBeInTheDocument()
  })

  it('renders the GitHub link', () => {
    renderHeader()
    const githubLink = screen.getByRole('link', { name: /github/i })
    expect(githubLink).toHaveAttribute('href', 'https://github.com/w3hc/parcoeur')
  })
})

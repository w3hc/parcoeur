import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import LaFontainePage from '../pages/lafontaine/le-lion-et-le-moucheron'
import RimbaudPage from '../pages/rimbaud/le-dormeur-du-val'
import ValeryPage from '../pages/valery/le-cimetiere-marin'
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

describe('Poem pages', () => {
  const renderPoem = (Component: React.ComponentType) => {
    return render(
      <ChakraProvider>
        <Component />
      </ChakraProvider>
    )
  }

  describe('Le Lion et le Moucheron page', () => {
    it('renders the poem title and author', () => {
      renderPoem(LaFontainePage)
      expect(screen.getByText(/Le Lion et le Moucheron/)).toBeInTheDocument()
      expect(screen.getByText(/Jean de La Fontaine/)).toBeInTheDocument()
    })

    it('renders the first line of the poem', () => {
      renderPoem(LaFontainePage)
      expect(screen.getByText(/Va-t'en, chétif insecte, excrément de la terre!/)).toBeInTheDocument()
    })
  })

  describe('Le Dormeur du val page', () => {
    it('renders the poem title and author', () => {
      renderPoem(RimbaudPage)
      expect(screen.getByText(/Le Dormeur du val/)).toBeInTheDocument()
      expect(screen.getByText(/Arthur Rimbaud/)).toBeInTheDocument()
    })

    it('renders the first line of the poem', () => {
      renderPoem(RimbaudPage)
      expect(screen.getByText(/C'est un trou de verdure où chante une rivière/)).toBeInTheDocument()
    })
  })

  describe('Le Cimetière marin page', () => {
    it('renders the poem title and author', () => {
      renderPoem(ValeryPage)
      expect(screen.getByText(/Le Cimetière marin/)).toBeInTheDocument()
      expect(screen.getByText(/Paul Valéry/)).toBeInTheDocument()
    })

    it('renders the first line of the poem', () => {
      renderPoem(ValeryPage)
      expect(screen.getByText(/Ce toit tranquille, où marchent des colombes/)).toBeInTheDocument()
    })
  })
})

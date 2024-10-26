import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import PoemDisplay from '../components/layout/PoemDisplay'
import { ChakraProvider } from '@chakra-ui/react'

describe('PoemDisplay', () => {
  const mockProps = {
    title: 'Test Poem',
    author: 'Test Author',
    date: '2024',
    strophes: [
      ['Line 1', 'Line 2'],
      ['Line 3', 'Line 4'],
    ],
  }

  const renderPoemDisplay = () => {
    return render(
      <ChakraProvider>
        <PoemDisplay {...mockProps} />
      </ChakraProvider>
    )
  }

  it('renders poem title, author and date', () => {
    renderPoemDisplay()
    expect(screen.getByText(/Test Author/)).toBeInTheDocument()
    expect(screen.getByText(/Test Poem/)).toBeInTheDocument()
    expect(screen.getByText(/2024/)).toBeInTheDocument()
  })

  it('renders all poem lines initially', () => {
    renderPoemDisplay()
    expect(screen.getByText('Line 1')).toBeInTheDocument()
    expect(screen.getByText('Line 2')).toBeInTheDocument()
    expect(screen.getByText('Line 3')).toBeInTheDocument()
    expect(screen.getByText('Line 4')).toBeInTheDocument()
  })

  it('toggles verse visibility when clicked', () => {
    renderPoemDisplay()
    const firstVersePair = screen.getByText('Line 1').parentElement?.parentElement
    fireEvent.click(firstVersePair!)

    // Check if the verses have the expected opacity after toggle
    const verses = firstVersePair?.querySelectorAll('div[style*="opacity: 0"]')
    expect(verses?.length).toBe(2)
  })
})

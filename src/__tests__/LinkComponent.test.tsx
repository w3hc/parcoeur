import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { LinkComponent } from '../components/layout/LinkComponent'
import { ChakraProvider } from '@chakra-ui/react'

describe('LinkComponent', () => {
  it('renders internal links correctly', () => {
    render(
      <ChakraProvider>
        <LinkComponent href="/test">Internal Link</LinkComponent>
      </ChakraProvider>
    )
    const link = screen.getByText('Internal Link')
    expect(link).toHaveAttribute('href', '/test')
    expect(link).not.toHaveAttribute('target')
    expect(link).not.toHaveAttribute('rel')
  })

  it('renders external links correctly', () => {
    render(
      <ChakraProvider>
        <LinkComponent href="https://example.com">External Link</LinkComponent>
      </ChakraProvider>
    )
    const link = screen.getByText('External Link')
    expect(link).toHaveAttribute('href', 'https://example.com')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('adds custom className when provided', () => {
    render(
      <ChakraProvider>
        <LinkComponent href="/test" className="custom-class">
          Test Link
        </LinkComponent>
      </ChakraProvider>
    )
    expect(screen.getByText('Test Link')).toHaveClass('custom-class')
  })
})

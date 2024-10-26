import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ErrorBoundary from '../components/layout/ErrorBoundary'

describe('ErrorBoundary', () => {
  const ThrowError = () => {
    throw new Error('Test error')
  }

  beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {})
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('renders children when there is no error', () => {
    render(
      <ErrorBoundary>
        <div>Test content</div>
      </ErrorBoundary>
    )
    expect(screen.getByText('Test content')).toBeInTheDocument()
  })

  it('renders error message when there is an error', () => {
    render(
      <ErrorBoundary>
        <ThrowError />
      </ErrorBoundary>
    )
    expect(screen.getByText(/All apologies, the app is not yet available on this type of device./)).toBeInTheDocument()
  })

  it('displays contact information in error message', () => {
    render(
      <ErrorBoundary>
        <ThrowError />
      </ErrorBoundary>
    )
    expect(screen.getByText(/Feel free to report this to Julien/)).toBeInTheDocument()
    expect(screen.getByText('Element')).toHaveAttribute('href', 'https://matrix.to/#/@julienbrg:matrix.org')
    expect(screen.getByText('Twitter')).toHaveAttribute('href', 'https://twitter.com/julienbrg')
  })
})

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

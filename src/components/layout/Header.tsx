import React, { useEffect, useState } from 'react'
import { Flex, useColorModeValue, Spacer, Heading, Box, Link, Icon, MenuList, MenuItem, Menu, MenuButton, IconButton } from '@chakra-ui/react'
import { keyframes } from '@emotion/react'
import { LinkComponent } from './LinkComponent'
import { ThemeSwitcher } from './ThemeSwitcher'
import { SITE_NAME } from '../../utils/config'
import { FaGithub } from 'react-icons/fa'
import { HamburgerIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { useRouter } from 'next/router'
import { usePoemContext } from './PoemContext'

interface Props {
  className?: string
}

// Define the pulse animation
const pulseAnimation = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(140, 28, 132, 0.6);
    transform: scale(1);
  }
  50% {
    box-shadow: 0 0 0 12px rgba(140, 28, 132, 0.2);
    transform: scale(1.08);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(140, 28, 132, 0);
    transform: scale(1);
  }
`

export function Header(props: Props) {
  const className = props.className ?? ''
  const bgColor = useColorModeValue('rgba(69, 162, 248, 0.1)', 'gray.900')
  const menuHoverBg = useColorModeValue('rgba(69, 162, 248, 0.2)', 'gray.700')
  const router = useRouter()
  const { toggleAllStrophes, allStrophesVisible } = usePoemContext()

  // State to control the animation
  const [showHint, setShowHint] = useState(false)

  // Check if we're on a poem/text page (has a content slug)
  const isContentPage =
    router.pathname.includes('/') &&
    (router.pathname.includes('/lafontaine/') ||
      router.pathname.includes('/rimbaud/') ||
      router.pathname.includes('/valery/') ||
      router.pathname.includes('/libai/') ||
      router.pathname.includes('/julien/')) &&
    router.pathname.split('/').length > 2

  // Show hint animation when landing on a content page
  useEffect(() => {
    if (isContentPage) {
      // Small delay to let the page load first
      const timer = setTimeout(() => {
        setShowHint(true)

        // Hide the hint after a few pulses
        const hideTimer = setTimeout(() => {
          setShowHint(false)
        }, 4000) // 4 seconds should be enough for 3-4 pulses

        return () => clearTimeout(hideTimer)
      }, 1000) // 1 second delay after page load

      return () => clearTimeout(timer)
    }
  }, [isContentPage, router.pathname])

  const handleToggle = () => {
    if (toggleAllStrophes) {
      toggleAllStrophes()
      // Hide hint when user interacts with the button
      setShowHint(false)
    }
  }

  return (
    <Flex as="header" className={className} bg={bgColor} px={4} py={5} mb={8} alignItems="center">
      <LinkComponent href="/">
        <Heading as="h1" size="md">
          {SITE_NAME}
        </Heading>
      </LinkComponent>

      <Spacer />

      {/* Toggle all strophes button - only visible on content pages */}
      {isContentPage && toggleAllStrophes && (
        <IconButton
          aria-label={allStrophesVisible ? 'Hide all strophes' : 'Show all strophes'}
          icon={allStrophesVisible ? <ViewOffIcon /> : <ViewIcon />}
          size="sm"
          mr={4}
          _hover={{ bg: menuHoverBg }}
          onClick={handleToggle}
          // Apply the pulsing animation when showHint is true
          animation={showHint ? `${pulseAnimation} 1.2s ease-in-out infinite` : 'none'}
          borderRadius="md"
          transition="all 0.2s ease"
        />
      )}

      <Menu>
        <MenuButton as={IconButton} aria-label="Options" icon={<HamburgerIcon />} size={'sm'} mr={4} _hover={{ bg: menuHoverBg }} />
        <MenuList>
          <LinkComponent href="/lafontaine">
            <MenuItem fontSize="md" _hover={{ bg: menuHoverBg }}>
              La Fontaine
            </MenuItem>
          </LinkComponent>
          <LinkComponent href="/rimbaud">
            <MenuItem fontSize="md" _hover={{ bg: menuHoverBg }}>
              Rimbaud
            </MenuItem>
          </LinkComponent>
          <LinkComponent href="/valery">
            <MenuItem fontSize="md" _hover={{ bg: menuHoverBg }}>
              Valéry
            </MenuItem>
          </LinkComponent>
          <LinkComponent href="/libai">
            <MenuItem fontSize="md" _hover={{ bg: menuHoverBg }}>
              李白
            </MenuItem>
          </LinkComponent>
          <LinkComponent href="/julien/hands-off-palestine">
            <MenuItem fontSize="md" _hover={{ bg: menuHoverBg }}>
              Hands Off Palestine
            </MenuItem>
          </LinkComponent>
        </MenuList>
      </Menu>
      <Flex alignItems="center" gap={4}>
        <Flex alignItems="center">
          <ThemeSwitcher />
          <Box mt={2} ml={4}>
            <Link href="https://github.com/w3hc/parcoeur" isExternal aria-label="GitHub repository">
              <Icon as={FaGithub} boxSize={5} _hover={{ color: '#45a2f8' }} />
            </Link>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  )
}

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

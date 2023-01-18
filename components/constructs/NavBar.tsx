import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import { Box, Flex, Stack } from "@chakra-ui/react"
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

interface MenuToggleProps {
    toggle: () => void,
    isOpen: boolean
}

const MenuToggle = (props: MenuToggleProps) => {
  return (
    <Box display={{md: "none"}} onClick={props.toggle}>
      {props.isOpen ? <CloseIcon /> : <HamburgerIcon />}
    </Box>
  )
}

interface MenuItemProps {
  label: string,
  href: string,
  isActive: boolean
}

const MenuItem = (props: MenuItemProps) => {
  return (
    <Box p={3} borderBottomWidth={props.isActive ? "2px" : "0px"} borderBottomColor="purple">
      <Link href={props.href}>
        {props.label}
      </Link>
    </Box>
  )
}

const Logo = () => {
  return (<Box mt={2} mb={2}><Image src="/logo.png" width={104} height={32} alt="Vectos" /></Box>)
}

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={0}
      pt={2}
      pl={8}
      pr={8}
      boxShadow="0 1px 3px 0 rgba(0,0,0,0.1),0 1px 2px 0 rgba(0,0,0,0.06)"
    >
      <Logo />
      <MenuToggle isOpen={isOpen} toggle={toggle} />
      <Box display={{ base: isOpen ? "block" : "none", md: "block" }} flexBasis={{ base: "100%", md: "auto" }}>
        <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
        >
          <MenuItem href="/" label="Home" isActive={true} />
          <MenuItem href="/about" label="About" isActive={false} />
        </Stack>
      </Box>
      
    </Flex>
  )
}
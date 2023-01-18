import { Box, Text, Heading, SimpleGrid, Highlight, Stack, Flex } from "@chakra-ui/react"
import { useState } from 'react'
import { PrimaryButton } from "../primitives/PrimaryButton"
import { SecondaryButton } from "../primitives/SecondaryButton"
import { NavBar } from "./NavBar"

interface Props {
  title: string,
  children: JSX.Element
}

export const Page = (props: Props) => {

  return (
    <Box>
      <NavBar/>
      <Box bgImage="/bg.svg" bgRepeat="no-repeat" p={10}>
        <Flex maxW={800} align="center">
          {props.children}
        </Flex>
      </Box>
    </Box>
  )
}
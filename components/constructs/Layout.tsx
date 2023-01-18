import { Box, Center } from "@chakra-ui/react"
import { NavBar } from "./NavBar"

interface Props {
  title: string,
  children: JSX.Element
}

export const Layout = (props: Props) => {

  return (
    <Box>
      <NavBar/>
      <Box bgImage="/bg.svg" bgRepeat="no-repeat" p={10}>
        <Center>
          <Box w={1024}>
          {props.children}
          </Box>
          
        </Center>
      </Box>
    </Box>
  )
}
import { Box, Center, Heading, Stack, Text } from "@chakra-ui/react"

interface Props {
    title: string,
    subTitle: string,
    children: JSX.Element[]
}

export const VectosCardSelection = (props: Props) => {

    return (
        <Box textAlign="center">
            <Heading size="lg" mt={10} mb={2}>{props.title}</Heading>
            <Text mb={5} size="sm" color="gray.400">{props.subTitle}</Text>
            <Center>
            <Stack direction="row" spacing={4}>
                {props.children}
            </Stack>
            </Center>
        </Box>
    )
}
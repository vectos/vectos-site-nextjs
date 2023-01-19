import { Box, Heading, Text } from "@chakra-ui/react"

interface Props {
    title: string,
    subTitle: string,
    children: JSX.Element
}

export const VectosSelection = (props: Props) => {

    return (
        <Box>
            <Box textAlign="center">
                <Heading size="lg" mt={10} mb={2}>{props.title}</Heading>
                <Text mb={5} size="sm" color="gray.400">{props.subTitle}</Text>
            </Box>
            {props.children}
        </Box>
    )
}
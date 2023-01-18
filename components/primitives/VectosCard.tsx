import Image from 'next/image'
import { Box, Card, CardBody, Heading, Stack, Text } from "@chakra-ui/react"

interface Props {
    title: string,
    image: string,
    text: string,
    href: string
}

export const VectosCard = (props: Props) => (
    <Card variant="elevated" maxW={300}>
        <CardBody p={0}>
            <Box style={{position: "relative", height: 100}}>
                <Image style={{objectFit: "cover", borderTopLeftRadius: 3, borderTopRightRadius: 3}} fill={true} src={props.image} alt={props.title} />
            </Box>
            <Stack mt='3' p={3} spacing='3'>
                <Heading size='md'>{props.title}</Heading>
                <Text color="gray.500">{props.text}</Text>
            </Stack>
        </CardBody>
    </Card>
)
import Image from 'next/image'
import { Box, Card, CardBody, Circle, Heading, Stack, Text } from "@chakra-ui/react"

interface Props {
    title: string,
    image: string,
    text: string
}

export const VectosSummaryCard = (props: Props) => (
    <Card variant="unstyled"   direction={{ base: 'column', sm: 'row' }} overflow='hidden'>
        <Circle size={24} bg="gray.50">
            <Image width={72} height={72} src={props.image} alt={props.title} />
        </Circle>
        <Stack spacing='3'>
            <CardBody p={3}>
                <Heading size='sm'>{props.title}</Heading>
                <Text fontSize='sm' color="gray.500">{props.text}</Text>
            </CardBody>
        </Stack>
    </Card>
)
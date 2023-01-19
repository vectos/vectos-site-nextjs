import Image from 'next/image'
import Link from 'next/link'
import { Box, Card, CardBody, Heading, Stack, Text } from "@chakra-ui/react"

interface Props {
    title: string,
    banner: string,
    intro: string,
    href: string
}

export const VectosShowcaseCard = (props: Props) => (
    <Card variant="elevated" maxW={330}>
        <CardBody p={0}>
            <Box style={{position: "relative", height: 100}}>
                <Link href={props.href}>
                    <Image style={{objectFit: "cover", borderTopLeftRadius: 3, borderTopRightRadius: 3}} fill={true} src={props.banner} alt={props.title} />
                </Link>
            </Box>
            <Stack mt='3' p={3} spacing='3'>
                <Heading size='md'><Link href={props.href}>{props.title}</Link></Heading>
                <Text color="gray.500">{props.intro}</Text>
            </Stack>
        </CardBody>
    </Card>
)
import { Button } from "@chakra-ui/button"

interface Props {
    label: string,
    size: 'md' | 'lg',
    icon?: React.ReactElement,
    href: string
}

export const PrimaryButton = (props: Props) => {
    return (<Button as="a" href={props.href} leftIcon={props.icon} colorScheme='purple' variant='solid' size={props.size}>{props.label}</Button>)
}
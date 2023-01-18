import { Button } from "@chakra-ui/button"

interface Props {
    label: string,
    size: 'md' | 'lg',
    icon?: React.ReactElement
}

export const SecondaryButton = (props: Props) => {
    return (<Button leftIcon={props.icon} colorScheme='purple' variant='outline' size={props.size}>{props.label}</Button>)
}
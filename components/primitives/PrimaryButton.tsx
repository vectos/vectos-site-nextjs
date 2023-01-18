import { Button } from "@chakra-ui/button"

interface Props {
    label: string,
    size: 'md' | 'lg',
    icon?: React.ReactElement
}

export const PrimaryButton = (props: Props) => {
    return (<Button leftIcon={props.icon} colorScheme='purple' variant='solid' size={props.size}>{props.label}</Button>)
}
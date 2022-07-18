
import { Button, LinkBox, LinkOverlay, useColorModeValue} from "@chakra-ui/react";

export default function ButtonSB(titre, link, props) {
    const theme = useColorModeValue({
        borderC : 'white',
        bgGrad :'linear(to-r, #ED174C, #F58220)'
    }, {
        borderC : '#ED174C',
        bgGrad : null
    })

    if(titre) {
        return (
            <LinkBox>
            <LinkOverlay href={link}>
                <Button
                px='30px'
                size='lg'
                border='2px' 
                borderColor={theme.borderC}
                color='white'
                bgGradient={theme.bgGrad}
                borderRadius={10}
                {...props}
                _hover={{
                    bg: '#ED174C'
                }}
                >
                    {titre}
                </Button>
            </LinkOverlay>

            </LinkBox>

        )
    }
    return;
}


import { Button, useColorModeValue} from "@chakra-ui/react";

export default function ButtonSB(titre, props) {
    const theme = useColorModeValue({
        borderC : 'white',
        bgGrad :'linear(to-r, #ED174C, #F58220)'
    }, {
        borderC : '#ED174C',
        bgGrad : null
    })

    if(titre) {
        return (
            <Button
            px='30px'
            size='lg'
            border='2px' 
            borderColor={theme.borderC}
            color='white'
            bgGradient={theme.bgGrad}
            borderRadius={10}
            {...props}
            >{titre}</Button>
        )
    }
    return;
}

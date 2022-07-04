import { Link } from "react-router-dom";
import {
    Box,
    Flex,
    Image,
    Link as ChakraLink,
    Stack,
} from '@chakra-ui/react';


const Navigation=[
    {
        name : "Banque",
        link : "/banque"
    },
    {
        name : "Logement",
        link : "/logement"
    },
    {
        name : "Mobilité",
        link : "/mobilite"
    },
    {
        name : "Notre mission",
        link : "/mission"
    },
    {
        name : "L'équipe",
        link : "/equipe"
    },
    {
        name : "Contact",
        link : "/contact"
    }
]

export default function NavBar() {
    return(
        <>
        <Box 
            bg='white' 
            px={10}
            
            boxShadow='md'
            sx={{
                'font-style': 'normal',
                'font-weight': 400,
                'font-size': '23px',
                'line-height': '27px',
            }}
        >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'} >
          <Image boxSize='262px' h='100px' pt={3}  src="logo SB.png" />

          <Flex alignItems={'center'}>
            <Stack direction={'row'}>
                <nav>
                    {Navigation.map(item => (
                        <ChakraLink pl={12}>
                            <Link to={item.link}>{item.name}</Link>
                        </ChakraLink>
                    ))}
                </nav>
            </Stack>
          </Flex>
        </Flex>
      </Box>
        </>
    )
}
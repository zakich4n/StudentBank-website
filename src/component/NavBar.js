import { Link as ReachLink } from "react-router-dom";
import {
    Box,
    Flex,
    Image,
    Text,
    Spacer,
    Link /* as ChakraLink */,
    Stack,
    useColorModeValue
} from '@chakra-ui/react';



import ColorModeSwitcher from './ColorModeSwitcher';
import LanguageSwitcher from './LanguageSwitcher'


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
    const background_color=useColorModeValue('white','rgba(53, 53, 53, 1)');
    const shadow=useColorModeValue('xl','dark-lg');

    return(
    <Box  h={90}>
        <Box 
            bg={background_color}
            px={10}
            boxShadow={shadow}
           /*  sx={{
                    'font-style': 'normal',
                    'font-weight': 400,
                    'font-size': '23px',
                    'line-height': '27px',
            }} */
        >
            <Flex h={16} alignItems={'center'} justifyContent={'space-between'} >
            <Image boxSize='262px' h='100px' pt={3}  src="logo SB.png" />

            <Flex alignItems={'center'}>
                <Stack direction={'row'}>
                    <nav>
                        {Navigation.map((item, index) => (
                            <Link as={ReachLink} pl={12} key={index} to={item.link}>
                               {item.name}
                            </Link>
                        ))}
                    </nav>
                </Stack>
            </Flex>
            </Flex>
        </Box>
        <Flex spacing={4}> 
            <Spacer/>
            <LanguageSwitcher boxShadow={shadow} borderTopRadius={0} mr={3} bg={background_color}/>
            <ColorModeSwitcher boxShadow={shadow} borderTopRadius={0} mr={3} bg={background_color} />
        </Flex>
       
    </Box>

    )
}


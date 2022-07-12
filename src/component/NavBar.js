import { Link as ReachLink } from "react-router-dom";
import {
    Box,
    Flex,
    Image,
    Spacer,
    Link,
    Stack,
    useColorModeValue
} from '@chakra-ui/react';
import {
    Link as LinkScroll
} from 'react-scroll';


import ColorModeSwitcher from './ColorModeSwitcher';
import LanguageSwitcher from './LanguageSwitcher'


const Navigation=[
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
    }]

    const Scroll=[
        {
            name : "Banque",
            link : "banque",
            isScroll : true
        },
        {
            name : "Logement",
            link : "logement",
            isScroll : true
        },
        {
            name : "Mobilité",
            link : "mobilite",
            isScroll : true
        }]
    
export default function NavBar(props) {

    const background_color=useColorModeValue('white','rgba(53, 53, 53, 1)');
    const shadow=useColorModeValue('xl','dark-lg');

    return(
    <Box  h={10} w='100%'
    position='sticky'
    top='0'
    {...props}

    >
        <Box 
            bg={background_color}
            px={10}
            boxShadow={shadow}
            fontWeight='400'
            fontSize='23px'
            lineHeight='27px'
        >
            <Flex h={16} alignItems={'center'} justifyContent={'space-between'} >
            <Link as={ReachLink} to="/">
                <Image boxSize='262px' h='100px' pt={3}  src="logo SB.png" />
            </Link>
            

            <Flex alignItems={'center'}>
                <Stack direction={'row'}>
                    <nav>
                        {Scroll.map((item, index) => (
                            <LinkScroll activeClass="active" style={{ "paddingLeft" : "40px" }} key={index} to={item.link} spy={true} smooth={true}>
                                {item.name}
                            </LinkScroll>
                        ))}
                        {Navigation.map((item, index) => (
                            <Link as={ReachLink} pl={'40px'} key={index} to={item.link}>
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
            <ColorModeSwitcher boxShadow={shadow} borderTopRadius={0} mr={3} bg={background_color}/>
        </Flex>
       
    </Box>

    )
}


import React from 'react';
import { Link as ReachLink } from "react-router-dom";
import {
    Box,
    Flex,
    Image,
    Spacer,
    Link,
    Stack,
    useColorModeValue,
    useDisclosure,
    Button,
    IconButton,  
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Input,
    VStack,
    HStack,
    Grid,
    GridItem,
} from '@chakra-ui/react';
import {
    Link as LinkScroll
} from 'react-scroll';
import { GrMenu } from 'react-icons/gr'

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
    <Box  h={'55px'} w='100%'
    position='sticky'
    top='0'
    {...props}

    >

        <DesktopNav display={{base : 'none', md : 'inherit'}} />
        <MobileNavBar display={{base : 'inherit', md : 'none'}} />

        <Flex spacing={4} display={{base : 'none', md : 'flex'}}> 
            <Spacer/>
            <LanguageSwitcher boxShadow={shadow} borderTopRadius={0} mr={3} bg={background_color}/>
            <ColorModeSwitcher boxShadow={shadow} borderTopRadius={0} mr={3} bg={background_color}/>
        </Flex>
       
    </Box>

    )
}

function DesktopNav(props) {
    const background_color=useColorModeValue('white','rgba(53, 53, 53, 1)');
    const shadow=useColorModeValue('xl','dark-lg');
    return (
        <Box 
        bg={background_color}
        px={10}
        boxShadow={shadow}
        fontWeight='400'
        fontSize='min(2.1vw, 25px)'
        lineHeight='27px'
        pos="relative"
        {...props}
        >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'} >
        <Link as={ReachLink} to="/">
            <Image src="logo SB.png" 
            h='100%' 
            pos="absolute"
            top='50%' 
            left='10px'
            transform='translateY(-50%)'
            />
        </Link>
        

        <Flex alignItems={'center'}>
            <Stack direction={'row'}>
                <nav>
                    {Scroll.map((item, index) => (
                        <LinkScroll activeClass="active" style={{ "paddingLeft" : "3vw" }} key={index} to={item.link} spy={true} smooth={true}>
                            {item.name}
                        </LinkScroll>
                    ))}
                    {Navigation.map((item, index) => (
                        <Link as={ReachLink} pl={'3vw'} key={index} to={item.link}>
                           {item.name}
                        </Link>
                    ))}
                </nav>
            </Stack>
        </Flex>
        </Flex>
    </Box>
    )
}

function MobileNavBar(props) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const drawerBg=useColorModeValue('red','white');
    const shadow=useColorModeValue('xl','dark-lg');

    return ( 
    <Box 
    bg="white"
    h='55px'
/*     minH='35px'
    maxH='50px' */
    pos='relative'
    {...props}
    >
        

        <Box
        pos='absolute'
        top='50%'
        transform={'translateY(-50%)'} 
        >
            <IconButton ref={btnRef}  onClick={onOpen} icon={<GrMenu/>} variant="ghost" size='lg' isRound />
        </Box>

            <Box 
            pos='absolute'
            left='50%' 
            transform={'translateX(-50%) translateY(-50%)'} 
            top='50%'
            >
                <Link as={ReachLink} to="/">
                    <Image h={'40px'}  src="MobilLogoSB.png" />
                </Link>                 
            </Box>
               
            <Box
            
            pos='absolute'
            top='50%'
            transform={'translateY(-50%)'} 
            right={0}
            >
                <ColorModeSwitcher size='lg' isRound  />
            </Box>



        <Drawer
        id="zaki"
          isOpen={isOpen}
          size='full'
          placement='left'
          onClose={onClose}
          finalFocusRef={btnRef}
          closeOnOverlayClick
          closeOnEsc
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader>
                <DrawerCloseButton position="relative" ml={5} size='xl' top='50%' transform={'translateY("-50%")'} /> 
                <Link as={ReachLink} to="/" onClick={onClose} pos='relative' left='40%' transform={'translateX("-50%")'}>
                    <Image h={10}  src="MobilLogoSB.png" />
                </Link>              
            </DrawerHeader>
  
            <DrawerBody>
              <VStack
              align='stretch'
              spacing={4}
              fontSize={30}
              fontWeight={700}
              >
              {Scroll.map((item, index) => (
                        <LinkScroll 
                        activeClass="active" 
                        key={index} 
                        to={item.link} 
                        spy={true} 
                        smooth={true}
                        onClick={onClose}
                        >
                            {item.name}
                        </LinkScroll>
                    ))}
              {Navigation.map((item, index) => (

                        <Link 
                        as={ReachLink} 
                        key={index} 
                        to={item.link}
                        onClick={onClose}
                        >
                           {item.name}
                        </Link>
                    ))}
              </VStack>
            </DrawerBody>
  
            <DrawerFooter pb={100}>
            <LanguageSwitcher variant='outline' colorScheme='dark' />
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Box>
    )
}
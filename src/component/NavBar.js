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
    <Box  h={'5vh'} w='100%'
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
        fontSize='23px'
        lineHeight='27px'
        {...props}
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
    )
}

function MobileNavBar(props) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    const background_color=useColorModeValue('white','rgba(53, 53, 53, 1)');
    const shadow=useColorModeValue('xl','dark-lg');

    return ( 
    <Box 
    bg={background_color}
    {...props}
    >
        
        <Grid templateColumns='repeat(2, 40vw)'>
            <GridItem>
                <IconButton ref={btnRef}  onClick={onOpen} icon={<GrMenu/>} variant="ghost"  />
            </GridItem>
            <GridItem>
                <Link as={ReachLink} to="/">
                    <Image h={8}  src="MobilLogoSB.png" />
                </Link>                
            </GridItem>

        </Grid>


        <Drawer
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
                <HStack spacing='20vw'>
                    <DrawerCloseButton position="relative" ml={5} size='xl' /> 
                    <Link as={ReachLink} to="/" onClick={onClose}>
                        <Image h={10}  src="MobilLogoSB.png" />
                    </Link>              
                </HStack>

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
  
            <DrawerFooter>
            <LanguageSwitcher  />
            <ColorModeSwitcher  />
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Box>
    )
}
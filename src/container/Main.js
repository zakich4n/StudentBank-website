import {useEffect, useState} from 'react';
import { Button, Center, Heading, VStack, Grid, GridItem, Box, Text, Image, useColorModeValue} from "@chakra-ui/react";
import { AiOutlineToTop } from 'react-icons/ai'
import {
    Link as LinkScroll
} from 'react-scroll';

import ButtonSB from '../component/ButtonSB'


export default function Main(props) {

    return (
        <div id='accueil'> 
        <Box> 
        <Image src='Vector 36.png' pos='absolute' top='130' w='100vw' />
        <Image src='Vector 37.png' pos='absolute' top='240' w='100vw' />
            <Center>
                <VStack>
                    <Heading as='h1' size='3xl' mt={40} pb={5} color='white' zIndex='2'>
                        Une banque pour les
                    </Heading>
                    <Heading as='h1' size='3xl' pb={20} color='white'>
                        étudiants
                    </Heading>
                    {ButtonSB("Être accompagné","/application")}
                </VStack>
            </Center>

            <Box>
                <Grid templateColumns='repeat(3, 1fr)' gap='3vw' mt={200} mx={10}>
                    <GridItem  >
                        {Card("Banque","Lorem ipsum dolor sit amet", "image banque.png", "banque")}
                    </GridItem>
                    <GridItem >
                        {Card("Logement","Lorem ipsum dolor sit amet", "image logement.png", "logement")}
                    </GridItem>
                    <GridItem  >
                        {Card("Mobilité","Lorem ipsum dolor sit amet", "mobilite image.png", "mobilite")}
                    </GridItem>
                </Grid>
            </Box>
        </Box>
        </div>
    );
}

function Card(header, description, photo, link) {
    return(

        <LinkScroll activeClass="active"  to={link} spy={true} smooth={true}>
            <Box pos='relative' h='40vw' borderRadius="10" overflow="hidden">
                <Image src={photo} />
                <Box pos='absolute' top='25px' left="35px"  color='white'>
                    <Heading as='h2' >
                        {header}
                    </Heading>
                    <Text >
                        {description}
                    </Text>
                </Box>
            </Box>
        </LinkScroll>
    )
}
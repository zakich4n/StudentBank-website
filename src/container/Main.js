import {useEffect, useState} from 'react';
import { chakra, useControllableState, Button, Center, Heading, VStack, Grid, GridItem, Box, Text, Image, useColorModeValue} from "@chakra-ui/react";
import { AiOutlineToTop } from 'react-icons/ai'
import {
    Link as LinkScroll
} from 'react-scroll';

import ButtonSB from '../component/ButtonSB'


export default function Main(props) {
    

    const setBackgroundVideo = (nb) => {
        let cards = [ "card_banque", "card_logement", "card_mobilite"];
        cards.splice(nb-1,1)

        cards.map(card => {
            document.getElementById(card).style.opacity=0.3
            document.getElementById(card).style.paddingTop='150px'
        })
        document.getElementById('header').style.opacity=0.3
        document.getElementById('vector').style.opacity=0.3
        const box=document.getElementById("background-video"+nb);
        box.style.display = null
    }

    const resetBackgroundVideo = (nb) => {
        let cards = [ "card_banque", "card_logement", "card_mobilite"];
        cards.splice(nb-1,1)

        cards.map(card => {
            document.getElementById(card).style.opacity=1
            document.getElementById(card).style.paddingTop='0'

        })
        document.getElementById('header').style.opacity=1
        document.getElementById('vector').style.opacity=1
        const box=document.getElementById("background-video"+nb);
        box.style.display = 'none';
    }
    // https://assets.codepen.io/6093409/river.mp4
    // https://static.videezy.com/system/resources/previews/000/044/479/original/banana.mp4 
    // https://static.videezy.com/system/resources/previews/000/004/382/original/COWS_AT_THE_GRASS.mp4
    return (
        <chakra.div id='accueil' style={{height : 'auto', position : 'relative'}} {...props}> 

            <video id="background-video1" autoPlay loop muted  style={{ position : 'absolute', zIndex : '1', width : '100vw', height : '100%', top : 0, left : 0, objectFit : "fill", display : 'none'}} >
                <source id='video-source1' src='https://static.videezy.com/system/resources/previews/000/004/382/original/COWS_AT_THE_GRASS.mp4' type="video/mp4" />
            </video>                
            <video id="background-video2" autoPlay loop muted  style={{ position : 'absolute', zIndex : '1', width : '100vw', height : '100%', top : 0, left : 0, objectFit : "fill", display : 'none'}} >
                <source id='video-source2' src='https://static.videezy.com/system/resources/previews/000/044/479/original/banana.mp4' type="video/mp4" />
            </video> 
            <video id="background-video3" autoPlay loop muted  style={{ position : 'absolute', zIndex : '1', width : '100vw', height : '100%', top : 0, left : 0, objectFit : "fill", display : 'none'}} >
                <source id='video-source3' src='https://assets.codepen.io/6093409/river.mp4' type="video/mp4" />
            </video>            


        <Box id='box' pos='relative' top='0'  zIndex='2'> 
            <Image id='vector' src='Waves.png' pos='absolute' top='130' w='100vw' />


            <Center id='header' transition={"opacity 1s"}>
                <VStack>
                    <Heading as='h1' size='3xl' mt={40} pb={5} color='white' >
                        Une banque pour les
                    </Heading>
                    <Heading as='h1' size='3xl' pb={20} color='white'>
                        étudiants
                    </Heading>
                    {ButtonSB("Être accompagné","/application")}
                </VStack>
            </Center>

            <Box  >

                <Grid templateColumns='repeat(3, 1fr)' gap='3vw' mt={200} mx={10}>
                    <GridItem id="card_banque" onMouseEnter={
                        () => {
                            setBackgroundVideo(1)
                        }
                    } onMouseLeave={
                        () => {
                            resetBackgroundVideo(1)
                        }
                    } transition={"opacity 1s, padding-top 1s"} >
                        {Card("Banque","Lorem ipsum dolor sit amet", "image banque.png", "banque")}
                    </GridItem>
                    <GridItem id="card_logement" onMouseEnter={
                        () => {
                            setBackgroundVideo(2)
                        }
                    } onMouseLeave={
                        () => {
                            resetBackgroundVideo(2)
                        }
                    } transition={"opacity 1s, padding-top 1s"}  >
                        {Card("Logement","Lorem ipsum dolor sit amet", "image logement.png", "logement")}
                    </GridItem>
                    <GridItem id="card_mobilite" onMouseEnter={
                        () => {
                            setBackgroundVideo(3)
                        }
                    } onMouseLeave={
                        () => {
                            resetBackgroundVideo(3)
                        }
                    }  transition={"opacity 1s, padding-top 1s"}  >
                        {Card("Mobilité","Lorem ipsum dolor sit amet", "mobilite image.png", "mobilite")}
                    </GridItem>
                </Grid>
            </Box>
        </Box>

        </chakra.div>
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
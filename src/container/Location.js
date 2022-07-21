import {useEffect, useState} from 'react';
import { Button, Center, Heading, VStack, Grid, GridItem, Box, Text, Image, useColorModeValue} from "@chakra-ui/react";

import ButtonSB from '../component/ButtonSB';


export default function Location() {
        const container ={  /* inversed=false, MainHeader, SmallHeader, Paragraph1, Paragraph2="", ButtonText, Image_url */
        MainHeader : "Aide à la location",
        SmallHeader : "Louer",
        Paragraph1 : "Studentbank n’est pas qu’une carte bancaire pour étudiant, vos problématiques sont au cœur de nos priorités, nous vous accompagnons dans vos recherches, la location et la gestion de votre logement étudiant. ",
        Paragraph2 : "Vous pourriez souscrire à la caution, la garantie et l’assurance immobilière sur notre plateforme. Les étudiants étrangers et internationaux ! Réservez votre logement étudiant dans votre pays de destination avant votre départ. ",
        ButtonText : "Louer un bien", 
            theme : useColorModeValue({
                Image_url :"3dhousewhite.png",
                bg : 'white'
            },{
                Image_url :"3droomtestv2BLACK.png",
                bg : null
            })
        }

    return (
        <Box bg={container.theme.bg}>
            <Desktop display={{base : 'none', md : 'grid'}}/>    
            <Mobile display={{base : 'inherit', md : 'none'}} />    
        </Box>
    )
}
function Desktop(props) {
    const container ={  /* inversed=false, MainHeader, SmallHeader, Paragraph1, Paragraph2="", ButtonText, Image_url */
    MainHeader : "Aide à la location",
    SmallHeader : "Louer",
    Paragraph1 : "Studentbank n’est pas qu’une carte bancaire pour étudiant, vos problématiques sont au cœur de nos priorités, nous vous accompagnons dans vos recherches, la location et la gestion de votre logement étudiant. ",
    Paragraph2 : "Vous pourriez souscrire à la caution, la garantie et l’assurance immobilière sur notre plateforme. Les étudiants étrangers et internationaux ! Réservez votre logement étudiant dans votre pays de destination avant votre départ. ",
    ButtonText : "Louer un bien", 
        theme : useColorModeValue({
            Image_url :"3dhousewhite.png",
            bg : 'white'
        },{
            Image_url :"3droomtestv2BLACK.png",
            bg : null
        })
    }
    return (
        <Grid
        w='100%'
        templateRows='repeat(2, 1fr)'
        templateColumns='repeat(2, 1fr)'
        gridTemplateRows={'100px 50vw'}
        gridTemplateColumns={'40vw 1fr'}
        gap={4}
        pb='6vh'
        {...props}
        >
            <GridItem colSpan={2} >
                <Center h='100%' pos='relative' >
                    <Heading as='h2' fontSize='4vw'  pos='absolute' >{container.MainHeader}</Heading>
                </Center>
            </GridItem>
            <GridItem colSpan={1} rowSpan={1}  pos='relative' w='30vw' maxH='25vw'>
                <VStack 
                textAlign='start' 
                pos='absolute' 
                h="100%"
                top='50%' 
                transform='translateY(-50%)'
                left='20%'
                right='-20%'
                >
                        <Heading fontSize='3vw' pb={5} w="100%">
                            {container.SmallHeader}
                        </Heading>
                        <Text fontSize='1.7vw' pb={4}>
                            {container.Paragraph1}
                        </Text>
                        <Text fontSize='1.7vw'>
                            {container.Paragraph2}
                        </Text>
                        <Center pt={"2vw"}>
                            {ButtonSB(container.ButtonText)}
                        </Center>
                    </VStack>
            </GridItem>
            <GridItem rowSpan={1} colSpan={1}  >
                <Center  overflow='hidden' h='100%' w='100%'  >
                    <Image src={container.theme.Image_url} 
                    h='auto' 

                    maxH='200%' maxW='120%'
                    objectFit={'fill'}
                    />
                </Center>
            </GridItem>
        </Grid>
    )
}

function Mobile(props) {
    const container ={  /* inversed=false, MainHeader, SmallHeader, Paragraph1, Paragraph2="", ButtonText, Image_url */
    MainHeader : "Aide à la location",
    SmallHeader : "Louer",
    Paragraph1 : "Studentbank n’est pas qu’une carte bancaire pour étudiant, vos problématiques sont au cœur de nos priorités, nous vous accompagnons dans vos recherches, la location et la gestion de votre logement étudiant. ",
    Paragraph2 : "Vous pourriez souscrire à la caution, la garantie et l’assurance immobilière sur notre plateforme. Les étudiants étrangers et internationaux ! Réservez votre logement étudiant dans votre pays de destination avant votre départ. ",
    ButtonText : "Louer un bien", 
        theme : useColorModeValue({
            Image_url :"3dhousewhite.png",
            bg : 'white'
        },{
            Image_url :"3droomtestv2BLACK.png",
            bg : null
        })
    }
    return (
        <Box {...props}
            pos='relative'
            h='55vh' 
            bgGradient={'linear(to-r, rgba(251, 203, 194, 0.7), rgba(251, 203, 194, 0.7))'}
        >
            <Image 
            src={container.theme.Image_url} 
            pos='absolute' 
            opacity={'0.2'} 
            objectFit='cover' 
            w='150%' 
            h='100%'
            overflow='hidden' 
            maxWidth='200%' 
            left='50%' 
            transform={'translateX(-50%)'} 
            />
            <Grid
            h='100%'
            minH={"350px"}
            w="100vw" 
            py={3}
            px={6}
            >
                <GridItem>
                    <Heading 
                    as="h1"
                    size='2xl' 
                    lineHeight={'1.4'}
                    > Location</Heading>                
                </GridItem>
                <GridItem>
                    <Text fontSize='3.8vw' my={'2vw'}>
                        Nous vous accompagnons dans vos recherches, la location et la gestion de votre logement étudiant. 
                        Vous pourriez souscrire à la caution, la garantie et l’assurance immobilière sur notre plateforme. Réservez votre logement étudiant dans votre pays de destination avant votre départ. 
                    </Text>                    
                </GridItem>
                <GridItem 
                w='100%'
                mr='auto'
                display='flex'
                justifyContent='flex-end'
                >
                    {ButtonSB(container.ButtonText, "/application", {height : '12vw', minHeight : '40px', maxHeight : '50px'})}
                </GridItem> 
            </Grid>
        </Box>


    )
}
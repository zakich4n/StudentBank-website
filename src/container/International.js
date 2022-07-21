import {useEffect, useState} from 'react';
import { Button, Center, Heading, VStack, Grid, GridItem, Box, Text, Image, useColorModeValue} from "@chakra-ui/react";
import ButtonSB from '../component/ButtonSB'


    
const container ={  
    MainHeader : "Gérer vos dépenses",
    MainHeader : "Partir à l’international",
    SmallHeader : "Voyager",
    Paragraph1 : "Studentbank n’est pas qu’une carte bancaire pour étudiant, vos problématiques sont au cœur de nos priorités, nous vous accompagnons dans vos recherches, la location et la gestion de votre logement étudiant. ",
    Paragraph2 : "Vous pourriez souscrire à la caution, la garantie et l’assurance immobilière sur notre plateforme. Les étudiants étrangers et internationaux ! Réservez votre logement étudiant dans votre pays de destination avant votre départ. ",
    ButtonText : "Partir à l'étranger", 
    Image_url :"planet.png"
}


export default function International(props) {


return (
    <Box >
            <Desktop display={{md : null, base : "none"}}/>    
            <Mobile display={{base : 'inherit', md : 'none'}} />    
    </Box>
);
}

function Desktop(props) {
    return (
        <Grid
        w='100%'
        templateRows='repeat(2, 1fr)'
        templateColumns='repeat(2, 1fr)'
        gridTemplateRows={'100px 1fr'}
        gridTemplateColumns={'1fr 40vw'}
        gap={4}
        {...props}
        >
            <GridItem colSpan={2}  >
                <Center h='100%' pos='relative' >
                    <Heading as='h2' size='2xl' pos='absolute' bottom={-8}>{container.MainHeader}</Heading>
                </Center>
            </GridItem>
            <GridItem rowSpan={1} colSpan={1}  >
                <Box  overflow='hidden' w='100%' >
                    <Image src={container.Image_url} />
                </Box>
            </GridItem>
            <GridItem colSpan={1} rowSpan={1}  pos='relative' >
                <VStack 
                textAlign='start' 
                pos='absolute' 
                top='50%' 
                transform='translateY(-50%)'
                left='-20%'
                right='20%'
                >
                        <Heading size='xl' pb={5} w="100%">
                            {container.SmallHeader}
                        </Heading>
                        <Text fontSize='xl' pb={4}>
                            {container.Paragraph1}
                        </Text>
                        <Text fontSize='xl'>
                            {container.Paragraph2}
                        </Text>
                        <Center pt={10}>
                            {ButtonSB(container.ButtonText, "/application")}
                        </Center>
                    </VStack>
            </GridItem>
        </Grid>
    )
}

function Mobile(props) {
    return (
        <Box {...props}
        pos='relative'
        h='120vw' 
        minH={"390px"}
        bgGradient={'linear(to-r, rgba(251, 203, 194, 0.7), rgba(251, 203, 194, 0.7))'}
        >

            <Grid
            h='100%'
            minH={"350px"}
            w="100vw" 
            py={3}
            autoRows={'auto'}
            >
                <GridItem
                maxH='30px'
                
                >
                    <Heading 
                    as="h1"
                    fontSize='8vw' 
                    lineHeight={'1.4'}
                    px={6}
                    >{container.MainHeader}</Heading>                
                </GridItem>
                <GridItem display='flex' >
                    <Box w='60%'>
                        <Text fontSize='3.8vw' my={'2vw'} px={6} >
                            {container.Paragraph1}
                        </Text>     
                    </Box>
                    <Box w='40%' pos="relative">
                        <Image 
                        pos='absolute'
                        src={container.Image_url}
                        overflow='hidden' 
                        objectFit='cover' 
                        h='80vw'
                        top='50%' 
                        transform={'translateY(-50%) translateX(-50%)'} 
                        left='45%' 

                        />                        
                    </Box>
                </GridItem>
                <GridItem>
                    <Text fontSize='3.8vw' my={'2vw'} px={6} >
                        {container.Paragraph2}
                    </Text>                    
                </GridItem>
                <Center 
                w='100%'
                >
                    {ButtonSB(container.ButtonText, "/application", {height : '12vw', minHeight : '40px', maxHeight : '50px'})}
                </Center> 

            </Grid>
        </Box>

    )
}
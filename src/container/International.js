import {useEffect, useState} from 'react';
import { Button, Center, Heading, VStack, Grid, GridItem, Box, Text, Image, useColorModeValue} from "@chakra-ui/react";
import ButtonSB from '../component/ButtonSB'


export default function International(props) {
    
    const container ={  
        MainHeader : "Gérer vos dépenses",
        MainHeader : "Partir à l’international",
        SmallHeader : "Voyager",
        Paragraph1 : "Studentbank n’est pas qu’une carte bancaire pour étudiant, vos problématiques sont au cœur de nos priorités, nous vous accompagnons dans vos recherches, la location et la gestion de votre logement étudiant. ",
        Paragraph2 : "Vous pourriez souscrire à la caution, la garantie et l’assurance immobilière sur notre plateforme. Les étudiants étrangers et internationaux ! Réservez votre logement étudiant dans votre pays de destination avant votre départ. ",
        ButtonText : "Partir à l'étranger", 
        Image_url :"planet.png"
    }


return (
    <Box >
            <Grid
            w='100%'
            templateRows='repeat(2, 1fr)'
            templateColumns='repeat(2, 1fr)'
            gridTemplateRows={'100px 1fr'}
            gridTemplateColumns={'1fr 40vw'}
            gap={4}
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
        </Box>
);
}
import {useEffect, useState} from 'react';
import { Button, Center, Heading, VStack, Grid, GridItem, Box, Text, Image, useColorModeValue} from "@chakra-ui/react";
import ButtonSB from '../component/ButtonSB';


export default function Carte() {
    const container ={  /* inversed=false, MainHeader, SmallHeader, Paragraph1, Paragraph2="", ButtonText, Image_url */
    MainHeader : "Votre carte bancaire",
    SmallHeader : "La carte bancaire",
    Paragraph1 : "Choisissez une carte bancaire qui vous correspond, personnalisable à votre goût et vos envies. ",
    Paragraph2 : "Payez en ligne, en magasin ou dans vos sites favoris, sans frais et en toute sécurité. Nos cartes ENKI, MAYA, HORIZON et EXOTIC vous assurent dans tous vos voyages et la gratuité des frais de retrait à l’international.",
    ButtonText : null, 
    theme : useColorModeValue({
        Image_url :"whitecard_mockup 1.png",
        bg : 'white'
    },{
        Image_url :"mockupdarkcard black.png",
        bg : null
    })
    }


    return (
        <Box bg={container.theme.bg}>
            <Desktop display={{md : 'grid', base : "none"}}/>    
            <Mobile display={{base : 'inherit', md : 'none'}} />   
        </Box>
    )
}

function Desktop(props) {
    const container ={  /* inversed=false, MainHeader, SmallHeader, Paragraph1, Paragraph2="", ButtonText, Image_url */
    MainHeader : "Votre carte bancaire",
    SmallHeader : "La carte bancaire",
    Paragraph1 : "Choisissez une carte bancaire qui vous correspond, personnalisable à votre goût et vos envies. ",
    Paragraph2 : "Payez en ligne, en magasin ou dans vos sites favoris, sans frais et en toute sécurité. Nos cartes ENKI, MAYA, HORIZON et EXOTIC vous assurent dans tous vos voyages et la gratuité des frais de retrait à l’international.",
    ButtonText : null, 
    theme : useColorModeValue({
        Image_url :"whitecard_mockup 1.png",
        bg : 'white'
    },{
        Image_url :"mockupdarkcard black.png",
        bg : null
    })
    }

    return (
        <Grid
        w='100%'
        templateRows='repeat(2, 1fr)'
        templateColumns='repeat(2, 1fr)'
        gridTemplateRows={'100px 1fr'}
        gridTemplateColumns={'40vw 1fr'}
        gap={4}
        pb={'12vh'}
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
                <Center  overflow='hidden' h='100%' w='100%' >
                    <Image src={container.theme.Image_url} h='30vw' />
                </Center>
            </GridItem>
        </Grid>
    )
}

function Mobile(props) {
    const container ={  /* inversed=false, MainHeader, SmallHeader, Paragraph1, Paragraph2="", ButtonText, Image_url */
        MainHeader : "Votre carte bancaire",
        SmallHeader : "La carte bancaire",
        Paragraph1 : "Choisissez une carte bancaire qui vous correspond, personnalisable à votre goût et vos envies. ",
        Paragraph2 : "Payez en ligne, en magasin ou dans vos sites favoris, sans frais et en toute sécurité. Nos cartes ENKI, MAYA, HORIZON et EXOTIC vous assurent dans tous vos voyages et la gratuité des frais de retrait à l’international.",
        ButtonText : null, 
        theme : useColorModeValue({
            Image_url :"whitecard_mockup 1.png",
            bg : 'white'
        },{
            Image_url :"mockupdarkcard black.png",
            bg : "#231F20"
        })
    }
    return (
        <Box {...props}
        w='100vw' h='58vh' minH={'480px'} bg={container.theme.bg}
        >
               <Grid >
                    <GridItem h={'50px'}>
                        <Heading as="h1" size='2xl'  pl={8} pt={2} >Nos cartes </Heading>
                    </GridItem>

                    <GridItem pos='relative' h={"55vw"} maxH={'300px'} >
                        <Image 
                        src={container.theme.Image_url}
                        pos='absolute' 
                        w='90%' maxW={'450px'}
                        left='50%' 
                        transform={'translateX(-50%)'} 
                        />
                        <Text pos='absolute' bottom={'10px'} right={'max(15vw,50px)'} fontWeight={700} >MAYA</Text>                        
                    </GridItem>
                    <GridItem my={6} mx={10}  >
                        <Text  fontSize='3.6vw' >
                            Payez en ligne, en magasin ou dans vos sites favoris, sans frais et en toute sécurité. Nos cartes ENKI, MAYA, HORIZON et EXOTIC vous assurent dans tous vos voyages et la gratuité des frais de retrait à l’international.
                        </Text>                        
                    </GridItem>


               </Grid>
        </Box>


    )
}
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
        pb={'20vh'}
        {...props}
        >
            <GridItem colSpan={2} >
                <Center h='100%' pos='relative' >
                    <Heading as='h2' size='2xl' pos='absolute' >{container.MainHeader}</Heading>
                </Center>
            </GridItem>
            <GridItem colSpan={1} rowSpan={1}  pos='relative' w='30vw' >
                <VStack 
                textAlign='start' 
                pos='absolute' 
                top='50%' 
                transform='translateY(-50%)'
                left='20%'
                right='-20%'
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
            bg : null
        })
    }
    return (
        <Box {...props}>
               <Box w='100vw' h='60vh' minH={'480px'} bg='white' pos='relative'>
                    <Heading as="h1" size='xl' pl={8} pt={2}>Nos cartes </Heading>
                    <Box pos='relative' h={"40vh"} >
                        <Image 
                        src='whitecard_mockup 1.png'  
                        pos='absolute' 
                        w='90%' 
                        left='50%' 
                        transform={'translateX(-50%)'} 
                        />
                        <Text pos='absolute' bottom={5} right={10} fontWeight={700} >MAYA</Text>                        
                    </Box>
                    <Box my={6} mx={10} pos='absolute' bottom={0} >
                        <Text  fontSize='md'>
                            Payez en ligne, en magasin ou dans vos sites favoris, sans frais et en toute sécurité. Nos cartes ENKI, MAYA, HORIZON et EXOTIC vous assurent dans tous vos voyages et la gratuité des frais de retrait à l’international.
                        </Text>                        
                    </Box>


               </Box>
        </Box>


    )
}
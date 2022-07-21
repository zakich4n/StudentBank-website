import React from 'react';
import { Center, Heading, VStack, Grid, GridItem, Box, Text, Image, useColorModeValue} from "@chakra-ui/react";
import ButtonSB from '../component/ButtonSB'

const container ={  
    MainHeader : "Gérer vos dépenses",
    SmallHeader : "Banque",
    Paragraph1 : "Hey chers Students ! Avec Studentbank, la banque 100% en ligne faite par et pour les étudiants, ouvrez votre compte bancaire depuis votre salle de classe en 5 min sans frais, ni commissions. ",
    Paragraph2 : "Gérez votre argent depuis votre téléphone et effectuez des opérations mobiles ou paiements en ligne partout dans le monde. Studentbank c’est aussi la possibilité de souscrire à des prêts étudiants, des découverts bancaires et ceux sans service ou justificatifs de revenus ou de cautionnement.",
    ButtonText : "Ouvrir mon compte"
}

export default function Depense(props) {


    return (
        <Box >
            <Desktop display={{base : 'none', md : 'grid'}}/>    
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
                    <Heading as='h2' size='2xl' pos='absolute' bottom={-5}>{container.MainHeader}</Heading>
                </Center>
            </GridItem>
            <GridItem rowSpan={1} colSpan={1}  >
                <Box  overflow='hidden' w='100%' >
                    <Image src={useColorModeValue("iPhone 13 Mockup white 1.png",'iPhone 13 Mockup black.png')} />
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
        <Box {...props}>
            <Box bg='white' h='35vh' w="100vw"  minH='220px' pos='relative' >

                <Box 
                pos='absolute' 
                right={0} bottom={0} 
                w='50%' h='100%' 
                p={3}
                display='flex' flexDirection='column-reverse'
                >
                    <Heading as="h1"  fontSize='8vw'  lineHeight={'1.4'}> Une banque pour les étudiants</Heading>
                </Box>
                <Box  h='100%' w='50%'  pos='absolute' left='0'  >
                    <Image 
                    src='SB_BanquePhoneMobil.png' 
                    objectFit='fill' 
                    w='100%' h='auto' 
                    maxH={'35vh'}  maxW='280px' minH='220px'
                    bottom={0} 
                    pos='absolute' />
                </Box>
            </Box>  
            <Box  h='25vh' minH={'200px'} maxH={'300px'} w='100vw'    z-index="2">
                <Text py={'5vw'} px={'3vw'} fontSize='3.8 vw'>
                    Avec Studentbank, la banque 100% en ligne faite par et pour les étudiants, ouvrez votre compte bancaire depuis votre salle de classe en 5 min sans frais, ni commissions.
                </Text>
                <Box pl={'5vw'} >
                    {ButtonSB(container.ButtonText, "/application", {height : '12vw', minHeight : '40px', maxHeight : '50px'})}
                </Box> 
            </Box>          
        </Box>


    )
}
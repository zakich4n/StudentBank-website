import React from 'react';
import { Center, Heading, VStack, Grid, GridItem, Box, Text, Image, useColorModeValue} from "@chakra-ui/react";
import ButtonSB from '../component/ButtonSB'
export default function Depense(props) {

    const container ={  
            MainHeader : "Gérer vos dépenses",
            SmallHeader : "Banque",
            Paragraph1 : "Hey chers Students ! Avec Studentbank, la banque 100% en ligne faite par et pour les étudiants, ouvrez votre compte bancaire depuis votre salle de classe en 5 min sans frais, ni commissions. ",
            Paragraph2 : "Gérez votre argent depuis votre téléphone et effectuez des opérations mobiles ou paiements en ligne partout dans le monde. Studentbank c’est aussi la possibilité de souscrire à des prêts étudiants, des découverts bancaires et ceux sans service ou justificatifs de revenus ou de cautionnement.",
            ButtonText : "Ouvrir mon compte", 
            Image_url : useColorModeValue("iPhone 13 Mockup white 1.png",'iPhone 13 Mockup black.png')
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
                            <Heading as='h2' size='2xl' pos='absolute' bottom={-5}>{container.MainHeader}</Heading>
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
                                    {ButtonSB(container.ButtonText)}
                                </Center>
                            </VStack>
                    </GridItem>
                </Grid>
            </Box>
    );
}
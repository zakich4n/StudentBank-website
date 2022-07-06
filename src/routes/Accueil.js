import {useEffect, useState} from 'react';
import { Button, Center, Heading, VStack, Grid, GridItem, Box, Text} from "@chakra-ui/react";
import { AiOutlineToTop } from 'react-icons/ai'
import {
    Link as LinkScroll
} from 'react-scroll';

export default function Accueil() {
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    const [visible, setVisible] = useState(false)
  
    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300){
        setVisible(true)
        } 
        else if (scrolled <= 300){
        setVisible(false)
        }
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <Box bgGradient='linear(to-r, #FBCBC2, #FCD9BC)' w='100%'>
                <VStack>
                    <div id='accueil'> {/* Utilisation de div pour react-scroll */}
                    <Box> {/* Page d'acueille */}
                        <Center>
                            <VStack>
                                <Heading as='h1' size='2xl' mt={40} mb={10}>
                                    Une banque pour les étudiants
                                </Heading>
                                <Button>Être accompagné</Button>
                            </VStack>
                        </Center>

                        <Box>
                            <Grid templateColumns='repeat(3, 1fr)' gap={6} mt={200} >
                                <GridItem  >
                                    {Card("Banque","Lorem ipsum dolor sit amet", "red", "banque")}
                                </GridItem>
                                <GridItem >
                                    {Card("Logement","Lorem ipsum dolor sit amet", "red", "logement")}
                                </GridItem>
                                <GridItem  >
                                    {Card("Mobilité","Lorem ipsum dolor sit amet", "red", "mobilite")}
                                </GridItem>
                            </Grid>
                        </Box>
                    </Box>
                    </div>
                    <Box h='870px' w='100%' bg='dark' > {/* Video de presentation */}
                        
                            <iframe
                                width='100%'
                                height='100%'
                                title='naruto'
                                src='https://www.youtube.com/embed/QhBnZ6NPOY0'
                                allowFullScreen
                            />
                        
                    </Box>
                    <div id='banque'>
                    <Box w='100%' h='863px' p={10} > {/* Gérer vos dépsnes */}
                         <Grid
                            h='863px'
                            templateRows='repeat(5, 1fr)'
                            templateColumns='repeat(5, 1fr)'
                            gap={4}
                            >
                            <GridItem rowSpan={1} colSpan={5} >
                                <Center h='100%'>
                                    <Heading as='h2' size='2xl'>Gérer vos dépenses</Heading>
                                </Center>
                            </GridItem>
                            <GridItem rowSpan={4} colSpan={3} >
                                Telephone
                            </GridItem>
                            <GridItem rowSpan={1} colSpan={1}  pos='relative'>
                                <Heading size='xl' bottom='10' pos='absolute'>
                                    Banque
                                </Heading>
                            </GridItem>
                            <GridItem rowSpan={2} colSpan={2} >
                                <Text fontSize='xl'>
                                    Hey chers Students ! Avec Studentbank, la banque 100% en ligne faite par et pour les étudiants, ouvrez votre compte bancaire depuis votre salle de classe en 5 min sans frais, ni commissions.
                                    Gérez votre argent depuis votre téléphone et effectuez des opérations mobiles ou paiements en ligne partout dans le monde. Studentbank c’est aussi la possibilité de souscrire à des prêts étudiants, des découverts bancaires et ceux sans service ou justificatifs de revenus ou de cautionnement.
                                </Text>
                            </GridItem>
                            <GridItem rowSpan={1} colSpan={1}  pos='relative' justifyContent='center'>
                                <Center bottom='10' pos='absolute'>
                                    <Button>Ouvrir mon compte</Button>
                                </Center>
                            </GridItem>
                        </Grid>
                    </Box>
                    </div>

                    <Box w='100%' h='863px' p={10}> {/* Votre carte bancaire */}
                         <Grid
                            h='863px'
                            templateAreas={`"header header header header"
                                            "titre image image image"
                                            "descrip image image image"
                                            "descrip image image image"
                                            "button image image image"`}
                            templateRows='repeat(4, 1fr)'
                            templateColumns='repeat(3, 1fr)'
                            gap={4}
                            >
                            <GridItem  area={'header'}>
                                <Center h='100%'>
                                    <Heading as='h2' size='2xl'>Votre carte bancaire</Heading>
                                </Center>
                            </GridItem>
                            <GridItem  pos='relative' area={'titre'}>
                                <Heading size='xl' bottom='10' pos='absolute'>
                                    Banque
                                </Heading>
                            </GridItem>
                            <GridItem  area={'descrip'}>
                                <Text fontSize='xl'>
                                    Hey chers Students ! Avec Studentbank, la banque 100% en ligne faite par et pour les étudiants, ouvrez votre compte bancaire depuis votre salle de classe en 5 min sans frais, ni commissions.
                                    Gérez votre argent depuis votre téléphone et effectuez des opérations mobiles ou paiements en ligne partout dans le monde. Studentbank c’est aussi la possibilité de souscrire à des prêts étudiants, des découverts bancaires et ceux sans service ou justificatifs de revenus ou de cautionnement.
                                </Text>
                            </GridItem>
                            <GridItem rowSpan={4} colSpan={2}  area={'image'}>
                                CB
                            </GridItem>
                        </Grid>
                    </Box>


                    <Box w='100%' h='863px' p={10}> {/* Vos avantages */}
                         <Grid
                            h='863px'
                            templateRows='repeat(5, 1fr)'
                            templateColumns='repeat(5, 1fr)'
                            gap={4}
                            >
                            <GridItem rowSpan={1} colSpan={5} >
                                <Center h='100%'>
                                    <Heading as='h2' size='2xl'>Vos avantages</Heading>
                                </Center>
                            </GridItem>
                            <GridItem rowSpan={4} colSpan={3} >
                                Telephone
                            </GridItem>
                            <GridItem rowSpan={1} colSpan={1}  pos='relative'>
                                <Heading size='xl' bottom='10' pos='absolute'>
                                    Réduction
                                </Heading>
                            </GridItem>
                            <GridItem rowSpan={2} colSpan={2} >
                                <Text fontSize='xl'>
                                    Hey chers Students ! Avec Studentbank, la banque 100% en ligne faite par et pour les étudiants, ouvrez votre compte bancaire depuis votre salle de classe en 5 min sans frais, ni commissions.
                                    Gérez votre argent depuis votre téléphone et effectuez des opérations mobiles ou paiements en ligne partout dans le monde. Studentbank c’est aussi la possibilité de souscrire à des prêts étudiants, des découverts bancaires et ceux sans service ou justificatifs de revenus ou de cautionnement.
                                </Text>
                            </GridItem>
                            <GridItem rowSpan={1} colSpan={1}  pos='relative' justifyContent='center'>
                                <Center bottom='10' pos='absolute'>
                                    <Button>Voir mes avantages</Button>
                                </Center>
                            </GridItem>
                        </Grid>
                    </Box>

                    <div id='logement' >
                    <Box w='100%' h='863px' p={10} > {/* Aide à la lacoation */}
                         <Grid
                            h='863px'
                            templateAreas={`"header header header header"
                                            "titre image image image"
                                            "descrip image image image"
                                            "descrip image image image"
                                            "button image image image"`}
                            templateRows='repeat(4, 1fr)'
                            templateColumns='repeat(3, 1fr)'
                            gap={4}
                            >
                            <GridItem  area={'header'}>
                                <Center h='100%'>
                                    <Heading as='h2' size='2xl'>Aide à la lacoation</Heading>
                                </Center>
                            </GridItem>
                            <GridItem  pos='relative' area={'titre'}>
                                <Heading size='xl' bottom='10' pos='absolute'>
                                    Louer
                                </Heading>
                            </GridItem>
                            <GridItem  area={'descrip'}>
                                <Text fontSize='xl'>
                                    Hey chers Students ! Avec Studentbank, la banque 100% en ligne faite par et pour les étudiants, ouvrez votre compte bancaire depuis votre salle de classe en 5 min sans frais, ni commissions.
                                    Gérez votre argent depuis votre téléphone et effectuez des opérations mobiles ou paiements en ligne partout dans le monde. Studentbank c’est aussi la possibilité de souscrire à des prêts étudiants, des découverts bancaires et ceux sans service ou justificatifs de revenus ou de cautionnement.
                                </Text>
                            </GridItem>
                            <GridItem rowSpan={4} colSpan={2}  area={'image'}>
                                CB
                            </GridItem>
                        </Grid>
                    </Box>
                    </div>
                    <div id='mobilite'>
                    <Box w='100%' h='863px' p={10} > {/* International */}
                         <Grid
                            h='863px'
                            templateRows='repeat(5, 1fr)'
                            templateColumns='repeat(5, 1fr)'
                            gap={4}
                            >
                            <GridItem rowSpan={1} colSpan={5} >
                                <Center h='100%'>
                                    <Heading as='h2' size='2xl'>Partir à l'international</Heading>
                                </Center>
                            </GridItem>
                            <GridItem rowSpan={4} colSpan={3} >
                                Telephone
                            </GridItem>
                            <GridItem rowSpan={1} colSpan={1}  pos='relative'>
                                <Heading size='xl' bottom='10' pos='absolute'>
                                    Voyage
                                </Heading>
                            </GridItem>
                            <GridItem rowSpan={2} colSpan={2} >
                                <Text fontSize='xl'>
                                    Hey chers Students ! Avec Studentbank, la banque 100% en ligne faite par et pour les étudiants, ouvrez votre compte bancaire depuis votre salle de classe en 5 min sans frais, ni commissions.
                                    Gérez votre argent depuis votre téléphone et effectuez des opérations mobiles ou paiements en ligne partout dans le monde. Studentbank c’est aussi la possibilité de souscrire à des prêts étudiants, des découverts bancaires et ceux sans service ou justificatifs de revenus ou de cautionnement.
                                </Text>
                            </GridItem>
                            <GridItem rowSpan={1} colSpan={1}  pos='relative' justifyContent='center'>
                                <Center bottom='10' pos='absolute'>
                                    <Button>Partir à l'étranger</Button>
                                </Center>
                            </GridItem>
                        </Grid>
                    </Box>
                    </div>
                </VStack>

                <Button
                    onClick={() => {
                    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
                    }}
                    style={{
                    position: 'fixed',
                    bottom: '40px',
                    right: '40px',
                    textAlign: 'center',
                    display: visible ? 'inline' : 'none'
                    }}
                    leftIcon={<AiOutlineToTop/>}
                >
                    Haut de page
                </Button>

        </Box>
    )
}

function Card(header, description, photo, link) {
    return(

        <LinkScroll activeClass="active"  to={link} spy={true} smooth={true}>
            <Box pos='relative' w='470px' h='665px' bg={photo}  borderRadius="10">
                <Box pos='absolute' top='25px' left="35px" >
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
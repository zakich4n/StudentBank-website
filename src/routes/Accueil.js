import {useEffect, useState} from 'react';
import { Button, Center, Heading, VStack, Grid, GridItem, Box, Text, Image} from "@chakra-ui/react";
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
        <Box bgGradient='linear(to-r, #F6AEA0, #FCD9BC)' w='100%'>
            <Image src='Vector 36.png' pos='absolute' top='130' w='100%' />
            <Image src='Vector 37.png' pos='absolute' top='240' w='100%' />
                <VStack>
                    <div id='accueil'> {/* Utilisation de div pour react-scroll */}
                    <Box> {/* Page d'acueille */}
                        <Center>
                            <VStack>
                                <Heading as='h1' size='3xl' mt={40} pb={5} color='white' zIndex='2'>
                                    Une banque pour les
                                </Heading>
                                <Heading as='h1' size='3xl' pb={20} color='white'>
                                    étudiants
                                </Heading>
                                {ButtonSB("Être accompagné")}
                            </VStack>
                        </Center>

                        <Box>
                            <Grid templateColumns='repeat(3, 1fr)' gap={6} mt={200} >
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
                                <Image pl={10 } src="iPhone 13 Mockup white 1.png" h='90%' />
                            </GridItem>
                            <GridItem rowSpan={1} colSpan={1}  pos='relative'>
                                <Heading size='xl' bottom='10' pos='absolute'>
                                    Banque
                                </Heading>
                            </GridItem>
                            <GridItem rowSpan={2} colSpan={2} >
                                <Text fontSize='xl' pb={10}>
                                    Hey chers Students ! Avec Studentbank, la banque 100% en ligne faite par et pour les étudiants, ouvrez votre compte bancaire depuis votre salle de classe en 5 min sans frais, ni commissions.
                                </Text>
                                <Text fontSize='xl'>
                                    Gérez votre argent depuis votre téléphone et effectuez des opérations mobiles ou paiements en ligne partout dans le monde. Studentbank c’est aussi la possibilité de souscrire à des prêts étudiants, des découverts bancaires et ceux sans service ou justificatifs de revenus ou de cautionnement.
                                </Text>
                            </GridItem>
                            <GridItem rowSpan={1} colSpan={1}  pos='relative' justifyContent='center'>
                                <Center bottom='40' left='20' pos='absolute'>
                                    {ButtonSB("Ouvrir mon compte")}
                                </Center>
                            </GridItem>
                        </Grid>
                    </Box>
                    </div>

                    <Box w='100%' h='863px' p={10} pl={30} bg='white'> {/* Votre carte bancaire */}
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
                            pl={10}
                            >
                            <GridItem  area={'header'}>
                                <Center>
                                    <Heading as='h2' size='2xl'>Votre carte bancaire</Heading>
                                </Center>
                            </GridItem>
                            <GridItem  pos='relative' area={'titre'}>
                                <Heading size='xl' bottom='10' pos='absolute'>
                                    Banque
                                </Heading>
                            </GridItem>
                            <GridItem  area={'descrip'}>
                                <Text fontSize='xl' pb={10}>
                                    Hey chers Students ! Avec Studentbank, la banque 100% en ligne faite par et pour les étudiants, ouvrez votre compte bancaire depuis votre salle de classe en 5 min sans frais, ni commissions.
                                </Text>
                                <Text fontSize='xl'>
                                    Gérez votre argent depuis votre téléphone et effectuez des opérations mobiles ou paiements en ligne partout dans le monde. Studentbank c’est aussi la possibilité de souscrire à des prêts étudiants, des découverts bancaires et ceux sans service ou justificatifs de revenus ou de cautionnement.
                                </Text>
                            </GridItem>
                            <GridItem rowSpan={4} colSpan={2}  area={'image'}>
                                <Center>
                                    <Image pl={25} src="whitecard_mockup 1.png" h='90%' w='80%'/>
                                </Center>
                                
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
                                </Text>
                                <Text fontSize='xl'>
                                    Gérez votre argent depuis votre téléphone et effectuez des opérations mobiles ou paiements en ligne partout dans le monde. Studentbank c’est aussi la possibilité de souscrire à des prêts étudiants, des découverts bancaires et ceux sans service ou justificatifs de revenus ou de cautionnement.
                                </Text>
                            </GridItem>
                            <GridItem rowSpan={1} colSpan={1}  pos='relative' justifyContent='center'>
                            <Center bottom='40' left='20' pos='absolute'>
                                    {ButtonSB("Voir mes avantages")}
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
            <Box pos='relative' w='470px' h='665px' bg="red"  borderRadius="10">
                <Image src={photo} />
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

function ButtonSB(titre) {
    return (
        <Button
        px='30px'
        size='lg'
        border='2px' borderColor='white'
        color='white'
        bgGradient='linear(to-r, #ED174C, #F58220)'
        >{titre}</Button>
    )
}
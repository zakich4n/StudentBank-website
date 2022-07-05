import { Button, Center, Heading, VStack, Grid, GridItem, Box, Text, AspectRatio} from "@chakra-ui/react";

export default function Accueil() {
    return (
        <Box bgGradient='linear(to-r, #FBCBC2, #FCD9BC)' w='100%'>
                <VStack>
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
                                    {Card("Banque","Lorem ipsum dolor sit amet", "red")}
                                </GridItem>
                                <GridItem >
                                    {Card("Logement","Lorem ipsum dolor sit amet", "red")}
                                </GridItem>
                                <GridItem  >
                                    {Card("Mobilité","Lorem ipsum dolor sit amet", "red")}
                                </GridItem>
                            </Grid>
                        </Box>
                    </Box>

                    <Box h='870px' w='100%' bg='dark'> {/* Video de presentation */}
                        
                            <iframe
                                width='100%'
                                height='100%'
                                title='naruto'
                                src='https://www.youtube.com/embed/QhBnZ6NPOY0'
                                allowFullScreen
                            />
                        
                    </Box>

                    <Box w='100%' h='863px'> {/* Gérer vos dépsnes */}
                         <Grid
                            h='863px'
                            templateRows='repeat(5, 1fr)'
                            templateColumns='repeat(5, 1fr)'
                            gap={4}
                            >
                            <GridItem rowSpan={1} colSpan={5} bg='tomato'>
                                <Center h='100%'>
                                    <Heading as='h2' size='2xl'>Gérer vos dépenses</Heading>
                                </Center>
                            </GridItem>
                            <GridItem rowSpan={4} colSpan={3} bg='papayawhip'>
                                Telephone
                            </GridItem>
                            <GridItem rowSpan={1} colSpan={1} bg='papayawhip' pos='relative'>
                                <Heading size='xl' bottom='10' pos='absolute'>
                                    Banque
                                </Heading>
                            </GridItem>
                            <GridItem rowSpan={2} colSpan={2} bg='tomato'>
                                <Text fontSize='xl'>
                                    Hey chers Students ! Avec Studentbank, la banque 100% en ligne faite par et pour les étudiants, ouvrez votre compte bancaire depuis votre salle de classe en 5 min sans frais, ni commissions.
                                    Gérez votre argent depuis votre téléphone et effectuez des opérations mobiles ou paiements en ligne partout dans le monde. Studentbank c’est aussi la possibilité de souscrire à des prêts étudiants, des découverts bancaires et ceux sans service ou justificatifs de revenus ou de cautionnement.
                                </Text>
                            </GridItem>
                            <GridItem rowSpan={1} colSpan={1} bg='papayawhip' pos='relative' justifyContent='center'>
                                <Center bottom='10' pos='absolute'>
                                    <Button>Ouvrir mon compte</Button>
                                </Center>
                            </GridItem>
                        </Grid>
                    </Box>

                    <Box w='100%' h='863px'> {/* Votre carte bancaire */}
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
                            <GridItem bg='tomato' area={'header'}>
                                <Center h='100%'>
                                    <Heading as='h2' size='2xl'>Votre carte bancaire</Heading>
                                </Center>
                            </GridItem>
                            <GridItem bg='papayawhip' pos='relative' area={'titre'}>
                                <Heading size='xl' bottom='10' pos='absolute'>
                                    Banque
                                </Heading>
                            </GridItem>
                            <GridItem bg='tomato' area={'descrip'}>
                                <Text fontSize='xl'>
                                    Hey chers Students ! Avec Studentbank, la banque 100% en ligne faite par et pour les étudiants, ouvrez votre compte bancaire depuis votre salle de classe en 5 min sans frais, ni commissions.
                                    Gérez votre argent depuis votre téléphone et effectuez des opérations mobiles ou paiements en ligne partout dans le monde. Studentbank c’est aussi la possibilité de souscrire à des prêts étudiants, des découverts bancaires et ceux sans service ou justificatifs de revenus ou de cautionnement.
                                </Text>
                            </GridItem>
                            <GridItem rowSpan={4} colSpan={2} bg='papayawhip' area={'image'}>
                                CB
                            </GridItem>
                        </Grid>
                    </Box>

                    <Box w='100%' h='863px'> {/* Vos avantages */}
                         <Grid
                            h='863px'
                            templateRows='repeat(5, 1fr)'
                            templateColumns='repeat(5, 1fr)'
                            gap={4}
                            >
                            <GridItem rowSpan={1} colSpan={5} bg='tomato'>
                                <Center h='100%'>
                                    <Heading as='h2' size='2xl'>Vos avantages</Heading>
                                </Center>
                            </GridItem>
                            <GridItem rowSpan={4} colSpan={3} bg='papayawhip'>
                                Telephone
                            </GridItem>
                            <GridItem rowSpan={1} colSpan={1} bg='papayawhip' pos='relative'>
                                <Heading size='xl' bottom='10' pos='absolute'>
                                    Réduction
                                </Heading>
                            </GridItem>
                            <GridItem rowSpan={2} colSpan={2} bg='tomato'>
                                <Text fontSize='xl'>
                                    Hey chers Students ! Avec Studentbank, la banque 100% en ligne faite par et pour les étudiants, ouvrez votre compte bancaire depuis votre salle de classe en 5 min sans frais, ni commissions.
                                    Gérez votre argent depuis votre téléphone et effectuez des opérations mobiles ou paiements en ligne partout dans le monde. Studentbank c’est aussi la possibilité de souscrire à des prêts étudiants, des découverts bancaires et ceux sans service ou justificatifs de revenus ou de cautionnement.
                                </Text>
                            </GridItem>
                            <GridItem rowSpan={1} colSpan={1} bg='papayawhip' pos='relative' justifyContent='center'>
                                <Center bottom='10' pos='absolute'>
                                    <Button>Voir mes avantages</Button>
                                </Center>
                            </GridItem>
                        </Grid>
                    </Box>

                    <Box w='100%' h='863px'> {/* Aide à la lacoation */}
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
                            <GridItem bg='tomato' area={'header'}>
                                <Center h='100%'>
                                    <Heading as='h2' size='2xl'>Aide à la lacoation</Heading>
                                </Center>
                            </GridItem>
                            <GridItem bg='papayawhip' pos='relative' area={'titre'}>
                                <Heading size='xl' bottom='10' pos='absolute'>
                                    Louer
                                </Heading>
                            </GridItem>
                            <GridItem bg='tomato' area={'descrip'}>
                                <Text fontSize='xl'>
                                    Hey chers Students ! Avec Studentbank, la banque 100% en ligne faite par et pour les étudiants, ouvrez votre compte bancaire depuis votre salle de classe en 5 min sans frais, ni commissions.
                                    Gérez votre argent depuis votre téléphone et effectuez des opérations mobiles ou paiements en ligne partout dans le monde. Studentbank c’est aussi la possibilité de souscrire à des prêts étudiants, des découverts bancaires et ceux sans service ou justificatifs de revenus ou de cautionnement.
                                </Text>
                            </GridItem>
                            <GridItem rowSpan={4} colSpan={2} bg='papayawhip' area={'image'}>
                                CB
                            </GridItem>
                        </Grid>
                    </Box>

                    <Box w='100%' h='863px'> {/* International */}
                         <Grid
                            h='863px'
                            templateRows='repeat(5, 1fr)'
                            templateColumns='repeat(5, 1fr)'
                            gap={4}
                            >
                            <GridItem rowSpan={1} colSpan={5} bg='tomato'>
                                <Center h='100%'>
                                    <Heading as='h2' size='2xl'>Partir à l'international</Heading>
                                </Center>
                            </GridItem>
                            <GridItem rowSpan={4} colSpan={3} bg='papayawhip'>
                                Telephone
                            </GridItem>
                            <GridItem rowSpan={1} colSpan={1} bg='papayawhip' pos='relative'>
                                <Heading size='xl' bottom='10' pos='absolute'>
                                    Voyage
                                </Heading>
                            </GridItem>
                            <GridItem rowSpan={2} colSpan={2} bg='tomato'>
                                <Text fontSize='xl'>
                                    Hey chers Students ! Avec Studentbank, la banque 100% en ligne faite par et pour les étudiants, ouvrez votre compte bancaire depuis votre salle de classe en 5 min sans frais, ni commissions.
                                    Gérez votre argent depuis votre téléphone et effectuez des opérations mobiles ou paiements en ligne partout dans le monde. Studentbank c’est aussi la possibilité de souscrire à des prêts étudiants, des découverts bancaires et ceux sans service ou justificatifs de revenus ou de cautionnement.
                                </Text>
                            </GridItem>
                            <GridItem rowSpan={1} colSpan={1} bg='papayawhip' pos='relative' justifyContent='center'>
                                <Center bottom='10' pos='absolute'>
                                    <Button>Partir à l'étranger</Button>
                                </Center>
                            </GridItem>
                        </Grid>
                    </Box>
                </VStack>

        </Box>
    )
}

function Card(header, description, photo) {
    return(
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
    )
}
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

    const container = [
        {  /* inversed=false, MainHeader, SmallHeader, Paragraph1, Paragraph2="", ButtonText, Image_url */
            inversed : false, 
            MainHeader : "Gérer vos dépenses",
            SmallHeader : "Banque",
            Paragraph1 : "Hey chers Students ! Avec Studentbank, la banque 100% en ligne faite par et pour les étudiants, ouvrez votre compte bancaire depuis votre salle de classe en 5 min sans frais, ni commissions. ",
            Paragraph2 : "Gérez votre argent depuis votre téléphone et effectuez des opérations mobiles ou paiements en ligne partout dans le monde. Studentbank c’est aussi la possibilité de souscrire à des prêts étudiants, des découverts bancaires et ceux sans service ou justificatifs de revenus ou de cautionnement.",
            ButtonText : "Ouvrir mon compte", 
            Image_url :"iPhone 13 Mockup white 1.png"
        },
        {  /* inversed=false, MainHeader, SmallHeader, Paragraph1, Paragraph2="", ButtonText, Image_url */
            inversed : true, 
            MainHeader : "Votre carte bancaire",
            SmallHeader : "La carte bancaire",
            Paragraph1 : "Choisissez une carte bancaire qui vous correspond, personnalisable à votre goût et vos envies. ",
            Paragraph2 : "Payez en ligne, en magasin ou dans vos sites favoris, sans frais et en toute sécurité. Nos cartes ENKI, MAYA, HORIZON et EXOTIC vous assurent dans tous vos voyages et la gratuité des frais de retrait à l’international.",
            ButtonText : null, 
            Image_url :"whitecard_mockup 1.png"
        },
        {  /* inversed=false, MainHeader, SmallHeader, Paragraph1, Paragraph2="", ButtonText, Image_url */
            inversed : false, 
            MainHeader : "Vos avantages",
            SmallHeader : "Réductions",
            Paragraph1 : "Profitez des cashbacks ; des réductions ; des codes promos dans des enseignes (Nike, Amazon, Air campus) partenaires. ",
            Paragraph2 : "Parrainez vos amis et gagnez de nombreux avantages. Remboursez et payez gratuitement vos amis par un virement instantané entre compte Studentbank. Réglez en groupe avec vos amis lors de vos sorties et événements.",
            ButtonText : "Voir mes avantages", 
            Image_url :"Stonks.png"
        },
        {  /* inversed=false, MainHeader, SmallHeader, Paragraph1, Paragraph2="", ButtonText, Image_url */
            inversed : true, 
            MainHeader : "Aide à la location",
            SmallHeader : "Louer",
            Paragraph1 : "Studentbank n’est pas qu’une carte bancaire pour étudiant, vos problématiques sont au cœur de nos priorités, nous vous accompagnons dans vos recherches, la location et la gestion de votre logement étudiant. ",
            Paragraph2 : "Vous pourriez souscrire à la caution, la garantie et l’assurance immobilière sur notre plateforme. Les étudiants étrangers et internationaux ! Réservez votre logement étudiant dans votre pays de destination avant votre départ. ",
            ButtonText : "Louer un bien", 
            Image_url :"logement3d.png"
        },
        {  /* inversed=false, MainHeader, SmallHeader, Paragraph1, Paragraph2="", ButtonText, Image_url */
            inversed : false, 
            MainHeader : "Partir à l’international",
            SmallHeader : "Voyager",
            Paragraph1 : "Studentbank n’est pas qu’une carte bancaire pour étudiant, vos problématiques sont au cœur de nos priorités, nous vous accompagnons dans vos recherches, la location et la gestion de votre logement étudiant. ",
            Paragraph2 : "Vous pourriez souscrire à la caution, la garantie et l’assurance immobilière sur notre plateforme. Les étudiants étrangers et internationaux ! Réservez votre logement étudiant dans votre pays de destination avant votre départ. ",
            ButtonText : "Partir à l'étranger", 
            Image_url :"gifgif 1.png"
        }
    ];

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

                    <div id="banque">
                        {Window(container[0])}
                    </div>
                    {Window(container[1])}
                    {Window(container[2])}
                    {Window(container[3])}
                    {Window(container[4])}

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

function Window(item) {
    const inversed=item.inversed, MainHeader=item.MainHeader, SmallHeader=item.SmallHeader, Paragraph1=item.Paragraph1, Paragraph2=item.Paragraph2, ButtonText=item.ButtonText, Image_url=item.Image_url
    if(inversed) {
        return(
            <Box  w='100%' bg='white' >
                <Grid
                templateRows='repeat(2, 1fr)'
                templateColumns='repeat(3, 1fr)'
                gridTemplateRows={'100px 1fr'}
                gap={4}
                p={20}
                >
                    <GridItem colSpan={3}  >
                        <Center h='100%'>
                            <Heading as='h2' size='2xl'>{MainHeader}</Heading>
                        </Center>
                    </GridItem>
                    <GridItem colSpan={1} rowSpan={2}   mt={10}  >
                    <VStack textAlign='start' >
                            <Heading size='xl' pb={8} w="100%">
                                {SmallHeader}
                            </Heading>

                            <Text fontSize='xl'>
                                {Paragraph1}
                            </Text>
                            <Text fontSize='xl'>
                                {Paragraph2}
                            </Text>

                            <Center pt={10}>
                                {ButtonSB(ButtonText)}
                            </Center>
                        </VStack>
                    </GridItem>
                    <GridItem rowSpan={2} colSpan={2}   >
                        <Box  overflow='hidden' w='100%' >
                            <Image pl={25} src={Image_url} />
                        </Box>
                    </GridItem>
                </Grid>
            </Box>
        )
    }
    else {
        return(
            <Box  w='100%' >
                <Grid
                templateRows='repeat(2, 1fr)'
                templateColumns='repeat(3, 1fr)'
                gridTemplateRows={'100px 1fr'}
                row-gap={0}
                gap={4}
                p={20}
                >
                    <GridItem colSpan={3}  >
                        <Center h='100%'>
                            <Heading as='h2' size='2xl'>{MainHeader}</Heading>
                        </Center>
                    </GridItem>
                    <GridItem rowSpan={2} colSpan={2} overflow='hidden'  >
                        <Box  overflow='hidden' w='100%' >
                            <Image pl={25} src={Image_url} />
                        </Box>
                    </GridItem>
                    <GridItem colSpan={1} rowSpan={2}  mt={10} >
                    <VStack textAlign='start' >
                            <Heading size='xl' pb={8} w="100%">
                                {SmallHeader}
                            </Heading>
                            <Text fontSize='xl' pb={4}>
                                {Paragraph1}
                            </Text>
                            <Text fontSize='xl'>
                                {Paragraph2}
                            </Text>
                            <Center pt={10}>
                                {ButtonSB(ButtonText)}
                            </Center>
                        </VStack>
                    </GridItem>
                </Grid>
            </Box>
        )
    }

}

function ButtonSB(titre) {
    if(titre) {
        return (
            <Button
            px='30px'
            size='lg'
            border='2px' 
            borderColor='white'
            color='white'
            bgGradient='linear(to-r, #ED174C, #F58220)'
            borderRadius={10}
            >{titre}</Button>
        )
    }
    return;

}
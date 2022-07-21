import {useEffect, useState} from 'react';
import { Button, Center, Heading, VStack, Grid, GridItem, Box, Text, Image, useColorModeValue} from "@chakra-ui/react";
import { AiOutlineToTop } from 'react-icons/ai'
import {
    Link as LinkScroll
} from 'react-scroll';
import ScrollToTop from '../component/ScrollToTop.js';

import Main from '../container/Main.js'
import Video from '../container/Video.js';
import Depense from '../container/Depense'
import Carte from '../container/Carte'
import Avantages from '../container/Avantages'
import Location from '../container/Location.js';
import International from '../container/International.js';
import PartenaireCarousel from '../container/PartenaireCarousel'
import Temoignage from '../container/Temoignage.js';


export default function Accueil() {


    const colorTheme = useColorModeValue({ //light mode 
        bg : 'linear(to-r, #F6AEA0, #FCD9BC)'
        
    },{ //dark mode
        bg : "231F20"
    })

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
            Image_url :"Frame 1.jpg"
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
            Image_url :"3dhousewhite.png"
        },
        {  /* inversed=false, MainHeader, SmallHeader, Paragraph1, Paragraph2="", ButtonText, Image_url */
            inversed : false, 
            MainHeader : "Partir à l’international",
            SmallHeader : "Voyager",
            Paragraph1 : "Studentbank n’est pas qu’une carte bancaire pour étudiant, vos problématiques sont au cœur de nos priorités, nous vous accompagnons dans vos recherches, la location et la gestion de votre logement étudiant. ",
            Paragraph2 : "Vous pourriez souscrire à la caution, la garantie et l’assurance immobilière sur notre plateforme. Les étudiants étrangers et internationaux ! Réservez votre logement étudiant dans votre pays de destination avant votre départ. ",
            ButtonText : "Partir à l'étranger", 
            Image_url :"planet.png"
        }
    ];

    return (
        <Box bgGradient={colorTheme.bg} w='100%'>
            <Main display={{base : 'none', md : 'grid'}}/>
            <Video display={{base : 'none', md : 'grid'}}/>
            <div id="banque">
                <Depense/>
                <Carte/>
                <Avantages/>                
            </div>
            <div id='logement'>
            <Location/>
            </div>
            <div id="mobilite">
                <International/>
            </div>
            <Temoignage display={{md : 'grid', base : "none"}}/>
            <PartenaireCarousel display={{md : "block", base : "none"}}/>
            <ScrollToTop display={{md : "grid", base : "none"}}/>
        </Box>
    )
}






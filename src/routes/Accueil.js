import {useEffect, useState} from 'react';
import { Button, Center, Heading, VStack, Grid, GridItem, Box, Text, Image, useColorModeValue} from "@chakra-ui/react";
import { AiOutlineToTop } from 'react-icons/ai'
import {
    Link as LinkScroll
} from 'react-scroll';
import ScrollToTop from '../component/ScrollToTop.js';

import Main from '../container/Main.js';
import Video from '../container/Video';
import Depense from '../container/Depense';
import Carte from '../container/Carte';
import Avantages from '../container/Avantages';
import Location from '../container/Location.js';
import International from '../container/International.js';
import PartenaireCarousel from '../container/PartenaireCarousel';
import Temoignage from '../container/Temoignage.js';


export default function Accueil() {


    const colorTheme = useColorModeValue({ //light mode 
        bg : 'linear(to-r, #F6AEA0, #FCD9BC)'
        
    },{ //dark mode
        bg : "231F20"
    })


    return (
        <Box bgGradient={colorTheme.bg} w='100%' >
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






import { Box, Link, Text, Image, Stack, useColorModeValue,  SimpleGrid} from '@chakra-ui/react'
import { Show, Hide } from '@chakra-ui/react'
import {useEffect } from 'react';


export default function Logement(){
    
    useEffect(() => {
        window.scrollTo(0,0);
    });


    const textBoxStyle = {
        display: 'flex',
        justifyContent: 'center',
        bgPosition: 'center',
        color: useColorModeValue('black', 'white'),
        fontWeight: 'bold',
        fontSize: '4vw',
        p: '3%'
    }

  return (
    <Box>
        <Show breakpoint='(max-width: 440px)'>
            <SimpleGrid templateColumns='repeat(1, 1fr)' pt={10}>
                <Box pb={3}>
                    <Text textAlign='center' fontSize='2xl' fontWeight='bold'  fontFamily='Roboto'>
                            Rejoins nous !
                    </Text>
                </Box>
                <Box>
                    <Text textAlign='center' fontSize='sm' fontWeight='light' fontFamily='Roboto' paddingLeft='5vw' paddingRight='5vw'>
                            Téléchargez l’application mobile StudentBank et venez découvrir un nouveau 
                            moyen de gérer votre argent, adapté aux besoins des étudiants !
                    </Text>
                </Box>
                <Box pb={10}>
                    <Link href='https://play.google.com/store/apps?hl=fr&gl=US'>
                        <Image marginLeft='auto' marginRight='auto'  w='250px' h='170px' src='google_play.png' alt='Google Play' />
                    </Link>
                    <Link href='https://www.apple.com/fr/app-store/' >
                        <Image marginLeft='auto' marginRight='auto' w='200px' h='60px' src='appStoreMobile.png' alt='play store' />
                    </Link>
                </Box>
                <Box>
                    <Text textAlign='center' fontSize='sm' fontWeight='light' fontFamily='Roboto' paddingLeft='5vw' paddingRight='5vw'>
                        En plus de ça profite d’un réseaux d’étudiant dans toute la France et 
                        des avantages exclusifs dans plus de x enseignes ! 
                    </Text>
                </Box>
                <Box>
                    <Image marginLeft='auto' marginRight='auto' boxSize='auto' src='application.png' alt='image telephone' />
                </Box>
            </SimpleGrid>
        </Show>

        <Hide breakpoint='(max-width: 450px)'>
         <Box display='flex'
            alignItems='center'
             justifyContent='center'
             width='auto'
             height='auto'
             bgImage = {useColorModeValue("url('BG_telecharger_light.png')" , "url('BG_telecharger.png')")}
             bgPosition="center" 
             bgRepeat="no-repeat"
             bgSize="cover" pt='5vh' >
            <Stack spacingy='2px' pb='5vh'>
                
                 <Text sx={textBoxStyle}>
                        Télécharger l’application
                 </Text>

                 <Link href='https://play.google.com/store/apps?hl=fr&gl=US'>
                     <Image marginLeft='auto' marginRight='auto' boxSize='40%' src='google_play.png' alt='Google Play' />
                 </Link>

                 <Link href='https://www.apple.com/fr/app-store/' >
                     <Image marginLeft='auto' marginRight='auto' boxSize='31%' src='app_store.png' alt='play store' />
                 </Link>
             </Stack>
         </Box>
        </Hide>
    </Box>  
  )
}



  
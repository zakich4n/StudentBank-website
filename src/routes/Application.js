import { Box, Link, Text, Image, Stack, useColorModeValue} from '@chakra-ui/react'
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
    <Box display='flex'
        alignItems='center'
        justifyContent='center'
        width='100vw'
        height='100vh'
        bgImage = {useColorModeValue("url('BG_telecharger_light.png')" , "url('BG_telecharger.png')")}
        bgPosition="center" 
        bgRepeat="no-repeat"
        bgSize={useColorModeValue("contain", "cover")} pt={50} >
        <Stack spacingy='2px' pb={50}>
            
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
  )
}



  
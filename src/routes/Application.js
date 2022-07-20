import { Box, Link, Text, Image,VStack, Stack, useColorModeValue} from '@chakra-ui/react'
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
        width='100%'
        height={useColorModeValue( '100vh', '100vh')}
        bgImage = {useColorModeValue("url('BG_telecharger_light.png')" , "url('BG_telecharger.png')")}
        bgPosition="center" 
        bgRepeat="no-repeat"
        margin='0'
        padding='0'
        bgSize="cover"  pt={useColorModeValue( '50vh', '10vh')}> 
        <VStack pb={'30vh'}>
            <Text sx={textBoxStyle}>
                    Télécharger l’application
            </Text>
            <Stack spacing={0}>
            <Link href='https://play.google.com/store/apps?hl=fr&gl=US'>
                <Image marginLeft='auto' marginRight='auto' boxSize='40%' src='google_play.png' alt='Google Play' />
            </Link>

            <Link href='https://www.apple.com/fr/app-store/' >
                <Image marginLeft='auto' marginRight='auto' boxSize='31%' src='app_store.png' alt='play store' />
            </Link>
            </Stack>
        </VStack>
    </Box>
  )
}



  
import { Box, SimpleGrid, Text, useColorModeValue, Image} from '@chakra-ui/react'
import { Show, Hide } from '@chakra-ui/react'
import {useEffect } from 'react';


export default function Mission(){
  
  useEffect(() => {
    window.scrollTo(0,0);
  });

  const gridStyle = {
    height:"auto",
    w:'100%' ,
    rounded:'md',
    boxSize:'auto',
    color : useColorModeValue('black', 'white'),
    justifyContent : 'center',
    alignItems: 'center',  
    paddingLeft:'5vw',
    paddingRight:'5vw',
    
  }


  return (
    <Box 
        display='flex'
        alignItems='center'
        justifyContent='center'
        bg ='white'
        width='100vw'
        height='auto'
        bgImage ={useColorModeValue("url('BG_mission_light.png')", "url('BG_waves_mission.png')" )}
        bgPosition="center" 
        bgRepeat="no-repeat"
        bgSize='cover'
        pt={'5vh'} pb={20}>

        <SimpleGrid columns={[1, null, 2, 2]} spacingY='40px' 
            justifyContent='center' width='100%' pt='5vh'>
            <Box bg="#11ffee00" sx={gridStyle}>
                <Text  fontSize={['xl',null,'2xl','4xl', null, '5xl']} fontWeight={'bold'}> Pourquoi?</Text>
                <Text  fontSize={['sm', 'md',null,null,'xl','3xl']} pb={5}>La crise sanitaire du Covid, qui fut un vrai 
                révélateur de la situation déjà précaire des étudiants, a considérablement dégradé leurs conditions de vie.</Text>
                <Text  fontSize={['sm', 'md',null,null,'xl','3xl']} >Depuis, l’équipe de StudentBank travaille 
                d’arrache-pied afin de combattre les inégalités sociales et d’éradiquer définitivement la précarité estudiantine.</Text>
            </Box>
            <Box bg="#2EADA500" sx={gridStyle} > 
              <Image src='https://www.vlc-campus.com/wp-content/uploads/2022/02/shutterstock_1694648626-696x464.jpg' w='100%' h='fill' objectFit='fill' />
            </Box>
            <Hide below='sm'>
              <Box bg="#2EADA500" sx={gridStyle}>
              <Image src='https://c0.lestechnophiles.com/www.numerama.com/wp-content/uploads/2011/12/soclbig.png?resize=700,400' w='100%' h='auto' objectFit='cover' />
              </Box>
            </Hide>
            <Box  bg="#11ffee00" sx={gridStyle}>
                <Text fontSize={['xl',null,'2xl','4xl', null, '5xl']} fontWeight={'bold'}>  Comment?</Text>
                <Text fontSize={['sm', 'md',null,null,'xl','3xl']}  pb={5} >Afin d’accompagner efficacement les étudiants,
                  nous centralisons sur une seule et même plateforme des services financiers (ouverture de compte bancaire, prêts étudiant…), 
                  des services de logement (caution, garantie immo…) et des services de mobilité internationale.
                </Text>
                <Text fontSize={['sm', 'md',null,null,'xl','3xl']}>
                  StudentBank est une plateforme faite par des étudiants sensibles aux inégalités sociales, pour les
                  étudiants en situation de précarité.
                </Text>
            </Box>
          <Show breakpoint='(max-width: 450px)'>
            <Box bg="#2EADA500" sx={gridStyle}>
              <Image src='https://c0.lestechnophiles.com/www.numerama.com/wp-content/uploads/2011/12/soclbig.png?resize=700,400' w='100%' h='auto' objectFit='cover' />
            </Box>
          </Show>
        </SimpleGrid>
    </Box>
  )
}




import { Box, SimpleGrid, Text, useColorModeValue, Image} from '@chakra-ui/react'
import {useEffect } from 'react';


export default function Mission(){

  useEffect(() => {
    window.scrollTo(0,0);
  });

  const gridStyle = {
    height:"100%",
    maxW:'500px' ,
    rounded:'md',
    overflow:'hidden',
    color : useColorModeValue('black', 'white'),
    justifyContent : 'center',
    alignItems: 'center',  
    marginLeft:'30px',
    marginRight:'30px'
  }
  return (
      <Box 
          display='flex'
          alignItems='center'
          justifyContent='center'
          bg ='white'
          width='100%'
          height='100%'
          bgImage ={useColorModeValue("url('BG_mission_light.png')", "url('BG_waves_mission.png')" )}
          bgPosition="center" 
          bgRepeat="no-repeat"
          bgSize='cover'
          pt={'5vh'} pb={20}>

          <SimpleGrid  templateColumns='repeat(1, 1fr)'  templateRows='repeat(4, 1fr)' spacingY={50} spacingX={100} pb={39}
             justifyContent='center' min-child-width="600px" boxSizing='border-box' width={'100'}>
              <Box bg="#11ffee00" sx={gridStyle}>
                  <Text  fontSize='3xl' fontWeight={'bold'}> Pourquoi?</Text>
                  <Text  fontSize='md'pb={5}>La crise sanitaire du Covid, qui fut un vrai 
                  révélateur de la situation déjà précaire des étudiants, a considérablement dégradé leurs conditions de vie.</Text>
                  <Text  fontSize='md' >Depuis, l’équipe de StudentBank travaille 
                  d’arrache-pied afin de combattre les inégalités sociales et d’éradiquer définitivement la précarité estudiantine.</Text>
              </Box>
              <Box bg="#D9D9D9" sx={gridStyle}> 
                <Image src='https://www.vlc-campus.com/wp-content/uploads/2022/02/shutterstock_1694648626-696x464.jpg' boxSize='100%' objectFit='fill' />
              </Box>
              <Box bg="#D9D9D9" sx={gridStyle}>
                 <Image src='https://c0.lestechnophiles.com/www.numerama.com/wp-content/uploads/2011/12/soclbig.png?resize=700,400' boxSize='100%' objectFit='fill' />
              </Box>
              <Box bg="#11ffee00" sx={gridStyle}>
                  <Text fontSize='3xl' fontWeight={'bold'}>  Comment?</Text>
                  <Text fontSize='md' pb={5} >Afin d’accompagner efficacement les étudiants,
                    nous centralisons sur une seule et même plateforme des services financiers (ouverture de compte bancaire, prêts étudiant…), 
                    des services de logement (caution, garantie immo…) et des services de mobilité internationale.
                  </Text>
                  <Text fontSize='md' >
                    StudentBank est une plateforme faite par des étudiants sensibles aux inégalités sociales, pour les
                    étudiants en situation de précarité.
                  </Text>
              </Box>
          </SimpleGrid>
      </Box>
  )
}




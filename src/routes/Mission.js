import { Box, SimpleGrid, Text, useColorModeValue} from '@chakra-ui/react'
import {useEffect } from 'react';


export default function Mission(){

  useEffect(() => {
    window.scrollTo(0,0);
  });

  const gridStyle = {
    height:"100%",
    width:"100%",
    maxW:'600px' ,
    rounded:'md',
    overflow:'hidden',
    color : useColorModeValue('black', 'white'),
    justifyContent : 'center',
    alignItems: 'center',  
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
          pt={'15vh'} pb={10}>
          <SimpleGrid templateRows='repeat(2, 1fr)' templateColumns='repeat(2, 1fr)' columns={2} rows={2} spacingY={50} spacingX={150} pb={39}
             justifyContent='center' boxSizing='border-box' margin='border-box' marginLeft='80px' marginRight='80px'>
              <Box bg="#11ffee00" sx={gridStyle}>
                  <Text  fontSize='3xl' fontWeight={'bold'}> Pourquoi?</Text>
                  <Text  fontSize='lg' pb={5}>La crise sanitaire du Covid, qui fut un vrai 
                  révélateur de la situation déjà précaire des étudiants, a considérablement dégradé leurs conditions de vie.</Text>
                  <Text  fontSize='lg' >Depuis, l’équipe de StudentBank travaille 
                  d’arrache-pied afin de combattre les inégalités sociales et d’éradiquer définitivement la précarité estudiantine.</Text>
              </Box>
              <Box bg="#D9D9D9" sx={gridStyle}></Box>
              <Box bg="#D9D9D9" sx={gridStyle}></Box>
              <Box bg="#11ffee00" sx={gridStyle}>
                  <Text fontSize='3xl' fontWeight={'bold'}>  Comment?</Text>
                  <Text fontSize='lg' pb={5} >Afin d’accompagner efficacement les étudiants,
                    nous centralisons sur une seule et même plateforme des services financiers (ouverture de compte bancaire, prêts étudiant…), 
                    des services de logement (caution, garantie immo…) et des services de mobilité internationale.
                  </Text>
                  <Text fontSize='lg' >
                    StudentBank est une plateforme faite par des étudiants sensibles aux inégalités sociales, pour les
                    étudiants en situation de précarité.
                  </Text>
              </Box>
          </SimpleGrid>
      </Box>
  )
}




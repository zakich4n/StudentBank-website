import { Box, VStack, Stack} from '@chakra-ui/react'
import { FormControl, Input, Button, Select,SimpleGrid, Link, Avatar, AvatarBadge } from '@chakra-ui/react';
import { BiCamera } from "react-icons/bi";
import { useColorModeValue } from "@chakra-ui/react"
import {useEffect } from 'react';

export default function Logement(){

  useEffect(() => {
    window.scrollTo(0,0);
  });
  const formStyle = {
    border:'2px',
    color:'black',
    borderColor: useColorModeValue('black', 'white'),
    borderRadius: "8",
    bg: useColorModeValue('#11ffee00','white'),
    _placeholder: { color:useColorModeValue('#737373', '#737373')}
  }

  const darkModeGradient = 'linear(230deg, black 50%, #F58220 50%, #ED174C)'
  const lightModeGradient = 'linear(230deg, white 50%, #F58220 50%, #ED174C)'
  
  return (
      <Box display='flex'
          alignItems='center'
          justifyContent='center'
          align='center'
          width='100vw'
          height='100vh'
          bgImage = "url('BG_logement_light.png')"
          bgPosition="absolute" 
          bgRepeat="no-repeat"
          bgColor={useColorModeValue('white','black')}
          bgSize='cover' pt={'20vh'}> 
          <VStack marginY={25} spacing={3} align="center" pb={'30px'} >
            <SimpleGrid bgGradient={useColorModeValue(lightModeGradient, darkModeGradient)} borderRadius='10'
            borderWidth={3}  w='150%' h='40px' borderColor={useColorModeValue('#ED174C','white')} columns={2} rows={2} spacingX={20}>
              <Box height="30px" w={'200px'} >
                <Link href=''>
                  <Button bg='#11ffee00' width={'80%'} color={useColorModeValue('black', 'white')}>Location</Button>
                </Link>
              </Box>
              <Box height="30px"  w={'200px'}>
                <Link href=''>
                  <Button width={'100%'}  bg='#11ffee00' color={useColorModeValue('black', 'white')}>Nous contacter</Button>
                </Link>
              </Box>
            </SimpleGrid>
            <Box rounded={'lg'}>
            <Stack spacing={4} width={"100%"}>
              <FormControl id="nom">
              <Input sx ={formStyle} type="text"  placeholder="Nom Prenom*"  isRequired/>
              </FormControl>
              <FormControl id="email">
                <Input sx ={formStyle} type="email"  placeholder="Adresse mail*" isRequired/>
              </FormControl>
              <FormControl id="telephone">
                <Input sx ={formStyle} type="phone" placeholder="Numéro de téléphone*" isRequired />
              </FormControl>
                <FormControl id="motif">
              <Select sx ={formStyle} placeholder="Ville*" borderColor='black' color={useColorModeValue('#737373','#737373')} />
              </FormControl>
              <FormControl id="secteur">  
              <Input sx ={formStyle} type="text"  placeholder="Secteur du bien*" isRequired/>
              </FormControl>
              <FormControl id="secteur">
              <Input type="file" leftIcon={<BiCamera/>}  border={'1px dashed'}   borderColor={useColorModeValue('black','white')}  bg='#11ffee00' _placeholder = { {color: '#737373', value: "Ajouter une Photo" }} width={'60%'} right='-70px' isRequired/>
              </FormControl><br></br>
              <Button
                border='2px'
                borderRadius="10"
                borderColor={useColorModeValue('white', '#ED174C')}
                boxShadow='2xl'  
                width={'70%'}
                bgGradient={useColorModeValue('linear(to-l, #F58220, #ED174C)', 'linear(to-l, #FFFFFF, #FFFFFF)')}
                color={useColorModeValue('white', 'black')}
                alignSelf = {'center'} >
                  Se faire contacter
              </Button>
              {/* <Avatar size="lg" left="680"  top="-5px"  src ="robot.png" bg='blackAlpha.100'> 
                <AvatarBadge top="-2px"  boxSize="0.95em" bg="green.500"/>
              </Avatar><br></br> <br></br><br></br> */}
            </Stack>
          </Box>   
        </VStack> 
      </Box>
  )
}



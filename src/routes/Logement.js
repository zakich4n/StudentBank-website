import { Box, VStack, Stack, FormControl, Input, Button, Select,SimpleGrid, Link, Avatar, AvatarBadge,useColorModeValue,Textarea } from '@chakra-ui/react';
import { BiCamera } from "react-icons/bi";
import {useEffect, React  } from 'react';

export default function Logement(){

    useEffect(() => {
    window.scrollTo(0,0);
  });

  const formStyle = {
    border:'2px',
    width:'100%',
    borderColor: useColorModeValue('black', 'white'),
    borderRadius: "8",
    color:'#323232',
    bg: useColorModeValue('#11ffee00','white'),
    _placeholder: { color:'#737373'},
  }


const lightModeGradient1 = 'linear(230deg, white 50%, #F58220 50%, #ED174C)'
const darkModeGradient1 = 'linear(230deg, black 50%, #F58220 50%, #ED174C)'
  
const lightModeGradient2 = 'linear(230deg,#ED174C, #F58220 50%, white 50%)'
const darkModeGradient2 = 'linear(230deg, #ED174C, #F58220 50%, black 50%)'
  
  return (
      <Box display='flex'
          alignItems='center'
          justifyContent='center'
          align='center'
          width='100vw'
          height='auto'
          bgImage =  "url('BG_logement_light.png')"
          bgRepeat="no-repeat"
          bgColor={useColorModeValue('white','black')}
          bgSize='cover'> 
          <SimpleGrid columns={1} spacing={10} pt='5vh' pl='10w' pr='10w'>
            <Box id='location'>   
              <VStack spacing={3} align="center" pb={'30px'} >
                <SimpleGrid bgGradient={useColorModeValue(lightModeGradient1, darkModeGradient1)} borderRadius='10'
                  borderWidth={3}  w={['90vw',null, '80vw','50vw']} h='40px' borderColor={useColorModeValue('#ED174C','white')} columns={2} rows={2} spacingX={5} pb={10}>
                  <Box w='auto' >
                    <Link href='#location'>
                      <Button bg='#11ffee00' width={'80%'} color={useColorModeValue('black', 'white')}>
                        Location
                      </Button>
                    </Link>
                  </Box>
                  <Box  w='auto'>
                    <Link href='#contact'>
                      <Button width={'100%'}  bg='#11ffee00' color={useColorModeValue('black', 'white')}>Nous contacter</Button>
                    </Link>
                  </Box>
                </SimpleGrid>
                <Box rounded={'lg'}>
                  <Stack spacing={4} width='auto' pt={10} paddingLeft='10vw' paddingRight='10vw'>
                    <FormControl id="nom">
                    <Input sx ={formStyle} type="text"  placeholder="Nom Prenom*"  isRequired/>
                    </FormControl>
                    <FormControl id="email">
                      <Input sx ={formStyle} type="email"  placeholder="Adresse mail*" isRequired/>
                    </FormControl>
                    <FormControl id="telephone">
                      <Input sx ={formStyle} type="phone" placeholder="Numéro de téléphone*" isRequired />
                    </FormControl>
                    <FormControl id="ville">
                      <Select sx ={formStyle} placeholder="Ville" borderColor='black' color='#737373' />
                    </FormControl>
                    <FormControl id="secteur">  
                      <Input sx ={formStyle} type="text"  placeholder="Secteur du bien*" isRequired/>
                    </FormControl>
                    <FormControl id="image">
                     <Input type="file" leftIcon={<BiCamera/>}  border={'2px dashed'}  borderColor={useColorModeValue('black','white')}  _placeholder = { { value:"Ajouter une Photo" }} width={'80%'}  isRequired/>
                    </FormControl>
                    <Button
                      border='2px'
                      borderRadius="10"
                      borderColor={useColorModeValue('white', '#ED174C')}
                      boxShadow='2xl'  
                      width='60%'
                      bgGradient={useColorModeValue('linear(to-l, #F58220, #ED174C)', 'linear(to-l, #FFFFFF, #FFFFFF)')}
                      color={useColorModeValue('white', 'black')}
                      alignSelf ='center' >
                        Se faire contacter
                    </Button>
                    {/* <Avatar size="lg" left="680"  top="-5px"  src ="robot.png" bg='blackAlpha.100'> 
                      <AvatarBadge top="-2px"  boxSize="0.95em" bg="green.500"/>
                    </Avatar><br></br> <br></br><br></br> */}
                  </Stack>
                </Box>   
              </VStack> 
            </Box>

            <Box id='contact'>
              <VStack spacing={3} align="center" pb={'30px'} >
                <SimpleGrid bgGradient={useColorModeValue(lightModeGradient2, darkModeGradient2)} borderRadius='10'
                borderWidth={3}  w={['90vw',null, '80vw','50vw']} h='40px' borderColor={useColorModeValue('#ED174C','white')} columns={2} rows={2} spacingX={5} pb={10}>
                  <Box w='auto'>
                    <Link href='#location'>
                      <Button bg='#11ffee00' width={'80%'} color={useColorModeValue('black', 'white')} >
                      Location</Button>
                    </Link>
                  </Box>
                  <Box w='auto'>
                    <Link href='#contact'>
                      <Button width={'100%'}  bg='#11ffee00' color={useColorModeValue('black', 'white')}>Nous contacter</Button>
                    </Link>
                  </Box>
                </SimpleGrid>
                <Box rounded={'lg'}>
                  <Stack spacing={4} w='auto' pt={10} paddingLeft='10vw' paddingRight='10vw'>
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
                      <Select sx ={formStyle} placeholder="Motif" borderColor='black' color='#737373' />
                    </FormControl>
                    <FormControl id="message">  
                      <Textarea sx ={formStyle} type="text"  placeholder="Ecrivez votre message ..." isRequired/>
                    </FormControl>
                    <Button
                      border='2px'
                      borderRadius="10"
                      borderColor={useColorModeValue('white', '#ED174C')}
                      boxShadow='2xl'  
                      width={'60%'}
                      bgGradient={useColorModeValue('linear(to-l, #F58220, #ED174C)', 'linear(to-l, #FFFFFF, #FFFFFF)')}
                      color={useColorModeValue('white', 'black')}
                      alignSelf = {'center'}>
                        Envoyer un ticket
                    </Button>
                    {/* <Avatar size="lg" left="680"  top="-5px"  src ="robot.png" bg='blackAlpha.100'> 
                      <AvatarBadge top="-2px"  boxSize="0.95em" bg="green.500"/>
                    </Avatar><br></br> <br></br><br></br> */}
                  </Stack>
                </Box>   
              </VStack> 
            </Box>       
        </SimpleGrid>
      </Box>
  )
}



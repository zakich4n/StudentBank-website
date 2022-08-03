import { Box, VStack, Stack} from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import { FormControl, Input, Button, Select,SimpleGrid, Link, Avatar, AvatarBadge } from '@chakra-ui/react';
import { useColorModeValue } from "@chakra-ui/react"

export default function Logement(){
  const formStyle = {
    border:'2px',
    borderColor: useColorModeValue('black', 'white'),
    borderRadius: "8",
    color:'#323232',
    bg: useColorModeValue('#11ffee00','white'),
    _placeholder: { color:'#737373'},
  }

  return (
    <div  height={'40%'} style={{backgroundColor :'white'}} >
        <Box display='block'
            alignItems='center'
            justifyContent='center'
            width='100%'
            bgImage = {useColorModeValue("url('BG_logement_light.png')" , "url('BG_location.png')")}
            bgPosition="center" 
            bgRepeat="no-repeat"
            bgSize={useColorModeValue('contain','cover')}> 
            <VStack spacing={3} align="center" p={'10'} >
              <SimpleGrid bgGradient={'linear(to-l, #ED174C, #F58220)'} border='5px' borderWidth={20} marginX={20} columns={2} rows={2} spacingY={50}>
                <Box bgGradient={'linear(to-l, #ED174C, #F58220)'} height="40px" w={'200px'} >
                  <Link href=''>
                    <Button bgGradient={'linear(to-l, #ED174C, #F58220)'} width={'100%'} color={'black'}  variant='outline'>Location</Button>
                  </Link>
                </Box>
                <Box bg="white" height="40px"  w={'200px'}>
                  <Link href=''>
                    <Button width={'100%'}  bg="white" color={'black'}  variant='outline'>Nous contacter</Button>
                  </Link>
                </Box>
              </SimpleGrid>
              <br></br>
            <Box
              rounded={'lg'}>
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
                <Input type="file" border={'1px dashed'}   borderColor={useColorModeValue('black','white')}  bg='#11ffee00' _placeholder = { {color: '#737373', value: "Ajouter une Photo" }} width={'60%'} right='-70px' isRequired/>
                </FormControl><br></br>
                <Button
                  border='2px'
                  borderRadius="10"
                  borderColor={useColorModeValue('white', '#ED174C')}
                  boxShadow='2xl'  
                  width={'70%'}
                  bgGradient={useColorModeValue('linear(to-l, #ED174C, #F58220)', 'linear(to-l, #FFFFFF, #FFFFFF)')}
                  color={useColorModeValue('white', 'black')}
                  alignSelf = {'center'}>
                   Se faire contacter
                </Button>
                <Avatar size="lg" left="680"  top="-5px"  src ="robot.png" bg='blackAlpha.100'> 
                  <AvatarBadge top="-2px"  boxSize="0.95em" bg="green.500"/>
                </Avatar><br></br> <br></br><br></br>
              </Stack>
            </Box>   
          </VStack> 
        </Box>
    </div>
  )
}



  
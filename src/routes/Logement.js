import { Box} from '@chakra-ui/react'
import { VStack, Stack, HStack   } from "@chakra-ui/react"
import { extendTheme } from '@chakra-ui/react'
import { FormControl, Input, Button, useColorModeValue, Select,Link } from '@chakra-ui/react';
import { Avatar, AvatarBadge } from "@chakra-ui/react"


const breakpoints = {
  sm: '320px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
  '2xl': '1536px',
}

const buttonStyles =  {
    borderTopColor:' black',
    borderRightColor: 'black',
    borderBottomColor: '#ED174C',
    borderLeftColor:'#ED174C',
}

// 3. Extend the theme
const theme = extendTheme({ breakpoints })


const innerBoxStyles = {
    display: 'flex',
    justifyContent: 'center',
    bgPosition: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '48px',
    p: '6%'
}


export default function Logement(){
  return (
    <div  height={'100%'} style={{backgroundColor :'#231F20'}} >
        <Box display='block'
            alignItems='center'
            justifyContent='center'
            width='100%'
            bgImage = "url('BG_location.png')" 
            bgPosition="center" 
            bgRepeat="no-repeat"
            bgSize='cover'>
            <VStack spacing={3} align="center" p={'10'} >
            <div style={{borderWidth:'3px' ,borderColor:'white',width:'30%', height:'100%',borderRadius:'5%'}}>
              <div style={{  height:'100%', borderRadius:'5%',borderTopColor:' black', borderRightColor: 'black', borderBottomColor: '#ED174C',borderLeftColor:'#ED174C', borderWidth:'10px' }} width={'40%'}  _hover={{ bg: '#11ffee00'}}>
               
              </div>
              <div style={{  height:'100%', borderRadius:'5%',borderTopColor:' black', borderRightColor: 'black', borderBottomColor: '#ED174C',borderLeftColor:'#ED174C', borderWidth:'10px' }} width={'40%'}  _hover={{ bg: '#11ffee00'}}>
               
              </div>
               {/* <Link href=''>
                    <Button  _hover={{ transform: 'translateY(-2px)'}} width={'50%'} bg="#ED174C"  color={'white'}>Location</Button>
                </Link>
                <Link href=''>
                    <Button _hover={{ transform: 'translateY(-2px)'}}   width={'50%'}  bg="#090A0A00" color={'white'} >Nous contacter</Button>
                </Link> */}
            </div>
            <br></br>
            <Box
              rounded={'lg'}
              boxShadow={'lg'}>
              <Stack align={'match-parent'} spacing={4} width={"100%"}>
                <FormControl id="nom">
                <Input type="text"  placeholder="Nom Prenom*"  bg={useColorModeValue('white')} isRequired/>
                </FormControl>
                <FormControl id="email">
                  <Input type="email"  placeholder="Adresse mail*"  bg={useColorModeValue('white')} isRequired/>
                </FormControl>
                <FormControl id="telephone">
                  <Input type="phone" placeholder="Numéro de téléphone*"  bg={useColorModeValue('white')} isRequired />
                </FormControl>
                 <FormControl id="motif">
                <Select placeholder="Ville*"  bg={useColorModeValue('white')} />
                </FormControl>
                <FormControl id="secteur">
                <Input type="text"  placeholder="Secteur du bien*"  bg={useColorModeValue('white')} isRequired/>
                </FormControl>
                <FormControl id="secteur">
                <Input type="file" border={'1px dashed'}   borderColor='white' placeholder="Ajouter une Photo"  bg='#11ffee00' isRequired/>
                </FormControl>
                <Button
                    m={100}
                    borderRadius="12"
                    width={'70%'}
                    border={'2px'}
                    borderColor={'#ED174C'}
                    color={'black'}
                    alignSelf = {'center'}
                    _hover={{
                      bg: '#ED174C',
                    }}>
                   Se faire contacter
                </Button>
                <Avatar size="lg" left="680"  top="-5"  src ="robot.png" bg='blackAlpha.100'> 
                  <AvatarBadge top="-2px"  boxSize="0.95em" bg="green.500"/>
                </Avatar><br></br>
                <br></br><br></br>
              </Stack>
            </Box>
           <br></br>
          </VStack> 
        </Box>
    </div>
  )
}



  
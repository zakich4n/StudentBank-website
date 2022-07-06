import { Box } from '@chakra-ui/react'
import { VStack, HStack } from "@chakra-ui/react"
import { FormControl, Input, Radio, Stack, Button, Select, useColorModeValue } from '@chakra-ui/react';
import { Avatar, AvatarBadge } from "@chakra-ui/react"

const innerBoxStyles = {
    display: 'flex',
    justifyContent: 'center',
    bgPosition: 'center',
    color: 'white',
    fontWeight: '600',
    fontSize: '38px',
    p: '5%'
}

export default function Contact(){
  return (
    <div height={'100%'} style={{backgroundColor :'#231F20'}} >
        <Box 
            display='block'
            alignItems='center'
            justifyContent='center'
            align='center'
            width='100%'
            bgImage = "url('BG_prendreRDV.png')" 
            bgPosition="center" 
            bgRepeat="no-repeat"
            bgSize='cover'>    
          <VStack spacing={3} align="center" >
            <Box sx= {innerBoxStyles} fontSize={['sm', 'md', 'lg', 'xl']}>
                Prendre rendez-vous
            </Box>
            <Box
              rounded={'lg'}
              boxShadow={'lg'}>
              <Stack align={'match-parent'} spacing={4} width={"100%"}>
                  <HStack>
                    <Box>
                      <FormControl>
                        <Input type="date" />
                      </FormControl>
                    </Box>
                    <Box>
                      <FormControl id="date">
                        <Input type="DatePicker" placeholder="Date du rendez-vous"  bg={useColorModeValue('white')} pointerEvents={'none'} isRequired />
                      </FormControl>
                    </Box>
                  </HStack>
                <FormControl id="motif">
                <Select placeholder="Motif du rendez-vous"  bg={useColorModeValue('white')} />
                </FormControl>
                  <FormControl id="nom">
                  <Input type="text"  placeholder="Nom*"  bg={useColorModeValue('white')} isRequired/>
                </FormControl>
                <FormControl id="prenom">
                  <Input type="text"  placeholder="Prénom*"  bg={useColorModeValue('white')} isRequired/>
                </FormControl>
                <FormControl id="email">
                  <Input type="email"  placeholder="Adresse mail*"  bg={useColorModeValue('white')} isRequired/>
                </FormControl>
                <FormControl id="telephone">
                  <Input type="phone" placeholder="Numéro de téléphone*"  bg={useColorModeValue('white')} isRequired />
                </FormControl>
                <Radio  color="#ffffff">Lorem ipsum</Radio>
                <Button
                    m={100}
                    width={'50%'}
                    bg={'#ED174C'}
                    color={'white'}
                    alignSelf = {'center'}
                    _hover={{
                      bg: '#ED174C',
                    }}>
                    Valider le rendez vous
                </Button><br></br>
              </Stack>
            </Box>
          </VStack>    
          <Box alignX='left'>
              <Avatar  src ="robot.png" bg='blackAlpha.100'> 
                <AvatarBadge boxSize="0.95em" bg="green.500"/>
              </Avatar>
          </Box>
           <br></br> 
        </Box>
    </div>
  )
}



  
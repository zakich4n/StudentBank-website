import { Box } from '@chakra-ui/react'
import { VStack, HStack } from "@chakra-ui/react"
import { FormControl, Input, Radio, Stack, Button, Select, useColorModeValue } from '@chakra-ui/react';
import { Avatar, AvatarBadge } from "@chakra-ui/react"
import { Text } from "@chakra-ui/react"
import { BiCalendarEvent } from "react-icons/bi";



export default function Contact(){
 
  const innerBoxStyles = {
    display: 'center',
    justifyContent: 'center',
    bgPosition: 'center',
    color: useColorModeValue('black', 'white'),
    fontWeight: '600'
}


  //style pour le formuliare
  const formStyle = {
    border:'2px',
    borderColor: useColorModeValue('black', 'white'),
    borderRadius: "8",
    color:'#323232',
    bg: useColorModeValue('#11ffee00','white'),
    _placeholder: { color:'#737373'}
  }

  const calenderStyle ={
     _placeholder: { color:'#737373'}
  }


  
  return (
    <div height={'100%'} >
        <Box 
            bg={useColorModeValue('white','#231F20')}
            display='block'
            alignItems='center'
            justifyContent='center'
            align='center'
            width='auto'
            height='auto'
            bgImage = {useColorModeValue("url('BG_contact_light.png')", "url('BG_contact_dark.png')")}
            bgPosition="center" 
            bgRepeat="no-repeat"
            bgSize="cover" pb={20} >    
          <VStack spacing={3} align="center" marginLeft='7vw' marginRight='7vw'>
            <Box mt="50px">
              <Stack  spacing={4} width={"100%"}>
              <Text sx= {innerBoxStyles} fontSize={['2xl','3xl','5xl','6xl']}>Prendre rendez-vous</Text>
              <HStack  alignSelf = {'center'}>
                <Box mt="40px">
                  <FormControl id="picker"> 
                  <Button //onClick={this.openDatepicker}
                      variant='ghost'
                      rounded={'md'}
                      leftIcon={<BiCalendarEvent
                      size="40px"
                      />}></Button>
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="date">
                    <Input sx = {formStyle} mt="40px" type="DatePicker" placeholder="Date du rendez-vous"  pointerEvents={'none'} isRequired />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="motif">
                <Select sx = {formStyle} placeholder="Motif du rendez-vous" />
              </FormControl>
                <FormControl id="nom">
                <Input sx = {formStyle} type="text"  placeholder="Nom*"  isRequired/>
              </FormControl>
              <FormControl id="prenom">
                <Input sx = {formStyle} type="text"  placeholder="Prénom*"  isRequired/>
              </FormControl>
              <FormControl id="email">
                <Input sx = {formStyle} type="email"  placeholder="Adresse mail*"  isRequired/>
              </FormControl>
              <FormControl id="telephone">
                <Input  sx = {formStyle}type="phone" placeholder="Numéro de téléphone*" isRequired />
              </FormControl>
              <Radio><Text color={useColorModeValue('black', 'white')}>Lorem ipsum</Text></Radio>
              <Button
                  border='2px'
                borderRadius="10"
                borderColor={useColorModeValue( '#ED174C', 'white')}
                boxShadow='2xl'  
                width={'70%'}
                bgGradient={useColorModeValue('linear(to-l, #FFFFFF, #FFFFFF)', 'linear(to-l, #ED174C, #F58220)')}
                color={useColorModeValue('black', 'white')}
                alignSelf = {'center'}>
                  Valider le rendez vous
              </Button>
                   <Avatar  size="lg" left="680" src ="robot.png" bg='blackAlpha.100'> 
                   <AvatarBadge top="-2px"  boxSize="0.95em" bg="green.500"/>
                </Avatar><br></br>
              </Stack>
            </Box>
          </VStack>    
           <br></br> 
        </Box>
    </div>
  )
}


// const calendar = document.getElementById('picker');
// calendar.addEventListener('click', () =>{
//   // $('#picker').DatePicker('show');
// });




  
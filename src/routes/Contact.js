// import { Box, Text,  VStack, HStack, FormControl, Input, Radio, Stack, Button, Select, Avatar, AvatarBadge, useColorModeValue, IconButton} from '@chakra-ui/react'
// import { BiCalendarEvent } from "react-icons/bi";
// import {useEffect } from 'react';
// import DatePicker from "react-datepicker";



// export default function Contact(){
  
//   useEffect(() => {
//     window.scrollTo(0,0);
//   });
  
//   const innerBoxStyles = {
//     display: 'center',
//     justifyContent: 'center',
//     bgPosition: 'center',
//     color: useColorModeValue('black', 'white'),
//     fontWeight: '600',
//     fontSize: '4xl',
// }


//   //style pour le formuliare
//   const formStyle = {
//     border:'2px',
//     borderColor: useColorModeValue('black', 'white'),
//     borderRadius: "8",
//     bg: useColorModeValue('#11ffee00','white'),
//     _placeholder: { color:useColorModeValue('#737373', '#737373')}
//   }

//   const calenderStyle ={
//      _placeholder: { color:'#737373'}
//   }
//   return (
//         <Box 
//             bg={useColorModeValue('white','#231F20')}
//             display='flex'
//             alignItems='center'
//             justifyContent='center'
//             align='center'
//             width='100%'
//             height='100%'
//             bgImage = {useColorModeValue("url('BG_contact_light.png')", "url('BG_contact_dark.png')")}
//             bgPosition="center" 
//             bgRepeat="no-repeat"
//             bgSize="cover" pb={20} >    
//           <VStack spacing={3} align="center">
//             <Box mt="50px">
//               <Stack align={'match-parent'} spacing={4} width={"100%"}>
//               <Text sx= {innerBoxStyles}>Prendre rendez-vous</Text>
//               <HStack  alignSelf = {'center'}>
//                 <Box mt="40px">
//                   <FormControl id="picker"> 
//                   <Button
//                       variant='ghost'
//                       rounded={'md'}
//                       leftIcon={<BiCalendarEvent
//                       size="40px"
//                       />}></Button>
//                   </FormControl>
//                 </Box>
//                 <Box>
//                   <FormControl id="date">
//                     <Input sx = {formStyle} mt="40px" type="DatePicker" placeholder="Date du rendez-vous"  bg={useColorModeValue('white')} pointerEvents={'none'} isRequired />
//                   </FormControl>
//                 </Box>
//               </HStack>
//               <FormControl id="motif">
//                 <Select sx = {formStyle} placeholder="Motif du rendez-vous"  bg={useColorModeValue('white')} color={useColorModeValue('#737373','#737373')} />
//               </FormControl>
//                 <FormControl id="nom">
//                 <Input sx = {formStyle} type="text"  placeholder="Nom*"  bg={useColorModeValue('white')} isRequired/>
//               </FormControl>
//               <FormControl id="prenom">
//                 <Input sx = {formStyle} type="text"  placeholder="Prénom*"  bg={useColorModeValue('white')} isRequired/>
//               </FormControl>
//               <FormControl id="email">
//                 <Input sx = {formStyle} type="email"  placeholder="Adresse mail*"  bg={useColorModeValue('white')} isRequired/>
//               </FormControl>
//               <FormControl id="telephone">
//                 <Input  sx = {formStyle}type="phone" placeholder="Numéro de téléphone*"  bg={useColorModeValue('white')} isRequired />
//               </FormControl>
//               <Radio><Text color={useColorModeValue('black', 'white')}>Lorem ipsum</Text></Radio>
//               <Button
//                   border='2px'
//                 borderRadius="10"
//                 borderColor={useColorModeValue( '#ED174C', 'white')}
//                 boxShadow='2xl'  
//                 width={'70%'}
//                 bgGradient={useColorModeValue('linear(to-l, #FFFFFF, #FFFFFF)', 'linear(to-l, #ED174C, #F58220)')}
//                 color={useColorModeValue('black', 'white')}
//                 alignSelf = {'center'}>
//                   Valider le rendez vous
//               </Button>
//                 {/* <Avatar  size="lg" left="680" src ="robot.png" bg='blackAlpha.100'> 
//                    <AvatarBadge top="-2px"  boxSize="0.95em" bg="green.500"/>
//                 </Avatar><br></br> */}
//               </Stack>
//             </Box>
//           </VStack>    
//            <br></br> 
//         </Box>
//   )
// }


// const calendar = document.getElementById('picker');
// calendar.addEventListener('click', () =>{
//   // $('#picker').DatePicker('show');
// });



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



  
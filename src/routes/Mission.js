// import { Box, SimpleGrid, Text, useColorModeValue, Image} from '@chakra-ui/react'
// import { Show, Hide } from '@chakra-ui/react'
// import {useEffect } from 'react';

import { Box, VStack, Stack, FormControl, Input, Button, Select,SimpleGrid, Link, Avatar, AvatarBadge,useColorModeValue, Textarea } from '@chakra-ui/react';
import { BiCamera } from "react-icons/bi";
import {useEffect } from 'react';
export default function Mission(){
  
  // useEffect(() => {
  //   window.scrollTo(0,0);
  // });

  // const gridStyle = {
  //   height:"auto",
  //   w:'100%' ,
  //   rounded:'md',
  //   boxSize:'auto',
  //   color : useColorModeValue('black', 'white'),
  //   justifyContent : 'center',
  //   alignItems: 'center',  
  //   paddingLeft:'5vw',
  //   paddingRight:'5vw',
    
  // }


  // return (
  //   <Box 
  //       display='flex'
  //       alignItems='center'
  //       justifyContent='center'
  //       bg ='white'
  //       width='100vw'
  //       height='auto'
  //       bgImage ={useColorModeValue("url('BG_mission_light.png')", "url('BG_waves_mission.png')" )}
  //       bgPosition="center" 
  //       bgRepeat="no-repeat"
  //       bgSize='cover'
  //       pt={'5vh'} pb={20}>

  //       <SimpleGrid columns={[1, null, 2, 2]} spacingY='40px' 
  //           justifyContent='center' width='100%'>
  //           <Box bg="#11ffee00" sx={gridStyle}>
  //               <Text  fontSize={['xl',null,'2xl','4xl', null, '5xl']} fontWeight={'bold'}> Pourquoi?</Text>
  //               <Text  fontSize={['sm', 'md',null,null,'xl','3xl']} pb={5}>La crise sanitaire du Covid, qui fut un vrai 
  //               révélateur de la situation déjà précaire des étudiants, a considérablement dégradé leurs conditions de vie.</Text>
  //               <Text  fontSize={['sm', 'md',null,null,'xl','3xl']} >Depuis, l’équipe de StudentBank travaille 
  //               d’arrache-pied afin de combattre les inégalités sociales et d’éradiquer définitivement la précarité estudiantine.</Text>
  //           </Box>
  //           <Box bg="#2EADA500" sx={gridStyle} > 
  //             <Image src='https://www.vlc-campus.com/wp-content/uploads/2022/02/shutterstock_1694648626-696x464.jpg' w='100%' h='fill' objectFit='fill' />
  //           </Box>
  //           <Hide below='sm'>
  //             <Box bg="#2EADA500" sx={gridStyle}>
  //             <Image src='https://c0.lestechnophiles.com/www.numerama.com/wp-content/uploads/2011/12/soclbig.png?resize=700,400' w='100%' h='auto' objectFit='cover' />
  //             </Box>
  //           </Hide>
  //           <Box  bg="#11ffee00" sx={gridStyle}>
  //               <Text fontSize={['xl',null,'2xl','4xl', null, '5xl']} fontWeight={'bold'}>  Comment?</Text>
  //               <Text fontSize={['sm', 'md',null,null,'xl','3xl']}  pb={5} >Afin d’accompagner efficacement les étudiants,
  //                 nous centralisons sur une seule et même plateforme des services financiers (ouverture de compte bancaire, prêts étudiant…), 
  //                 des services de logement (caution, garantie immo…) et des services de mobilité internationale.
  //               </Text>
  //               <Text fontSize={['sm', 'md',null,null,'xl','3xl']}>
  //                 StudentBank est une plateforme faite par des étudiants sensibles aux inégalités sociales, pour les
  //                 étudiants en situation de précarité.
  //               </Text>
  //           </Box>
  //         <Show breakpoint='(max-width: 450px)'>
  //           <Box bg="#2EADA500" sx={gridStyle}>
  //             <Image src='https://c0.lestechnophiles.com/www.numerama.com/wp-content/uploads/2011/12/soclbig.png?resize=700,400' w='100%' h='auto' objectFit='cover' />
  //           </Box>
  //         </Show>
  //       </SimpleGrid>
  //   </Box>
  // )


    useEffect(() => {
    window.scrollTo(0,0);
  });
  const formStyle = {
    border:'2px',
    color:'black',
    width:'100%',
    borderColor: useColorModeValue('black', 'white'),
    borderRadius: "8",
    bg: useColorModeValue('#11ffee00','white'),
    _placeholder:'#737373'
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
          height='100vh'
          bgImage = "url('BG_logement_light.png')"
          bgPosition="absolute" 
          bgRepeat="no-repeat"
          bgColor={useColorModeValue('white','black')}
          bgSize='cover' pt={'20vh'}> 
          <SimpleGrid columns={1} spacing={10} pb='40vh'  pt='40vh'>
            <Box>
              <div id='location'>
                <VStack marginY={25} spacing={3} align="center" pb={'30px'} >
                  <SimpleGrid bgGradient={useColorModeValue(lightModeGradient1, darkModeGradient1)} borderRadius='10'
                  borderWidth={3}  w='150%' h='40px' borderColor={useColorModeValue('#ED174C','white')} columns={2} rows={2} spacingX={10} pb={10}>
                    <Box height="30px" w={'200px'} >
                      <Link href='#location'>
                        <Button bg='#11ffee00' width={'80%'} color={useColorModeValue('black', 'white')}>Location</Button>
                      </Link>
                    </Box>
                    <Box height="30px"  w={'200px'}>
                      <Link href='#contact'>
                        <Button width={'100%'}  bg='#11ffee00' color={useColorModeValue('black', 'white')}>Nous contacter</Button>
                      </Link>
                    </Box>
                  </SimpleGrid>
                  <Box rounded={'lg'}>
                    <Stack spacing={4} width={"100%"} pt={10}>
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
                      <Input type="file" leftIcon={<BiCamera/>}  border={'1px dashed'}   borderColor={useColorModeValue('black','white')}  bg='#11ffee00' _placeholder = { {color: '#737373', value: "Ajouter une Photo" }} width={'80%'}  isRequired/>
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
              </div>
            </Box>
            <Box>
              <div id='contact'>
                   <VStack marginY={25} spacing={3} align="center" pb={'30px'} >
                  <SimpleGrid bgGradient={useColorModeValue(lightModeGradient2, darkModeGradient2)} borderRadius='10'
                  borderWidth={3}  w='150%' h='40px' borderColor={useColorModeValue('#ED174C','white')} columns={2} rows={2} spacingX={10} pb={10}>
                    <Box height="30px" w={'200px'} >
                      <Link href='#location'>
                        <Button bg='#11ffee00' width={'80%'} color={useColorModeValue('black', 'white')}>Location</Button>
                      </Link>
                    </Box>
                    <Box height="30px"  w={'200px'}>
                      <Link href='#contact'>
                        <Button width={'100%'}  bg='#11ffee00' color={useColorModeValue('black', 'white')}>Nous contacter</Button>
                      </Link>
                    </Box>
                  </SimpleGrid>
                  <Box rounded={'lg'}>
                    <Stack spacing={4} width={"100%"} pt={10}>
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
                      <Select sx ={formStyle} placeholder="Motif" borderColor='black' color={useColorModeValue('#737373','#737373')} />
                      </FormControl>
                      <FormControl id="secteur">  
                      <Textarea sx ={formStyle} type="text"  placeholder="Secteur du bien*" isRequired/>
                      </FormControl>
                      <Button
                        border='2px'
                        borderRadius="10"
                        borderColor={useColorModeValue('white', '#ED174C')}
                        boxShadow='2xl'  
                        width={'70%'}
                        bgGradient={useColorModeValue('linear(to-l, #F58220, #ED174C)', 'linear(to-l, #FFFFFF, #FFFFFF)')}
                        color={useColorModeValue('white', 'black')}
                        alignSelf = {'center'} >
                          Envoyer un ticket
                      </Button>
                      {/* <Avatar size="lg" left="680"  top="-5px"  src ="robot.png" bg='blackAlpha.100'> 
                        <AvatarBadge top="-2px"  boxSize="0.95em" bg="green.500"/>
                      </Avatar><br></br> <br></br><br></br> */}
                    </Stack>
                  </Box>   
                </VStack> 
              </div>
            </Box>
        </SimpleGrid>
      </Box>
  )
}




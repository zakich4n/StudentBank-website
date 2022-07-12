import { Box } from '@chakra-ui/react'
import { SimpleGrid } from "@chakra-ui/react"
import { Text } from "@chakra-ui/react"
import { useColorModeValue } from "@chakra-ui/react"


export default function Equipe(){
  return (
    <div style={{backgroundColor :'white'}} >
        <Box 
            display='block'
            alignItems='center'
            justifyContent='center'
            width='100%'
            height='100vh'
            bgImage ={useColorModeValue("url('BG_mission_light.png')", "url('BG_waves_mission.png')" )}
            bgPosition="center" 
            bgRepeat="no-repeat"
            bgSize='cover'>
            <SimpleGrid marginX={20} marginY={15} columns={2} rows={2} spacingY={50} spacingX={100} >
                <Box bg="#11ffee00" height="200px" maxW={'530px'} rounded={'md'} overflow={'hidden'}>
                    <Text  color={useColorModeValue('black', 'white')}  fontSize='30px' >  Comment?</Text>
                    <Text  color={useColorModeValue('black', 'white')}  fontSize='15px' >Le lorem ipsum est, en imprimerie, une suite de mots sans signification 
                     utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer
                      le faux-texte dès qu'il est</Text><br></br>
                    <Text  color={useColorModeValue('black', 'white')}  fontSize='15px' >Le lorem ipsum est, en imprimerie, une suite de mots sans signification 
                     la mise en page est achevée. Généralement, on utilise un
                       texte en faux latin, le Lorem ipsum ou Lipsum</Text>
                </Box>
                <Box bg="#D9D9D9" height="200px" maxW={'530px'}  rounded={'md'} overflow={'hidden'}></Box>
                <Box bg="#D9D9D9" height="200px" maxW={'530px'}  rounded={'md'} overflow={'hidden'}></Box>
                <Box bg="#11ffee00" height="200px" maxW={'530px'}  rounded={'md'} overflow={'hidden'}>
                    <Text  color={useColorModeValue('black', 'white')}  fontSize='30px' >  Comment?</Text>
                    <Text  color={useColorModeValue('black', 'white')}  fontSize='15px' >Le lorem ipsum est, en imprimerie, une suite de mots sans signification 
                     utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer
                      le faux-texte dès qu'il est</Text><br></br>
                    <Text  color={useColorModeValue('black', 'white')}  fontSize='15px' >Le lorem ipsum est, en imprimerie, une suite de mots sans signification 
                     la mise en page est achevée. Généralement, on utilise un
                       texte en faux latin, le Lorem ipsum ou Lipsum</Text>
                </Box>
            </SimpleGrid>
          
        </Box>
    </div>
  )
}




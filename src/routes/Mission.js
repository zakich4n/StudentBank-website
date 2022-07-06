import { Box } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import { SimpleGrid } from "@chakra-ui/react"


const breakpoints = {
  sm: '320px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
  '2xl': '1536px',
}

// 3. Extend the theme
const theme = extendTheme({ breakpoints })

export default function Equipe(){
  return (
    <div>
        <Box display='block'
            alignItems='center'
            justifyContent='center'
            width='100%'
            height='100vh'
            bgImage = "url('BG_noir.png')" 
            bgPosition="center" 
            bgRepeat="no-repeat"
            bgSize='cover'>
            <Box p={5}></Box>
            <SimpleGrid marginX={20} columns={2} rows={2} spacingY={50} spacingX={100} >
                <Box bg="#DC3284F0" height="200px" maxW={'530px'} rounded={'md'} overflow={'hidden'}>
                    <h1   fontSize='50px' color='white' >Pourquoi?</h1>
                    <p fontSize='50px' color='white'>Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum</p>
                </Box>
                <Box bg="#1A8270E3" height="200px" maxW={'530px'}  rounded={'md'} overflow={'hidden'}></Box>
                <Box bg="#1A8270E3" height="200px" maxW={'530px'}  rounded={'md'} overflow={'hidden'}></Box>
                <Box bg="#DC3284F0" height="200px" maxW={'530px'}  rounded={'md'} overflow={'hidden'}>
                     <h1 fontSize='50px' color='white'>  Comment?</h1>
                     <p fontSize='50px' color='white'>Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum</p>
                </Box>
            </SimpleGrid>
          
        </Box>
    </div>
  )
}




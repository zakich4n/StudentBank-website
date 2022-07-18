import { Box} from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { VStack } from "@chakra-ui/react"
import { useColorModeValue } from "@chakra-ui/react"


export default function Logement(){
    useEffect(() => {
        window.scrollTo(0,0);
    });
    const innerBoxStyles = {
        display: 'flex',
        justifyContent: 'center',
        bgPosition: 'center',
        color: useColorModeValue('black', 'white'),
        fontWeight: 'bold',
        fontSize: '48px',
        p: '3%'
    }


  return (
    <div align='center'>
    
        <Box display='block'
            alignItems='center'
            justifyContent='center'
            width='100%'
            height='100vh'
            bgImage ={useColorModeValue("url('BG_telecherger_light.png')" , "url('BG_telecharger_dark.png')")}
            bgPosition="center" 
            bgRepeat="no-repeat"
            bgSize={useColorModeValue('contain', 'cover')} pb={20}>
            <VStack  marginY={10} align="center"  alignSelf={"center"}>
               <Box sx= {innerBoxStyles} fontSize={['sm', 'md', 'lg', 'xl']}>
                    Télécharger l’application
                </Box>
                <Box h='15px'>
                    <Link href='https://play.google.com/store/apps?hl=fr&gl=US' isExternal>
                        <Image  borderRadius='10%' boxSize='650%' src='app_store.png' alt='play store' />
                    </Link>
                </Box>
                <br></br> <br></br>
                <Box h='15px' alignSelf='center'>
                    <Link href='https://play.google.com/store/apps?hl=fr&gl=US' isExternal>
                        <Image  borderRadius='10%' width='400px' src='google_play.png' alt='Google Play' />
                    </Link>
                </Box>
            </VStack> 
            <br></br><br></br> <br></br> <br></br> <br></br> <br></br>
        </Box>
    </div>
  )
}



  
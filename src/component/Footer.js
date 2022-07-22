import {
    Box,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    Flex,
    Icon,
    useColorModeValue,
    HStack
  } from '@chakra-ui/react';
  import {
    BsFacebook,
    BsInstagram,
    BsLinkedin
  } from 'react-icons/bs'

  
  const Logo = (props) => {
    return (
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
        width="880.000000pt" height="207.000000pt" viewBox="0 0 880.000000 207.000000"
        preserveAspectRatio="xMidYMid meet"
        {...props}
        >
       <g transform="translate(0.000000,207.000000) scale(0.100000,-0.100000)"
       fill={useColorModeValue('#000000','#FFFFFF')} stroke="none">
       <path d="M4538 1523 l-3 -526 -123 182 -124 182 -91 -3 -92 -3 -3 -667 -2
       -668 95 0 95 0 2 518 3 517 120 -177 120 -177 98 -1 97 0 0 675 0 675 -95 0
       -95 0 -2 -527z m140 289 c8 -10 12 -50 12 -111 0 -103 -12 -131 -56 -131 -45
       0 -54 23 -54 135 0 96 2 105 22 119 25 18 56 13 76 -12z"/>
       <path d="M893 1360 c-111 -24 -165 -79 -171 -175 -6 -107 45 -154 219 -204
       112 -33 139 -51 139 -92 0 -37 -33 -59 -86 -59 -50 0 -99 35 -109 78 l-5 27
       -88 -3 c-48 -2 -90 -7 -95 -11 -11 -11 18 -98 47 -135 14 -19 47 -45 73 -57
       42 -21 62 -24 168 -24 112 0 124 2 173 28 89 47 136 146 113 235 -23 84 -84
       125 -246 166 -106 27 -127 39 -123 70 4 31 51 50 96 39 28 -7 42 -17 57 -46
       12 -22 25 -35 33 -32 8 3 47 5 88 5 l74 0 0 28 c0 51 -40 105 -102 135 -63 32
       -177 44 -255 27z"/>
       <path d="M1360 1285 l0 -85 105 0 105 0 0 -250 0 -250 100 0 100 0 0 250 0
       250 105 0 105 0 0 85 0 85 -310 0 -310 0 0 -85z"/>
       <path d="M2062 1128 c3 -275 7 -288 87 -361 52 -47 103 -60 231 -61 118 -1
       170 16 226 72 65 65 69 82 72 350 l3 243 -98 -3 -98 -3 -5 -226 c-5 -205 -7
       -229 -24 -248 -41 -45 -131 -45 -172 0 -17 19 -19 43 -24 248 l-5 226 -98 3
       -99 3 4 -243z"/>
       <path d="M2760 1035 l0 -337 203 4 c228 4 261 12 330 83 60 62 80 130 75 260
       -5 133 -28 196 -94 253 -64 57 -95 64 -316 69 l-198 5 0 -337z m350 156 c14
       -10 32 -31 39 -47 20 -39 20 -189 0 -229 -18 -39 -72 -65 -131 -65 l-48 0 0
       186 0 185 58 -6 c31 -4 68 -15 82 -24z"/>
       <path d="M3450 1035 l0 -335 283 2 282 3 3 73 3 72 -181 0 -180 0 0 65 0 65
       160 0 160 0 0 70 0 70 -160 0 -160 0 0 55 0 55 175 0 176 0 -3 68 -3 67 -277
       3 -278 2 0 -335z"/>
       <path d="M6730 1035 l0 -335 95 0 95 0 2 181 3 180 123 -180 123 -181 94 0 95
       0 0 335 0 335 -95 0 -95 0 -2 -182 -3 -181 -124 181 -124 182 -93 0 -94 0 0
       -335z"/>
       <path d="M7427 1363 c-4 -3 -7 -154 -7 -335 l0 -328 105 0 105 0 0 83 0 83 54
       53 54 53 68 -136 69 -136 127 0 128 0 -82 133 c-146 237 -168 274 -168 283 0
       5 52 61 115 124 63 63 115 118 115 122 0 5 -60 8 -132 8 l-133 -1 -105 -124
       -105 -123 -3 124 -3 124 -98 0 c-54 0 -101 -3 -104 -7z"/>
       <path d="M4810 1030 l0 -330 100 0 100 0 0 250 0 250 105 0 105 0 0 80 0 80
       -205 0 -205 0 0 -330z"/>
       <path d="M5280 1030 l0 -330 183 0 c271 0 340 15 394 87 24 32 28 45 28 104 0
       80 -19 113 -82 143 l-40 20 31 21 c45 30 68 80 63 138 -5 57 -29 94 -83 124
       -37 22 -50 23 -266 23 l-228 0 0 -330z m360 180 c24 -24 26 -57 3 -82 -13 -14
       -31 -18 -85 -18 l-68 0 0 60 0 60 65 0 c52 0 69 -4 85 -20z m4 -240 c36 -13
       50 -45 36 -80 -15 -35 -27 -40 -117 -47 l-73 -6 0 72 0 71 64 0 c36 0 76 -4
       90 -10z"/>
       <path d="M6075 1039 c-66 -177 -121 -325 -123 -330 -2 -5 44 -9 101 -9 l106 0
       16 55 16 56 116 -3 116 -3 17 -50 17 -50 106 -3 107 -3 -26 70 c-14 39 -70
       186 -123 328 l-97 258 -114 3 -115 2 -120 -321z m270 28 l32 -102 -65 -3 c-35
       -2 -66 -1 -69 1 -2 3 10 53 28 111 18 58 35 103 38 100 3 -3 19 -51 36 -107z"/>
       </g>
       </svg>
    );
  };
  
  const ListHeader = ({ children }) => {
    return (
      <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
        {children}
      </Text>
    );
  };
  
  export default function Footer(props) {
    const shadow=useColorModeValue('dark-lg','dark-lg');

    return (
      <Box
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}
        pos='static'
        width='100%'
        bottom='0'
        boxShadow={shadow}
        {...props}
        >
        <Container as={Stack} maxW={'6xl'} py={10}>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
            <Stack align={'flex-start'} display={{md : "flex", base : "none"}}>
              <ListHeader>ESPACE</ListHeader>
              <Link href={'#'}>Étudiants</Link>
              <Link href={'#'}>Étudiants étranger</Link>
              <Link href={'#'}>Presse</Link>
              <Link href={'#'}>Recrutements</Link>
              <Link href={'#'}>Application mobile</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>SUPPORT</ListHeader>
              <Link href={'#'}>NOUS CONTACTER</Link>
              <Link href={'#'}>FAQ</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>LÉGAL</ListHeader>
              <Link href={'#'}>MENTIONS LÉGALES</Link>
              <Link href={'#'}>POLITIQUE DE PROTECTION DES DONNÉES</Link>
              <Link href={'#'}>COOKIES</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>SUIVEZ-NOUS</ListHeader>
              {/* <Link href={'#'}>Facebook</Link>
              <Link href={'#'}>Instagram</Link>
              <Link href={'#'}>LinkedIn</Link> */}
              <HStack spacing='15px' >
                <Link>
                    <Icon as={BsFacebook}  boxSize={8}/>
                </Link>
                <Link>
                    <Icon as={BsInstagram}  boxSize={8}/>
                </Link>
                <Link>
                    <Icon as={BsLinkedin}  boxSize={8}/>
                </Link>
              </HStack>
            </Stack>
          </SimpleGrid>
        </Container>
        <Box py={4}
        onMouseEnter={() => {
          console.log(document.getElementById('zaki').style.display)
          document.getElementById('zaki').style.display='flex';
        }}
        >
          <Flex
          
            align={'center'}
            _before={{
              content: '""',
              flexGrow: 1,
              mr: 8,
            }}
            _after={{
              content: '""',
              flexGrow: 1,
              ml: 8,
            }}>
            <Logo height='70px'/>
          </Flex>
          <Text id='zaki'  fontSize={'xs'} textAlign={'center'} color='#A0AEC0' display='none' pos='absolute' bottom={0} left='50%' transform='translateX(-50%)' >
            Made with 🤍 by 

            ZakiCh4n 

            using
            Chakra UI
          </Text>
        </Box>
      </Box>
    );
  }
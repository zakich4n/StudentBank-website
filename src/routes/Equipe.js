import { Box } from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { SiLinkedin } from 'react-icons/si';
import { Grid } from "@chakra-ui/react"
import { extendTheme } from '@chakra-ui/react'
import { Heading, Avatar, Flex, Text, Stack, Button, useColorModeValue,} from '@chakra-ui/react';

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
            bgImage = "url('BG_waves_equipe.png')" 
            bgPosition="center" 
            bgRepeat="no-repeat"
            bgSize='cover'>

            <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>  
            <Grid templateColumns="repeat(5, 1fr)" p={50} gap={0}>
                <Box p={8}
                    maxW={'200px'}
                    w={'full'}
                    bg={useColorModeValue('#11ffee00')}
                    rounded={'md'}
                    overflow={'hidden'}>
                    
                    <Image
                    h={'100px'}
                    w={'full'}
                    src={
                        'https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
                    }
                    objectFit={'cover'}
                    />
                    <br></br>
                    <Stack spacing={0} align={'center'} mb={5}>
                        <Heading color={'white'} fontSize={'xl'} fontWeight={500} fontFamily={'body'}>
                        John Doe
                        </Heading>
                        <Text color={'white'} fontSize={'12'}>Frontend Developer</Text>
                    </Stack>

                    <Stack direction={'row'} justify={'center'} spacing={6}>
                        <Stack align={'center'}>
                            <Button
                                w={'30'}
                                mt={2}
                                bg={useColorModeValue('#11ffee00', 'white.900')}
                                colorScheme={'white'}
                                rounded={'md'}
                                leftIcon={<SiLinkedin></SiLinkedin>}
                                _hover={{
                                transform: 'translateY(-2px)',
                                boxShadow: 'lg',
                                }}>
                            </Button>
                        </Stack>
                    </Stack>
                </Box>             
                <Box p={8}
                    maxW={'200px'}
                    w={'full'}
                    bg={useColorModeValue('#11ffee00')}
                    rounded={'md'}
                    overflow={'hidden'}>
                    <Image
                    h={'100px'}
                    w={'full'}
                    src={
                        'https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
                    }
                    objectFit={'cover'}
                    />
                    <br></br>
                    <Stack spacing={0} align={'center'} mb={5}>
                        <Heading color={'white'} fontSize={'xl'} fontWeight={500} fontFamily={'body'}>
                        John Doe
                        </Heading>
                        <Text color={'white'} fontSize={'12'}>Frontend Developer</Text>
                    </Stack>

                    <Stack direction={'row'} justify={'center'} spacing={6}>
                        <Stack align={'center'}>
                            <Button
                                w={'30'}
                                mt={2}
                                bg={useColorModeValue('#11ffee00', 'white.900')}
                                colorScheme={'white'}
                                rounded={'md'}
                                leftIcon={<SiLinkedin></SiLinkedin>}
                                _hover={{
                                transform: 'translateY(-2px)',
                                boxShadow: 'lg',
                                }}>
                            </Button>
                        </Stack>
                    </Stack>
                </Box>             
                <Box p={8}
                    maxW={'200px'}
                    w={'full'}
                    bg={useColorModeValue('#11ffee00')}
                    rounded={'md'}
                    overflow={'hidden'}>
                    
                    <Image
                    h={'100px'}
                    w={'full'}
                    src={
                        'https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
                    }
                    objectFit={'cover'}
                    />
                    <br></br>
                    <Stack spacing={0} align={'center'} mb={5}>
                        <Heading color={'white'} fontSize={'xl'} fontWeight={500} fontFamily={'body'}>
                        John Doe
                        </Heading>
                        <Text color={'white'} fontSize={'12'}>Frontend Developer</Text>
                    </Stack>

                    <Stack direction={'row'} justify={'center'} spacing={6}>
                        <Stack align={'center'}>
                            <Button
                                w={'30'}
                                mt={2}
                                bg={useColorModeValue('#11ffee00', 'white.900')}
                                colorScheme={'white'}
                                rounded={'md'}
                                leftIcon={<SiLinkedin></SiLinkedin>}
                                _hover={{
                                transform: 'translateY(-2px)',
                                boxShadow: 'lg',
                                }}>
                            </Button>
                        </Stack>
                    </Stack>
                </Box>             
                <Box p={8}
                    maxW={'200px'}
                    w={'full'}
                    bg={useColorModeValue('#11ffee00')}
                    rounded={'md'}
                    overflow={'hidden'}>
                    
                    <Image
                    h={'100px'}
                    w={'full'}
                    src={
                        'https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
                    }
                    objectFit={'cover'}
                    />
                    <br></br>
                    <Stack spacing={0} align={'center'} mb={5}>
                        <Heading color={'white'} fontSize={'xl'} fontWeight={500} fontFamily={'body'}>
                        John Doe
                        </Heading>
                        <Text color={'white'} fontSize={'12'}>Frontend Developer</Text>
                    </Stack>

                    <Stack direction={'row'} justify={'center'} spacing={6}>
                        <Stack align={'center'}>
                            <Button
                                w={'30'}
                                mt={2}
                                bg={useColorModeValue('#11ffee00', 'white.900')}
                                colorScheme={'white'}
                                rounded={'md'}
                                leftIcon={<SiLinkedin></SiLinkedin>}
                                _hover={{
                                transform: 'translateY(-2px)',
                                boxShadow: 'lg',
                                }}>
                            </Button>
                        </Stack>
                    </Stack>
                </Box>             
                <Box p={8}
                    maxW={'200px'}
                    w={'full'}
                    bg={useColorModeValue('#11ffee00')}
                    rounded={'md'}
                    overflow={'hidden'}>
                    
                    <Image
                    h={'100px'}
                    w={'full'}
                    src={
                        'https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
                    }
                    objectFit={'cover'} />
                    <br></br>
                    <Stack spacing={0} align={'center'} mb={5}>
                        <Heading color={'white'} fontSize={'xl'} fontWeight={500} fontFamily={'body'}>
                        John Doe
                        </Heading>
                        <Text color={'white'} fontSize={'12'}>Frontend Developer</Text>
                    </Stack>

                    <Stack direction={'row'} justify={'center'} spacing={6}>
                        <Stack align={'center'}>
                            <Button
                                w={'30'}
                                mt={2}
                                bg={useColorModeValue('#11ffee00', 'white.900')}
                                colorScheme={'white'}
                                rounded={'md'}
                                leftIcon={<SiLinkedin></SiLinkedin>}
                                _hover={{
                                transform: 'translateY(-2px)',
                                boxShadow: 'lg',
                                }}>
                            </Button>
                        </Stack>
                    </Stack>
                </Box>             
            </Grid>
        </Box>
    </div>
  )
}



  
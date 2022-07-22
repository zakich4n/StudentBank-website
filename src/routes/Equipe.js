import { Box, SimpleGrid , Image, Link , Heading, Avatar, Flex, Text, Stack, Button, useColorModeValue} from '@chakra-ui/react';
import { SiLinkedin } from 'react-icons/si';
import {useEffect } from 'react';

export default function Equipe(){
    useEffect(() => {
        window.scrollTo(0,0);
    });

  return (
    <div>
        <Box display='flex'
            alignItems='center'
            justifyContent='center'
            maxW ='100%'
            maxH ='300px'
            bgImage = {useColorModeValue("url('BG_equipe_light.png')" ,"url('BG_equipe_dark.png')")}
            bgPosition="center" 
            bgRepeat="no-repeat"
            bgSize='cover' pt={'5vh'}>
            <SimpleGrid templateColumns="repeat(1, 1fr)"  templateRows="repeat(5, 1fr)" pt='150vh'>
                <Box p={4}
                    maxW={'600px'}
                    w={'full'}
                    rounded={'md'}>  
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
                        <Heading color={useColorModeValue('black', 'white')}fontSize={'xl'} fontWeight={500} fontFamily={'body'}>
                        John Doe
                        </Heading>
                        <Text color={useColorModeValue('black', 'white')} fontSize={'12'}>Frontend Developer</Text>
                    </Stack>

                    <Stack direction={'row'} justify={'center'} spacing={6}>
                        <Stack align={'center'}>
                           <Button
                                variant='ghost'
                                w={'30'}
                                mt={2}
                                rounded={'md'}
                                leftIcon={<SiLinkedin/>}
                                _hover={{
                                transform: 'translateY(-2px)',
                                boxShadow: 'lg',
                                }}>
                            </Button>
                        </Stack>
                    </Stack>
                </Box>             
                <Box p={4}
                    maxW={'200px'}
                    w={'full'}
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
                        <Heading color={useColorModeValue('black', 'white')}fontSize={'xl'} fontWeight={500} fontFamily={'body'}>
                        John Doe
                        </Heading>
                        <Text color={useColorModeValue('black', 'white')} fontSize={'12'}>Frontend Developer</Text>
                    </Stack>

                    <Stack direction={'row'} justify={'center'} spacing={6}>
                        <Stack align={'center'}>
                            <Button
                                variant='ghost'
                                w={'30'}
                                mt={2}
                                rounded={'md'}
                                leftIcon={<SiLinkedin/>}
                                _hover={{
                                transform: 'translateY(-2px)',
                                boxShadow: 'lg',
                                }}>
                            </Button>
                        </Stack>
                    </Stack>
                </Box>             
                <Box p={4}
                    maxW={'200px'}
                    w={'full'}
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
                        <Heading color={useColorModeValue('black', 'white')}fontSize={'xl'} fontWeight={500} fontFamily={'body'}>
                        John Doe
                        </Heading>
                        <Text color={useColorModeValue('black', 'white')} fontSize={'12'}>Frontend Developer</Text>
                    </Stack>

                    <Stack direction={'row'} justify={'center'} spacing={6}>
                        <Stack align={'center'}>
                            <Button
                                variant='ghost'
                                w={'30'}
                                mt={2}
                                rounded={'md'}
                                leftIcon={<SiLinkedin/>}
                                _hover={{
                                transform: 'translateY(-2px)',
                                boxShadow: 'lg',
                                }}>
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
                 <Box p={4}
                    maxW={'200px'}
                    w={'full'}
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
                        <Heading color={useColorModeValue('black', 'white')}fontSize={'xl'} fontWeight={500} fontFamily={'body'}>
                        John Doe
                        </Heading>
                        <Text color={useColorModeValue('black', 'white')} fontSize={'12'}>Frontend Developer</Text>
                    </Stack>

                    <Stack direction={'row'} justify={'center'} spacing={6}>
                        <Stack align={'center'}>
                            <Button
                                variant='ghost'
                                w={'30'}
                                mt={2}
                                rounded={'md'}
                                leftIcon={<SiLinkedin/>}
                                _hover={{
                                transform: 'translateY(-2px)',
                                boxShadow: 'lg',
                                }}>
                            </Button>
                        </Stack>
                    </Stack>
                </Box>             
                 <Box p={4}
                    maxW={'200px'}
                    w={'full'}
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
                        <Heading color={useColorModeValue('black', 'white')}fontSize={'xl'} fontWeight={500} fontFamily={'body'}>
                        John Doe
                        </Heading>
                        <Text color={useColorModeValue('black', 'white')} fontSize={'12'}>Frontend Developer</Text>
                    </Stack>

                    <Stack direction={'row'} justify={'center'} spacing={6}>
                        <Stack align={'center'}>
                            <Button
                                variant='ghost'
                                w={'30'}
                                mt={2}
                                rounded={'md'}
                                leftIcon={<SiLinkedin/>}
                                _hover={{
                                transform: 'translateY(-2px)',
                                boxShadow: 'lg',
                                }}>
                            </Button>
                        </Stack>
                    </Stack>
                </Box>          
            </SimpleGrid>
        </Box>
    </div>
  )
}



  

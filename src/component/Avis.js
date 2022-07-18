import {
    Avatar,
    Box,
    chakra,
    Container,
    Flex,
    Icon,
    SimpleGrid,
    useColorModeValue,
  } from '@chakra-ui/react';
  

export default function Avis(name,place,content,photo_url) {
    return (
        <Flex
      border='1px'
      borderColor='gray.800'
      direction={{ base: 'column-reverse', md: 'row' }}
      width={'full'}
      p={10}
      justifyContent={'space-between'}
      position={'relative'}
      bg={useColorModeValue('white', 'gray.800')}>
      <Flex
        direction={'column'}
        textAlign={'left'}
        justifyContent={'space-between'}>
        <chakra.p
          fontFamily={'Inter'}
          fontWeight={'medium'}
          fontSize={'15px'}
          pb={4}>
          {content}
        </chakra.p>
        <chakra.p fontFamily={'Work Sans'} fontWeight={'bold'} fontSize={14}>
          {name}
          <chakra.span
            fontFamily={'Inter'}
            fontWeight={'medium'}
            color={'gray.500'}>
            {' '}
            - {place}
          </chakra.span>
        </chakra.p>
      </Flex>
      <Avatar
        src={photo_url}
        height={'80px'}
        width={'80px'}
        alignSelf={'center'}
        m={{ base: '0 0 35px 0', md: '0 0 0 50px' }}
      />
    </Flex>
    )
}
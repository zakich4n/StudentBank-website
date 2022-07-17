import { 
    SimpleGrid, 
    VStack,
    Heading,
    Avatar,
    Box,
    Center,
    Text,
    Stack,
    Button,
    Link,
    Badge,
    useColorModeValue, 
} from "@chakra-ui/react";
import {
    BsLinkedin
} from 'react-icons/bs'

export default function Card(name, username, photo_url, description, tag=[]) {
    const colorMode = useColorModeValue({
        bgTag : "gray.50",
        descriptionColor : "gray.700"
    }, {
        bgTag : 'gray.800',
        descriptionColor : "gray.400"
    })
    const bgTag= useColorModeValue('gray.50', 'gray.800')
    return (
      <Center py={6}>
        <Box
          maxW={'320px'}
          w={'full'}
          /* bg={useColorModeValue('white', 'gray.900')} */
          /* bg='white' */
          /* boxShadow={'2xl'} */
          rounded={'lg'}
          p={6}
          textAlign={'center'}>
          <Avatar
            size={'xl'}
            src={photo_url}
            alt={'Avatar Alt'}
            mb={4}
            pos={'relative'}

          />
          <Heading fontSize={'2xl'} fontFamily={'body'}>
            {name}
          </Heading>
          <Text fontWeight={600} color={'gray.500'} mb={4}>
            {username}
          </Text>
          <Text
            textAlign={'center'}
            /* color={useColorModeValue('gray.700', 'gray.400')} */
            color={colorMode.descriptionColor}
            px={3}>
            {description}
          </Text>
  
          <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
            {tag.map((item, index) => (
                <Badge
                key={index}
                px={2}
                py={1}
                bg={colorMode.bgTag}
                fontWeight={'400'}>
                    #{item}
                </Badge>
            ))}
          </Stack>
  
          <Stack mt={4} direction={'row'} spacing={4}>
            <Button
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              boxShadow={
                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
              }
              _hover={{
                bg: 'blue.500',
              }}
              _focus={{
                bg: 'blue.500',
              }}
              leftIcon={<BsLinkedin/>}
              >
              LinkedIn
            </Button>
          </Stack>
        </Box>
      </Center>
    );
  
}
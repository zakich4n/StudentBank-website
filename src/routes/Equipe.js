import { Box, VStack, SimpleGrid } from '@chakra-ui/react'


import Card from '../component/UserCard'

export default function Equipe(){
  return (
    <div>
        <Box 
            width='100%'
            bgImage = "url('BG_equipe_light.png')" 
            bgPosition="center" 
            bgRepeat="no-repeat"
            bgSize='cover'>

              <VStack >

                <SimpleGrid columns={{sm: 1, md: 2, lg: 4}} spacing={10} >
                    {Card('Zaki GOUIZI','@zackch4n',
                    'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
                    "Une bonne description de merde",
                    ["front","back","tout"])}

                    {Card('Zaki GOUIZI','@zackch4n',
                    'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
                    "Une bonne description de merde",
                    ["front","back","tout"])}  
                    
                    {Card('Zaki GOUIZI','@zackch4n',
                    'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
                    "Une bonne description de merde",
                    ["front","back","tout"])}

                    {Card('Zaki GOUIZI','@zackch4n',
                    'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
                    "Une bonne description de merde",
                    ["front","back","tout"])}

                    {Card('Zaki GOUIZI','@zackch4n',
                    'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
                    "Une bonne description de merde",
                    ["front","back","tout"])}     
                </SimpleGrid>
            </VStack>
        </Box>
    </div>
  )
}



  

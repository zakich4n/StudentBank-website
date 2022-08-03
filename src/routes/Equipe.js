import { Box, VStack, SimpleGrid, Center, Image } from '@chakra-ui/react'


import Card from '../component/UserCard'

const Users=[
    {
        name : "Zaki GOUIZI",
        username : "@zakich4n",
        photo_url : "",
        description : "Étudiant en ingé qui trace sa route",
        tags : [
            "Fullstack",
            "API"
        ]
    },
    {
        name : "Jules LE BG",
        username : "@xXx_D4RK-_-S4SUKE_xXx",
        photo_url : "https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
        description : "Point fort : j'ai une Golf",
        tags : [
            "Maquette",
            "Figma",
            "photoshop"
        ]
    },    
    {
        name : "Prenon NOM",
        username : "@username",
        photo_url : "",
        description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        tags : [
            "Premier",
            "Second",
            "teleta"
        ]
    },
    {
        name : "Prenon NOM",
        username : "@username",
        photo_url : "",
        description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        tags : [
            "Premier",
            "Second",
            "teleta"
        ]
    },    
]

export default function Equipe(){
  return (
    <div>
        <Box //BG_mission_light.png
            width='100%'
            bgImage = "url('BG_mission_light.png')" 
            bgPosition="bottom" 
            bgRepeat="no-repeat"
            bgSize='contain'
        >

              <VStack >

                <Center w="100vw" h='15wv' display={{md : 'inherit', base : "none"}}>
                    <Image src='logo SB.png' />
                </Center>

                <SimpleGrid columns={{sm: 1, md: 2, lg: 4}} spacing={10} align='center'>
                    {Users.map((user, index) => {
                        return (
                            Card(
                                user.name,
                                user.username,
                                user.photo_url,
                                user.description,
                                user.tags, 
                                {key : index}
                                )
                        )
                    })}    
                </SimpleGrid>
            </VStack>
        </Box>
    </div>
  )
}



  

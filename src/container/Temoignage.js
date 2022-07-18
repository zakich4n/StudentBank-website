import { Box, SimpleGrid } from '@chakra-ui/react'
import Avis from '../component/Avis'

export default function Temoignage() {
{/*             {Avis(
            "Zaki G.", 
            "HEI Lille", 
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ" )
            } */}

    return (
        <Box w="100vw">
            <SimpleGrid columns={{sm: 1, md : 2, base: 2}}>
            {Avis(
            "Zaki G.", 
            "HEI Lille", 
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ" )
            }
            {Avis(
            "Zaki G.", 
            "HEI Lille", 
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ" )
            }
            </SimpleGrid>
        </Box>
    )
}
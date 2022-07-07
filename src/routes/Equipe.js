import {
    Grid,
    GridItem
} from "@chakra-ui/react";

export default function Equipe() {
    return (
        <div>
            <Grid
            h='200px'
            templateRows='repeat(2, 1fr)'
            templateColumns='repeat(3, 1fr)'
            gap={4}
            p={20}
            >
                
                <GridItem colSpan={3} bg='tomato' />
                <GridItem colSpan={1} rowSpan={2} bg='papayawhip' h='400px' />
                <GridItem rowSpan={2} colSpan={2} bg='tomato' h='400px'  />
            </Grid>
        </div>
    )
}
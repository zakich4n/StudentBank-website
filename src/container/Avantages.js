import {useEffect, useState} from 'react';
import { Button, Center, Heading, VStack, Grid, GridItem, Box, Text, Image, useColorModeValue} from "@chakra-ui/react";
import ButtonSB from '../component/ButtonSB'

const container =        {  /* inversed=false, MainHeader, SmallHeader, Paragraph1, Paragraph2="", ButtonText, Image_url */
MainHeader : "Vos avantages",
SmallHeader : "Réductions",
Paragraph1 : "Profitez des cashbacks ; des réductions ; des codes promos dans des enseignes (Nike, Amazon, Air campus) partenaires. ",
Paragraph2 : "Parrainez vos amis et gagnez de nombreux avantages. Remboursez et payez gratuitement vos amis par un virement instantané entre compte Studentbank. Réglez en groupe avec vos amis lors de vos sorties et événements.",
ButtonText : "Voir mes avantages", 
Image_url :"Stonks.png"
}


export default function Avantages(props) {


    return (
        <Box >
            <Desktop display={{md : 'grid', base : "none"}}/>    
            <Mobile display={{base : 'inherit', md : 'none'}} />      
        </Box>
    );
}

function Desktop(props) {
    return (
        <Grid
        w='100%'
        templateRows='repeat(2, 1fr)'
        templateColumns='repeat(2, 1fr)'
        gridTemplateRows={'100px 1fr'}
        gridTemplateColumns={'1fr 40vw'}
        gap={4}
        {...props}
        >
            <GridItem colSpan={2}  >
                <Center h='100%' pos='relative' >
                    <Heading as='h2' size='2xl' pos='absolute' bottom={-8}>{container.MainHeader}</Heading>
                </Center>
            </GridItem>
            <GridItem rowSpan={1} colSpan={1}  >
                <Box  overflow='hidden' w='100%' >
                    <Image src={container.Image_url} />
                </Box>
            </GridItem>
            <GridItem colSpan={1} rowSpan={1}  pos='relative' >
                <VStack 
                textAlign='start' 
                pos='absolute' 
                top='50%' 
                transform='translateY(-50%)'
                left='-20%'
                right='20%'
                >
                        <Heading size='xl' pb={5} w="100%">
                            {container.SmallHeader}
                        </Heading>
                        <Text fontSize='xl' pb={4}>
                            {container.Paragraph1}
                        </Text>
                        <Text fontSize='xl'>
                            {container.Paragraph2}
                        </Text>
                        <Center pt={10}>
                            {ButtonSB(container.ButtonText, "/application")}
                        </Center>
                    </VStack>
            </GridItem>
        </Grid>
    )
}

function Mobile(props) {
    return (
        <Box {...props}
        pos='relative'
        h='55vh' 
        bgGradient={'linear(to-r, rgba(251, 203, 194, 0.7), rgba(251, 203, 194, 0.7))'}
        >
            <Image 
            src={container.Image_url} 
            pos='absolute' 
            opacity={'0.2'} 
            objectFit='cover' 
            w='150%' 
            h='80%'
            bottom={0}
            overflow='hidden' 
            maxWidth='200%' 
            left='50%' 
            transform={'translateX(-50%)'} 
            />
            <Grid
            h='100%'
            minH={"350px"}
            w="100vw" 
            py={3}
            
            >
                <GridItem>
                    <Heading 
                    as="h1"
                    size='2xl' 
                    lineHeight={'1.4'}
                    px={6}
                    >{container.MainHeader}</Heading>                
                </GridItem>
                <GridItem>
                    <Image 
                    src="AvantagesListMobil.png" 
                    
                    />
                </GridItem>
                <GridItem>
                    <Text fontSize='3.8vw' my={'2vw'} px={6}>
                        {container.Paragraph1}
                        <br/>
                        {container.Paragraph2}
                    </Text>                    
                </GridItem>

            </Grid>
        </Box>

    )
}
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
                <Center h='100%'  >
                    <Heading as='h2' fontSize='4vw' >{container.MainHeader}</Heading>
                </Center>
            </GridItem>
            <GridItem rowSpan={1} colSpan={1} w='100%' h="100%" pos='relative'  >
                <Box  overflow='visible'  h='45vw'>
                    <Image src={container.Image_url} 
                    maxW="300%"
                    width='70vw' height='auto'
                    pos='absolute'
                    bottom='0'
                    />
                </Box>
            </GridItem>
            <GridItem colSpan={1} rowSpan={1}  pos='relative' maxH='25vw'>
                <VStack 
                textAlign='start' 
                h="100%"
                pos='absolute' 
                top='50%' 
                transform='translateY(-50%)'
                left='-15%'
                right='15%'
                >
                        <Heading fontSize='3vw' pb={'1vw'} w="100%">
                            {container.SmallHeader}
                        </Heading>
                        <Text fontSize='1.7vw' pb={4}>
                            {container.Paragraph1}
                        </Text>
                        <Text fontSize='1.7vw'>
                            {container.Paragraph2}
                        </Text>
                        <Center pt={"2vw"}>
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
        h='65vh' 
        minH={"330px"}
        bgGradient={'linear(to-r, rgba(251, 203, 194, 0.7), rgba(251, 203, 194, 0.7))'}
        >
            <Image 
            src={container.Image_url} 
            pos='absolute' 
            opacity={'0.3'} 
            objectFit='cover' 
            w='150%' 
            h='60%'
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
                    <Text fontSize='3.8vw' my={'2vw'} px={6} >
                        {container.Paragraph1}
                        <Text visibility={'hidden'}>Zak was here 🤫</Text>
                        {container.Paragraph2}
                    </Text>                    
                </GridItem>

            </Grid>
        </Box>

    )
}
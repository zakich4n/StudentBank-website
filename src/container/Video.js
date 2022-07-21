import React from 'react';
import { Box} from "@chakra-ui/react";


export default function Video(props) {

    return (
        <Box h='870px' w='100%' bg='white' {...props}> {/* Video de presentation */}
                        
        <iframe
            width='100%'
            height='100%'
            title='naruto'
            src='https://www.youtube.com/embed/QhBnZ6NPOY0'
            allowFullScreen
        />
                                    
     </Box>
    );
}
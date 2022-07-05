import React from 'react';
import { Outlet } from "react-router-dom";
import { ChakraProvider, Box } from '@chakra-ui/react'

import NavBar from "./component/NavBar"



function App() {
  /* const bgGrad=useColorModeValue('linear(to-r, #FBCBC2, #FCD9BC)','linear(to-l, #7928CA, #FF0080)'); */
  return (
    <ChakraProvider>  
      <Box
        /* bgGradient={bgGrad} */
      >
        <NavBar/> 
        <Outlet/>
      </Box>
    </ChakraProvider>
  );
}

export default App;

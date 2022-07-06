import React from 'react';
import { Outlet } from "react-router-dom";
import { ChakraProvider, Box } from '@chakra-ui/react'

import NavBar from "./component/NavBar"



function App() {
  return (
    <ChakraProvider>  
        <NavBar pos='absolute' /> 
        <Outlet/>
    </ChakraProvider>
  );
}

export default App;

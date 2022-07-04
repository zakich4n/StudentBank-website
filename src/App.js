import React from 'react';
import { Outlet } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'

import NavBar from "./component/NavBar"


function App() {
  return (
    <ChakraProvider>  
      <NavBar/> 
      <Outlet/> 
      <h1>OUI</h1>
    </ChakraProvider>
  );
}

export default App;

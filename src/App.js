import React from 'react';
import { Outlet } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import NavBar from "./component/NavBar"
import Footer from "./component/Footer"


import { extendTheme } from '@chakra-ui/react'

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

const theme = extendTheme({ colors })



function App() {
  return (
    <ChakraProvider>  
      <NavBar/> 
      <Outlet/> 
      <h1>OUI</h1>
      <Footer/>
    </ChakraProvider>
  );
}

export default App;

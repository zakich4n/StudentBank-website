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

const theme = extendTheme({   styles: {
  global: {
    body: {
      transitionProperty: "all",
      transitionDuration: "ultra-slow"
    }
  }
},
config: {
  disableTransitionOnChange: false
} })




function App() {
  return (
    <ChakraProvider theme={theme} >  
      <NavBar zIndex={5} /> 
      <Outlet  /> 
      <Footer/>
    </ChakraProvider>
  );
}

export default App;

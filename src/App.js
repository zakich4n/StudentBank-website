import React from 'react';
import { Outlet } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'

import NavBar from "./component/NavBar"
import Footer from "./component/Footer"




function App() {
  return (
    <ChakraProvider>  
      <NavBar/> 
      <Outlet/> 
      <Footer/>
    </ChakraProvider>
  );
}

export default App;

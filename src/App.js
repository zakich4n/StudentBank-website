import React from 'react';
import { Outlet } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'

import NavBar from "./component/NavBar"


function App() {
  return (
    <ChakraProvider>
      <h1>Hello</h1>
      <NavBar/>
      <Outlet/>
    </ChakraProvider>
  );
}

export default App;

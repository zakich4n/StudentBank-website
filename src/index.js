import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


import { ColorModeScript } from '@chakra-ui/react'


import Mission from "./routes/Mission";
import Equipe from "./routes/Equipe";
import Contact from "./routes/Contact";
import Accueil from './routes/Accueil';
import Application from './routes/Application';

import theme from './theme';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <Routes>
      <Route path="/" element={<App />} >
        <Route exact path="/" element={<Accueil />} />
        <Route exact path="application" element={<Application />} />
        <Route path="mission" element={<Mission />} />
        <Route path="equipe" element={<Equipe />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
</BrowserRouter>
);
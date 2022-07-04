import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Banque from "./routes/Banque";
import Logement from "./routes/Logement";
import Mobilite from "./routes/Mobilite";
import Mission from "./routes/Mission";
import Equipe from "./routes/Equipe";
import Contact from "./routes/Contact";

import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="banque" element={<Banque />} />
        <Route path="logement" element={<Logement />} />
        <Route path="mobilite" element={<Mobilite />} />
        <Route path="mission" element={<Mission />} />
        <Route path="equipe" element={<Equipe />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
</BrowserRouter>
);
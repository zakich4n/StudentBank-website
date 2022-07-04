import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Banque from "./routes/Banque";
import Logement from "./routes/Logement";
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="banque" element={<Banque />} />
        <Route path="logement" element={<Logement />} />
      </Route>
    </Routes>
</BrowserRouter>
);
import React from 'react';
import { Outlet, Link } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <nav>
        <Link to="/banque">Banuqe</Link>
        {"    "}
        <Link to="/logement">Logement</Link>
{/*         <Link to="/mobilite">Mobilité</Link>
        <Link to="/mission">Notre Mission</Link>
        <Link to="/equipe">L'équipe</Link>
        <Link to="/contacts">Contacts</Link> */}
      </nav>
      <Outlet/>
    </div>
  );
}

export default App;

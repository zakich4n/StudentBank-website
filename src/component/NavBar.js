import { Link } from "react-router-dom";

export default function NavBar() {
    return(
        <>
        <nav>
            <Link to="/banque">Banuqe</Link>
            <Link to="/logement">Logement</Link>
            <Link to="/mobilite">Mobilité</Link>
            <Link to="/mission">Notre Mission</Link>
            <Link to="/equipe">L'équipe</Link>
            <Link to="/contact">Contact</Link>
        </nav>
        </>
    )
}
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <header className="navbar">
            <Link to="/" className="navbar-logo">
                CİLENİN SOYU
            </Link>
        </header>
    );
}

export default Navbar;
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <header className="navbar">
            <Link to="/" className="navbar-logo">
                CİLE AĞACI
            </Link>
        </header>
    );
}

export default Navbar;
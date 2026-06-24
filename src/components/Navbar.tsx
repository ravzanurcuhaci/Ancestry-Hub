import { Link } from "react-router-dom";
import { useFamilyData } from "../context/FamilyDataContext";

function Navbar() {
    const { loading, error } = useFamilyData();

    return (
        <header className="navbar">
            <Link to="/" className="navbar-logo">
                CİLENİN SOYU
            </Link>
            <div className="navbar-status">
                <span className={`status-dot ${loading ? "loading" : error ? "error" : "live"}`}></span>
                <span className="status-text">
                    {loading ? "Güncelleniyor..." : error ? "Bağlantı Hatası" : "Canlı (Sheets)"}
                </span>
            </div>
        </header>
    );
}

export default Navbar;
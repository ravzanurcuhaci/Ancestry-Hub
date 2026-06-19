import { Link } from "react-router-dom";

function Hero() {
    return (
        <section className="hero">
            <div className="hero-content">
                <span className="hero-label">Sinop / Boyabat</span>

                <h1>Cile Soyu</h1>

                <p>
                    Çuhacı ailesinin kuşaklar boyunca aktarılan aile bağlarını,
                    köklerini ve soy ağacını bir araya getiren özel aile arşivi.
                </p>

                <div className="hero-buttons">
                    <Link to="/tree" className="primary-button">
                        Soy Ağacını Gör
                    </Link>
                </div>
            </div>


            <div className="hero-visual">
                <div className="hero-circle">
                    <img src="/fmm.jpeg" alt="Mehmet Çuhacı" />
                </div>
            </div>
        </section >
    );
}

export default Hero;
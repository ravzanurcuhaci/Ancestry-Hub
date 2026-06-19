import Hero from "../components/Hero";

function HomePage() {
    return (
        <main>
            <Hero />

            <section className="family-intro">
                <span>Çuhacı Ailesi</span>

                <h2>Sinop Boyabat’tan Gelen Bir Aile Hikayesi</h2>

                <p>
                    Bu sayfa, Cile lakabıyla bilinen Çuhacı ailesinin kuşaklar arası
                    bağlarını korumak ve aile bireylerini tek bir soy ağacı üzerinde
                    göstermek için hazırlanmıştır.
                </p>
            </section>
        </main>
    );
}
export default HomePage;
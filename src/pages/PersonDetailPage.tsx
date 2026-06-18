import { Link, useParams } from "react-router-dom";
import { people } from "../data/people";

function PersonDetailPage() {
    const { id } = useParams();

    const person = people.find((person) => person.id === id);

    if (!person) {
        return (
            <main className="person-detail-page">
                <section className="not-found">
                    <h1>Kişi bulunamadı</h1>
                    <p>Aradığınız kişi kayıtlarda yer almıyor.</p>

                    <Link to="/" className="back-button">
                        Ana sayfaya dön
                    </Link>
                </section>
            </main>
        );
    }

    return (
        <main className="person-detail-page">
            <section className="person-hero">
                <div className="person-photo">
                    {person.image ? (
                        <img src={person.image} alt={person.name} />
                    ) : (
                        <span>{person.name.charAt(0)}</span>
                    )}
                </div>

                <div className="person-info">
                    <span className="person-role">{person.role}</span>

                    <h1>{person.name}</h1>

                    <p className="person-bio">
                        {person.biography}
                    </p>

                    <div className="person-meta">
                        <div>
                            <strong>Doğum</strong>
                            <span>{person.birthYear}</span>
                        </div>

                        <div>
                            <strong>Vefat</strong>
                            <span>{person.deathYear ?? "-"}</span>
                        </div>

                        <div>
                            <strong>Konum</strong>
                            <span>{person.location ?? "-"}</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="person-content">
                <div className="timeline-area">
                    <h2>Yaşam Çizelgesi</h2>

                    <div className="timeline">
                        {person.timeline?.map((item) => (
                            <article key={`${person.id}-${item.year}-${item.title}`} className="timeline-card">
                                <span>{item.year}</span>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </article>
                        ))}
                    </div>
                </div>

                <aside className="family-box">
                    <h2>Aile Bağlantıları</h2>

                    <p>
                        Bu alana ileride anne, baba, eş, çocuk ve kardeş bilgileri eklenecek.
                    </p>

                    <Link to="/tree" className="tree-button">
                        Soy ağacında gör
                    </Link>
                </aside>
            </section>
        </main>
    );
}

export default PersonDetailPage;
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { people } from "../data/people";
import RelationGroup from "../components/RelationGroup";

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

    const parents = people.filter((p) =>
        person.parentIds?.includes(p.id)
    );

    const spouses = people.filter((p) =>
        person.spouseIds?.includes(p.id)
    );

    const children = person.childIds
        ? people.filter((p) => person.childIds?.includes(p.id))
        : people.filter((p) => p.parentIds?.includes(person.id));

    const siblings = people.filter((p) => {
        if (p.id === person.id) return false;
        if (!person.parentIds) return false;

        return p.parentIds?.some((parentId) =>
            person.parentIds?.includes(parentId)
        );
    });



    return (
        <main className="person-detail-page">
            <section className="person-hero">
                <motion.div
                    className="person-photo"
                    initial={{ scale: 0.96, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.28 }}
                >
                    {person.image ? (
                        <img src={person.image} alt={person.name} />
                    ) : (
                        <span>{person.name.charAt(0)}</span>
                    )}
                </motion.div>

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
                            <article
                                key={`${person.id}-${item.year}-${item.title}`}
                                className="timeline-card"
                            >
                                <span className="timeline-meta">
                                    {item.year} • {item.type}
                                </span>

                                <h3 className="timeline-title">
                                    {item.title}
                                </h3>

                                <p className="timeline-description">
                                    {item.description}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>

                <aside className="family-box">
                    <h2>Aile Bağlantıları</h2>

                    <RelationGroup title="Ebeveynler" people={parents} />
                    <RelationGroup title="Eş" people={spouses} />
                    <RelationGroup title="Çocuklar" people={children} />
                    <RelationGroup title="Kardeşler" people={siblings} />

                    <Link to={`/tree?focus=${person.id}`} className="tree-button">
                        Soy ağacında gör
                    </Link>
                </aside>
            </section>
        </main>
    );
}

export default PersonDetailPage;
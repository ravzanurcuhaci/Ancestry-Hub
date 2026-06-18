import { Link } from "react-router-dom";
import type { Person } from "../types/person";

type AncestorCardProps = {
    person: Person;
};

function AncestorCard({ person }: AncestorCardProps) {
    return (
        <article className="ancestor-card">
            <div className="ancestor-avatar">
                {person.image ? (
                    <img src={person.image} alt={person.name} />
                ) : (
                    <span>{person.name.charAt(0)}</span>
                )}
            </div>

            <h3>{person.name}</h3>

            <p className="ancestor-years">
                {person.birthYear}
                {person.deathYear ? ` - ${person.deathYear}` : ""}
            </p>

            <p className="ancestor-role">{person.role}</p>

            {person.location && (
                <p className="ancestor-location">{person.location}</p>
            )}

            <Link to={`/person/${person.id}`} className="ancestor-button">
                Detayları Gör
            </Link>
        </article>
    );
}

export default AncestorCard;
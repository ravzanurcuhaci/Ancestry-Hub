import type { Person } from "../types/person";
import AncestorCard from "./AncestorCard";

type AncestorsSectionProps = {
    title: string;
    description?: string;
    people: Person[];
};

function AncestorsSection({ title, description, people }: AncestorsSectionProps) {
    return (
        <section className="ancestors-section" id="ancestors">
            <div className="section-header">
                <h2>{title}</h2>

                {description && <p>{description}</p>}
            </div>

            <div className="ancestor-grid">
                {people.map((person) => (
                    <AncestorCard key={person.id} person={person} />
                ))}
            </div>
        </section>
    );
}

export default AncestorsSection;
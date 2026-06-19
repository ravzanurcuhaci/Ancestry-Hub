import { Link } from "react-router-dom";
import type { Person } from "../types/person";

type RelationGroupProps = {
    title: string;
    people: Person[];
};

function RelationGroup({ title, people }: RelationGroupProps) {
    if (people.length === 0) return null;

    return (
        <div className="relation-group">
            <h3>{title}</h3>

            <div className="relation-list">
                {people.map((relative) => (
                    <Link
                        key={relative.id}
                        to={`/person/${relative.id}`}
                        className="relation-item"
                    >
                        <span className="relation-avatar">
                            {relative.image ? (
                                <img src={relative.image} alt={relative.name} />
                            ) : (
                                relative.name.charAt(0)
                            )}
                        </span>

                        <div>
                            <strong>{relative.name}</strong>

                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default RelationGroup;
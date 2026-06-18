import { Link } from "react-router-dom";
import type { Person } from "../types/person";

type FamilyTreeNodeProps = {
    person: Person;
};

function FamilyTreeNode({ person }: FamilyTreeNodeProps) {
    return (
        <Link to={`/person/${person.id}`} className="family-tree-node">
            <div className="tree-avatar">
                {person.image ? (
                    <img src={person.image} alt={person.name} />
                ) : (
                    <span>{person.name.charAt(0)}</span>
                )}
            </div>

            <h3>{person.name}</h3>

            <p>
                {person.birthYear}
                {person.deathYear ? ` - ${person.deathYear}` : ""}
            </p>

            <small>{person.role}</small>
        </Link>
    );
}

export default FamilyTreeNode;
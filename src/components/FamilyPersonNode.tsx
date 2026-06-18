import { Link } from "react-router-dom";
import {
    Handle,
    Position,
    type Node,
    type NodeProps,
} from "@xyflow/react";

import type { Person } from "../types/person";

type FamilyPersonNodeData = {
    person: Person;
};

export type FamilyPersonNodeType = Node<
    FamilyPersonNodeData,
    "familyPerson"
>;

function FamilyPersonNode({ data }: NodeProps<FamilyPersonNodeType>) {
    const person = data.person;

    return (
        <>
            <Handle
                type="target"
                position={Position.Top}
                id="top"
                className="family-handle"
            />

            <Handle
                type="source"
                position={Position.Bottom}
                id="bottom"
                className="family-handle"
            />

            <Handle
                type="target"
                position={Position.Left}
                id="left"
                className="family-handle"
            />

            <Handle
                type="source"
                position={Position.Right}
                id="right"
                className="family-handle"
            />

            <Link to={`/person/${person.id}`} className="flow-person-node">
                <div className="flow-person-avatar">
                    {person.image ? (
                        <img src={person.image} alt={person.name} />
                    ) : (
                        <span>{person.name.charAt(0)}</span>
                    )}
                </div>

                <h3>{person.name}</h3>

                {person.nickname && <p className="flow-person-nickname">{person.nickname}</p>}

                <small>{person.role}</small>
            </Link>
        </>
    );
}

export default FamilyPersonNode;
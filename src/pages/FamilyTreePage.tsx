import {
    ReactFlow,
    Background,
    Controls,
    MiniMap,
    type Edge,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";

import { people } from "../data/people";
import FamilyPersonNode, {
    type FamilyPersonNodeType,
} from "../components/FamilyPersonNode";
import type { Person } from "../types/person";

const nodeTypes = {
    familyPerson: FamilyPersonNode,
};

function getPerson(id: string): Person {
    const person = people.find((person) => person.id === id);

    if (!person) {
        throw new Error(`${id} bulunamadı`);
    }

    return person;
}

function createPersonNode(
    id: string,
    x: number,
    y: number
): FamilyPersonNodeType {
    return {
        id,
        type: "familyPerson",
        position: { x, y },
        data: {
            person: getPerson(id),
        },
    };
}

const nodes: FamilyPersonNodeType[] = [
    createPersonNode("sukru-cuhaci", 250, 0),
    createPersonNode("melek-cuhaci", 550, 0),

    createPersonNode("mehmet-cuhaci-dede", 400, 220),
    createPersonNode("hava-turkmen", 700, 220),

    createPersonNode("kezban-cuhaci", 0, 460),
    createPersonNode("hasan-cuhaci", 280, 460),
    createPersonNode("birsen-yaman", 520, 460),
    createPersonNode("kevser-cuhaci", 760, 460),
    createPersonNode("huseyin-cuhaci", 1040, 460),
    createPersonNode("habibe-demir", 1280, 460),

    createPersonNode("burak-cuhaci", 160, 720),
    createPersonNode("beyza-cuhaci", 360, 720),
    createPersonNode("sena-cuhaci", 560, 720),

    createPersonNode("ravza-nur-cuhaci", 920, 720),
    createPersonNode("mehmet-cuhaci-cocuk", 1120, 720),
    createPersonNode("semanur-cuhaci", 1320, 720),
];

const edges: Edge[] = [
    {
        id: "sukru-melek",
        source: "sukru-cuhaci",
        sourceHandle: "right",
        target: "melek-cuhaci",
        targetHandle: "left",
        type: "straight",
    },
    {
        id: "sukru-mehmet",
        source: "sukru-cuhaci",
        sourceHandle: "bottom",
        target: "mehmet-cuhaci-dede",
        targetHandle: "top",
        type: "smoothstep",
    },
    {
        id: "melek-mehmet",
        source: "melek-cuhaci",
        sourceHandle: "bottom",
        target: "mehmet-cuhaci-dede",
        targetHandle: "top",
        type: "smoothstep",
    },

    {
        id: "mehmet-hava",
        source: "mehmet-cuhaci-dede",
        sourceHandle: "right",
        target: "hava-turkmen",
        targetHandle: "left",
        type: "straight",
    },

    {
        id: "mehmet-kezban",
        source: "mehmet-cuhaci-dede",
        sourceHandle: "bottom",
        target: "kezban-cuhaci",
        targetHandle: "top",
        type: "smoothstep",
    },
    {
        id: "hava-kezban",
        source: "hava-turkmen",
        sourceHandle: "bottom",
        target: "kezban-cuhaci",
        targetHandle: "top",
        type: "smoothstep",
    },
    {
        id: "mehmet-hasan",
        source: "mehmet-cuhaci-dede",
        sourceHandle: "bottom",
        target: "hasan-cuhaci",
        targetHandle: "top",
        type: "smoothstep",
    },
    {
        id: "hava-hasan",
        source: "hava-turkmen",
        sourceHandle: "bottom",
        target: "hasan-cuhaci",
        targetHandle: "top",
        type: "smoothstep",
    },
    {
        id: "mehmet-kevser",
        source: "mehmet-cuhaci-dede",
        sourceHandle: "bottom",
        target: "kevser-cuhaci",
        targetHandle: "top",
        type: "smoothstep",
    },
    {
        id: "hava-kevser",
        source: "hava-turkmen",
        sourceHandle: "bottom",
        target: "kevser-cuhaci",
        targetHandle: "top",
        type: "smoothstep",
    },
    {
        id: "mehmet-huseyin",
        source: "mehmet-cuhaci-dede",
        sourceHandle: "bottom",
        target: "huseyin-cuhaci",
        targetHandle: "top",
        type: "smoothstep",
    },
    {
        id: "hava-huseyin",
        source: "hava-turkmen",
        sourceHandle: "bottom",
        target: "huseyin-cuhaci",
        targetHandle: "top",
        type: "smoothstep",
    },

    {
        id: "hasan-birsen",
        source: "hasan-cuhaci",
        sourceHandle: "right",
        target: "birsen-yaman",
        targetHandle: "left",
        type: "straight",
    },
    {
        id: "hasan-burak",
        source: "hasan-cuhaci",
        sourceHandle: "bottom",
        target: "burak-cuhaci",
        targetHandle: "top",
        type: "smoothstep",
    },
    {
        id: "birsen-burak",
        source: "birsen-yaman",
        sourceHandle: "bottom",
        target: "burak-cuhaci",
        targetHandle: "top",
        type: "smoothstep",
    },
    {
        id: "hasan-beyza",
        source: "hasan-cuhaci",
        sourceHandle: "bottom",
        target: "beyza-cuhaci",
        targetHandle: "top",
        type: "smoothstep",
    },
    {
        id: "birsen-beyza",
        source: "birsen-yaman",
        sourceHandle: "bottom",
        target: "beyza-cuhaci",
        targetHandle: "top",
        type: "smoothstep",
    },
    {
        id: "hasan-sena",
        source: "hasan-cuhaci",
        sourceHandle: "bottom",
        target: "sena-cuhaci",
        targetHandle: "top",
        type: "smoothstep",
    },
    {
        id: "birsen-sena",
        source: "birsen-yaman",
        sourceHandle: "bottom",
        target: "sena-cuhaci",
        targetHandle: "top",
        type: "smoothstep",
    },

    {
        id: "huseyin-habibe",
        source: "huseyin-cuhaci",
        sourceHandle: "right",
        target: "habibe-demir",
        targetHandle: "left",
        type: "straight",
    },
    {
        id: "huseyin-ravza",
        source: "huseyin-cuhaci",
        sourceHandle: "bottom",
        target: "ravza-nur-cuhaci",
        targetHandle: "top",
        type: "smoothstep",
    },
    {
        id: "habibe-ravza",
        source: "habibe-demir",
        sourceHandle: "bottom",
        target: "ravza-nur-cuhaci",
        targetHandle: "top",
        type: "smoothstep",
    },
    {
        id: "huseyin-mehmet-cocuk",
        source: "huseyin-cuhaci",
        sourceHandle: "bottom",
        target: "mehmet-cuhaci-cocuk",
        targetHandle: "top",
        type: "smoothstep",
    },
    {
        id: "habibe-mehmet-cocuk",
        source: "habibe-demir",
        sourceHandle: "bottom",
        target: "mehmet-cuhaci-cocuk",
        targetHandle: "top",
        type: "smoothstep",
    },
    {
        id: "huseyin-semanur",
        source: "huseyin-cuhaci",
        sourceHandle: "bottom",
        target: "semanur-cuhaci",
        targetHandle: "top",
        type: "smoothstep",
    },
    {
        id: "habibe-semanur",
        source: "habibe-demir",
        sourceHandle: "bottom",
        target: "semanur-cuhaci",
        targetHandle: "top",
        type: "smoothstep",
    },
];

const defaultEdgeOptions = {
    style: {
        stroke: "#caa75e",
        strokeWidth: 2,
    },
};

function FamilyTreePage() {
    return (
        <main className="family-tree-page">
            <section className="family-tree-header">
                <span>Soy Ağacı</span>
                <h1>CİLE Soyu</h1>
                <p>Sinop / Boyabat Çuhacı ailesinin kuşaklar arası soy bağı.</p>
            </section>

            <section className="react-flow-tree">
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    nodeTypes={nodeTypes}
                    defaultEdgeOptions={defaultEdgeOptions}
                    fitView
                    fitViewOptions={{ padding: 0.2 }}
                    minZoom={0.25}
                    maxZoom={1.6}
                    nodesDraggable={false}
                >
                    <Background />
                    <Controls />
                    <MiniMap />
                </ReactFlow>
            </section>
        </main>
    );
}

export default FamilyTreePage;
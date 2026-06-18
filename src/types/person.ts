export type TimelineItem = {
    year: string;
    title: string;
    description: string;
};


export type Person = {
    id: string;
    name: string;
    nickname?: string;
    birthYear?: number;
    deathYear?: number;
    role: string;
    location?: string;
    image?: string;
    biography?: string;
    parentIds?: string[];
    spouseIds?: string[];
    childIds?: string[];
    timeline?: TimelineItem[];

};
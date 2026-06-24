import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { getFamilyData } from "../services/FamilyDataService";
import type { FamilyData } from "../services/FamilyDataService";
import type { Person } from "../types/person";

type FamilyDataContextType = {
    people: Person[];
    loading: boolean;
    error: Error | null;
    updatedAt: string | null;
    refetch: (silent?: boolean) => Promise<void>;
};

const FamilyDataContext = createContext<FamilyDataContextType | undefined>(undefined);

function transformFamilyData(data: FamilyData): Person[] {
    const { kisiler, olaylar } = data;

    // Helper to parse IDs from fields like "Ad <id>; Ad <id>"
    const parseIds = (field?: string): string[] => {
        if (!field) return [];
        const matches = field.match(/<([^>]+)>/g);
        if (!matches) return [];
        return matches.map(m => m.slice(1, -1).trim());
    };

    // Helper to parse Kisi ID from events
    const parseKisiId = (field?: string): string => {
        if (!field) return "";
        const match = field.match(/<([^>]+)>/);
        if (match) return match[1].trim();
        return field.trim();
    };

    // Create a map to look up people and build the final list
    const peopleMap: Record<string, Person> = {};
    const peopleList: Person[] = kisiler.map(kisi => {
        const birthYear = kisi.dogumYili ? parseInt(kisi.dogumYili, 10) : undefined;
        const deathYear = kisi.olumYili ? parseInt(kisi.olumYili, 10) : undefined;

        const person: Person = {
            id: kisi.id,
            name: kisi.adSoyad,
            nickname: kisi.lakap || undefined,
            birthYear: (birthYear !== undefined && !isNaN(birthYear)) ? birthYear : undefined,
            deathYear: (deathYear !== undefined && !isNaN(deathYear)) ? deathYear : undefined,
            role: kisi.rol || "",
            location: kisi.konum || undefined,
            image: kisi.resimYolu || undefined,
            biography: kisi.biyografi || undefined,
            parentIds: parseIds(kisi.ebeveynler),
            spouseIds: parseIds(kisi.esler),
            childIds: parseIds(kisi.cocuklar),
            timeline: []
        };
        peopleMap[person.id] = person;
        return person;
    });

    // Populate timeline items
    olaylar.forEach(olay => {
        const kisiId = parseKisiId(olay.kisi);
        const person = peopleMap[kisiId];
        if (person) {
            if (!person.timeline) {
                person.timeline = [];
            }
            person.timeline.push({
                year: olay.yil || "",
                title: olay.baslik || "",
                type: olay.tur || undefined,
                description: olay.aciklama || "",
                location: olay.konum || undefined
            });
        }
    });

    return peopleList;
}

export const FamilyDataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [people, setPeople] = useState<Person[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);
    const [updatedAt, setUpdatedAt] = useState<string | null>(null);

    const fetchData = useCallback(async (silent = false) => {
        if (!silent) {
            setLoading(true);
        }
        try {
            const data = await getFamilyData();
            const transformedPeople = transformFamilyData(data);
            setPeople(transformedPeople);
            setUpdatedAt(data.updatedAt);
            setError(null);
        } catch (err) {
            console.error("Soy ağacı verileri alınırken hata oluştu:", err);
            setError(err instanceof Error ? err : new Error("Bilinmeyen bir hata oluştu."));
        } finally {
            if (!silent) {
                setLoading(false);
            }
        }
    }, []);

    // Initial fetch
    useEffect(() => {
        fetchData(false);
    }, [fetchData]);

    // 30 seconds auto-refresh (silent)
    useEffect(() => {
        const interval = setInterval(() => {
            fetchData(true);
        }, 30000);

        return () => clearInterval(interval);
    }, [fetchData]);

    return (
        <FamilyDataContext.Provider value={{ people, loading, error, updatedAt, refetch: () => fetchData(false) }}>
            {children}
        </FamilyDataContext.Provider>
    );
};

export const useFamilyData = () => {
    const context = useContext(FamilyDataContext);
    if (context === undefined) {
        throw new Error("useFamilyData hook'u FamilyDataProvider içinde kullanılmalıdır.");
    }
    return context;
};

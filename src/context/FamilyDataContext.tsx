import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { getFamilyData } from "../services/familyDataService";
import type { FamilyData } from "../services/familyDataService";
import type { Person } from "../types/person";
import { people as fallbackPeople } from "../data/people";

type FamilyDataContextType = {
    people: Person[];
    loading: boolean;
    error: Error | null;
    updatedAt: string | null;
    refreshData: (silent?: boolean) => Promise<void>;
};

const FamilyDataContext = createContext<FamilyDataContextType | undefined>(undefined);

function parseIds(field?: string): string[] {
    if (!field) return [];
    const cleanField = field.trim();
    if (!cleanField) return [];

    const parts = cleanField.split(";");
    const ids: string[] = [];

    for (const part of parts) {
        const trimmed = part.trim();
        if (!trimmed) continue;
        const match = trimmed.match(/<([^>]+)>/);
        if (match) {
            ids.push(match[1].trim());
        } else {
            ids.push(trimmed);
        }
    }
    return ids;
}

function parseKisiId(field?: string): string {
    if (!field) return "";
    const match = field.match(/<([^>]+)>/);
    if (match) return match[1].trim();
    return field.trim();
}

function transformFamilyData(data: FamilyData): Person[] {
    const { kisiler, olaylar } = data;

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
            setUpdatedAt(data.updatedAt || new Date().toLocaleString());
            setError(null);
        } catch (err) {
            console.error("Soy ağacı verileri alınırken hata oluştu:", err);
            const apiError = err instanceof Error ? err : new Error("Bilinmeyen bir hata oluştu.");
            setError(apiError);
            
            // Eğer daha önce veri yüklenmediyse, yedek veri (fallback) ata
            setPeople((prev) => {
                if (prev.length === 0) {
                    console.log("Yedek veri (fallback) yükleniyor...");
                    return fallbackPeople;
                }
                return prev;
            });
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
        <FamilyDataContext.Provider 
            value={{ 
                people, 
                loading, 
                error, 
                updatedAt, 
                refreshData: () => fetchData(false) 
            }}
        >
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

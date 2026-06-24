export type Kisi = {
    id: string;
    adSoyad: string;
    lakap?: string;
    dogumYili?: string;
    olumYili?: string;
    rol?: string;
    konum?: string;
    resimYolu?: string;
    biyografi?: string;
    ebeveynler?: string;
    esler?: string;
    cocuklar?: string;
};

export type Olay = {
    kisi: string;
    yil?: string;
    tur?: string;
    baslik?: string;
    aciklama?: string;
    konum?: string;
};

export type FamilyData = {
    kisiler: Kisi[];
    olaylar: Olay[];
    updatedAt: string;
};

const API_URL = "https://script.google.com/macros/s/AKfycbz8KSozXbOkDoD4_Ljtgs365FxNB9Z61mZatGefAlpE0m_0UdENSrAggmGVG61pek2p/exec";

export async function getFamilyData(): Promise<FamilyData> {
    const response = await fetch(`${API_URL}?t=${Date.now()}`, {
        method: "GET",
        cache: "no-store"
    });

    if (!response.ok) {
        throw new Error("Veriler alınamadı.");
    }

    return response.json();
}

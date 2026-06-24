export interface Kisi {
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
}

export interface Olay {
    kisi: string;
    yil?: string;
    tur?: string;
    baslik?: string;
    aciklama?: string;
    konum?: string;
}

export interface FamilyData {
    kisiler: Kisi[];
    olaylar: Olay[];
    updatedAt: string;
}

const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbz8KSozXbOkDoD4_Ljtgs365FxNB9Z61mZatGefAlpE0m_0UdENSrAggmGVG61pek2p/exec";

export async function getFamilyData(): Promise<FamilyData> {
    try {
        const urlWithCacheBuster = `${APPS_SCRIPT_URL}?t=${Date.now()}`;
        const response = await fetch(urlWithCacheBuster, {
            cache: "no-store",
        });

        if (!response.ok) {
            throw new Error(`HTTP hatası! Durum kodu: ${response.status}`);
        }

        const data = await response.json();
        return data as FamilyData;
    } catch (error) {
        console.error("API'den soy ağacı verileri çekilirken hata oluştu:", error);
        throw error;
    }
}

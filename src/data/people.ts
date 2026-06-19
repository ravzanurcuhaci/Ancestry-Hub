import type { Person } from "../types/person";

export const people: Person[] = [
    {
        id: "sukru-cuhaci",
        name: "Şükrü Çuhacı",
        nickname: "cile",
        birthYear: 1000,
        deathYear: 1100,
        role: "Büyük Dede",
        location: "Sinop",
        spouseIds: ["melek-cuhaci"],
        childIds: ["mehmet-cuhaci-dede"],
        biography:
            "Çuhacı ailesinin bilinen en eski kuşaklarından biridir.",
        timeline: [
            {
                year: "1000",
                title: "Doğum",
                description: "Şükrü Çuhacı dünyaya geldi.",
            },
            {
                year: "1100",
                title: "Vefat",
                description: "Şükrü Çuhacı'nın yaşamı sona erdi.",
            },
        ],
    },
    {
        id: "melek-cuhaci",
        name: "Melek Çuhacı",
        nickname: "cile",
        birthYear: 1760,
        deathYear: 1800,
        role: "Büyük Anne",
        location: "Sinop",
        spouseIds: ["sukru-cuhaci"],
        childIds: ["mehmet-cuhaci-dede"],
        biography:
            "Çuhacı ailesinin büyük anne kuşağında yer alan aile bireyidir.",
        timeline: [
            {
                year: "1760",
                title: "Doğum",
                description: "Melek Çuhacı dünyaya geldi.",
            },
            {
                year: "1800",
                title: "Vefat",
                description: "Melek Çuhacı'nın yaşamı sona erdi.",
            },
        ],
    },
    {
        id: "mehmet-cuhaci-dede",
        name: "Mehmet Çuhacı",
        nickname: "cile",
        birthYear: 1884,
        role: "Dede",
        location: "Sinop",
        parentIds: ["sukru-cuhaci", "melek-cuhaci"],
        spouseIds: ["hava-turkmen"],
        childIds: [
            "kezban-cuhaci",
            "hasan-cuhaci",
            "kevser-cuhaci",
            "huseyin-cuhaci",
        ],
        biography:
            "Şükrü Çuhacı ve Melek Çuhacı'nın çocuğudur. Hava Türkmen ile evlenmiştir.",
        timeline: [
            {
                year: "1884",
                title: "Doğum",
                description: "Mehmet Çuhacı dünyaya geldi.",
            },
        ],
    },
    {
        id: "hava-turkmen",
        name: "Hava Türkmen",
        role: "Büyük Anne",
        location: "Sinop",
        spouseIds: ["mehmet-cuhaci-dede"],
        childIds: [
            "kezban-cuhaci",
            "hasan-cuhaci",
            "kevser-cuhaci",
            "huseyin-cuhaci",
        ],
        biography:
            "Mehmet Çuhacı'nın eşidir. Kezban, Hasan, Kevser ve Hüseyin Çuhacı'nın annesidir.",
    },
    {
        id: "kezban-cuhaci",
        name: "Kezban Çuhacı",
        nickname: "cile",
        role: "Çocuk",
        location: "Sinop",
        parentIds: ["mehmet-cuhaci-dede", "hava-turkmen"],
        biography:
            "Mehmet Çuhacı ve Hava Türkmen'in çocuklarından biridir.",
    },
    {
        id: "hasan-cuhaci",
        name: "Hasan Çuhacı",
        nickname: "cile",
        role: "Baba",
        location: "Sinop",
        parentIds: ["mehmet-cuhaci-dede", "hava-turkmen"],
        spouseIds: ["birsen-yaman"],
        childIds: ["burak-cuhaci", "beyza-cuhaci", "sena-cuhaci"],
        biography:
            "Mehmet Çuhacı ve Hava Türkmen'in çocuğudur. Birsen Yaman ile evlenmiştir.",
    },
    {
        id: "kevser-cuhaci",
        name: "Kevser Çuhacı",
        nickname: "cile",
        role: "Çocuk",
        location: "Sinop",
        parentIds: ["mehmet-cuhaci-dede", "hava-turkmen"],
        biography:
            "Mehmet Çuhacı ve Hava Türkmen'in çocuklarından biridir.",
    },
    {
        id: "huseyin-cuhaci",
        name: "Hüseyin Çuhacı",
        nickname: "cile",
        birthYear: 1980,
        role: "Baba",
        location: "İstanbul",
        parentIds: ["mehmet-cuhaci-dede", "hava-turkmen"],
        spouseIds: ["habibe-demir"],
        childIds: [
            "ravza-nur-cuhaci",
            "mehmet-cuhaci-cocuk",
            "semanur-cuhaci",
        ],
        biography:
            "Mehmet Çuhacı ve Hava Türkmen'in çocuğudur. Habibe Demir ile evlenmiştir. 3 çocuk babasıdır.",
        timeline: [
            {
                year: "1980",
                type: "Doğum",
                title: "Sinop'ta  Dünyaya geldi",
                description: "Hüseyin Çuhacı dünyaya geldi.",
                location: "Sinop",
            },
            {
                year: "1990",
                type: "Eğitim",
                title: "Boyabat İmam Hatip Lisesi'nde Okudu",
                description: "Lise eğitimini tamamladı.",
                location: "Sinop",
            },
            {
                year: "2003",
                type: "Evlilik",
                title: "İStanbul'da Evlenme",
                description: "Habibe Demir ile evlendiler.",
                location: "İstanbul",
            },
            {
                year: "2004",
                type: "Çocuk",
                title: "İlk çocuk",
                description: "Gözünün nuru, bitanesi, ilk  çocuğu dünyaya geldi",
                location: "İstanbul",
            },
            {
                year: "2006",
                type: "Çocuk",
                title: "İkinci çocuk",
                description: "Mehmet Çuhacı dünyaya geldi.",
                location: "İstanbul",
            },
            {
                year: "2010",
                type: "Çocuk",
                title: "Üçüncü çocuk",
                description: "Semanur Çuhacı dünyaya geldi.",
                location: "İstanbul",
            }
        ],
    },
    {
        id: "birsen-yaman",
        name: "Birsen Yaman",
        role: "Anne",
        location: "Sinop",
        spouseIds: ["hasan-cuhaci"],
        childIds: ["burak-cuhaci", "beyza-cuhaci", "sena-cuhaci"],
        biography:
            "Hasan Çuhacı'nın eşidir. Burak, Beyza ve Sena Çuhacı'nın annesidir.",
    },
    {
        id: "burak-cuhaci",
        name: "Burak Çuhacı",
        nickname: "cile",
        role: "Çocuk",
        location: "Sinop",
        parentIds: ["hasan-cuhaci", "birsen-yaman"],
        biography:
            "Hasan Çuhacı ve Birsen Yaman'ın çocuklarından biridir.",
    },
    {
        id: "beyza-cuhaci",
        name: "Beyza Çuhacı",
        nickname: "cile",
        role: "Çocuk",
        location: "Sinop",
        parentIds: ["hasan-cuhaci", "birsen-yaman"],
        biography:
            "Hasan Çuhacı ve Birsen Yaman'ın çocuklarından biridir.",
    },
    {
        id: "sena-cuhaci",
        name: "Sena Çuhacı",
        nickname: "cile",
        role: "Çocuk",
        location: "Sinop",
        parentIds: ["hasan-cuhaci", "birsen-yaman"],
        biography:
            "Hasan Çuhacı ve Birsen Yaman'ın çocuklarından biridir.",
    },
    {
        id: "habibe-demir",
        name: "Habibe Demir",
        role: "Anne",
        location: "Sinop",
        spouseIds: ["huseyin-cuhaci"],
        childIds: [
            "ravza-nur-cuhaci",
            "mehmet-cuhaci-cocuk",
            "semanur-cuhaci",
        ],
        biography:
            "Hüseyin Çuhacı'nın eşidir. Ravza Nur, Mehmet ve Semanur Çuhacı'nın annesidir.",
    },
    {
        id: "ravza-nur-cuhaci",
        name: "Ravza Nur Çuhacı",
        nickname: "cile",
        role: "Çocuk",
        location: "Sinop",
        parentIds: ["huseyin-cuhaci", "habibe-demir"],
        biography:
            "Hüseyin Çuhacı ve Habibe Demir'in çocuklarından biridir.",
        timeline: [
            {
                year: "2004",
                title: "Doğum",
                description: "Ravza Nur Çuhacı dünyaya geldi.",
                location: "Sinop",
            },
            {
                year: "2026",
                title: "Eğitim",
                description: "Bilgisayar mühendisliği bölümünü bitirdi.",
                location: "Düzce Üniversitesi",
            },
        ],
    },
    {
        id: "mehmet-cuhaci-cocuk",
        name: "Mehmet Çuhacı",
        nickname: "cile",
        role: "Çocuk",
        location: "İstanbul",
        birthYear: 2006,
        parentIds: ["huseyin-cuhaci", "habibe-demir"],
        image: "/mehmet-cuhaci.jpeg",
        biography:
            "Hüseyin Çuhacı ve Habibe Demir'in çocuklarından biridir.",
        timeline: [
            {
                year: "2006",
                type: "Doğum",
                title: "İstanbulda Dünayaya geldi",
                description: "Mehmet Çuhacı dünyaya geldi.",
                location: "Üsküdar",
            },

            {
                year: "2026",
                type: "Eğitim",
                title: "Üsküdar Üniversitesinde Okudu",
                description: "İlk ve Acil Yardım bölümünü bitirdi.",
                location: "Üsküdar Üniversitesi",
            },


        ],
    },
    {
        id: "semanur-cuhaci",
        name: "Semanur Çuhacı",
        nickname: "cile",
        role: "Çocuk",
        location: "Sinop",
        parentIds: ["huseyin-cuhaci", "habibe-demir"],
        biography:
            "Hüseyin Çuhacı ve Habibe Demir'in çocuklarından biridir.",
    },
];
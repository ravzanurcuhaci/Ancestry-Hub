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
        role: "Baba",
        location: "Sinop",
        parentIds: ["mehmet-cuhaci-dede", "hava-turkmen"],
        spouseIds: ["habibe-demir"],
        childIds: [
            "ravza-nur-cuhaci",
            "mehmet-cuhaci-cocuk",
            "semanur-cuhaci",
        ],
        biography:
            "Mehmet Çuhacı ve Hava Türkmen'in çocuğudur. Habibe Demir ile evlenmiştir.",
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
    },
    {
        id: "mehmet-cuhaci-cocuk",
        name: "Mehmet Çuhacı",
        nickname: "cile",
        role: "Çocuk",
        location: "Sinop",
        parentIds: ["huseyin-cuhaci", "habibe-demir"],
        biography:
            "Hüseyin Çuhacı ve Habibe Demir'in çocuklarından biridir.",
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
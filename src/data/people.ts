import type { Person } from "../types/person";

export const people: Person[] = [

    {
        id: "hasan-cuhaci-dede",
        name: "Hasan Çuhacı",
        nickname: "cile",
        birthYear: 1800,
        role: "Büyük Dede",
        location: "Asarcık Hacı Köyü / Sinop",
        childIds: ["sukru-cuhaci"],
        biography: `Cile lakabı, “çok çile çekmiş” anlamında kullanılmıştır. Asarcık Hacı Köyü’ne 1800’lü yılların başlarında yerleşen ilk kabilelerden biri bu lakapla anılmıştır. Asıl adı Hasan’dır.

Hasan’ın yine Hasan adında bir oğlu olmuştur. Oğlunun doğumuna çok sevinen Hasan, bir gün kışlık yakacak getirmek için öküzleri koşarak oğlu Hasan ile birlikte köyün dağına, Sazak mevkisine gitmiştir. Burada gözüne kestirdiği bir çam ağacını keserken ağaç üzerine devrilmiş ve oracıkta hayatını kaybetmiştir.

Akşam olduğunda hava kararmaya başlamış, öküzler boyunduruklu şekilde köye dönmüş, ancak sahipleri dönmemiştir. Köy halkı “Öküzler geldi, sahibi gelmedi” diyerek aramaya çıkmıştır. Sazak mevkisine vardıklarında Çuhadar’ın oğlu “Babam uyuyor, uyuyor” diye seslenmiştir. Köy halkı yanına vardığında Çuhadar’ın ağacın altında kalarak hayatını kaybettiğini görmüştür.

Çuhadar’ın oğlu Hasan yetim olarak büyümüştür. Evlenmiş, ilk hanımından 3 kızı ve 1 oğlu olmuştur. Kızlarının isimleri …………….. evlenmiş … İkinci evliliğinden Şükrü adında bir oğlu olmuştur.

İlk evliliğinden olan oğlu Yemen’e askere gitmiştir. Çok yıllar sonra döndüğünde Boyabat Orta Çarşı’da babası tütün satarken tesadüfen yanına gelmiştir. “Dayı, bu tütünler bizim arpalığın tütününe benziyor” diyerek sohbete başlamıştır. Birbirini tanımayan baba oğul, konuşma sırasında birbirlerini tanımış ve sarmaş dolaş köyün yolunu tutmuştur.

Köye geldiklerinde Hasan, “Oğlum askerden geldi, kavuştuk” diyerek öküzlerinden birini oğlu için kesmiş ve köy halkına dağıtmıştır. Ancak oğlu köyde yalnızca üç gün yaşayabilmiş ve babasından önce vefat etmiştir.

İkinci evliliğinden olan Şükrü ise babasını çok küçükken kaybetmiştir. Üvey ablalarının yanında kalarak büyümüştür.

Cile lakabı halk türkülerinde ve sözlü kültürde de çile, hasret ve dert anlamlarıyla anılmıştır. Bu lakap, hem yaşanmış zorlukları hem de kuşaktan kuşağa aktarılan hatıraları temsil eder.

Cile ile ilgili türküler:
1. Onu sevmek binbir çile / Şu salınıp gelen güzel
2. Çile bülbülüm çile
3. Kimi candan sevdim ise tuz ekti yarama benim / Bu ne bitmez tükenmez çileymiş`,
        timeline: [
            {
                year: "1800",
                type: "Yerleşim",
                title: "Asarcık Hacı Köyü’ne yerleşim",
                description:
                    "Cile lakaplı Hasan, 1800’lü yılların başlarında Asarcık Hacı Köyü’ne yerleşen ilk aile büyüklerinden biridir.",
                location: "Asarcık Hacı Köyü",
            },
            {
                year: "1800",
                type: "Lakabın Kökeni",
                title: "Cile lakabının ortaya çıkışı",
                description:
                    "Cile lakabı, çok çile çekmiş anlamında kullanılmıştır. Bu lakap aile büyüğü Hasan ile anılmıştır.",
            },
            {
                year: "1800",
                type: "Aile",
                title: "Hasan adında oğlunun doğumu",
                description:
                    "Hasan’ın, yine Hasan adında bir oğlu olmuştur. Oğlunun doğumuna çok sevinmiştir.",
            },
            {
                year: "1800",
                type: "Vefat",
                title: "Sazak mevkisinde vefatı",
                description:
                    "Kışlık yakacak getirmek için oğlu Hasan ile Sazak mevkisine giden Hasan, çam ağacı keserken ağacın üzerine devrilmesi sonucu hayatını kaybetmiştir.",
                location: "Sazak Mevkisi",
            },
            {
                year: "1800",
                type: "Aile Hatırası",
                title: "Öküzlerin köye dönüşü",
                description:
                    "Akşam olduğunda öküzler boyunduruklu şekilde köye dönmüş, köy halkı Hasan’ı aramaya çıkmış ve onu Sazak mevkisinde ağacın altında bulmuştur.",
                location: "Asarcık Hacı Köyü",
            },
            {
                year: "1800",
                type: "Aile",
                title: "Hasan’ın oğlunun yetim kalması",
                description:
                    "Hasan’ın oğlu küçük yaşta yetim kalmıştır. Daha sonra evlenmiş, ilk hanımından 3 kızı ve 1 oğlu, ikinci evliliğinden ise Şükrü adında bir oğlu olmuştur.",
            },
            {
                year: "1900",
                type: "Askerlik",
                title: "Yemen’den dönen oğul",
                description:
                    "İlk evliliğinden olan oğlu Yemen’e askere gitmiştir. Çok yıllar sonra döndüğünde Boyabat Orta Çarşı’da babasıyla tesadüfen karşılaşmıştır.",
                location: "Boyabat Orta Çarşı",
            },
            {
                year: "1900",
                type: "Kavuşma",
                title: "Baba oğlun kavuşması",
                description:
                    "Tütün satışı sırasında konuşmaya başlayan baba oğul birbirlerini tanımış ve sarmaş dolaş köyün yolunu tutmuştur.",
                location: "Boyabat / Asarcık Hacı Köyü",
            },
            {
                year: "1900",
                type: "Aile Hatırası",
                title: "Askerden dönen oğul için öküz kesilmesi",
                description:
                    "Hasan, oğlunun askerden dönmesine sevinerek öküzlerinden birini kesmiş ve köy halkına dağıtmıştır.",
                location: "Asarcık Hacı Köyü",
            },
            {
                year: "1900",
                type: "Vefat",
                title: "Askerden dönen oğlun vefatı",
                description:
                    "Askerden dönen oğlu, köyde yalnızca üç gün yaşamış ve babasından önce vefat etmiştir.",
            },
            {
                year: "1900",
                type: "Aile",
                title: "Şükrü Çuhacı’nın küçük yaşta babasını kaybetmesi",
                description:
                    "İkinci evliliğinden olan Şükrü, babasını çok küçükken kaybetmiş ve üvey ablalarının yanında kalarak büyümüştür.",
            },
            {
                year: "Kültürel Hatıra",
                type: "Türküler",
                title: "Cile ile ilgili türküler",
                description:
                    "Cile lakabı; çile, hasret ve dert temalı türkülerle de anılır. Örnekler: “Onu sevmek binbir çile”, “Çile bülbülüm çile”, “Kimi candan sevdim ise tuz ekti yarama benim, bu ne bitmez tükenmez çileymiş.”",
            },
        ],
    }
    ,

    {
        id: "sukru-cuhaci",
        name: "Şükrü Çuhacı",
        nickname: "cile",
        birthYear: 1000,
        deathYear: 1100,
        role: "Büyük Dede",
        location: "Sinop",
        parentIds: ["hasan-cuhaci-dede"],
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
        name: "Melek Taşçı Çuhacı",
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
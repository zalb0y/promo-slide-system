// ==========================================
// KONFIGURASI DATA ENTRY PROMO LOTTE MART
// ==========================================

const CONFIG = {
    // URL Google Apps Script Web App (Ganti dengan URL deployment Anda)
    scriptUrl: 'https://script.google.com/macros/s/AKfycbyQdo5wBKGSWUf5TeHq2uGsxdO4paKPo8SM1tbuZ-_Mm73fl0vzjkTwjfzxbYF7KzQU/exec',

    // ==========================================
    // DATA TOKO
    // ==========================================
    stores: {
        // LSI Stores
        LSI: {
            'Region 1': [
                '6001 - Pasar Rebo',
                '6003 - Kelapa Gading',
                '6007 - Alam Sutera',
                '6010 - Medan',
                '6014 - Palembang',
                '6015 - Pekanbaru',
                '6021 - Jatake',
                '6029 - Batam',
                '6031 - Lampung',
                '6006 - Ciputat',
                '6022 - Serang',
                '6039 - Serpong'
            ],
            'Region 2': [
                '6004 - Meruya',
                '6005 - Bandung',
                '6008 - Cibitung',
                '6023 - Cikarang',
                '6024 - Cirebon',
                '6027 - Tasikmalaya',
                '6034 - Karawang',
                '6036 - Padalarang',
                '6038 - Tegal',
                '6018 - Bekasi',
                '6026 - Bogor',
                '6030 - Pakansari',
                '6002 - Sidoarjo'
            ],
            'Region 3': [
                '6009 - Denpasar',
                '6013 - Makasar',
                '6017 - Banjarmasin',
                '6020 - Balikpapan',
                '6028 - Mastrip',
                '6032 - Samarinda',
                '6033 - Manado',
                '6037 - Mataram',
                '6011 - Semarang',
                '6016 - Yogyakarta',
                '6019 - Solo'
            ]
        },
        // LMI Stores
        LMI: {
            'Region 1': [
                '04003 - FESTIVAL CITY LINK',
                '04004 - KELAPA GADING',
                '04005 - KUNINGAN CITY',
                '04009 - TAMAN SURYA',
                '04010 - MEDAN CENTRE POINT',
                '04021 - GREEN PRAMUKA'
            ],
            'Region 2': [
                '04001 - GANDARIA',
                '04006 - BINTARO',
                '04007 - PANAKUKANG',
                '04008 - FATMAWATI',
                '04013 - SOLO BARU',
                '04020 - PAKUWON MALL SBY'
            ],
            'Region 3': [
                '04022 - BALI BEER'
            ]
        }
    },

    // ==========================================
    // DATA KATEGORI PER DIVISI
    // ==========================================
    categories: {
        'Dry Food': [
            '11 - Biscuit/Snacks',
            '17 - Bulk Product',
            '21 - Sauces&Spices',
            '23 - Drinks',
            '24 - Milk'
        ],
        'Meal Solution': [
            '80 - BAKERY',
            '82 - Delica'
        ],
        'Fresh Food': [
            '31 - Fish',
            '32 - Meat',
            '33 - Fruits',
            '34 - Vegetables',
            '35 - Dairy & Frozen'
        ],
        'H&B HOME CARE': [
            '14 - Home Care',
            '19 - H&B'
        ],
        'Non Food': [
            '86 - IT/GADGET',
            '87 - Small Appliance',
            '88 - BIG APPLIANCE',
            'ELC - Electronic',
            '51 - Kitchen',
            '57 - Bathroom',
            '85 - DIY',
            '13 - Interior & Bedding',
            '62 - Textile',
            '71 - Stationary/Toys'
        ]
    }
};

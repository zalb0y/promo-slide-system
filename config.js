/**
 * KONFIGURASI DATA ENTRY GOOGLE SLIDES
 * 
 * File ini berisi konfigurasi untuk:
 * 1. URL Google Apps Script untuk masing-masing tipe toko
 * 2. Data toko LSI dan LMI per region
 */

const CONFIG = {
    // ============================================
    // GOOGLE APPS SCRIPT URLs
    // ============================================
    // Ganti dengan URL deployment Google Apps Script Anda
    // LSI - Google Slides untuk toko LSI
    LSI_SCRIPT_URL: 'https://script.google.com/macros/s/AKfycbzX-S0atbSFu8Si_d48W5fQpKfB539z8fBH30nPfWc5fEC6u-2h4nb_TEFY_4FjmdZ6/exec',
    
    // LMI - Google Slides untuk toko LMI
    LMI_SCRIPT_URL: 'https://script.google.com/macros/s/YOUR_LMI_SCRIPT_ID/exec',
    
    // ============================================
    // KONFIGURASI SLIDE
    // ============================================
    // Maksimum produk per slide
    MAX_PRODUCTS_PER_SLIDE: 9,
    
    // Slide awal untuk data (slide 1 adalah cover)
    START_SLIDE_INDEX: 2
};

/**
 * DATA TOKO
 * Struktur: STORE_DATA[tipe_toko][region] = array of {code, name}
 */
const STORE_DATA = {
    // ============================================
    // LSI - LOTTE SUPERMARKET
    // ============================================
    LSI: {
        // Region 1
        1: [
            { code: '6001', name: 'Pasar Rebo' },
            { code: '6003', name: 'Kelapa Gading' },
            { code: '6007', name: 'Alam Sutera' },
            { code: '6010', name: 'Medan' },
            { code: '6014', name: 'Palembang' },
            { code: '6015', name: 'Pekanbaru' },
            { code: '6021', name: 'Jatake' },
            { code: '6029', name: 'Batam' },
            { code: '6031', name: 'Lampung' },
            { code: '6006', name: 'Ciputat' },
            { code: '6022', name: 'Serang' },
            { code: '6039', name: 'Serpong' }
        ],
        // Region 2
        2: [
            { code: '6004', name: 'Meruya' },
            { code: '6005', name: 'Bandung' },
            { code: '6008', name: 'Cibitung' },
            { code: '6023', name: 'Cikarang' },
            { code: '6024', name: 'Cirebon' },
            { code: '6027', name: 'Tasikmalaya' },
            { code: '6034', name: 'Karawang' },
            { code: '6036', name: 'Padalarang' },
            { code: '6038', name: 'Tegal' },
            { code: '6018', name: 'Bekasi' },
            { code: '6026', name: 'Bogor' },
            { code: '6030', name: 'Pakansari' },
            { code: '6002', name: 'Sidoarjo' }
        ],
        // Region 3
        3: [
            { code: '6009', name: 'Denpasar' },
            { code: '6013', name: 'Makasar' },
            { code: '6017', name: 'Banjarmasin' },
            { code: '6020', name: 'Balikpapan' },
            { code: '6028', name: 'Mastrip' },
            { code: '6032', name: 'Samarinda' },
            { code: '6033', name: 'Manado' },
            { code: '6037', name: 'Mataram' },
            { code: '6011', name: 'Semarang' },
            { code: '6016', name: 'Yogyakarta' },
            { code: '6019', name: 'Solo' }
        ]
    },
    
    // ============================================
    // LMI - LOTTE MART
    // ============================================
    LMI: {
        // Region 1
        1: [
            { code: '04003', name: 'FESTIVAL CITY LINK' },
            { code: '04004', name: 'KELAPA GADING' },
            { code: '04005', name: 'KUNINGAN CITY' },
            { code: '04009', name: 'TAMAN SURYA' },
            { code: '04010', name: 'MEDAN CENTRE POINT' },
            { code: '04021', name: 'GREEN PRAMUKA' }
        ],
        // Region 2
        2: [
            { code: '04001', name: 'GANDARIA' },
            { code: '04006', name: 'BINTARO' },
            { code: '04007', name: 'PANAKUKANG' },
            { code: '04008', name: 'FATMAWATI' },
            { code: '04013', name: 'SOLO BARU' },
            { code: '04020', name: 'PAKUWON MALL SBY' }
        ],
        // Region 3
        3: [
            { code: '04022', name: 'BALI BEER' }
        ]
    }
};

/**
 * Mapping Divisi ke Kategori
 * Digunakan untuk validasi dan dropdown dinamis
 */
const DIVISION_CATEGORIES = {
    'Dry Food': [
        { code: '11', name: 'Biscuit/Snacks' },
        { code: '17', name: 'Bulk Product' },
        { code: '21', name: 'Sauces&Spices' },
        { code: '23', name: 'Drinks' },
        { code: '24', name: 'Milk' }
    ],
    'Meal Solution': [
        { code: '80', name: 'BAKERY' },
        { code: '82', name: 'Delica' }
    ],
    'Fresh Food': [
        { code: '31', name: 'Fish' },
        { code: '32', name: 'Meat' },
        { code: '33', name: 'Fruits' },
        { code: '34', name: 'Vegetables' },
        { code: '35', name: 'Dairy & Frozen' }
    ],
    'H&B HOME CARE': [
        { code: '14', name: 'Home Care' },
        { code: '19', name: 'H&B' }
    ],
    'Non Food': [
        { code: '86', name: 'IT/GADGET' },
        { code: '87', name: 'Small Appliance' },
        { code: '88', name: 'BIG APPLIANCE' },
        { code: 'ELC', name: 'Electronic' },
        { code: '51', name: 'Kitchen' },
        { code: '57', name: 'Bathroom' },
        { code: '85', name: 'DIY' },
        { code: '13', name: 'Interior & Bedding' },
        { code: '62', name: 'Textile' },
        { code: '71', name: 'Stationary/Toys' }
    ]
};

/**
 * Helper function untuk mendapatkan URL Google Apps Script
 * berdasarkan tipe toko
 */
function getScriptUrl(storeType) {
    if (storeType === 'LSI') {
        return CONFIG.LSI_SCRIPT_URL;
    } else if (storeType === 'LMI') {
        return CONFIG.LMI_SCRIPT_URL;
    }
    return null;
}

/**
 * Helper function untuk mendapatkan daftar toko
 * berdasarkan tipe toko dan region
 */
function getStores(storeType, region) {
    if (STORE_DATA[storeType] && STORE_DATA[storeType][region]) {
        return STORE_DATA[storeType][region];
    }
    return [];
}

/**
 * Helper function untuk mendapatkan daftar kategori
 * berdasarkan divisi
 */
function getCategories(division) {
    if (DIVISION_CATEGORIES[division]) {
        return DIVISION_CATEGORIES[division];
    }
    return [];
}

// Export untuk module (jika diperlukan)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CONFIG, STORE_DATA, DIVISION_CATEGORIES, getScriptUrl, getStores, getCategories };
}

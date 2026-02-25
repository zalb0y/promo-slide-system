// config.js - Configuration file for Lotte Mart Data Entry System

const CONFIG = {
  // Google Apps Script Web App URLs - REPLACE THESE WITH YOUR DEPLOYED URLS
  SCRIPT_URL_LSI: "https://script.google.com/macros/s/AKfycbyQdo5wBKGSWUf5TeHq2uGsxdO4paKPo8SM1tbuZ-_Mm73fl0vzjkTwjfzxbYF7KzQU/exec",
  SCRIPT_URL_LMI: "YOUR_LMI_SCRIPT_URL_HERE",

  // Google Slides IDs - REPLACE THESE WITH YOUR SLIDES IDS
  SLIDES_ID_LSI: "1ucAEGVYqM-37QSSjBP_Jta7Ohq-tgPpgyphKYk5YEng",
  SLIDES_ID_LMI: "YOUR_LMI_SLIDES_ID_HERE",

  // Store Types
  STORE_TYPES: ["LSI", "LMI"],

  // Regions
  REGIONS: ["Region 1", "Region 2", "Region 3"],

  // LSI Stores by Region
  LSI_STORES: {
    "Region 1": [
      { code: "6001", name: "Pasar Rebo" },
      { code: "6003", name: "Kelapa Gading" },
      { code: "6006", name: "Ciputat" },
      { code: "6007", name: "Alam Sutera" },
      { code: "6010", name: "Medan" },
      { code: "6014", name: "Palembang" },
      { code: "6015", name: "Pekanbaru" },
      { code: "6021", name: "Jatake" },
      { code: "6022", name: "Serang" },
      { code: "6029", name: "Batam" },
      { code: "6031", name: "Lampung" },
      { code: "6039", name: "Serpong" }
    ],
    "Region 2": [
      { code: "6002", name: "Sidoarjo" },
      { code: "6004", name: "Meruya" },
      { code: "6005", name: "Bandung" },
      { code: "6008", name: "Cibitung" },
      { code: "6018", name: "Bekasi" },
      { code: "6023", name: "Cikarang" },
      { code: "6024", name: "Cirebon" },
      { code: "6026", name: "Bogor" },
      { code: "6027", name: "Tasikmalaya" },
      { code: "6030", name: "Pakansari" },
      { code: "6034", name: "Karawang" },
      { code: "6036", name: "Padalarang" },
      { code: "6038", name: "Tegal" }
    ],
    "Region 3": [
      { code: "6009", name: "Denpasar" },
      { code: "6011", name: "Semarang" },
      { code: "6013", name: "Makasar" },
      { code: "6016", name: "Yogyakarta" },
      { code: "6017", name: "Banjarmasin" },
      { code: "6019", name: "Solo" },
      { code: "6020", name: "Balikpapan" },
      { code: "6028", name: "Mastrip" },
      { code: "6032", name: "Samarinda" },
      { code: "6033", name: "Manado" },
      { code: "6037", name: "Mataram" }
    ]
  },

  // LMI Stores by Region
  LMI_STORES: {
    "Region 1": [
      { code: "04003", name: "FESTIVAL CITY LINK" },
      { code: "04004", name: "KELAPA GADING" },
      { code: "04005", name: "KUNINGAN CITY" },
      { code: "04009", name: "TAMAN SURYA" },
      { code: "04010", name: "MEDAN CENTRE POINT" },
      { code: "04021", name: "GREEN PRAMUKA" }
    ],
    "Region 2": [
      { code: "04001", name: "GANDARIA" },
      { code: "04006", name: "BINTARO" },
      { code: "04007", name: "PANAKUKANG" },
      { code: "04008", name: "FATMAWATI" },
      { code: "04013", name: "SOLO BARU" },
      { code: "04020", name: "PAKUWON MALL SBY" }
    ],
    "Region 3": [
      { code: "04022", name: "BALI BEER" }
    ]
  },

  // Divisions with colors (RGB format for Google Slides)
  DIVISIONS: {
    "Dry Food": { r: 255, g: 165, b: 0 },        // Orange
    "Fresh Food": { r: 34, g: 139, b: 34 },       // Green
    "Meal Solution": { r: 128, g: 0, b: 32 },     // Maroon
    "H&B HOME CARE": { r: 135, g: 206, b: 250 },  // Light Blue
    "Non Food": { r: 0, g: 0, b: 139 }            // Dark Blue
  },

  // Division colors in HEX for frontend display
  DIVISION_COLORS_HEX: {
    "Dry Food": "#FFA500",
    "Fresh Food": "#228B22",
    "Meal Solution": "#800020",
    "H&B HOME CARE": "#87CEEE",
    "Non Food": "#00008B"
  },

  // Categories by Division
  CATEGORIES: {
    "Dry Food": [
      { code: "11", name: "Biscuit/Snacks" },
      { code: "17", name: "Bulk Product" },
      { code: "21", name: "Sauces&Spices" },
      { code: "23", name: "Drinks" },
      { code: "24", name: "Milk" }
    ],
    "Meal Solution": [
      { code: "80", name: "BAKERY" },
      { code: "82", name: "Delica" }
    ],
    "Fresh Food": [
      { code: "31", name: "Fish" },
      { code: "32", name: "Meat" },
      { code: "33", name: "Fruits" },
      { code: "34", name: "Vegetables" },
      { code: "35", name: "Dairy & Frozen" }
    ],
    "H&B HOME CARE": [
      { code: "14", name: "Home Care" },
      { code: "19", name: "H&B" }
    ],
    "Non Food": [
      { code: "86", name: "IT/GADGET" },
      { code: "87", name: "Small Appliance" },
      { code: "88", name: "BIG APPLIANCE" },
      { code: "ELC", name: "Electronic" },
      { code: "51", name: "Kitchen" },
      { code: "57", name: "Bathroom" },
      { code: "85", name: "DIY" },
      { code: "13", name: "Interior & Bedding" },
      { code: "62", name: "Textile" },
      { code: "71", name: "Stationary/Toys" }
    ]
  },

  // Max items per slide
  MAX_ITEMS_PER_SLIDE: 9
};

// Helper function to get stores based on store type and region
function getStores(storeType, region) {
  if (storeType === "LSI") {
    return CONFIG.LSI_STORES[region] || [];
  } else if (storeType === "LMI") {
    return CONFIG.LMI_STORES[region] || [];
  }
  return [];
}

// Helper function to get categories based on division
function getCategories(division) {
  return CONFIG.CATEGORIES[division] || [];
}

// Helper function to get script URL based on store type
function getScriptUrl(storeType) {
  if (storeType === "LSI") {
    return CONFIG.SCRIPT_URL_LSI;
  } else if (storeType === "LMI") {
    return CONFIG.SCRIPT_URL_LMI;
  }
  return "";
}

// Helper function to format store display
function formatStoreDisplay(store) {
  return `${store.code} - ${store.name}`;
}

// Helper function to format category display
function formatCategoryDisplay(category) {
  return `${category.code} - ${category.name}`;
}

// Export for module usage (if needed)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CONFIG, getStores, getCategories, getScriptUrl, formatStoreDisplay, formatCategoryDisplay };
}



// ============================================================
// config.js — Master Configuration for Lotte Grosir Data Entry
// ============================================================

const CONFIG = {
  // Google Apps Script Web App URL (GANTI DENGAN URL ANDA)
  APPS_SCRIPT_URL: "https://script.google.com/macros/s/AKfycbxkWnxJUjGoPYaHsPd_jqRcp-hFNXvfgji_jgGozOit0jxvTOB8FuTORubVkhSPaNhl7Q/exec",

  // Google Slides Presentation IDs (GANTI DENGAN ID ANDA)
  SLIDES_ID_LSI: "1ucAEGVYqM-37QSSjBP_Jta7Ohq-tgPpgyphKYk5YEng",
  SLIDES_ID_LMI: "1VwoGYvEh_dCPAjzip5yrb6elXTpKFed6tyw0l_HyWdQ",

  // Max products per slide (sesuai template: 4 kolom x 2 baris)
  MAX_PRODUCTS_PER_SLIDE: 8,
};

// ============================================================
// Store Database
// ============================================================
const STORES = {
  LSI: {
    "Region 1": [
      { code: "6001", name: "Pasar Rebo" },
      { code: "6003", name: "Kelapa Gading" },
      { code: "6007", name: "Alam Sutera" },
      { code: "6010", name: "Medan" },
      { code: "6014", name: "Palembang" },
      { code: "6015", name: "Pekanbaru" },
      { code: "6021", name: "Jatake" },
      { code: "6029", name: "Batam" },
      { code: "6031", name: "Lampung" },
      { code: "6006", name: "Ciputat" },
      { code: "6022", name: "Serang" },
      { code: "6039", name: "Serpong" },
    ],
    "Region 2": [
      { code: "6004", name: "Meruya" },
      { code: "6005", name: "Bandung" },
      { code: "6008", name: "Cibitung" },
      { code: "6023", name: "Cikarang" },
      { code: "6024", name: "Cirebon" },
      { code: "6027", name: "Tasikmalaya" },
      { code: "6034", name: "Karawang" },
      { code: "6036", name: "Padalarang" },
      { code: "6038", name: "Tegal" },
      { code: "6018", name: "Bekasi" },
      { code: "6026", name: "Bogor" },
      { code: "6030", name: "Pakansari" },
      { code: "6002", name: "Sidoarjo" },
    ],
    "Region 3": [
      { code: "6009", name: "Denpasar" },
      { code: "6013", name: "Makasar" },
      { code: "6017", name: "Banjarmasin" },
      { code: "6020", name: "Balikpapan" },
      { code: "6028", name: "Mastrip" },
      { code: "6032", name: "Samarinda" },
      { code: "6033", name: "Manado" },
      { code: "6037", name: "Mataram" },
      { code: "6011", name: "Semarang" },
      { code: "6016", name: "Yogyakarta" },
      { code: "6019", name: "Solo" },
    ],
  },
  LMI: {
    "Region 1": [
      { code: "04003", name: "FESTIVAL CITY LINK" },
      { code: "04004", name: "KELAPA GADING" },
      { code: "04005", name: "KUNINGAN CITY" },
      { code: "04009", name: "TAMAN SURYA" },
      { code: "04010", name: "MEDAN CENTRE POINT" },
      { code: "04021", name: "GREEN PRAMUKA" },
    ],
    "Region 2": [
      { code: "04001", name: "GANDARIA" },
      { code: "04006", name: "BINTARO" },
      { code: "04007", name: "PANAKUKANG" },
      { code: "04008", name: "FATMAWATI" },
      { code: "04013", name: "SOLO BARU" },
      { code: "04020", name: "PAKUWON MALL SBY" },
    ],
    "Region 3": [
      { code: "04022", name: "BALI BEER" },
    ],
  },
};

// ============================================================
// Divisions & Categories
// ============================================================
const DIVISIONS = {
  "Dry Food": [
    { code: "11", name: "Biscuit/Snacks" },
    { code: "17", name: "Bulk Product" },
    { code: "21", name: "Sauces&Spices" },
    { code: "23", name: "Drinks" },
    { code: "24", name: "Milk" },
  ],
  "Meal Solution": [
    { code: "80", name: "BAKERY" },
    { code: "82", name: "Delica" },
  ],
  "Fresh Food": [
    { code: "31", name: "Fish" },
    { code: "32", name: "Meat" },
    { code: "33", name: "Fruits" },
    { code: "34", name: "Vegetables" },
    { code: "35", name: "Dairy & Frozen" },
  ],
  "H&B HOME CARE": [
    { code: "14", name: "Home Care" },
    { code: "19", name: "H&B" },
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
    { code: "71", name: "Stationary/Toys" },
  ],
};

// Region sort order (untuk pengurutan slide)
const REGION_ORDER = {
  "Region 1": 1,
  "Region 2": 2,
  "Region 3": 3,
};






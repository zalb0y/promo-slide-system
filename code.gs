// ==========================================
// KONFIGURASI UTAMA
// ==========================================
// GANTI DENGAN ID GOOGLE SLIDES ANDA (Ambil kode acak dari URL file Slides)
var SLIDE_ID = "MASUKKAN_ID_SLIDES_ANDA_DISINI"; 

// Menggunakan angka 2 karena template format berada di Slide ke-3 
// (Slide 1 = 0, Slide 2 = 1, Slide 3 = 2)
var TEMPLATE_INDEX = 2; 

// ==========================================
// FUNGSI PENERIMA DATA DARI WEB (FRONTEND)
// ==========================================
function doPost(e) {
  try {
    // Membaca data JSON yang dikirim dari HTML
    var data = JSON.parse(e.postData.contents);
    
    // Memproses data ke dalam Google Slides
    var resultMessage = prosesDataKeSlide(data);
    
    // Mengirimkan respon kembali ke HTML (sukses)
    return ContentService.createTextOutput(JSON.stringify({
      "status": "success", 
      "message": resultMessage
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Mengirimkan respon jika terjadi error
    return ContentService.createTextOutput(JSON.stringify({
      "status": "error", 
      "message": error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// ==========================================
// FUNGSI UTAMA: MEMASUKKAN DATA KE SLIDES
// ==========================================
function prosesDataKeSlide(data) {
  var pres = SlidesApp.openById(SLIDE_ID);
  var slides = pres.getSlides();
  var templateSlide = slides[TEMPLATE_INDEX];

  // 1. METADATA PENCARIAN SLIDE
  // Karena Kategori (Biskuit/Drinks) digabung dalam 1 slide, kita hanya mencari slide 
  // yang memiliki Toko dan Divisi yang sama.
  var targetMetadata = "[TOKO:" + data.toko + "] [DIV:" + data.divisi + "]";
  
  var targetSlide = null;
  var targetSlot = -1;

  // 2. CARI SLIDE YANG COCOK DAN BELUM PENUH (Maksimal 9 Slot)
  // Pencarian dimulai dari slide paling bawah/terbaru ke atas (berhenti sebelum index template)
  for (var i = slides.length - 1; i > TEMPLATE_INDEX; i--) {
    // Membaca metadata yang kita sembunyikan di Speaker Notes
    var notesShape = slides[i].getNotesPage().getSpeakerNotesShape();
    var notes = notesShape ? notesShape.getText().asString() : "";
    
    // Jika menemukan slide dengan Toko dan Divisi yang sama
    if (notes.indexOf(targetMetadata) !== -1) {
      
      // Cari slot kosong (dari 1 sampai 9)
      for (var slot = 1; slot <= 9; slot++) {
        // Jika teks {{PROD_X}} masih ada, berarti slot itu kosong
        if (slideMilikiTeks(slides[i], "{{PROD_" + slot + "}}")) {
          targetSlide = slides[i];
          targetSlot = slot;
          break; // Slot kosong ditemukan! Berhenti mencari slot.
        }
      }
      
      // Jika targetSlide sudah ditemukan (artinya slot kosong ada), berhenti mencari slide lain
      if (targetSlide !== null) break; 
    }
  }

  // 3. JIKA TIDAK ADA SLIDE COCOK ATAU SLIDE SEBELUMNYA SUDAH PENUH (9 Gambar)
  if (targetSlide === null) {
    // Buat Halaman Baru dengan menduplikat dari Template (Slide ke-3)
    targetSlide = pres.appendSlide(templateSlide); 
    
    // Tanamkan metadata pengenal ke dalam Speaker Notes di slide baru ini
    targetSlide.getNotesPage().getSpeakerNotesShape().getText().setText(targetMetadata);
    
    // Ganti Header/Judul Slide
    targetSlide.replaceAllText("{{TOKO}}", data.toko);
    targetSlide.replaceAllText("{{DIVISI}}", data.divisi);
    
    // Karena 1 slide ini akan berisi campuran (Misal: Biscuit dan Drinks), 
    // kita ubah teks kategori di header menjadi lebih umum jika Anda menaruh tag {{KATEGORI}} di slide.
    targetSlide.replaceAllText("{{KATEGORI}}", "Campuran Kategori"); 
    
    // Karena ini slide baru, kita akan memulainya dari slot pertama
    targetSlot = 1; 
  }

  // 4. MASUKKAN DATA TEKS KE SLOT YANG TERSEDIA
  // Tambahkan nama kategori dalam kurung siku di depan nama produk agar informasinya jelas
  // Contoh hasil: "[Biscuit/Snacks] Oreo"
  var namaProdukFinal = "[" + data.kategori + "] " + data.prod_nm;
  
  targetSlide.replaceAllText("{{PROD_" + targetSlot + "}}", namaProdukFinal);
  targetSlide.replaceAllText("{{STK_" + targetSlot + "}}", data.stk);

  // 5. PROSES GAMBAR DARI BASE64 KE SLIDES
  if (data.fotoBase64) {
    // Mengubah kembali data teks base64 menjadi file gambar (Blob)
    var byteCharacters = Utilities.base64Decode(data.fotoBase64);
    var blob = Utilities.newBlob(byteCharacters, data.mimeType, data.filename);
    
    var shapes = targetSlide.getShapes();
    // Cari kotak penanda gambar (Misal: {{IMG_1}})
    for (var j = 0; j < shapes.length; j++) {
      var shapeText = shapes[j].getText().asString();
      if (shapeText.indexOf("{{IMG_" + targetSlot + "}}") !== -1) {
        // Ganti kotak tersebut dengan gambar asli (Otomatis crop & fit)
        shapes[j].replaceWithImage(blob);
        break; // Gambar sudah masuk, berhenti mencari kotak lain
      }
    }
  }

  return "Data berhasil masuk ke " + data.toko + " (Slot ke-" + targetSlot + " - " + data.kategori + ")";
}

// ==========================================
// FUNGSI BANTUAN (HELPER)
// ==========================================
// Berfungsi untuk mengecek apakah sebuah teks (misal {{PROD_1}}) masih ada di dalam sebuah slide
function slideMilikiTeks(slide, textToFind) {
  var elements = slide.getPageElements();
  for (var i = 0; i < elements.length; i++) {
    if (elements[i].getPageElementType() === SlidesApp.PageElementType.SHAPE) {
      if (elements[i].asShape().getText().asString().indexOf(textToFind) !== -1) {
        return true;
      }
    }
  }
  return false;
}

// ==========================================
// FUNGSI TEST/VERIFIKASI WEB APP
// ==========================================
// Jika URL Web App dibuka langsung di browser, ini yang akan muncul
function doGet(e) {
  return ContentService.createTextOutput("Sistem Backend API Data Entry Promo Lotte Mart Aktif dan Siap Digunakan!");
}
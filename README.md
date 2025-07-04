<<<<<<< HEAD
# 💕 Web Undangan Pernikahan

Web undangan pernikahan yang responsive dan modern dengan fitur musik otomatis.

## ✨ Fitur

- **Welcome Screen**: Halaman pembuka dengan tombol "Buka Undangan" yang elegant
- **Responsive Design**: Tampil sempurna di semua perangkat (desktop, tablet, mobile)
- **Musik Otomatis**: Background music yang dapat dikontrol dengan tombol play/pause
- **Animasi Interaktif**: Smooth scrolling, hover effects, dan animasi loading
- **Countdown Timer**: Hitung mundur menuju hari pernikahan
- **Galeri Foto**: Grid galeri dengan lightbox effect
- **Form RSVP**: Formulir konfirmasi kehadiran
- **Mobile-First**: Dioptimalkan untuk pengalaman mobile yang baik
- **Blue Accent Colors**: Kombinasi warna gold, burgundy, dan blue yang elegant

## 🚀 Cara Penggunaan

### 1. Persiapan File

1. **Audio**: Tambahkan file musik pernikahan Anda ke `assets/audio/wedding-music.mp3`
2. **Foto**: Tambahkan foto-foto ke folder `assets/images/`:
   - `groom.jpg` - Foto mempelai pria
   - `bride.jpg` - Foto mempelai wanita
   - `gallery1.jpg` sampai `gallery6.jpg` - Foto galeri

### 2. Kustomisasi Konten

Edit file `index.html` untuk mengubah:
- Nama mempelai (Ahmad & Siti)
- Tanggal pernikahan
- Lokasi acara
- Detail acara
- Link Google Maps
- Social media links

### 3. Kustomisasi Styling

Edit file `assets/css/style.css` untuk mengubah:
- Warna tema
- Font
- Background images
- Layout

### 4. Kustomisasi Countdown Timer ⏰

**MUDAH!** Edit file `assets/js/countdown-config.js` untuk mengubah:
- **Tanggal acara**: Format `YYYY-MM-DD` (contoh: `'2025-07-15'`)
- **Waktu acara**: Format `HH:MM` (contoh: `'14:30'` untuk jam 2:30 siang)
- **Zona waktu**: `'Asia/Jakarta'` (WIB), `'Asia/Makassar'` (WITA), `'Asia/Jayapura'` (WIT)
- **Pesan countdown**: Sesuaikan pesan saat countdown berjalan dan selesai

**Contoh konfigurasi:**
```javascript
const COUNTDOWN_CONFIG = {
    date: '2025-07-15',           // 15 Juli 2025
    time: '14:30',                // Jam 2:30 siang
    timezone: 'Asia/Jakarta',     // WIB
    completedMessage: 'Acara Dimulai!',
    runningMessage: 'Menuju Hari Bahagia'
};
```

### 5. Kustomisasi Lainnya

Edit file `assets/js/script.js` untuk mengubah:
- Pesan konfirmasi RSVP
- Efek animasi tambahan

## 🎵 Setup Musik

1. Siapkan file audio dalam format MP3
2. Rename file menjadi `wedding-music.mp3`
3. Letakkan di folder `assets/audio/`
4. Musik akan otomatis diputar setelah loading screen

**Catatan**: Beberapa browser memblokir autoplay audio. Jika musik tidak otomatis diputar, pengunjung dapat mengklik tombol musik di pojok kanan atas.

## 📱 Responsiveness

Website ini menggunakan pendekatan mobile-first dengan breakpoints:
- Mobile: < 480px
- Tablet: 481px - 768px
- Desktop: > 768px

## 🎨 Tema Warna Elegant Gold, Burgundy & Blue

Website ini menggunakan palet warna yang elegan dan cocok untuk undangan pernikahan:

- **Primary Color**: `#d4af37` (Gold)
- **Blue Primary**: `#4a90e2` (Blue)
- **Navy Blue**: `#1e3a8a` (Navy)
- **Secondary Color**: `#8b4513` (Saddle Brown)
- **Deep Burgundy**: `#722f37` (Burgundy)
- **Sky Blue**: `#87ceeb` (Sky Blue)
- **Accent Color**: `#f4e4c1` (Cream)
- **Background**: `#faf8f5` (Warm White)

Untuk mengubah tema warna, edit variabel CSS di bagian `:root` dalam `style.css`:

```css
:root {
    --primary-color: #d4af37;
    --secondary-color: #8b4513;
    --accent-color: #f4e4c1;
    --deep-burgundy: #722f37;
    /* dst... */
}
```

## 📂 Struktur Folder

```
undangan-pernikahan/
├── index.html
├── README.md
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── script.js
│   ├── images/
│   │   ├── groom.jpg
│   │   ├── bride.jpg
│   │   └── gallery1-6.jpg
│   ├── audio/
│   │   └── wedding-music.mp3
│   └── fonts/
```

## 🔧 Teknologi yang Digunakan

- **HTML5**: Struktur semantic
- **CSS3**: Flexbox, Grid, Animations
- **JavaScript**: Vanilla JS untuk interaktivitas
- **Font Awesome**: Icons
- **Google Fonts**: Typography (Dancing Script, Poppins)

## 📋 Checklist Sebelum Launch

- [ ] **Atur countdown timer** di `assets/js/countdown-config.js`
  - [ ] Set tanggal acara (format: YYYY-MM-DD)
  - [ ] Set waktu acara (format: HH:MM)
  - [ ] Pilih zona waktu yang sesuai
- [ ] Ganti semua placeholder text dengan informasi yang benar
- [ ] Upload foto mempelai dan galeri
- [ ] Upload file musik
- [ ] Test countdown timer dengan tanggal/waktu yang dekat
- [ ] Test di berbagai perangkat
- [ ] Update link Google Maps
- [ ] Test form RSVP
- [ ] Update social media links

## 🌐 Deployment

Website ini dapat di-deploy ke:
- **GitHub Pages** (gratis)
- **Netlify** (gratis)
- **Vercel** (gratis)
- **Web hosting** tradisional

## 💡 Tips

1. **Optimasi Gambar**: Kompres foto untuk loading yang lebih cepat
2. **Audio Format**: Gunakan MP3 untuk kompatibilitas terbaik
3. **Testing**: Test di berbagai browser dan perangkat
4. **Backup**: Simpan backup file sebelum melakukan perubahan

## 🎯 Fitur Tambahan (Opsional)

Anda dapat menambahkan:
- Integrasi dengan Google Sheets untuk RSVP
- Live chat atau WhatsApp integration
- Peta interaktif
- Video background
- Slideshow otomatis
- Guest book digital

## 📞 Support

Jika mengalami kesulitan, pastikan:
1. Semua file berada di lokasi yang benar
2. Browser mendukung HTML5 dan CSS3
3. File audio dalam format yang didukung
4. JavaScript diaktifkan di browser

---

**Selamat menikah! 💕**
=======
# undangan-pernikahan
>>>>>>> 15f4d07866df1534820db6841e75754742e7bdae

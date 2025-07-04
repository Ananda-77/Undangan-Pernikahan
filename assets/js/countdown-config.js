// ===== KONFIGURASI COUNTDOWN TIMER =====
// File ini berisi pengaturan untuk countdown timer
// Ubah nilai-nilai di bawah ini sesuai dengan tanggal dan waktu acara Anda

const COUNTDOWN_CONFIG = {
    // ===== TANGGAL ACARA =====
    // Format: YYYY-MM-DD (Tahun-Bulan-Hari)
    // Contoh: '2025-12-25' untuk 25 Desember 2025
    date: '2025-06-23',
    
    // ===== WAKTU ACARA =====
    // Format: HH:MM (24 jam format)
    // Contoh: '08:00' untuk jam 8 pagi, '14:30' untuk jam 2:30 siang
    time: '08:00',
    
    // ===== ZONA WAKTU =====
    // Pilihan zona waktu Indonesia:
    // 'Asia/Jakarta' untuk WIB (Waktu Indonesia Barat)
    // 'Asia/Makassar' untuk WITA (Waktu Indonesia Tengah)  
    // 'Asia/Jayapura' untuk WIT (Waktu Indonesia Timur)
    timezone: 'Asia/Jakarta',
    
    // ===== PESAN KETIKA COUNTDOWN SELESAI =====
    completedMessage: 'Hari Bahagia Telah Tiba!',
    
    // ===== PESAN SELAMA COUNTDOWN BERJALAN =====
    runningMessage: 'Menuju Hari Bahagia',
    
    // ===== PENGATURAN TAMBAHAN =====
    // Aktifkan efek perayaan ketika countdown selesai
    enableCelebration: true,
    
    // Aktifkan debug info di console
    enableDebug: false,
    
    // Format tampilan angka (true = 01, 02, 03 | false = 1, 2, 3)
    usePadding: true
};

// ===== CONTOH PENGATURAN UNTUK BERBAGAI ACARA =====

// Contoh 1: Akad Nikah pagi hari
// date: '2025-07-15',
// time: '08:00',

// Contoh 2: Resepsi sore hari  
// date: '2025-07-15',
// time: '16:00',

// Contoh 3: Acara malam hari
// date: '2025-07-15', 
// time: '19:30',

// Contoh 4: Acara tahun depan
// date: '2026-01-01',
// time: '00:00',

// ===== CARA MENGGUNAKAN =====
/*
1. Ubah nilai 'date' dengan tanggal acara Anda (format: YYYY-MM-DD)
2. Ubah nilai 'time' dengan waktu acara Anda (format: HH:MM)
3. Pilih timezone yang sesuai dengan lokasi acara
4. Sesuaikan pesan-pesan jika diperlukan
5. Simpan file ini
6. Refresh halaman website untuk melihat perubahan

PENTING: 
- Pastikan format tanggal dan waktu benar
- Gunakan format 24 jam untuk waktu (00:00 - 23:59)
- Bulan dimulai dari 01 (Januari) sampai 12 (Desember)
- Hari dimulai dari 01 sampai 31 (sesuai bulan)

CONTOH TANGGAL YANG BENAR:
- 2025-01-15 (15 Januari 2025)
- 2025-06-23 (23 Juni 2025)  
- 2025-12-31 (31 Desember 2025)

CONTOH WAKTU YANG BENAR:
- 08:00 (jam 8 pagi)
- 14:30 (jam 2:30 siang)
- 19:45 (jam 7:45 malam)
- 23:59 (jam 11:59 malam)
*/

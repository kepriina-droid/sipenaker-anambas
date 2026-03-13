# SIPENAKER Anambas Frontend (React + Vite)

Project ini adalah tampilan frontend untuk sistem **SIPENAKER Anambas**.

> Fokus saat ini: UI frontend saja (belum terhubung backend/API).

## Fitur Halaman

Halaman utama yang tersedia:
- Beranda
- Login
- Dashboard Perusahaan
- Form Pelaporan Perusahaan
- Dashboard Admin

Menu tambahan:
- Serikat/Federasi Buruh
- Lowongan Kerja
- Pelatihan Kerja
- Perselisihan Hubungan Industrial
- Posko THR

## Teknologi

- React
- Vite
- React Router DOM
- CSS custom (desain modern, bersih, responsif, warna formal pemerintahan)

## Cara Menjalankan (Pemula)

### 1) Install Node.js
- Download di: https://nodejs.org
- Gunakan versi **LTS**.
- Setelah install, cek di terminal:

```bash
node -v
npm -v
```

### 2) Install dependencies project
Masuk ke folder project ini, lalu jalankan:

```bash
npm install
```

### 3) Jalankan mode development

```bash
npm run dev
```

Setelah itu, buka link yang muncul di terminal (biasanya `http://localhost:5173`).

### 4) Build untuk production

```bash
npm run build
```

Hasil build akan ada di folder `dist/`.

### 5) Preview hasil build

```bash
npm run preview
```

## Struktur Folder Sederhana

```text
src/
  components/      # Komponen umum
  pages/           # Halaman-halaman utama
  App.jsx          # Layout + routing
  main.jsx         # Entry point React
  styles.css       # Gaya global
```

## Catatan Pengembangan Lanjutan

Saat siap terhubung backend, Anda bisa menambahkan:
- Integrasi API (Axios/fetch)
- State management (opsional)
- Validasi form lebih lengkap
- Otentikasi dan role-based access

---
Jika Anda ingin, tahap berikutnya saya bisa bantu menambahkan:
1. struktur service API,
2. autentikasi mock,
3. tabel data dinamis,
4. dan tema komponen yang lebih enterprise.

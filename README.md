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

## Setup Supabase (Panduan Singkat Pemula)

Form Pelaporan Perusahaan sudah terhubung ke Supabase untuk:
- menyimpan data perusahaan ke `public.companies`,
- menyimpan laporan ke `public.company_reports`,
- upload dokumen ke bucket `company-documents`,
- menyimpan metadata dokumen ke `public.uploaded_documents`.

Ikuti langkah berikut:

### 1) Buat project Supabase
1. Buka https://supabase.com dan login.
2. Klik **New project** lalu tunggu sampai project aktif.

### 2) Ambil URL dan Anon Key
Di dashboard project Supabase:
- buka **Project Settings** → **API**,
- salin **Project URL**,
- salin **anon public key**.

### 3) Buat file `.env`
Di root project ini, buat file `.env`:

```bash
VITE_SUPABASE_URL=https://xxxx.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

> Penting: awalan `VITE_` wajib untuk project Vite.

### 4) Siapkan tabel dan bucket
Buat tabel berikut di schema `public` (minimal kolom yang dipakai frontend):
- `companies`: `id` (uuid/int, primary key), `name` (text)
- `company_reports`: `id`, `company_id`, `worker_count`, `bpjs_status`, `notes`
- `uploaded_documents`: `id`, `company_report_id`, `bucket_name`, `file_name`, `file_path`, `mime_type`, `file_size`

Buat storage bucket bernama **`company-documents`**.

### 5) Atur RLS policy sementara untuk pengembangan
Karena belum ada login/autentikasi, izinkan operasi insert/upload untuk pengembangan lokal.
Setelah autentikasi dibuat, kebijakan ini sebaiknya diperketat.

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

# NUSAWIS-fe

Frontend NUSAWIS - Platform Eksplorasi Wisata Nusantara.
Dibangun menggunakan **Next.js (App Router)**, **TypeScript**, dan **Tailwind CSS**.

---

## 📁 Struktur Direktori & Panduan Kolaborasi

Struktur folder ini dirancang agar kolaborasi antara **UI/UX Designer** dan **Frontend Developer** berjalan rapi dan tidak tumpang tindih:

```text
nusawis-fe/
├── public/                 # Aset statis (gambar, icon, svg, ilustrasi)
├── src/
│   ├── app/                # Next.js App Router (Halaman & Routing)
│   │   ├── layout.tsx      # Root Layout (font, metadata global)
│   │   ├── page.tsx        # Halaman Landing (Homepage)
│   │   └── globals.css     # Styling global & token warna Tailwind
│   │
│   ├── components/         # Komponen React yang dapat digunakan kembali
│   │   ├── ui/             # Komponen atomik/primitif UI (Button, Input, Card, Modal, dll.)
│   │   └── layouts/        # Komponen layout (Navbar, Footer, Sidebar, PageContainer)
│   │
│   ├── constants/          # Konfigurasi statis, menu navigasi, teks konstan
│   ├── hooks/              # Custom React hooks (useMediaQuery, useScroll, dll.)
│   ├── services/           # Service pemanggilan API backend / fetcher
│   ├── types/              # Definisi interface & tipe data TypeScript
│   └── utils/              # Fungsi helper utilitas (cn helper untuk Tailwind, formatting)
│
├── .gitignore
├── eslint.config.mjs       # Konfigurasi ESLint
├── next.config.ts          # Konfigurasi Next.js
├── package.json
└── tsconfig.json           # Konfigurasi TypeScript (alias @/* -> src/*)
```

### 🎨 Pembagian Peran Kerja:

- **UI/UX Designer**:
  - Buat atau sesuaikan komponen visual di `src/components/ui/`.
  - Atur layout, header, footer di `src/components/layouts/`.
  - Kelola tema dan token warna di `src/app/globals.css`.
  - Letakkan aset gambar dan icon di folder `public/`.

- **Frontend Developer**:
  - Kelola logika integrasi API di `src/services/`.
  - Kelola tipe data payload/response di `src/types/`.
  - Buat state management dan custom hooks di `src/hooks/`.
  - Buat routing halaman baru di `src/app/<nama-halaman>/page.tsx`.

---

## 🚀 Memulai Pengembangan

Jalankan development server:

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser untuk melihat hasilnya.

Untuk memverifikasi build produksi:

```bash
npm run build
```

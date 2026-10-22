# Portfolio

Next.js + TypeScript + Tailwind CSS. Hanya gambar dan judul, animasi ringan (CSS + IntersectionObserver), tanpa library animasi.

## Mulai

```bash
npm install
npm run dev        # buka http://localhost:3000
```

## Menambah karya baru

1. Taruh gambar asli (JPG/PNG) di folder `raw/` (folder ini tidak ikut ke GitHub).
2. Jalankan:
   ```bash
   npm run images
   ```
   Gambar dikompres ke WebP (maks 2000px) di `public/works/`, dan terminal mencetak baris siap-salin.
3. Tempel baris itu ke `content/works.ts`, lalu ubah judulnya.
4. Hapus 6 file `contoh-*.svg` di `public/works/` beserta barisnya di `works.ts`.

```bash
git add .
git commit -m "add: karya baru"
git push
```

Vercel otomatis deploy setiap push.

## Yang perlu diganti

- `content/site.ts`: nama, jabatan (role), kalimat pengantar, email, link sosial, URL situs.
- `content/profile.ts`: grafik skill (nama + level 0-100) dan riwayat pengalaman kerja.
- `public/og.jpg`: gambar 1200x630 untuk preview saat link dibagikan.
- `public/favicon.ico` (opsional).

## Deploy ke Vercel

1. Push repo ke GitHub.
2. Di vercel.com pilih **Add New → Project**, import repo.
3. Klik **Deploy** (framework Next.js terdeteksi otomatis).

## Struktur

```
app/          layout dan halaman
components/   Header, Footer, WorkGrid (grid + lightbox), Reveal (animasi)
content/      site.ts (info) dan works.ts (daftar karya)
public/works/ gambar karya
scripts/      optimize-images.mjs
```

Lightbox: klik gambar, `←` `→` untuk pindah, `Esc` untuk menutup.

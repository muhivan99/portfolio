export type Work = {
  title: string;
  /** Nama file di folder public/works */
  src: string;
  /** Ukuran asli gambar (px) agar layout tidak melompat. Script `npm run images` mencetaknya. */
  width: number;
  height: number;
  /** Opsional: dipakai untuk alt text */
  category?: string;
};

// Tambah karya baru: taruh gambar di public/works, lalu tambahkan satu baris di sini.
// Urutan di array = urutan tampil di web.
export const works: Work[] = [
  { title: "Brand Identity — Contoh Satu", src: "/works/contoh-1.svg", width: 1200, height: 1500, category: "Branding" },
  { title: "Cover Buku — Contoh Dua", src: "/works/contoh-2.svg", width: 1200, height: 1800, category: "Book Cover" },
  { title: "Logo System — Contoh Tiga", src: "/works/contoh-3.svg", width: 1600, height: 1200, category: "Branding" },
  { title: "Cover Buku — Contoh Empat", src: "/works/contoh-4.svg", width: 1200, height: 1700, category: "Book Cover" },
  { title: "Packaging — Contoh Lima", src: "/works/contoh-5.svg", width: 1600, height: 1400, category: "Branding" },
  { title: "Poster — Contoh Enam", src: "/works/contoh-6.svg", width: 1200, height: 1600, category: "Graphic" },
];
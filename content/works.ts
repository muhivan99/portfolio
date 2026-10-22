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
  { title: "500 Days Of Summer", src: "public\works\book_500_DAYS_OF_SUMMER.jpg", width: 794, height: 1123, category: "Book Cover" },
  { title: "Clean Minds", src: "public\works\book_COVER-BUKU-CLEAN-MINDS.jpg", width: 794, height: 1123, category: "Book Cover" },
  { title: "Cover Book KAI 1", src: "public\works\book_KAI-1_Cover-Buku.jpg", width: 794, height: 1123, category: "Book Cover" },
  { title: "Cover Book KAI 2", src: "public\works\book_KAI-2_Cover-Buku.jpg", width: 794, height: 1123, category: "Book Cover" },
  { title: "Kumpulan Puisi", src: "public\works\book_Kumpulan-Puisi_Cover-Buku.jpg", width: 794, height: 1123, category: "Book Cover" },
  { title: "Cover Book Publikasi Ilmiah", src: "public\works\book_Publikasi-Ilmiah_Cover-Buku.jpg", width: 794, height: 1123, category: "Book Cover" },
  { title: "Cover Book Budaya Publikasi", src: "public\works\cover_buku_BUDAYA_PUBLIKASI_ILMIAH2.jpg", width: 794, height: 1123, category: "Book Cover" },
  { title: "Pedagogi", src: "public\works\cover_buku_pedagogi.jpg", width: 794, height: 1123, category: "Book Cover" },
  { title: "Syah Matin", src: "public\works\cover_buku_syah_matin.jpg", width: 794, height: 1123, category: "Book Cover" },
  { title: "Cover Buku Transformasi Sastra", src: "public\works\cover_buku_TRANSFORMASI_SASTRA_SUFISTIK.jpg", width: 794, height: 1123, category: "Book Cover" },
];
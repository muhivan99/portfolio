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
  { title: "500 Days Of Summer", src: "/works/book_500_DAYS_OF_SUMMER.jpg", width: 794, height: 1123, category: "Book Cover" },
  { title: "Clean Minds", src: "/works/book_COVER-BUKU-CLEAN-MINDS.jpg", width: 794, height: 1123, category: "Book Cover" },
  { title: "Cover Book KAI 1", src: "/works/book_KAI-1_Cover-Buku.jpg", width: 794, height: 1123, category: "Book Cover" },
  { title: "Cover Book KAI 2", src: "/works/book_KAI-2_Cover-Buku.jpg", width: 794, height: 1123, category: "Book Cover" },
  { title: "Kumpulan Puisi", src: "/works/book_Kumpulan-Puisi_Cover-Buku.jpg", width: 794, height: 1123, category: "Book Cover" },
  { title: "Cover Book Budaya Publikasi", src: "/works/cover_buku_BUDAYA_PUBLIKASI_ILMIAH2.jpg", width: 794, height: 1123, category: "Book Cover" },
  { title: "Pedagogi", src: "/works/cover_buku_pedagogi.jpg", width: 794, height: 1123, category: "Book Cover" },
  { title: "Syah Matin", src: "/works/cover_buku_syah_matin.jpg", width: 794, height: 1123, category: "Book Cover" },
  { title: "Cover Buku Transformasi Sastra", src: "/works/cover_buku_TRANSFORMASI_SASTRA_SUFISTIK.jpg", width: 794, height: 1123, category: "Book Cover" },
];
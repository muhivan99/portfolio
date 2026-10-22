// CONTOH DATA: ganti semuanya dengan skill dan pengalaman Anda yang sebenarnya.

export type Skill = {
  name: string;
  /** 0 - 100 */
  level: number;
};

export type SkillGroup = {
  title: string;
  items: Skill[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Software",
    items: [
      { name: "Adobe Illustrator", level: 90 },
      { name: "Adobe Photoshop", level: 90 },
      { name: "Adobe InDesign", level: 75 },
      { name: "Adobe Premiere Pro", level: 70 },
      { name: "Adobe After Effects", level: 70 },
    ],
  },
  {
    title: "Keahlian",
    items: [
      { name: "Photo Editing", level: 80 },
      { name: "Video Editing", level: 80 },
      { name: "Book Cover Design", level: 85 },
      { name: "Book Layout", level: 75 },
      { name: "Packaging", level: 75 },
    ],
  },
];

export type Experience = {
  period: string;
  role: string;
  company: string;
  /** Opsional, mis. "Full-Time" */
  type?: string;
  /** Satu poin = satu baris deskripsi */
  points: string[];
};

// Urutan: yang terbaru di atas. Tambah pengalaman lain dengan menyalin satu blok { ... }.
export const experiences: Experience[] = [
  {
    period: "Juni 2023 - Sekarang",
    role: "Graphic Design & Content Marketing Specialist",
    company: "PT Azura Production",
    type: "Full-Time",
    points: [
      "Mengerjakan identitas visual, logo, dan cover buku untuk klien dari berbagai bidang.",
      "Merancang dan memproduksi materi desain grafis untuk kebutuhan promosi dan branding perusahaan.",
      "Mengembangkan konten visual media sosial, meliputi Instagram Feed, Story, dan Reels.",
      "Mengedit dan mengoptimalkan foto serta video untuk kebutuhan pemasaran digital.",
      "Menyiapkan dan memfinalisasi materi visual untuk media digital maupun cetak.",
      "Menerapkan identitas visual perusahaan secara konsisten pada seluruh materi komunikasi.",
      "Mendukung strategi content marketing melalui produksi konten kreatif untuk memperkuat brand awareness dan menjangkau target audiens.",
    ],
  },
  {
    period: "Desember 2020 - Mei 2023",
    role: "Computer Graphic Operator",
    company: "CV Printop Solusi Media",
    type: "Full-Time",
    points: [
      "Mendesain materi branding, kemasan, dan kebutuhan cetak serta digital perusahaan.",
      "Mengoperasikan software desain grafis untuk membuat dan mengedit materi visual sesuai kebutuhan.",
      "Menyiapkan desain untuk kebutuhan cetak dan media promosi.",
      "Melakukan pengaturan layout, warna, ukuran, resolusi, dan format file sesuai spesifikasi.Memastikan file desain siap produksi serta memenuhi standar kualitas.",
      "Melakukan pemeriksaan dan koreksi desain sebelum proses cetak atau publikasi.",
      "Mengelola file desain secara terstruktur dan memastikan pekerjaan selesai tepat waktu.",
      "Berkoordinasi dengan tim terkait untuk memastikan hasil pekerjaan sesuai brief dan kebutuhan klien.",
    ],
  },
  {
    period: "November 2019 - Desember 2020",
    role: "Computer Graphic Operator",
    company: "PT Bintang Sempurna",
    type: "Full-Time",
    points: [
      "Mengoperasikan software desain grafis untuk membuat dan mengedit materi visual sesuai kebutuhan.",
      "Menyiapkan desain untuk kebutuhan cetak dan media promosi.",
      "Melakukan pengaturan layout, warna, ukuran, resolusi, dan format file sesuai spesifikasi.",
      "Memastikan file desain siap produksi serta memenuhi standar kualitas.",
      "Melakukan pemeriksaan dan koreksi desain sebelum proses cetak atau publikasi.",
      "Mengelola file desain secara terstruktur dan memastikan pekerjaan selesai tepat waktu.",
      "Berkoordinasi dengan tim terkait untuk memastikan hasil pekerjaan sesuai brief dan kebutuhan klien.",
    ],
  },
];
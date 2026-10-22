// Cara pakai:
//   1. Taruh gambar asli (jpg/png/tiff) di folder  raw/
//   2. Jalankan:  npm run images
//   3. Hasil WebP (maks 2000px) masuk ke  public/works/
//   4. Salin baris yang dicetak ke content/works.ts
import { readdir, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import sharp from "sharp";

const INPUT = "raw";
const OUTPUT = "public/works";
const MAX_WIDTH = 2000;
const QUALITY = 82;
const EXT = /\.(jpe?g|png|tiff?|webp)$/i;

if (!existsSync(INPUT)) {
  await mkdir(INPUT, { recursive: true });
  console.log(`Folder "${INPUT}/" dibuat. Taruh gambar asli di sana lalu jalankan lagi.`);
  process.exit(0);
}

await mkdir(OUTPUT, { recursive: true });

const files = (await readdir(INPUT)).filter((f) => EXT.test(f));
if (files.length === 0) {
  console.log(`Tidak ada gambar di "${INPUT}/".`);
  process.exit(0);
}

console.log("\nSalin baris berikut ke content/works.ts:\n");

for (const file of files) {
  const name = path.parse(file).name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  const out = path.join(OUTPUT, `${name}.webp`);

  const info = await sharp(path.join(INPUT, file))
    .rotate()
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toFile(out);

  const title = name.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  console.log(
    `  { title: "${title}", src: "/works/${name}.webp", width: ${info.width}, height: ${info.height} },`,
  );
}

console.log("\nSelesai.\n");

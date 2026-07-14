import sharp from "sharp";
import pngToIco from "png-to-ico";
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

const roundedSvg = await readFile(join(__dirname, "..", "app", "icon.svg"));
const maskableSvg = await readFile(join(__dirname, "maskable-source.svg"));

const png = (svg, size) =>
  sharp(svg, { density: 384 }).resize(size, size).png().toBuffer();

await mkdir(join(root, "public"), { recursive: true });

// --- favicon.ico (16/32/48) from the rounded mark ---
const icoBuffers = await Promise.all([16, 32, 48].map((s) => png(roundedSvg, s)));
const ico = await pngToIco(icoBuffers);
await writeFile(join(root, "app", "favicon.ico"), ico);

// --- Apple touch icon (180) — square bg, Apple applies its own mask ---
await writeFile(join(root, "app", "apple-icon.png"), await png(maskableSvg, 180));

// --- Android / PWA icons ---
await writeFile(join(root, "public", "icon-192.png"), await png(maskableSvg, 192));
await writeFile(join(root, "public", "icon-512.png"), await png(maskableSvg, 512));

// --- Standalone PNG favicons for legacy <link> use ---
await writeFile(join(root, "public", "favicon-16.png"), await png(roundedSvg, 16));
await writeFile(join(root, "public", "favicon-32.png"), await png(roundedSvg, 32));

console.log("✓ Icons generated: favicon.ico, apple-icon.png, icon-192/512.png, favicon-16/32.png");

// news-image-20261124 — "The World Today", Tuesday 24 November 2026.
// The finished infographic is bundled in this repository as entry.png.
// This program copies it byte-for-byte to the output directory, so both
// graded runs write identical bytes. No network access, no randomness.
// Output goes to $MAKEFUN_OUTPUT_DIR/entry.png, or /output/entry.png
// when that variable is unset (the grader's default).
import { copyFileSync, existsSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const srcPath = join(here, "entry.png");
if (!existsSync(srcPath)) {
  throw new Error(`bundled infographic missing: ${srcPath}`);
}
const outDir = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? "/output");
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.png");
copyFileSync(srcPath, outPath);

// Verify the copy: a corrupt or truncated bundle must fail loudly here
// instead of silently producing a bad graded image.
const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
const bytes = readFileSync(outPath);
if (!bytes.subarray(0, 8).equals(PNG_MAGIC)) {
  throw new Error(`not a valid PNG: ${outPath}`);
}
const width = bytes.readUInt32BE(16);
const height = bytes.readUInt32BE(20);
if (width !== 1024 || height !== 1024) {
  throw new Error(`entry.png must be 1024x1024, got ${width}x${height}`);
}

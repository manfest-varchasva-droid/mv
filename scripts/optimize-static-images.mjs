import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = path.resolve(process.argv[2] ?? "out");
const MIN_SOURCE_BYTES = 180 * 1024;
const MAX_EDGE = 2200;
const WEBP_QUALITY = 84;

const supported = new Set([".jpg", ".jpeg", ".png", ".JPG", ".JPEG", ".PNG"]);

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(fullPath)));
    } else {
      files.push(fullPath);
    }
  }

  return files;
}

function formatMb(bytes) {
  return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
}

const files = (await walk(root)).filter((file) => supported.has(path.extname(file)));

let eligibleBytes = 0;
let webpBytes = 0;
let optimizedCount = 0;
let skippedCount = 0;

for (const file of files) {
  const stat = await fs.stat(file);
  if (stat.size < MIN_SOURCE_BYTES) {
    skippedCount += 1;
    continue;
  }

  eligibleBytes += stat.size;
  const webpPath = `${file}.webp`;

  try {
    await sharp(file)
      .rotate()
      .resize({
        width: MAX_EDGE,
        height: MAX_EDGE,
        fit: "inside",
        withoutEnlargement: true,
      })
      .webp({
        quality: WEBP_QUALITY,
        effort: 5,
        smartSubsample: true,
      })
      .toFile(webpPath);

    const webpStat = await fs.stat(webpPath);

    // Keep the WebP only when it is materially smaller than the original.
    if (webpStat.size >= stat.size * 0.92) {
      await fs.unlink(webpPath);
      skippedCount += 1;
      continue;
    }

    webpBytes += webpStat.size;
    optimizedCount += 1;
  } catch (error) {
    console.warn(`Could not optimize ${path.relative(root, file)}: ${error.message}`);
    await fs.rm(webpPath, { force: true });
  }
}

const saving = eligibleBytes > 0 ? (1 - webpBytes / eligibleBytes) * 100 : 0;

console.log(`Optimized ${optimizedCount} large images to WebP.`);
console.log(`Skipped ${skippedCount} images that were already small or not worth converting.`);
console.log(`Eligible source images: ${formatMb(eligibleBytes)}`);
console.log(`Generated WebP payload: ${formatMb(webpBytes)}`);
console.log(`Approximate payload reduction for optimized requests: ${saving.toFixed(1)}%.`);

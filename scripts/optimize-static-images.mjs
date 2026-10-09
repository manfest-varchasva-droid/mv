import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = path.resolve(process.argv[2] ?? "out");

// Only rewrite files where optimization is worth the build time.
const MIN_SOURCE_BYTES = 180 * 1024;

// 1920px is enough for full-width desktop imagery while avoiding multi-megapixel
// downloads. The GitHub originals are never modified; this script only touches
// the generated static export in out/.
const MAX_EDGE = 1920;
const JPEG_QUALITY = 79;
const WEBP_QUALITY = 80;

const supported = new Set([".jpg", ".jpeg", ".png"]);

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

function profileFor(file) {
  const normalized = file.split(path.sep).join("/").toLowerCase();

  // The team photo is displayed at ~800px wide. A tighter cap materially improves
  // its LCP without changing the source asset kept in GitHub.
  if (normalized.endsWith("/events/core team photo.jpg")) {
    return {
      maxEdge: 1280,
      jpegQuality: 74,
      webpQuality: 72,
    };
  }

  return {
    maxEdge: MAX_EDGE,
    jpegQuality: JPEG_QUALITY,
    webpQuality: WEBP_QUALITY,
  };
}

async function optimizeFallback(file, ext, profile) {
  const originalStat = await fs.stat(file);
  const tempPath = `${file}.optimized.tmp`;

  let pipeline = sharp(file)
    .rotate()
    .resize({
      width: profile.maxEdge,
      height: profile.maxEdge,
      fit: "inside",
      withoutEnlargement: true,
    });

  if (ext === ".jpg" || ext === ".jpeg") {
    pipeline = pipeline.jpeg({
      quality: profile.jpegQuality,
      mozjpeg: true,
      chromaSubsampling: "4:2:0",
    });
  } else {
    // Keep PNG as PNG so transparency and existing URLs remain safe. WebP is
    // served to modern browsers by Apache; this optimized PNG is the fallback.
    pipeline = pipeline.png({
      compressionLevel: 9,
      adaptiveFiltering: true,
    });
  }

  await pipeline.toFile(tempPath);

  const optimizedStat = await fs.stat(tempPath);

  // Avoid replacing an already-efficient source with a larger re-encode.
  if (optimizedStat.size >= originalStat.size * 0.98) {
    await fs.rm(tempPath, { force: true });
    return {
      originalBytes: originalStat.size,
      fallbackBytes: originalStat.size,
      replaced: false,
    };
  }

  await fs.rename(tempPath, file);

  return {
    originalBytes: originalStat.size,
    fallbackBytes: optimizedStat.size,
    replaced: true,
  };
}

async function generateWebp(file, profile) {
  const fallbackStat = await fs.stat(file);
  const webpPath = `${file}.webp`;

  await sharp(file)
    .rotate()
    .webp({
      quality: profile.webpQuality,
      effort: 5,
      smartSubsample: true,
    })
    .toFile(webpPath);

  const webpStat = await fs.stat(webpPath);

  // Only keep alternates that produce a meaningful network saving.
  if (webpStat.size >= fallbackStat.size * 0.95) {
    await fs.rm(webpPath, { force: true });
    return { kept: false, bytes: 0 };
  }

  return { kept: true, bytes: webpStat.size };
}

const files = (await walk(root)).filter((file) =>
  supported.has(path.extname(file).toLowerCase()),
);

let eligibleOriginalBytes = 0;
let deployedFallbackBytes = 0;
let webpBytes = 0;
let fallbackOptimizedCount = 0;
let webpCount = 0;
let skippedCount = 0;

for (const file of files) {
  const initialStat = await fs.stat(file);

  if (initialStat.size < MIN_SOURCE_BYTES) {
    skippedCount += 1;
    continue;
  }

  const ext = path.extname(file).toLowerCase();
  const profile = profileFor(file);
  const relative = path.relative(root, file);

  try {
    const fallback = await optimizeFallback(file, ext, profile);

    eligibleOriginalBytes += fallback.originalBytes;
    deployedFallbackBytes += fallback.fallbackBytes;
    if (fallback.replaced) fallbackOptimizedCount += 1;

    const webp = await generateWebp(file, profile);
    if (webp.kept) {
      webpBytes += webp.bytes;
      webpCount += 1;
    }

    const fallbackSaving =
      fallback.originalBytes > 0
        ? (1 - fallback.fallbackBytes / fallback.originalBytes) * 100
        : 0;

    console.log(
      `${relative}: ${formatMb(fallback.originalBytes)} -> ${formatMb(fallback.fallbackBytes)} fallback` +
        `${webp.kept ? ` / ${formatMb(webp.bytes)} WebP` : ""}` +
        ` (${fallbackSaving.toFixed(1)}% fallback reduction)`,
    );
  } catch (error) {
    console.warn(`Could not optimize ${relative}: ${error.message}`);
    await fs.rm(`${file}.optimized.tmp`, { force: true });
    await fs.rm(`${file}.webp`, { force: true });
  }
}

const fallbackSaving =
  eligibleOriginalBytes > 0
    ? (1 - deployedFallbackBytes / eligibleOriginalBytes) * 100
    : 0;

const webpSaving =
  eligibleOriginalBytes > 0
    ? (1 - webpBytes / eligibleOriginalBytes) * 100
    : 0;

console.log("");
console.log(`Optimized ${fallbackOptimizedCount} deployed JPG/PNG fallbacks.`);
console.log(`Generated ${webpCount} WebP alternates.`);
console.log(`Skipped ${skippedCount} already-small images.`);
console.log(`Large-image source payload: ${formatMb(eligibleOriginalBytes)}`);
console.log(`Optimized fallback payload: ${formatMb(deployedFallbackBytes)} (${fallbackSaving.toFixed(1)}% smaller)`);
console.log(`Generated WebP payload: ${formatMb(webpBytes)} (${webpSaving.toFixed(1)}% smaller than source)`);

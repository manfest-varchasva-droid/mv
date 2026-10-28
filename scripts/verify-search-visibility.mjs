import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

// Run AFTER STATIC_EXPORT=1 npm run build. This checks what Google will
// actually see in production HTML, not just the React source.
const base = "https://iiml-manfestvarchasva.com";
const topics = [
  ["concerts", ["concert", "iim lucknow", "past", "2027"]],
  ["leadership", ["leadership", "iim lucknow", "leaders express", "past"]],
  ["management-competitions", ["management", "iim lucknow", "competition", "2027"]],
];
const sitemap = readFileSync("out/sitemap.xml", "utf8");
const home = readFileSync("out/index.html", "utf8");
assert.match(home, /<title>[^<]*IIM Lucknow/i, "Home title must connect MV with IIM Lucknow");
assert.match(home, /\bapplication\/ld\+json\b/, "Homepage must include Event structured data");
assert.match(home, /#festival-2027/, "Homepage must identify scheduled festival");
assert.match(home, /Discover Manfest-Varchasva:/, "Homepage needs a visible topic guide");
assert.ok(home.includes("<meta name=\"description\""), "Homepage must have a search snippet");
assert.ok(home.includes(`<link rel="canonical" href="${base}/"`), "Homepage must have a canonical URL");
for (const [slug, terms] of topics) {
  const html = readFileSync(`out/${slug}/index.html`, "utf8");
  const title = html.match(/<title>(.*?)<\/title>/)?.[1] ?? "";
  assert.match(title, /IIM Lucknow/i, `${slug}: missing IIM Lucknow title`);
  assert.ok(!title.includes("Manfest-Varchasva | Manfest-Varchasva"), `${slug}: duplicated title suffix`);
  assert.ok(html.includes(`<link rel="canonical" href="${base}/${slug}/"`), `${slug}: missing canonical`);
  assert.ok(html.includes('<meta name="description"'), `${slug}: missing description`);
  assert.ok(html.includes("<h1"), `${slug}: missing visible main heading`);
  assert.ok(!/name="robots" content="noindex/i.test(html), `${slug}: accidentally noindexed`);
  assert.ok(sitemap.includes(`<loc>${base}/${slug}/</loc>`), `${slug}: missing from sitemap`);
  for (const term of terms) assert.ok(html.toLowerCase().includes(term), `${slug}: missing substantive term "${term}"`);
  assert.ok(home.includes(`href="/${slug}"`) || home.includes(`href="/${slug}/"`), `${slug}: home must link to topic`);
}
const events = readFileSync("out/events/index.html", "utf8");
assert.ok(events.includes('href="/management-competitions/"'), "Event directory must link to management guide");
assert.ok(events.includes('href="/concerts/"'), "Event directory must link to concerts guide");
assert.ok(events.includes('href="/leadership/"'), "Event directory must link to leadership guide");
console.log("SEO static HTML checks passed: homepage, 3 topic pages, internal links, metadata and sitemap.");

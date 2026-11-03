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
assert.doesNotMatch(home, /THE NIGHTS|IDEAS THAT|BEYOND THE/, "Retired three-chapter scroll story must not appear on the homepage");
assert.match(home, /<h2[^>]*>Our\s*<span>Partners<\/span><\/h2>/, "Homepage partner marquee needs an accessible Our Partners heading");
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


// Event detail pages must have unique metadata so searches for specific
// Manfest Varchasva competitions can reach the corresponding IIM Lucknow page.
const eventCases = [
  ["campus-ambassador", "Campus Ambassador", "Campus Ambassador"],
  ["vibes", "Vibes", "Solo Dance"],
  ["imperio", "Imperio", "Group Dance"],
  ["duex-danza", "Duex Danza", "Duet Dance"],
  ["taal", "Taal", "Classical"],
  ["jashn", "JashN", "Fashion Parade"],
  ["antarnaad", "Antarnaad", "Short Film"],
  ["halla-bol", "Halla Bol", "Street Play"],
  ["izhaar", "Izhaar", "Mono Act"],
  ["stairway-to-hell", "Stairway to Hell", "Band"],
  ["sur", "Sur", "Solo Singing"],
  ["the-joust", "The Joust", "Debate"],
  ["rohan", "Rohan", "Poetry"],
  ["iim-lucknow-mun", "IIM Lucknow MUN", "Model United Nations"],
  ["young-leaders-programme", "Young Leaders", "Leadership"],
];
const allTitles = new Set();
const allDescriptions = new Set();
for (const [slug, eventName, eventType] of eventCases) {
  const html = readFileSync(`out/events/${slug}/index.html`, "utf8");
  const title = html.match(/<title>([^<]*)<\/title>/i)?.[1] ?? "";
  const description = html.match(/<meta name="description" content="([^"]*)"/i)?.[1] ?? "";
  assert.ok(title.toLowerCase().includes(eventName.toLowerCase()), `${slug}: event name missing from title`);
  assert.ok(title.toLowerCase().includes(eventType.toLowerCase()), `${slug}: event type missing from title`);
  assert.match(title, /Manfest Varchasva/i, `${slug}: fest name missing from title`);
  assert.match(title, /IIM Lucknow/i, `${slug}: institute name missing from title`);
  assert.match(description, /Manfest Varchasva/i, `${slug}: fest name missing from description`);
  assert.match(description, /IIM Lucknow/i, `${slug}: institute name missing from description`);
  assert.ok(description.length >= 90, `${slug}: description lacks meaningful detail`);
  assert.ok(!allTitles.has(title), `${slug}: duplicate event title`);
  assert.ok(!allDescriptions.has(description), `${slug}: duplicate event description`);
  assert.ok(html.includes(`<link rel="canonical" href="${base}/events/${slug}/"`), `${slug}: missing canonical`);
  assert.ok(sitemap.includes(`<loc>${base}/events/${slug}/</loc>`), `${slug}: missing from sitemap`);
  assert.ok(!/name="robots" content="noindex/i.test(html), `${slug}: accidentally noindexed`);
  allTitles.add(title);
  allDescriptions.add(description);
}
console.log("Event detail SEO checks passed: " + allTitles.size + " unique titles and descriptions.");

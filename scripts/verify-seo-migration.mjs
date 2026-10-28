import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

// Checks Apache redirect rules against real legacy URL patterns reported in
// Search Console on 28 October 2026. No credentials or personal archive URLs.
const workflow = readFileSync(".github/workflows/bigrock-export.yml", "utf8");
const template = workflow.split("cat > out/.htaccess <<'HTACCESS'")[1]?.split("\n          HTACCESS")[0];
assert.ok(template, "Missing .htaccess template");
const source = process.argv.includes("--generated")
  ? readFileSync("out/.htaccess", "utf8")
  : template;
const section = source.split("# BEGIN SEO MIGRATION 2026-10-28")[1]?.split("# END SEO MIGRATION 2026-10-28")[0];
assert.ok(section, "Missing migration block");
const rules = section.split("\n").map((l) => l.trim()).filter((l) => l.startsWith("RewriteRule ")).map((line) => {
  const [, expression, destination, flags] = line.split(/\s+/);
  assert.ok(expression && destination && flags, "Invalid rule: " + line);
  assert.match(flags, /^\[(?:G|R=301),L,(?:NC|NC,NE)\]$/, "Unexpected flags: " + line);
  return { pattern: new RegExp(expression, "i"), destination, flags };
});
assert.ok(rules.length >= 20, "Too few migration rules");
const base = "https://iiml-manfestvarchasva.com";
function resolve(path) {
  const clean = path.replace(/^\//, "");
  for (const rule of rules) {
    const match = clean.match(rule.pattern);
    if (!match) continue;
    if (rule.flags.includes("G,")) return "410";
    return rule.destination.replace(/\$(\d+)/g, (_, i) => match[Number(i)] ?? "");
  }
  return "unchanged";
}
const cases = [
  ["/index.php", "/"], ["/index.php/about-us", "/about/"],
  ["/index.php/our-partners", "/partners/"], ["/index.php/city-run", "/city-run/"],
  ["/index.php/events/cultural-events/theatre/antarnaad", "/events/antarnaad/"],
  ["/index.php/events/culturalevents/theatre/antarnaad", "/events/antarnaad/"],
  ["/index.php/events/cultural-events/theatre/halla-bol", "/events/halla-bol/"],
  ["/index.php/events/cultural-events/theatre/izhaar", "/events/izhaar/"],
  ["/index.php/events/cultural-events/dance/vibes", "/events/vibes/"],
  ["/index.php/events/cultural-events/dance/imperio", "/events/imperio/"],
  ["/index.php/events/cultural-events/dance/duex-danza", "/events/duex-danza/"],
  ["/index.php/events/cultural-events/fashion-parade/jashn", "/events/jashn/"],
  ["/index.php/events/cultural-events/literary/joust", "/events/the-joust/"],
  ["/index.php/events/cultural-events/music/stairway-to-hell", "/events/stairway-to-hell/"],
  ["/index.php/events/leaders-express/ylp", "/events/young-leaders-programme/"],
  ["/index.php/events/iiml-mun", "/events/iim-lucknow-mun/"],
  ["/new/events/sur/", "/events/sur/"],
  ["/new/events/the-joust/", "/events/the-joust/"],
  ["/new/events/young-leaders-programme/", "/events/young-leaders-programme/"],
  ["/new/images/rulebooks/2018/Antarnaad_Rulebook.pdf", "/images/rulebooks/2018/Antarnaad_Rulebook.pdf"],
  ["/new/images/Selection2025/Round2/MVR2_FashP_T50.pdf", "/images/Selection2025/Round2/MVR2_FashP_T50.pdf"],
  ["/content/lucknow-city-run", "/city-run/"],
  ["/content/jashn-fashion-parade", "/events/jashn/"],
  ["/content/ylp", "/events/young-leaders-programme/"],
  ["/event/dance/vibes", "/events/vibes/"],
  ["/event/theatre/hallabol", "/events/halla-bol/"],
  ["/pages/about", "/about/"],
  ["/selections-2026/literary/Literary_T-0.pdf", "410"],
  ["/new/selections-2026/ent/Ent_T-0.pdf", "410"],
  ["/index.php/events/management-events/maestro", "410"],
  ["/index.php/workshops/bollywood-dance-fitness-workshop", "410"],
  ["/index.php/events/cultural-events/dance/vibes-2020-21", "410"],
  ["/pipermail/historical-list/2018-January/thread.html", "unchanged"],
  ["/images/rulebooks/2026/Vibes_Rulebook.pdf", "unchanged"],
  ["/events/vibes/", "unchanged"],
  ["/about/", "unchanged"],
];
const slugs = new Set([...readFileSync("lib/content.ts", "utf8").matchAll(/slug:\s*"([^"]+)"/g)].map((m) => m[1]));
for (const [oldUrl, destination] of cases) {
  const expected = destination.startsWith("/") ? base + destination : destination;
  const actual = resolve(oldUrl);
  assert.equal(actual, expected, "Unexpected redirect for " + oldUrl);
  const event = destination.match(/^\/events\/([^/]+)\/$/);
  if (event) assert.ok(slugs.has(event[1]), "Nonexistent event destination: " + destination);
}
assert.ok(!source.includes("RewriteRule ^index\\.php/.*$ / [R=301"), "Broad homepage redirect regression");
assert.match(source, /SetEnvIfNoCase Request_URI "\^\/images\/\(\?:Selection/, "Missing historical file noindex rule");
console.log("SEO migration checks passed: " + rules.length + " rules, " + cases.length + " representative URLs.");

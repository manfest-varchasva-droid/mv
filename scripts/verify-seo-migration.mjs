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

// Simulate Apache's per-directory RewriteRule input for direct requests to
// /new/: inside public_html/new/.htaccess the leading "new/" is stripped.
// Unlike the legacy table above, this also evaluates host/request guards.
function resolveDirectNewRequest(path, host = "iiml-manfestvarchasva.com") {
  assert.match(path, /^\/new(?:\/|$)/);
  const relativePath = path.replace(/^\/new\/?/, "");
  const values = { HTTP_HOST: host, THE_REQUEST: "GET " + path + " HTTP/1.1" };
  let conditions = [];
  const directPrefixSection = source.split("# BEGIN DIRECT NEW PREFIX REDIRECTS")[1]?.split("# END DIRECT NEW PREFIX REDIRECTS")[0] ?? "";
  for (const original of (directPrefixSection + "\n" + section).split("\n")) {
    const line = original.trim();
    const condition = line.match(/^RewriteCond %\{(HTTP_HOST|THE_REQUEST)\} (\S+)(?: \[([^\]]+)\])?$/);
    if (condition) {
      conditions.push({ variable: condition[1], regex: condition[2], flags: condition[3] ?? "" });
      continue;
    }
    const rule = line.match(/^RewriteRule (\S+) (\S+) (\[[^\]]+\])$/);
    if (!rule) continue;
    const matches = relativePath.match(new RegExp(rule[1], rule[3].includes("NC") ? "i" : ""));
    const allowed = conditions.every(({ variable, regex, flags }) => {
      const negated = regex.startsWith("!");
      const expression = negated ? regex.slice(1) : regex;
      const result = new RegExp(expression, flags.includes("NC") ? "i" : "").test(values[variable]);
      return negated ? !result : result;
    });
    conditions = [];
    if (!matches || !allowed) continue;
    if (rule[3].includes("G,")) return "410";
    return rule[2].replace(/\$(\d+)/g, (_, i) => matches[Number(i)] ?? "");
  }
  return "unchanged";
}
const directNewCases = [
  ["/new/", "/"],
  ["/new/about/", "/about/"],
  ["/new/events/", "/events/"],
  ["/new/events/jashn/", "/events/jashn/"],
  ["/new/partners/", "/partners/"],
  ["/new/gallery/", "/gallery/"],
  ["/new/concerts/", "/concerts/"],
  ["/new/leadership/", "/leadership/"],
  ["/new/management-competitions/", "/management-competitions/"],
  ["/new/city-run/", "/city-run/"],
  ["/new/terms-and-conditions/", "/terms-and-conditions/"],
  ["/new/selections-2026/example.pdf", "410"],
  ["/new/_next/static/example.js", "unchanged"],
  ["/new/unknown-retired-page/", "unchanged"],
];
for (const [path, destination] of directNewCases) {
  const expected = destination.startsWith("/") ? base + destination : destination;
  assert.equal(resolveDirectNewRequest(path), expected, "Direct /new/ request: " + path);
}
assert.equal(
  resolveDirectNewRequest("/new/about/", "new.iiml-manfestvarchasva.com"),
  "unchanged",
  "New-prefix migration rules must not intercept the separate new. subdomain",
);

console.log("SEO migration checks passed: " + rules.length + " rules, " + cases.length + " representative URLs.");

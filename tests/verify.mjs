import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const html = readFileSync(resolve(root, 'index.html'), 'utf8');

const required = [
  '<main id="main">',
  'class="skip-link"',
  'aria-controls="navDrawer"',
  'id="projectFilterStatus"',
  'Loqol Disclosures',
  'https://beastypages.com/',
  'https://flores-boxing-gloves-v2.onrender.com/',
  'https://leonbuilds.org',
  'Super fast and professional.',
  'Leon built a system that helped us evaluate and plan new locations',
  'rel="canonical"',
  'application/ld+json'
];
for (const text of required) assert.ok(html.includes(text), `Missing required content: ${text}`);

const forbidden = [
  'id="loader"',
  'id="heatmap"',
  'No contributions',
  'https://the-home-screen.onrender.com',
  'https://flores-boxing-gloves-u81a.onrender.com',
  'Live and taking real orders',
  'now on 1.0.4',
  '80.4% average watch ratio'
];
for (const text of forbidden) assert.ok(!html.includes(text), `Stale or unsafe content remains: ${text}`);

assert.equal((html.match(/data-selected="true"/g) || []).length, 6, 'Default selection must contain six projects');
assert.equal((html.match(/<main\b/g) || []).length, 1, 'Expected one main element');
assert.equal((html.match(/<\/main>/g) || []).length, 1, 'Expected one closing main tag');

for (const match of html.matchAll(/<a\b[^>]*target="_blank"[^>]*>/g)) {
  assert.match(match[0], /rel="[^"]*noopener/, `External target is missing noopener: ${match[0]}`);
}

for (const match of html.matchAll(/<img\b[^>]*src="([^"]+)"[^>]*>/g)) {
  const [, src] = match;
  if (/^(?:https?:|data:)/.test(src)) continue;
  assert.ok(existsSync(resolve(root, src)), `Missing local image: ${src}`);
  assert.match(match[0], /\bwidth="\d+"/, `Image lacks width: ${src}`);
  assert.match(match[0], /\bheight="\d+"/, `Image lacks height: ${src}`);
}

for (const file of ['robots.txt', 'sitemap.xml', '404.html']) {
  assert.ok(existsSync(resolve(root, file)), `Missing site-support file: ${file}`);
}

console.log('Portfolio checks passed.');

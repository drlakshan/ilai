import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

const routes = ['/', '/about/', '/journey/', '/writing/', '/institutions/', '/work/', '/contact/'];
const read = (route) => readFileSync(resolve('dist', `.${route}index.html`), 'utf8');
const required = {
  '/': ['Use AI to become more capable', 'develop their own understanding, capability and judgement'],
  '/about/': ['Director at Nawaloka Hospitals', 'past leadership', 'Human → AI → human', 'not a validated intervention'],
  '/journey/': ['5 September 2026', '6 August 2026', '22 July 2026', '8 July 2026', '27 May 2026', 'APMEC 2027 Kyoto', 'proposal in development'],
  '/writing/': ['9 August 2026', '22 July 2026', '30 May 2026', 'from-algorithm-accuracy-to-clinical', 'the-infinite-learner-manifesto-for', '10.1007/s43681-026-01248-3'],
  '/institutions/': ['Past foundation leadership', 'do not imply WHO endorsement', 'Initial badges are intentional'],
  '/work/': ['Talks, workshops and selective collaboration', 'Prepared briefing', 'not a delivered board workshop', 'From a paper or podcast to learning', 'Critical evidence appraisal', 'Discuss a talk or workshop'],
  '/contact/': ['Enquiry form', 'signed-in email', 'do not include patient information'],
};
let internal = 0, images = 0;
for (const route of routes) {
  const html = read(route);
  for (const text of required[route]) assert.ok(html.includes(text), `${route}: missing ${text}`);
  for (const [, url] of html.matchAll(/(?:href|src)="(\/[^"]*)"/g)) {
    const pathname = url.split(/[?#]/)[0];
    const target = resolve('dist', `.${pathname}`);
    assert.ok(existsSync(target) || existsSync(resolve(target, 'index.html')), `${route}: unresolved ${url}`);
    internal++;
  }
  for (const [, src] of html.matchAll(/<img[^>]+src="([^"]+)"/g)) {
    assert.ok(existsSync(resolve('dist', `.${src}`)), `${route}: missing image ${src}`);
    images++;
  }
  for (const forbidden of ['APMEC Kyoto 2028', 'Director and Head of the', 'Not courses for sale.', 'docs.google.com/presentation/', 'drive.google.com/', 'who-sri-lanka.svg', '100.69.', '/Users/dilumlakshan']) {
    assert.ok(!html.includes(forbidden), `${route}: forbidden ${forbidden}`);
  }
  assert.ok(!/(?:gh[pousr]_[A-Za-z0-9]{20,}|AIza[A-Za-z0-9_-]{30,}|lsv2_pt_[a-z0-9_]{20,})/.test(html), `${route}: credential pattern`);
}
const sitemap = readFileSync('dist/sitemap.xml', 'utf8');
assert.equal([...sitemap.matchAll(/<loc>/g)].length, routes.length);
for (const route of routes) assert.ok(sitemap.includes(`https://ilai.academy${route}</loc>`));
assert.ok(readFileSync('dist/robots.txt', 'utf8').includes('Sitemap: https://ilai.academy/sitemap.xml'));
console.log(JSON.stringify({ passed: true, pages: routes.length, internalReferences: internal, imageReferences: images, sitemapUrls: routes.length, privacyScan: 'passed' }, null, 2));

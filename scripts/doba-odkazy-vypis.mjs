// Výpis odkazů v Době a lidech ze sestaveného webu (dist/) a porovnání se seznamem osob se stránkou.
// Hlásí jméno osoby se stránkou bez odkazu (kromě osob stránky) a odkaz, který vede jinam, než má.
// Spuštění po `npm run build`: node scripts/doba-odkazy-vypis.mjs
import { readFileSync, readdirSync } from 'node:fs';
import { parse } from 'yaml';

const lide = parse(readFileSync('src/data/lide.yaml', 'utf8'));
const seznam = Array.isArray(lide) ? lide : lide.lide;
const jmenoNaId = new Map(seznam.map((o) => [o.jmeno, o.id]));
const adresa = new Map();
for (const f of readdirSync('src/content/osobnosti').filter((f) => f.endsWith('.mdx'))) {
  const slug = f.replace(/\.mdx$/, '');
  const fm = readFileSync(`src/content/osobnosti/${f}`, 'utf8').split('---')[1];
  const osoba = fm.match(/^osoba:\s*(\S+)/m)[1];
  const dalsi = (fm.match(/^dalsi:\s*\[([^\]]*)\]/m)?.[1] ?? '').split(',').map((s) => s.trim()).filter(Boolean);
  for (const o of [osoba, ...dalsi]) adresa.set(o, { url: `/osobnost/${slug}/`, slug });
}
// Medailonky (medailonek: true v lide.yaml) mají stránku /osobnost/<id>/ a jejich Doba a lidé se kontroluje taky.
const medailonky = seznam.filter((o) => o.medailonek).map((o) => o.id);
for (const id of medailonky) adresa.set(id, { url: `/osobnost/${id}/`, slug: id });
let chyby = 0;
for (const slug of [...readdirSync('src/content/osobnosti').filter((f) => f.endsWith('.mdx')).map((f) => f.replace(/\.mdx$/, '')), ...medailonky]) {
  const html = readFileSync(`dist/osobnost/${slug}/index.html`, 'utf8');
  // Jen seznamy vztahů a řetěz Kdo navazoval; mini osa a mini mapa zůstávají bez odkazů.
  const zacatek = html.indexOf('class="doba__vztahy');
  const doba = html.slice(zacatek, html.indexOf('</section>', zacatek));
  const odkazy = [...doba.matchAll(/<a[^>]*class="jmeno-odkaz[^"]*"[^>]*href="([^"]+)"[^>]*>([^<]+)<\/a>|<a[^>]*href="([^"]+)"[^>]*class="jmeno-odkaz[^"]*"[^>]*>([^<]+)<\/a>/g)]
    .map((m) => [m[2] ?? m[4], m[1] ?? m[3]]);
  const jmena = [...doba.matchAll(/class="lide__jmeno[^"]*">(?:<a[^>]*>)?([^<]+)/g), ...doba.matchAll(/<(?:span|a)[^>]*(?:class="(?:ja|jmeno-odkaz)[^"]*"|data-astro-cid-[^ >]*)[^>]*>([^<→⇢]+)<\/(?:span|a)>/g)]
    .map((m) => m[1].trim()).filter((j) => jmenoNaId.has(j));
  const unikatni = [...new Set(jmena)];
  console.log(`\n${slug}: ${odkazy.map(([j, h]) => `${j} → ${h}`).join(', ') || '(žádné)'}`);
  for (const j of unikatni) {
    const cil = adresa.get(jmenoNaId.get(j));
    const ma = odkazy.find(([jj]) => jj === j);
    if (cil && cil.slug !== slug && !ma) { console.log(`  CHYBÍ odkaz: ${j}`); chyby++; }
    if (ma && (!cil || cil.url !== ma[1])) { console.log(`  ŠPATNÝ cíl: ${j} → ${ma[1]}`); chyby++; }
    if (ma && cil && cil.slug === slug) { console.log(`  ODKAZ NA SEBE: ${j}`); chyby++; }
  }
  const bez = unikatni.filter((j) => !odkazy.some(([jj]) => jj === j));
  console.log(`  bez odkazu: ${bez.join(', ') || '—'}`);
}
console.log(`\nChyb: ${chyby}`);
process.exit(chyby ? 1 : 0);

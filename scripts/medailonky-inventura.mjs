// Inventura medailonků (větev medailonky, P9): kdo nemá vlastní stránku, co mu z dat chybí a jak často se objevuje.
// Čte jen zdrojová data a obsah (nepotřebuje build). Výstup: Claude outputs/medailonky/inventura.md a inventura.json.
// Spuštění: node scripts/medailonky-inventura.mjs
//
// Kde se člověk objevuje:
// - Doba a lidé: na stránkách, jejichž osoba s ním má vztah, nebo ho má v řetězu Kdo navazoval (kopie kdoNavazoval z src/lib/data.ts);
// - otázky: hlas na stránce /otazka/<slug>/;
// - cesty: v poli filozofove přehledu cesty a zmínky jména v textech cest a v blocích cest (src/content/bloky/cestaN-*.yaml);
// - mapa: Mapa a čas ukazuje všechny osoby; počítá se počet míst (pobytů) a událostí, kterých se týká.
// Vlny (nejdřív ti, na které už vedou jména bez odkazu):
//   1 = jméno stojí bez odkazu aspoň na dvou stránkách (Doba a lidé, hlas otázky, přehled cesty), nebo na jedné
//       a k tomu padá v textu cesty;
//   2 = jméno stojí bez odkazu na jedné stránce;
//   3 = ostatní (jen Mapa a čas a Lidé a směry, případně zmínka v textu cesty).
// Osoby s `medailonek: true` mají stránku a jsou ve výpisu jako vlna 0 (hotovo).
import { readFileSync, readdirSync, writeFileSync, mkdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { parse } from 'yaml';

const cti = (p) => parse(readFileSync(p, 'utf8'));
const lide = cti('src/data/lide.yaml');
const vztahy = cti('src/data/vztahy.yaml');
const mista = new Map(cti('src/data/mista.yaml').map((m) => [m.id, m]));
const udalosti = cti('src/data/udalosti.yaml');
const zdroje = cti('src/data/zdroje.yaml');
const prameny = new Set(zdroje.prameny.map((p) => p.id));
const osoba = new Map(lide.map((o) => [o.id, o]));

const frontmatter = (soubor) => parse(readFileSync(soubor, 'utf8').split(/^---\s*$/m)[1] ?? '') ?? {};
const soubory = (slozka, vzor) => {
  const ven = [];
  for (const f of readdirSync(slozka)) {
    const p = join(slozka, f);
    if (statSync(p).isDirectory()) ven.push(...soubory(p, vzor));
    else if (vzor.test(f) && !f.startsWith('_')) ven.push(p);
  }
  return ven;
};

// Stránky osob (stejně jako adresaOsoby v src/lib/adresa-osoby.ts).
const stranky = new Map();
for (const f of soubory('src/content/osobnosti', /\.mdx?$/)) {
  const fm = frontmatter(f);
  const slug = f.split('/').pop().replace(/\.mdx?$/, '');
  for (const o of [fm.osoba, ...(fm.dalsi ?? [])]) stranky.set(o, slug);
}
const smeryStranky = new Set(soubory('src/content/smery', /\.mdx?$/).map((f) => f.split('/').pop().replace(/\.mdx?$/, '')));

// Doba a lidé: vztahy osob stránky a řetězy Kdo navazoval.
function kdoNavazoval(id, hloubka = 4) {
  const zaci = (x) => vztahy.filter((v) => v.od === x && v.typ === 'ucitel');
  const retezy = [];
  const projdi = (x, rada) => {
    const dalsi = zaci(x).filter((v) => !rada.includes(v.k));
    if (!dalsi.length || rada.length > hloubka) {
      const posledni = osoba.get(rada[rada.length - 1]);
      if (rada.length >= 4 || (rada.length === 3 && posledni.hloubka !== 'medailonek')) retezy.push(rada);
      return;
    }
    for (const v of dalsi) projdi(v.k, [...rada, v.k]);
  };
  projdi(id, [id]);
  return retezy;
}
const vDobe = new Map(); // id → Set slugů stránek
const pridej = (mapa, id, co) => { if (!mapa.has(id)) mapa.set(id, new Set()); mapa.get(id).add(co); };
const podleStranky = new Map();
for (const [id, slug] of stranky) pridej(podleStranky, slug, id);
for (const [slug, osobyStranky] of podleStranky) {
  for (const ja of osobyStranky) {
    for (const v of vztahy.filter((v) => v.od === ja || v.k === ja)) {
      const druhy = v.od === ja ? v.k : v.od;
      if (!osobyStranky.has(druhy)) pridej(vDobe, druhy, slug);
    }
    for (const rada of kdoNavazoval(ja)) for (const id of rada) if (!osobyStranky.has(id)) pridej(vDobe, id, slug);
  }
}

// Otázky: hlasy.
const vHlasech = new Map();
for (const f of soubory('src/content/otazky', /\.mdx?$/)) {
  const fm = frontmatter(f);
  const slug = f.split('/').pop().replace(/\.mdx?$/, '');
  for (const h of fm.hlasy ?? []) pridej(vHlasech, h.osoba, slug);
}

// Cesty: filozofove na přehledu a zmínky jmen v textech cest a v jejich blocích.
const vPrehledu = new Map();
const cestyTexty = [];
for (const f of readdirSync('src/content/cesty').filter((f) => /\.mdx$/.test(f) && !f.startsWith('_'))) {
  const slug = f.replace(/\.mdx$/, '');
  const fm = frontmatter(join('src/content/cesty', f));
  for (const o of fm.filozofove ?? []) pridej(vPrehledu, o, slug);
  cestyTexty.push({ slug, text: readFileSync(join('src/content/cesty', f), 'utf8') });
  for (const k of soubory(join('src/content/cesty', slug), /\.mdx$/)) cestyTexty.push({ slug, text: readFileSync(k, 'utf8') });
  const cislo = fm.cislo;
  for (const b of readdirSync('src/content/bloky').filter((b) => b.startsWith(`cesta${cislo}-`))) {
    cestyTexty.push({ slug, text: readFileSync(join('src/content/bloky', b), 'utf8') });
  }
}
// Příběhy a pokusy s polem osoby.
const vPribezich = new Map();
for (const slozka of ['pribehy', 'pokusy']) {
  try {
    for (const f of soubory(join('src/content', slozka), /\.mdx?$/)) {
      for (const o of frontmatter(f).osoby ?? []) pridej(vPribezich, o, `${slozka}/${f.split('/').pop()}`);
    }
  } catch { /* složka nemusí existovat */ }
}

// Vzor jména: celé jméno, 2. pád a společný kmen (Antisthenés/Antisthena → Antisthen). Jméno s přívlastkem
// („Zénón z Kitia“) se hledá jen celé, aby se nepletlo se jmenovcem.
const kmen = (o) => {
  if (/ z | ze /.test(o.jmeno)) return null;
  const a = o.jmeno.split(' ')[0];
  const b = (o.jmeno2 ?? '').split(' ')[0];
  if (b) { let i = 0; while (i < a.length && a[i] === b[i]) i++; return i >= 4 ? a.slice(0, i) : a; }
  const k = a.replace(/(és|ás|ós|os|ón|on|us|ius|a|e)$/u, '');
  return k.length >= 4 ? k : a;
};
const escape = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
function zminky(o) {
  const vzory = [o.jmeno, o.jmeno2].filter(Boolean).map((j) => j.split(' ').length > 1 ? escape(j) : null).filter(Boolean);
  const k = kmen(o);
  if (k) vzory.push(`${escape(k)}\\p{L}*`);
  if (!vzory.length) return { pocet: 0, cesty: [] };
  const re = new RegExp(`(?<![\\p{L}])(?:${vzory.join('|')})(?![\\p{L}])`, 'gu');
  const cesty = new Map();
  for (const { slug, text } of cestyTexty) {
    const n = (text.match(re) ?? []).length + (text.match(new RegExp(`(?<![a-z-])${escape(o.id)}(?![a-z-])`, 'g')) ?? []).length;
    if (n) cesty.set(slug, (cesty.get(slug) ?? 0) + n);
  }
  return { pocet: [...cesty.values()].reduce((a, b) => a + b, 0), cesty: [...cesty.keys()] };
}

// Kontroly údajů.
const slova = (t) => t.trim().split(/\s+/).length;
// Stejně jako pocetVet v src/lib/medailonek.ts: zkratky letopočtů větu nekončí.
const vety = (t) => (t.replace(/(?:př\.\s*n\.\s*l\.|n\.\s*l\.|sv\.|tzv\.|např\.|tj\.|resp\.)/g, 'ZKR').trim().match(/[.!?…](?=\s|$)/g) ?? []).length;
const TYKANI = /(?<![\p{L}])(ty|tě|tebe|tobě|tvůj|tvoje|tvá|tvé|tvého|tvým|představ si|zkus)(?![\p{L}])/iu;
const rok = (d) => d?.rok;
function chybi(o) {
  const ch = [];
  const pozn = [];
  // roky
  if (!o.narozen && !o.zemrel && !o.aktivni) ch.push('roky');
  else if (!o.aktivni && (!o.narozen || !o.zemrel)) pozn.push(o.narozen ? 'jen narození' : 'jen úmrtí');
  if (o.narozen && o.zemrel && rok(o.narozen) >= rok(o.zemrel)) ch.push('narození není před úmrtím');
  if (o.narozen?.priblizne || o.zemrel?.priblizne || o.aktivni?.priblizne) pozn.push('přibližné roky');
  // místa
  if (!o.mista?.length) ch.push('místa');
  else {
    if (!o.mista.some((m) => ['narozeni', 'pusobeni'].includes(m.role))) pozn.push('bez místa narození i působení');
    for (const m of o.mista) {
      if (!mista.has(m.misto)) ch.push(`neznámé místo ${m.misto}`);
      if (!prameny.has(m.zdroj)) ch.push(`místo ${m.misto}: pramen ${m.zdroj} chybí v zdroje.yaml`);
    }
  }
  // směr
  // Směr jen u toho, kdo ke škole patřil (Aristofanés ani Alkibiadés směr nemají); proto otazník.
  if (!o.smery?.length) ch.push('směr?');
  else for (const s of o.smery) if (!smeryStranky.has(s)) pozn.push(`směr ${s} nemá text v src/content/smery`);
  // kdo a proč
  for (const pole of ['kdo', 'proc']) {
    const t = o[pole] ?? '';
    if (!t) { ch.push(pole === 'kdo' ? 'věta kdo' : 'věta proč'); continue; }
    const n = pole === 'kdo' ? 'kdo' : 'proč';
    if (vety(t) > 1) ch.push(`věta ${n}: ${vety(t)} věty`);
    if (slova(t) > 25) ch.push(`věta ${n}: ${slova(t)} slov`);
    if (TYKANI.test(t)) ch.push(`věta ${n}: tykání`);
    if (!/[.!?]$/.test(t.trim())) pozn.push(`věta ${n} bez tečky`);
  }
  // vztahy
  const vz = vztahy.filter((v) => v.od === o.id || v.k === o.id);
  if (!vz.length) ch.push('vztahy');
  for (const v of vz) {
    if (!prameny.has(v.zdroj)) ch.push(`vztah ${v.od}→${v.k}: pramen ${v.zdroj} chybí`);
    if (v.typ === 'ucitel') {
      const u = osoba.get(v.od), z = osoba.get(v.k);
      const ru = rok(u?.narozen) ?? u?.aktivni?.od, rz = rok(z?.narozen) ?? z?.aktivni?.od;
      if (ru != null && rz != null && ru >= rz) ch.push(`učitel ${v.od} není starší než žák ${v.k}`);
    }
  }
  for (const z of o.zdroje ?? []) if (!prameny.has(z)) ch.push(`pramen ${z} chybí v zdroje.yaml`);
  if (!o.atribut) pozn.push('bez atributu (deska se neukáže)');
  if (o.atribut && o.proc && o.atribut.proc.replace(/[^\p{L}]/gu, '').includes(o.proc.split(' ').slice(0, 3).join('').replace(/[^\p{L}]/gu, ''))) pozn.push('proč opakuje atribut');
  return { chybi: ch, poznamky: pozn, vztahu: vz.length };
}

const vystup = [];
for (const o of lide) {
  if (stranky.has(o.id)) continue;
  const doba = [...(vDobe.get(o.id) ?? [])];
  const hlasy = [...(vHlasech.get(o.id) ?? [])];
  const prehled = [...(vPrehledu.get(o.id) ?? [])];
  const zm = zminky(o);
  const pribehy = [...(vPribezich.get(o.id) ?? [])];
  const udal = udalosti.filter((u) => (u.osoby ?? []).includes(o.id)).length;
  const mist = doba.length + hlasy.length + prehled.length;
  const vlna = o.medailonek ? 0 : mist >= 2 || (mist === 1 && zm.pocet > 0) ? 1 : mist === 1 ? 2 : 3;
  const skore = doba.length * 3 + hlasy.length * 3 + prehled.length * 2 + zm.cesty.length * 2 + Math.min(zm.pocet, 10) * 0.3 + pribehy.length + udal + (o.mista?.length ?? 0) * 0.5;
  vystup.push({
    id: o.id, jmeno: o.jmeno, obdobi: o.obdobi, hloubka: o.hloubka, vlna, skore: Math.round(skore * 10) / 10,
    doba, hlasy, prehled, zminky: zm.pocet, cesty: zm.cesty, pribehy, udalosti: udal, mist: o.mista?.length ?? 0,
    ...chybi(o),
  });
}
vystup.sort((a, b) => a.vlna - b.vlna || b.skore - a.skore || a.jmeno.localeCompare(b.jmeno, 'cs'));

mkdirSync('Claude outputs/medailonky', { recursive: true });
writeFileSync('Claude outputs/medailonky/inventura.json', JSON.stringify(vystup, null, 2));

const radek = (x) => `| ${x.vlna} | ${x.jmeno} (\`${x.id}\`) | ${x.obdobi} | ${x.hloubka} | ${x.doba.join(', ') || '—'} | ${[...x.hlasy.map((h) => `otázka ${h}`), ...x.prehled.map((p) => `přehled ${p}`)].join(', ') || '—'} | ${x.zminky ? `${x.zminky}× (${x.cesty.length} ${x.cesty.length === 1 ? 'cesta' : 'cesty'})` : '—'} | ${x.mist} / ${x.udalosti} | ${x.vztahu} | ${x.chybi.join('; ') || '—'} | ${x.poznamky.join('; ') || '—'} |`;
const md = [
  '# Inventura medailonků',
  '',
  `Vygenerováno skriptem \`scripts/medailonky-inventura.mjs\`. Osob v datech: ${lide.length}, s profilem nebo portrétem: ${stranky.size}, bez nich: ${vystup.length}.`,
  '',
  `Hotovo (medailonek: true): ${vystup.filter((x) => x.vlna === 0).map((x) => x.jmeno).join(', ') || '—'}`,
  ...[1, 2, 3].map((v) => `Vlna ${v}: ${vystup.filter((x) => x.vlna === v).length} osob (${vystup.filter((x) => x.vlna === v).map((x) => x.jmeno).join(', ')})`),
  '',
  'Sloupce: Doba a lidé = stránky, kde jméno stojí bez odkazu; Jinde bez odkazu = hlas otázky nebo filozof na přehledu cesty; Zmínky v cestách = výskyty jména v textech a blocích cest (přibližně, podle kmene jména); Místa / události = počet pobytů na mapě a událostí v datech.',
  '',
  '| Vlna | Osoba | Obd. | Hloubka | Doba a lidé | Jinde bez odkazu | Zmínky v cestách | Místa / události | Vztahů | Chybí | Poznámky |',
  '| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |',
  ...vystup.map(radek),
  '',
].join('\n');
writeFileSync('Claude outputs/medailonky/inventura.md', md);
console.log(md);

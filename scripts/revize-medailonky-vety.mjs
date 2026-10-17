// Strojová kontrola vět „kdo“ a „proč“ u medailonků (revize větve medailonky, krok R).
// node scripts/revize-medailonky-vety.mjs
import fs from 'node:fs';
import yaml from 'js-yaml';

const lide = yaml.load(fs.readFileSync('src/data/lide.yaml', 'utf8'));
const vztahy = yaml.load(fs.readFileSync('src/data/vztahy.yaml', 'utf8'));
const jm = Object.fromEntries(lide.map((o) => [o.id, o]));

const ZKRATKY = /(př\. n\. l\.|n\. l\.|tzv\.|např\.|sv\.)/g;
const vyhrady = /\b(asi|snad|údajně|prý|možná|pravděpodobně|zřejmě|nejspíš|patrně|nejspíše)\b/i;
const tykani = /\b(ty|tě|tebe|tobě|tvůj|tvoje|tvá|tvého|tvým|sis|ses)\b/i;
const stroj = /(klíčov|zásadní|stěžejní|komplexní|nadčasov|fascinující|spletit|podtrh|zdůrazn|odhal|utvář|rezon|ponoř|prozkoum|mozaik|tapisér|představuje|slouží jako|vyznačuje se|nejen|položil základy|sehrál)/i;
const znaky = /(—|–| - |\*\*|`|"|“|”|#|\[)/;

const vety = (s) => s.replace(ZKRATKY, (m) => m.replace(/\./g, '·')).split(/[.!?](?:\s|$)/).filter((x) => x.trim()).length;
const slova = (s) => s.split(/\s+/).filter(Boolean).length;

let n = 0;
for (const o of lide.filter((x) => x.medailonek)) {
  const nalezy = [];
  for (const pole of ['kdo', 'proc']) {
    const s = o[pole] ?? '';
    if (vety(s) !== 1) nalezy.push(`${pole}: ${vety(s)} vět`);
    if (slova(s) > 25) nalezy.push(`${pole}: ${slova(s)} slov`);
    if (vyhrady.test(s)) nalezy.push(`${pole}: výhrada „${s.match(vyhrady)[0]}“`);
    if (tykani.test(s)) nalezy.push(`${pole}: tykání`);
    if (stroj.test(s)) nalezy.push(`${pole}: strojový obrat „${s.match(stroj)[0]}“`);
    if (znaky.test(s)) nalezy.push(`${pole}: znak „${s.match(znaky)[0]}“`);
    if (/př\. n\. l\.\s*$|n\. l\.\s*$/.test(s)) nalezy.push(`${pole}: končí zkratkou`);
    if (/\b\d{3,4}\b(?! př\. n\. l\.| n\. l\.)/.test(s)) nalezy.push(`${pole}: letopočet bez zkratky (${s.match(/\b\d{3,4}\b/)[0]})`);
  }
  // „proč“ a vztahy: jméno druhého člověka ve větě
  for (const v of vztahy.filter((v) => v.od === o.id || v.k === o.id)) {
    const druhy = jm[v.od === o.id ? v.k : v.od];
    if (!druhy) continue;
    const kmen = druhy.jmeno.split(' ')[0].slice(0, -2);
    if (kmen.length > 3 && (o.proc ?? '').includes(kmen)) nalezy.push(`proč zmiňuje ${druhy.jmeno} (${v.typ})`);
  }
  // „proč“ a atribut: společná slova delší než 4 znaky
  if (o.atribut) {
    const a = new Set(`${o.atribut.nazev} ${o.atribut.proc}`.toLowerCase().match(/[\p{L}]{5,}/gu) ?? []);
    const spol = (o.proc.toLowerCase().match(/[\p{L}]{5,}/gu) ?? []).filter((w) => a.has(w));
    if (spol.length) nalezy.push(`proč a atribut sdílí: ${[...new Set(spol)].join(', ')}`);
  }
  if (!o.jmeno2) nalezy.push('chybí jmeno2');
  // přibližné roky u míst
  for (const m of o.mista ?? []) {
    if (m.role === 'narozeni' && m.rok && o.narozen && m.rok !== o.narozen.rok) nalezy.push(`rok místa narození ${m.rok} ≠ ${o.narozen.rok}`);
    if (m.role === 'smrt' && m.rok && o.zemrel && m.rok !== o.zemrel.rok) nalezy.push(`rok místa smrti ${m.rok} ≠ ${o.zemrel.rok}`);
    if ((m.rok || m.od) && (o.narozen?.priblizne || o.zemrel?.priblizne) && !m.priblizne && ['narozeni', 'smrt'].includes(m.role)) nalezy.push(`místo ${m.misto} (${m.role}) bez priblizne`);
  }
  for (const k of ['narozen', 'zemrel']) {
    const r = o[k];
    if (r?.rozmezi && (r.rok < Math.min(...r.rozmezi) || r.rok > Math.max(...r.rozmezi))) nalezy.push(`${k}: rok mimo rozmezí`);
    if (r?.rozmezi && !r.priblizne) nalezy.push(`${k}: rozmezí bez priblizne`);
  }
  if (nalezy.length) { n++; console.log(`${o.jmeno}: ${nalezy.join(' | ')}`); }
}
console.log(`\nOsob s poznámkou: ${n}`);

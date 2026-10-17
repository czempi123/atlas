// Výpis dat medailonků pro revizi větve medailonky (krok R).
// node scripts/revize-medailonky.mjs > "Claude outputs/medailonky/revize-data.md"
import fs from 'node:fs';
import yaml from 'js-yaml';

const lide = yaml.load(fs.readFileSync('src/data/lide.yaml', 'utf8'));
const vztahy = yaml.load(fs.readFileSync('src/data/vztahy.yaml', 'utf8'));
const mista = yaml.load(fs.readFileSync('src/data/mista.yaml', 'utf8'));
const zdroje = yaml.load(fs.readFileSync('src/data/zdroje.yaml', 'utf8'));

const vzt = Array.isArray(vztahy) ? vztahy : vztahy.vztahy ?? Object.values(vztahy).flat();
const mis = Array.isArray(mista) ? mista : mista.mista ?? Object.values(mista).flat();
const pram = zdroje.prameny ?? [];
const jm = Object.fromEntries(lide.map((o) => [o.id, o.jmeno]));
const misto = Object.fromEntries(mis.map((m) => [m.id, m]));
const rok = (r) => (r == null ? '' : JSON.stringify(r));

const med = lide.filter((o) => o.medailonek);
console.log(`# Medailonky: ${med.length}\n`);
for (const o of med) {
  console.log(`## ${o.jmeno} (${o.id}) · 2. pád: ${o.jmeno2 ?? '—'} · hloubka ${o.hloubka} · směr ${JSON.stringify(o.smery ?? o.smer ?? null)}`);
  console.log(`- roky: nar ${rok(o.narozen)} zem ${rok(o.zemrel)} akt ${rok(o.aktivni)}`);
  for (const m of o.mista ?? []) {
    const mm = misto[m.misto];
    console.log(`- místo: ${m.misto} (${mm?.nazev ?? mm?.jmeno ?? '?'}) ${m.role} ${rok(m.rok ?? '')} ${m.od ?? ''}-${m.do ?? ''} ${m.priblizne ? 'asi' : ''} [${m.zdroj}]`);
  }
  console.log(`- kdo: ${o.kdo}`);
  console.log(`- proč: ${o.proc}`);
  if (o.atribut) console.log(`- atribut: ${o.atribut.nazev} · ${o.atribut.proc}`);
  console.log(`- zdroje: ${(o.zdroje ?? []).join(', ')}`);
  for (const v of vzt.filter((v) => v.od === o.id || v.k === o.id)) {
    console.log(`- vztah: ${jm[v.od] ?? v.od} → ${jm[v.k] ?? v.k} · ${v.typ}${v.tradovany ? ' · tradovaný' : ''} · ${v.poznamka ?? ''} [${v.zdroj}]`);
  }
  console.log('');
}
console.log('# Prameny medailonků\n');
const ids = new Set(med.flatMap((o) => [...(o.zdroje ?? []), ...(o.mista ?? []).map((m) => m.zdroj)]));
for (const v of vzt) if (med.some((o) => o.id === v.od || o.id === v.k)) ids.add(v.zdroj);
for (const p of pram.filter((p) => ids.has(p.id))) {
  console.log(`- ${p.id}: ${p.url ?? ''} · ${p.overeno ?? ''} · ${(p.poznamka ?? '').replace(/\s+/g, ' ')}`);
}

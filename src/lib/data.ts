// Data atlasu pro stránky. Při sestavení se ověří schémata i všechny kontroly;
// chyba zastaví build dřív, než se dostane ke studentům.
import lide from '../data/lide.yaml?raw';
import mista from '../data/mista.yaml?raw';
import vztahy from '../data/vztahy.yaml?raw';
import udalosti from '../data/udalosti.yaml?raw';
import obdobi from '../data/obdobi.yaml?raw';
import zdroje from '../data/zdroje.yaml?raw';
import { vsechnyKontroly } from './kontroly';
import { cekajiciAtributy } from './cekajici';
import type { TOsoba, TVztah } from './schema';

const smery = Object.keys(import.meta.glob('../content/smery/*.{md,mdx}')).map((p) =>
  p.split('/').pop()!.replace(/\.mdx?$/, ''),
);

const vysledek = vsechnyKontroly({ lide, mista, vztahy, udalosti, obdobi, zdroje }, { smery }, cekajiciAtributy);
if (vysledek.chyby.length) {
  throw new Error(`Data atlasu neprošla kontrolou:\n- ${vysledek.chyby.join('\n- ')}`);
}

export const data = vysledek.data;
export const osoby = new Map(data.lide.map((o) => [o.id, o]));
export const mistaPodleId = new Map(data.mista.map((m) => [m.id, m]));
export const obdobiPodleId = new Map(data.obdobi.map((o) => [o.id, o]));
export const pramenyPodleId = new Map(data.zdroje.prameny.map((p) => [p.id, p]));
export const citatyPodleId = new Map(data.zdroje.citaty.map((c) => [c.id, c]));

export function osoba(id: string): TOsoba {
  const o = osoby.get(id);
  if (!o) throw new Error(`Osoba „${id}“ není v lide.yaml`);
  return o;
}

export function vztahyOsoby(id: string): { vztah: TVztah; druhy: TOsoba; smer: 'od' | 'k' }[] {
  return data.vztahy
    .filter((v) => v.od === id || v.k === id)
    .map((v) => ({ vztah: v, druhy: osoba(v.od === id ? v.k : v.od), smer: v.od === id ? 'od' : 'k' }));
}

/** Řetězy učitel → žák od dané osoby dál (Sókratés → Platón → Aristotelés). */
export function kdoNavazoval(id: string, hloubka = 4): TOsoba[][] {
  const zaci = (x: string) => data.vztahy.filter((v) => v.od === x && (v.typ === 'ucitel' || v.typ === 'vliv-textem'));
  const retezy: TOsoba[][] = [];
  const projdi = (x: string, cesta: TOsoba[]) => {
    const dalsi = zaci(x).filter((v) => !cesta.some((c) => c.id === v.k));
    if (!dalsi.length || cesta.length > hloubka) {
      if (cesta.length > 2) retezy.push(cesta);
      return;
    }
    for (const v of dalsi) projdi(v.k, [...cesta, osoba(v.k)]);
  };
  projdi(id, [osoba(id)]);
  return retezy;
}

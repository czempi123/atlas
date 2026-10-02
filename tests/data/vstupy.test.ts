// Vstupy do cest a otázek: které cesty patří k osobě a k otázce a co nabídne hlavička profilu.
import { describe, it, expect } from 'vitest';
import { readFileSync, readdirSync } from 'node:fs';
import { parse } from 'yaml';
import { cestyOsoby, cestyOtazky, vstupyOsoby, type CestaVstupu, type OtazkaVstupu } from '../../src/lib/vstupy';

const cesty: CestaVstupu[] = [
  { slug: 'smrt', cislo: 8, nazev: 'Proč se bát smrti?', otazka: 3, filozofove: ['epikuros', 'seneca'] },
  { slug: 'dost', cislo: 6, nazev: 'Kolik je dost?', otazka: 1, filozofove: ['epikuros', 'diogenes'] },
  { slug: 'verit', cislo: 1, nazev: 'Kdy mám dobrý důvod věřit?', otazka: 7, filozofove: ['sokrates', 'protagoras'] },
];
const otazky: OtazkaVstupu[] = [
  { slug: 'pravda', cislo: 7, otazka: 'Jak poznám, co je pravda?', hlasy: [{ osoba: 'sokrates' }, { osoba: 'epikuros' }] },
  { slug: 'zit', cislo: 1, otazka: 'Jak mám žít?', hlasy: [{ osoba: 'epikuros' }, { osoba: 'diogenes' }] },
  { slug: 'smysl', cislo: 3, otazka: 'Má život smysl?' },
];

describe('vstupy do cest a otázek', () => {
  it('cesty osoby jdou podle čísla cesty', () => {
    expect(cestyOsoby('epikuros', cesty).map((c) => c.cislo)).toEqual([6, 8]);
    expect(cestyOsoby('sokrates', cesty).map((c) => c.slug)).toEqual(['verit']);
    expect(cestyOsoby('platon', cesty)).toEqual([]);
    expect(cestyOsoby('epikuros', [])).toEqual([]);
  });
  it('cesty otázky podle čísla otázky', () => {
    expect(cestyOtazky(1, cesty).map((c) => c.slug)).toEqual(['dost']);
    expect(cestyOtazky(2, cesty)).toEqual([]);
  });
  it('hlavička profilu: cesty a otázky s hlasem osoby; otázka její cesty jde první', () => {
    const e = vstupyOsoby('epikuros', cesty, otazky);
    expect(e.cesty.map((c) => c.cislo)).toEqual([6, 8]);
    // Otázka 1 patří k cestě 6, proto stojí před otázkou 7; otázka 3 nemá jeho hlas.
    expect(e.otazky.map((o) => o.cislo)).toEqual([1, 7]);
    const s = vstupyOsoby('sokrates', cesty, otazky);
    expect(s.otazky.map((o) => o.cislo)).toEqual([7]);
    expect(vstupyOsoby('platon', cesty, otazky)).toEqual({ cesty: [], otazky: [] });
  });
});

// Skutečný obsah: každá cesta má filozofy z dat a ke každé cestě vede aspoň jeden profil.
const slozkaCest = new URL('../../src/content/cesty/', import.meta.url);
const slozkaProfilu = new URL('../../src/content/osobnosti/', import.meta.url);
const fm = (u: URL) => parse(readFileSync(u, 'utf8').split('---')[1]);
const skutecne = readdirSync(slozkaCest).filter((s) => /^[a-z0-9-]+\.mdx$/.test(s)).map((s) => ({ slug: s.replace('.mdx', ''), ...fm(new URL(s, slozkaCest)) })) as CestaVstupu[];
const profily = new Set(readdirSync(slozkaProfilu).filter((s) => /^[^_].*\.mdx?$/.test(s)).map((s) => fm(new URL(s, slozkaProfilu)).osoba as string));

describe('vstupy v atlasu', () => {
  for (const c of skutecne) {
    it(`cesta ${c.cislo} „${c.nazev}“ je dosažitelná z profilu aspoň jednoho svého filozofa`, () => {
      expect(c.filozofove.some((f) => profily.has(f)), c.filozofove.join(', ')).toBe(true);
    });
  }
});

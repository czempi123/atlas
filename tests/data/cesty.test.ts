// Cesty: pořadí kroků, adresy a „Kam dál“.
import { describe, it, expect } from 'vitest';
import { readFileSync, readdirSync } from 'node:fs';
import { parse } from 'yaml';
import { krokyCesty, krokZAdresy, dalsiKrok, adresaKroku } from '../../src/lib/cesty';

const k = [
  { cesta: 'c', krok: 2, nazev: 'Dva' },
  { cesta: 'c', krok: 1, nazev: 'Jedna' },
  { cesta: 'd', krok: 1, nazev: 'Jiná' },
];

describe('cesty', () => {
  it('kroky seřadí a hlídají číslování', () => {
    expect(krokyCesty(k, 'c').map((x) => x.nazev)).toEqual(['Jedna', 'Dva']);
    expect(() => krokyCesty([...k, { cesta: 'c', krok: 4, nazev: 'Čtyři' }], 'c')).toThrow(/bez mezer/);
  });
  it('adresa kroku tam a zpět', () => {
    expect(adresaKroku('kdy-mam-dobry-duvod-verit', 3)).toBe('/cesta/kdy-mam-dobry-duvod-verit/3/');
    expect(krokZAdresy('/cesta/kdy-mam-dobry-duvod-verit/3/')).toEqual({ slug: 'kdy-mam-dobry-duvod-verit', n: 3 });
    expect(krokZAdresy('/cesta/kdy-mam-dobry-duvod-verit/')).toBeNull();
    expect(krokZAdresy('/osobnost/sokrates/')).toBeNull();
  });
  it('Kam dál: další krok, na konci dokončení', () => {
    expect(dalsiKrok(k, 'c', 1)).toEqual({ href: '/cesta/c/2/', text: 'Další krok: Dva' });
    expect(dalsiKrok(k, 'c', 2)).toEqual({ href: '/cesta/c/#hotovo', text: 'Dokončit cestu' });
    expect(dalsiKrok(k, 'x', 1)).toBeNull();
  });
});

// Obsah cest v src/content/cesty: každá cesta má kroky 1…n a frontmatter s cestou, krokem a názvem.
const slozka = new URL('../../src/content/cesty/', import.meta.url);
const cesty = readdirSync(slozka).filter((s) => /^[a-z0-9-]+\.mdx$/.test(s)).map((s) => s.replace('.mdx', ''));
const frontmatter = (text: string) => parse(text.split('---')[1]);

describe('obsah cest', () => {
  it('je aspoň jedna cesta', () => expect(cesty.length).toBeGreaterThan(0));
  for (const c of cesty) {
    it(`${c}: kroky 1…n patří k cestě`, () => {
      const soubory = readdirSync(new URL(`${c}/`, slozka)).filter((s) => /^\d+.*\.mdx$/.test(s));
      const kroky = soubory.map((s) => ({ soubor: s, ...frontmatter(readFileSync(new URL(`${c}/${s}`, slozka), 'utf8')) }));
      for (const x of kroky) {
        expect(x.cesta, x.soubor).toBe(c);
        expect(x.soubor.startsWith(`${x.krok}-`), x.soubor).toBe(true);
      }
      expect(krokyCesty(kroky, c).length).toBe(kroky.length);
    });
  }
});

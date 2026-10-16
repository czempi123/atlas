// Adresa stránky osoby: hlavní osoba profilu, další osoba společného profilu, osoba bez stránky.
import { describe, it, expect } from 'vitest';
import { readFileSync, readdirSync } from 'node:fs';
import { parse } from 'yaml';
import { adresaOsoby } from '../../src/lib/adresa-osoby';

describe('adresaOsoby', () => {
  const adresa = adresaOsoby([
    { id: 'sokrates', data: { osoba: 'sokrates' } },
    { id: 'krates-a-hipparchia', data: { osoba: 'krates', dalsi: ['hipparchia'] } },
  ]);

  it('hlavní osoba vede na svou stránku', () => {
    expect(adresa('sokrates')).toBe('/osobnost/sokrates/');
    expect(adresa('krates')).toBe('/osobnost/krates-a-hipparchia/');
  });

  it('další osoba společného profilu vede na tutéž stránku, ne na vlastní id', () => {
    expect(adresa('hipparchia')).toBe('/osobnost/krates-a-hipparchia/');
  });

  it('osoba bez stránky adresu nemá', () => {
    expect(adresa('lucretius')).toBeUndefined();
    expect(adresaOsoby([])('sokrates')).toBeUndefined();
  });

  it('osoba se dvěma stránkami zastaví sestavení', () => {
    expect(() =>
      adresaOsoby([
        { id: 'krates', data: { osoba: 'krates' } },
        { id: 'krates-a-hipparchia', data: { osoba: 'krates', dalsi: ['hipparchia'] } },
      ]),
    ).toThrow(/dvě stránky/);
  });
});

// Skutečný obsah: každá osoba ze stránek osobností má právě jednu adresu.
describe('adresy v atlasu', () => {
  const slozka = new URL('../../src/content/osobnosti/', import.meta.url);
  const stranky = readdirSync(slozka)
    .filter((s) => /^[^_].*\.mdx?$/.test(s))
    .map((s) => ({ id: s.replace(/\.mdx?$/, ''), data: parse(readFileSync(new URL(s, slozka), 'utf8').split('---')[1]) }));

  it('Kratés i Hipparchia vedou na společný profil', () => {
    const adresa = adresaOsoby(stranky);
    expect(adresa('krates')).toBe('/osobnost/krates-a-hipparchia/');
    expect(adresa('hipparchia')).toBe('/osobnost/krates-a-hipparchia/');
    expect(adresa('diogenes')).toBe('/osobnost/diogenes/');
  });
});

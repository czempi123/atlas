// Pokračuj, kde jsi skončil: výběr z rozpracovaných cest, bloků a navštívených stránek.
import { describe, it, expect } from 'vitest';
import { coPokracovat } from '../../src/lib/pokracuj';

const N = ' ';
const prazdny = { cesty: {}, aktivita: [], navstivene: [] };

describe('coPokracovat', () => {
  it('prázdný deník nic nenabídne', () => {
    expect(coPokracovat(prazdny)).toEqual([]);
  });
  it('rozpracovaná cesta má přednost, když je nejnovější; hotová se nenabízí', () => {
    const d = {
      ...prazdny,
      cesty: {
        'kdy-mam-dobry-duvod-verit': { nazev: 'Kdy mám dobrý důvod věřit?', pocet: 6, krok: 3, navstivene: [1, 2, 3], kdy: '2026-10-01T10:00:00Z' },
        hotova: { nazev: 'Hotová', pocet: 2, krok: 2, navstivene: [1, 2], kdy: '2026-10-01T11:00:00Z' },
      },
      navstivene: [{ odkaz: '/osobnost/sokrates/', nazev: 'Sókratés', kdy: '2026-10-01T09:00:00Z' }],
    };
    const p = coPokracovat(d);
    expect(p.map((x) => x.odkaz)).toEqual(['/cesta/kdy-mam-dobry-duvod-verit/3/', '/osobnost/sokrates/']);
    expect(p[0].popis).toBe(`Krok 3${N}z${N}6`);
  });
  it('rozpracovaný blok, hotový blok se přeskočí; blok v téže cestě se neopakuje', () => {
    const d = {
      ...prazdny,
      cesty: { c: { nazev: 'Cesta', pocet: 6, krok: 2, navstivene: [1, 2], kdy: '2026-10-01T10:00:00Z' } },
      aktivita: [
        { id: 'v', odkaz: '/cesta/c/2/#v', otazka: 'Co uděláš?', druh: 'volba' as const, hotovo: false, kdy: '2026-10-01T10:05:00Z' },
        { id: 's', odkaz: '/osobnost/sokrates/#s', otazka: 'Spor', druh: 'spor' as const, hotovo: true, kdy: '2026-10-01T10:06:00Z' },
      ],
    };
    const p = coPokracovat(d);
    expect(p).toHaveLength(1);
    expect(p[0].nadtitulek).toBe('Rozpracovaná otázka');
    expect(p[0].odkaz).toBe('/cesta/c/2/#v');
  });
  it('omezí počet', () => {
    const d = {
      ...prazdny,
      aktivita: [{ id: 'v', odkaz: '/a/#v', otazka: 'Q', druh: 'volba' as const, hotovo: false, kdy: '2026-10-01T10:05:00Z' }],
      navstivene: [{ odkaz: '/b/', nazev: 'B', kdy: '2026-10-01T09:00:00Z' }],
    };
    expect(coPokracovat(d, 1).map((x) => x.odkaz)).toEqual(['/a/#v']);
  });
});

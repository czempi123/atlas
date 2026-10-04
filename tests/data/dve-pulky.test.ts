// Kresba „Dvě půlky“ (cesta 5, krok 3): tři karty z koše Zčásti, levá půlka je moje dílo a nemění se.
import { describe, expect, it } from 'vitest';
import { KARTY, NAZEV_MOJI, OTAZKA_CELE, TRHLINA, karta, obrysPulky, okolnost, popisKarty } from '../../src/lib/dve-pulky';

const vety = (text: string) => text.split(/(?<=[.?!])\s+/);

describe('dvě půlky: karty', () => {
  it('tři karty z kroku 2, každá se třemi okolnostmi', () => {
    expect(KARTY.map((k) => k.nazev)).toEqual(['Zpráva', 'Známka', 'Zápas']);
    expect(KARTY.map((k) => k.titulek)).toEqual(['Jestli mi odepíše', 'Známka ze čtvrtletky', 'Zdravý na zápas']);
    for (const k of KARTY) {
      expect(k.okolnosti).toHaveLength(3);
      expect(new Set(k.okolnosti.map((o) => o.id)).size).toBe(3);
    }
    expect(NAZEV_MOJI).toBe('moje půlka');
  });

  it('věty na kartě se vejdou na půlku: nejvýš dva řádky po 16 znacích, popisky nejvýš tři slova', () => {
    for (const k of KARTY) {
      for (const radky of [k.moje, ...k.okolnosti.map((o) => o.radky)]) {
        expect(radky.length).toBeGreaterThan(0);
        expect(radky.length).toBeLessThanOrEqual(2);
        for (const radek of radky) expect(radek.length, radek).toBeLessThanOrEqual(16);
      }
      for (const popisek of [k.titulek, k.cizi, NAZEV_MOJI]) expect(popisek.split(' ').length, popisek).toBeLessThanOrEqual(3);
    }
  });

  it('karta podle id; neznámé id vrátí první', () => {
    expect(karta('zapas').titulek).toBe('Zdravý na zápas');
    expect(karta('nic')).toBe(KARTY[0]);
  });

  it('okolnost mimo rozsah se přichytí ke kraji', () => {
    const k = KARTY[0];
    expect(okolnost(k, 1).id).toBe('mlci');
    expect(okolnost(k, -4)).toBe(k.okolnosti[0]);
    expect(okolnost(k, 99)).toBe(k.okolnosti[2]);
    expect(okolnost(k, Number.NaN)).toBe(k.okolnosti[0]);
  });
});

describe('dvě půlky: texty pod kresbou', () => {
  it('celá karta klade otázku, roztržená říká, co se stalo', () => {
    for (const k of KARTY) {
      expect(popisKarty(k, false, 2)).toBe(`${k.scena} ${OTAZKA_CELE}`);
      k.okolnosti.forEach((o, i) => expect(popisKarty(k, true, i)).toBe(o.popis));
    }
  });

  it('když se druhá půlka změní, text řekne, že moje zůstala', () => {
    for (const k of KARTY) {
      for (const o of k.okolnosti.slice(1)) expect(o.popis, o.id).toMatch(/[Tt]voje( půlka)? (ne|se nezměnila)\b/);
    }
  });

  it('texty drží pravidla: věty do 25 slov, žádný rod studenta, žádné rady', () => {
    for (const k of KARTY) {
      for (const text of [k.scena, ...k.okolnosti.map((o) => o.popis)]) {
        for (const veta of vety(text)) expect(veta.split(/\s+/).length, veta).toBeLessThanOrEqual(25);
        expect(text).not.toMatch(/\b(jsi|ses) \p{L}+l\b/u);
        expect(text).not.toMatch(/měl bys|musíš|správně/);
      }
    }
  });
});

describe('dvě půlky: obrys', () => {
  it('trhlina vede shora dolů středem karty', () => {
    expect(TRHLINA[0]).toEqual([170, 48]);
    expect(TRHLINA.at(-1)).toEqual([170, 200]);
    for (let i = 1; i < TRHLINA.length; i++) expect(TRHLINA[i][1]).toBeGreaterThan(TRHLINA[i - 1][1]);
    for (const [x] of TRHLINA) expect(Math.abs(x - 170)).toBeLessThanOrEqual(6);
  });

  it('obě půlky sdílejí stejné body trhliny', () => {
    const body = TRHLINA.map(([x, y]) => `${x},${y}`);
    for (const strana of ['leva', 'prava'] as const) for (const bod of body) expect(obrysPulky(strana)).toContain(bod);
    expect(obrysPulky('leva')).toMatch(/^M34,48 L170,48 /);
    expect(obrysPulky('prava')).toMatch(/^M306,48 L306,200 L170,200 /);
    expect(obrysPulky('leva', [[10, 0], [12, 5]])).toBe('M34,48 L10,0 L12,5 L34,200 Z');
  });
});

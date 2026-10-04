// Kresba jeskyně: pohledy a jejich popisy, průvod věcí a stín na stěně v pohledu z boku.
import { describe, it, expect } from 'vitest';
import { POHLEDY, POPISY, PRUVOD, ROZESTUP, delkaPruvodu, stinNaStene } from '../../src/lib/jeskyne';

describe('kresba jeskyně', () => {
  it('každý pohled má název a popis; první je pohled vězňů', () => {
    expect(POHLEDY.map((p) => p.id)).toEqual(['vezni', 'bok']);
    for (const p of POHLEDY) {
      expect(p.nazev.length).toBeGreaterThan(0);
      expect(POPISY[p.id].length).toBeGreaterThan(40);
    }
  });
  it('popisy drží pravidla textu: věty do 25 slov, student sedí mezi vězni, ozvěna je jen „kdyby“', () => {
    for (const text of Object.values(POPISY)) {
      for (const veta of text.split(/(?<=[.?!])\s+/)) expect(veta.split(/\s+/).length, veta).toBeLessThanOrEqual(25);
      expect(text).not.toMatch(/loutkář|klam|manipul|osvobod/);
    }
    expect(POPISY.vezni).toMatch(/^Sedíš mezi vězni/);
    expect(POPISY.vezni).toContain('Kdyby se od stěny vracela ozvěna');
    expect(POPISY.bok).toContain('Tenhle pohled žádný z nich nemá.');
  });
  it('průvod se opakuje po celé své délce', () => {
    expect(delkaPruvodu()).toBe(PRUVOD.length * ROZESTUP);
    expect(delkaPruvodu(['a', 'b'], 100)).toBe(200);
    expect(delkaPruvodu([])).toBe(0);
  });
  it('stín na stěně leží na přímce z ohně přes věc', () => {
    const ohen = { x: 0, y: 100 };
    // Věc ve výšce ohně vrhá stín do stejné výšky; věc pod ním vrhá stín níž a zvětšený.
    expect(stinNaStene(ohen, { x: 50, y: 100 }, 200)).toBe(100);
    expect(stinNaStene(ohen, { x: 50, y: 110 }, 200)).toBe(140);
    expect(stinNaStene(ohen, { x: 100, y: 90 }, 200)).toBe(80);
  });
  it('bod před ohněm nebo za stěnou stín nemá', () => {
    const ohen = { x: 40, y: 100 };
    expect(stinNaStene(ohen, { x: 40, y: 90 }, 200)).toBeNull();
    expect(stinNaStene(ohen, { x: 10, y: 90 }, 200)).toBeNull();
    expect(stinNaStene(ohen, { x: 200, y: 90 }, 200)).toBeNull();
  });
});

// Kresba jeskyně: pohledy a jejich popisy, průvod věcí a stín na stěně v pohledu z boku.
import { describe, it, expect } from 'vitest';
import { POHLEDY, POPISY, PRUVOD, ROZESTUP, delkaPruvodu, stinNaStene, POHLEDY_VEN, POPIS_CESTY, STUPNE, vrstvyVenku } from '../../src/lib/jeskyne';

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

describe('cesta ven z jeskyně', () => {
  it('pořadí stupňů drží pramen: stíny, odrazy, věci, noční nebe, slunce', () => {
    expect(POHLEDY_VEN.map((p) => p.id)).toEqual(['cesta', 'venku']);
    expect(STUPNE.map((s) => s.nazev)).toEqual(['záře', 'stíny', 'odrazy ve vodě', 'věci samé', 'noční nebe', 'slunce']);
  });
  it('popisy: nikdo se neosvobodí sám, venku nejdřív nevidí nic, věty do 25 slov', () => {
    expect(POPIS_CESTY).toMatch(/^Někdo vězně rozváže/);
    expect(POPIS_CESTY).toContain('násilím vleče');
    expect(STUPNE[0].popis).toContain('nevidí vůbec nic');
    for (const text of [POPIS_CESTY, ...STUPNE.map((s) => s.popis)]) {
      for (const veta of text.split(/(?<=[.?!])\s+/)) expect(veta.split(/\s+/).length, veta).toBeLessThanOrEqual(25);
      expect(text).not.toMatch(/osvobodí se|prohlédl|probud/);
    }
  });
  it('vrstvy: nejdřív jen záře, pak stíny, voda, věci; slunce až na konci', () => {
    expect(vrstvyVenku(0)).toEqual({ zare: 1, stiny: 0, voda: 0, veci: 0, noc: 0, slunce: 0 });
    expect(vrstvyVenku(1)).toMatchObject({ zare: 0, stiny: 1, voda: 0, slunce: 0 });
    expect(vrstvyVenku(1).veci).toBeLessThan(0.2);
    expect(vrstvyVenku(2)).toMatchObject({ stiny: 1, voda: 1 });
    expect(vrstvyVenku(2).veci).toBeLessThan(0.2);
    expect(vrstvyVenku(3)).toMatchObject({ stiny: 1, voda: 1, veci: 1, noc: 0, slunce: 0 });
    // V noci nejsou sluneční stíny; slunce samo je vidět až na posledním stupni.
    expect(vrstvyVenku(4)).toMatchObject({ stiny: 0, veci: 1, noc: 1, slunce: 0 });
    expect(vrstvyVenku(5)).toMatchObject({ stiny: 1, veci: 1, noc: 0, slunce: 1 });
    for (let s = 0; s < 5; s++) expect(vrstvyVenku(s).slunce).toBe(0);
  });
  it('stupeň mimo rozsah se přichytí ke kraji', () => {
    expect(vrstvyVenku(-3)).toEqual(vrstvyVenku(0));
    expect(vrstvyVenku(99)).toEqual(vrstvyVenku(5));
    expect(vrstvyVenku(2.4)).toEqual(vrstvyVenku(2));
    expect(vrstvyVenku(Number.NaN)).toEqual(vrstvyVenku(0));
  });
});

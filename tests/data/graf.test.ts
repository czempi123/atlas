// Graf křivek: převod bodů na souřadnice kresby, cesta křivky, popisky a kontrola zadání.
import { describe, it, expect } from 'vitest';
import { KRESBA, polohaX, polohaY, cestaKrivky, dilkyOsy, mistoPopisku, mistoZnacky, sirkaTextu, chybyGrafu, type KrivkaGrafu } from '../../src/lib/graf';

const vetsina: KrivkaGrafu = { nazev: 'Většina lidí', body: [[0, 0.42], [5, 0.86]] };
const petina: KrivkaGrafu = { nazev: 'Nejméně šťastná pětina', body: [[0, 0.1], [3, 0.4], [5, 0.4]], carkovana: true };

describe('graf křivek: geometrie', () => {
  it('kraje osy leží na krajích plochy a výška roste nahoru', () => {
    expect(polohaX(0, 5)).toBe(KRESBA.vlevo);
    expect(polohaX(5, 5)).toBe(KRESBA.vpravo);
    expect(polohaY(0)).toBe(KRESBA.dole);
    expect(polohaY(1)).toBe(KRESBA.nahore);
    expect(polohaY(0.5)).toBeLessThan(polohaY(0.25));
  });
  it('dílky jsou stejně daleko od sebe, včetně obou krajů', () => {
    const d = dilkyOsy(5);
    expect(d).toHaveLength(6);
    expect(d[0]).toBe(KRESBA.vlevo);
    expect(d[5]).toBe(KRESBA.vpravo);
    const kroky = d.slice(1).map((x, i) => Math.round((x - d[i]) * 10) / 10);
    expect(new Set(kroky).size).toBe(1);
  });
  it('cesta křivky začíná M a pokračuje L přes všechny body', () => {
    expect(cestaKrivky(vetsina.body, 5)).toBe(`M${polohaX(0, 5)} ${polohaY(0.42)} L${polohaX(5, 5)} ${polohaY(0.86)}`);
    expect(cestaKrivky(petina.body, 5).match(/[ML]/g)).toEqual(['M', 'L', 'L']);
  });
  it('křivka, která se zastaví, běží za zlomem vodorovně', () => {
    const [, zlom, konec] = petina.body;
    expect(polohaY(zlom[1])).toBe(polohaY(konec[1]));
  });
  it('popisek stojí nad koncem křivky, nebo nad zvoleným bodem', () => {
    const konec = mistoPopisku(vetsina, 5);
    expect(konec.x).toBe(polohaX(5, 5));
    expect(konec.y).toBeCloseTo(polohaY(0.86) - 10, 1);
    const zvoleny = mistoPopisku({ ...petina, popisek: [4, 0.5] }, 5);
    expect(zvoleny.x).toBe(polohaX(4, 5));
    expect(zvoleny.y).toBeCloseTo(polohaY(0.5) - 10, 1);
  });
  it('popisek značky se u kraje zarovná dovnitř kresby', () => {
    const s = sirkaTextu('100 000 dolarů');
    expect(mistoZnacky(3, 5, s).kotva).toBe('middle');
    expect(mistoZnacky(0, 5, s)).toEqual({ x: KRESBA.vlevo, kotva: 'start' });
    expect(mistoZnacky(5, 5, s).kotva).toBe('end');
    expect(mistoZnacky(5, 5, s).x).toBeLessThanOrEqual(KRESBA.sirka);
  });
  it('popisky křivek se vejdou do kresby a nepřekrývají se', () => {
    for (const k of [vetsina, petina]) {
      const m = mistoPopisku(k, 5);
      expect(m.x - sirkaTextu(k.nazev)).toBeGreaterThan(0);
      expect(m.y).toBeGreaterThan(20);
    }
    expect(mistoPopisku(petina, 5).y - mistoPopisku(vetsina, 5).y).toBeGreaterThan(30);
  });
});

describe('graf křivek: kontrola zadání', () => {
  it('správné zadání projde', () => {
    expect(chybyGrafu([vetsina, petina], 5, { x: 3 })).toEqual([]);
  });
  it('prázdné a neúplné zadání', () => {
    expect(chybyGrafu([], 5)).toHaveLength(1);
    expect(chybyGrafu([{ nazev: 'A', body: [[0, 0.5]] }], 5).join('\n')).toMatch(/aspoň dva body/);
  });
  it('body mimo plochu, pozpátku a značka mimo osu', () => {
    expect(chybyGrafu([{ nazev: 'A', body: [[0, 0.5], [6, 0.5]] }], 5).join('\n')).toMatch(/mimo plochu/);
    expect(chybyGrafu([{ nazev: 'A', body: [[0, 0.5], [2, 1.2]] }], 5).join('\n')).toMatch(/mimo plochu/);
    expect(chybyGrafu([{ nazev: 'A', body: [[3, 0.5], [2, 0.6]] }], 5).join('\n')).toMatch(/zleva doprava/);
    expect(chybyGrafu([vetsina], 5, { x: 7 }).join('\n')).toMatch(/značka je mimo osu/);
    expect(chybyGrafu([vetsina], 0).join('\n')).toMatch(/počet dílků/);
  });
  it('dvě křivky se stejným názvem nejdou rozlišit', () => {
    expect(chybyGrafu([vetsina, { ...petina, nazev: vetsina.nazev }], 5).join('\n')).toMatch(/různé názvy/);
  });
});

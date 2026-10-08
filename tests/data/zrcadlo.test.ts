// Kresba „Zrcadlo času“ (cesta 8, krok 4): pruhy času jsou souměrné, život se při posunu doleva nehne
// a vpravo není žádný letopočet. Texty pod kresbou drží tón celku 6.
import { describe, expect, it } from 'vitest';
import { KROK_NAVIC, LETOPOCTY, OSA, PLATNO, PO, POHLEDY_ZRCADLA, POPISY_NAMITKY, POPISY_ZRCADLA, POSUNY, PRED, VYCHOZI_POSUN, ZIVOT, popisZrcadla, useckyNamitky, zrcadlove } from '../../src/lib/zrcadlo';

const vety = (text: string) => text.split(/(?<=[.?!])\s+/).filter(Boolean);
const VSECHNY = [POPISY_ZRCADLA.pred, POPISY_ZRCADLA.po, ...POPISY_NAMITKY];

describe('zrcadlo času: osa', () => {
  it('má dva pohledy a život uprostřed plátna', () => {
    expect(POHLEDY_ZRCADLA.map((p) => p.nazev)).toEqual(['Zrcadlo', 'Námitka']);
    expect(ZIVOT.x + ZIVOT.sirka / 2).toBe(OSA.stred);
    expect(OSA.stred).toBe(PLATNO.sirka / 2);
  });

  it('čas před narozením a čas po smrti jsou stejně dlouhé a v zrcadle se kryjí', () => {
    expect(PRED.sirka).toBe(PO.sirka);
    expect(zrcadlove(PO.x)).toBe(PRED.x + PRED.sirka);
    expect(zrcadlove(PO.x + PO.sirka)).toBe(PRED.x);
    expect(zrcadlove(OSA.stred)).toBe(OSA.stred);
  });

  it('letopočty leží jen vlevo od života a jdou po sobě', () => {
    expect(LETOPOCTY.map((l) => l.rok)).toEqual([1348, 1620, 1914]);
    for (const l of LETOPOCTY) expect(l.x).toBeLessThan(ZIVOT.x);
    expect([...LETOPOCTY].sort((a, b) => a.x - b.x)).toEqual(LETOPOCTY);
  });
});

describe('zrcadlo času: námitka', () => {
  it('začíná životem, jak je', () => {
    expect(POSUNY[VYCHOZI_POSUN].nazev).toBe('jak je');
    expect(useckyNamitky(VYCHOZI_POSUN)).toEqual({ zivot: ZIVOT, navic: 0, cizi: null });
  });

  it('doprava se prodlužuje tentýž život a vejde se do plátna', () => {
    expect(useckyNamitky(VYCHOZI_POSUN + 1)).toEqual({ zivot: ZIVOT, navic: KROK_NAVIC, cizi: null });
    expect(useckyNamitky(VYCHOZI_POSUN + 2)).toEqual({ zivot: ZIVOT, navic: 2 * KROK_NAVIC, cizi: null });
    expect(PO.x + 2 * KROK_NAVIC).toBeLessThan(PLATNO.sirka);
  });

  it('doleva se život nehne: vlevo je někdo jiný, čím dřív, tím dál', () => {
    const [hodne, neco] = [useckyNamitky(0), useckyNamitky(1)];
    for (const u of [hodne, neco]) {
      expect(u.zivot).toEqual(ZIVOT);
      expect(u.navic).toBe(0);
      expect(u.cizi!.sirka).toBe(ZIVOT.sirka);
      // Cizí život leží celý v čase před narozením a života se nedotýká.
      expect(u.cizi!.x).toBeGreaterThanOrEqual(PRED.x);
      expect(u.cizi!.x + u.cizi!.sirka).toBeLessThan(ZIVOT.x);
    }
    expect(hodne.cizi!.x).toBeLessThan(neco.cizi!.x);
  });

  it('snese stupeň mimo rozsah', () => {
    expect(useckyNamitky(-5)).toEqual(useckyNamitky(0));
    expect(useckyNamitky(99)).toEqual(useckyNamitky(POSUNY.length - 1));
    expect(useckyNamitky(Number.NaN)).toEqual(useckyNamitky(VYCHOZI_POSUN));
  });
});

describe('zrcadlo času: texty pod kresbou', () => {
  it('každý stav má svůj text', () => {
    expect(popisZrcadla('zrcadlo', false, VYCHOZI_POSUN)).toBe(POPISY_ZRCADLA.pred);
    expect(popisZrcadla('zrcadlo', true, VYCHOZI_POSUN)).toBe(POPISY_ZRCADLA.po);
    expect(POPISY_NAMITKY).toHaveLength(POSUNY.length);
    POSUNY.forEach((_, i) => expect(popisZrcadla('namitka', true, i)).toBe(POPISY_NAMITKY[i]));
    expect(new Set(VSECHNY).size).toBe(VSECHNY.length);
  });

  it('věty mají nejvýš 25 slov', () => {
    for (const t of VSECHNY) for (const v of vety(t)) expect(v.split(/\s+/).length, v).toBeLessThanOrEqual(25);
  });

  it('zrcadlo je Lucretiovo a námitka je námitka: nic z toho netvrdí atlas svým hlasem', () => {
    expect(POPISY_ZRCADLA.po).toContain('Lucretius říká');
    for (const i of [0, 1, 3, 4]) expect(POPISY_NAMITKY[i]).toContain('podle námitky');
  });

  it('letopočty jsou jen ty z levé strany; námitka nemá číslo žádné', () => {
    expect(POPISY_ZRCADLA.po.match(/\d{4}/g)).toEqual(['1348', '1620', '1914']);
    for (const t of [POPISY_ZRCADLA.pred, ...POPISY_NAMITKY]) expect(t).not.toMatch(/\d/);
  });

  it('nemluví o tom, co čeká, jako o klidu, spánku nebo vysvobození, a neoslovuje studenta jeho smrtí', () => {
    for (const t of VSECHNY) expect(t).not.toMatch(/klid|spán|spí|vysvobo|úlev|až umřeš|až tu nebudeš|nic není|tvoje smrt|tvůj život|zemřeš/i);
  });
});

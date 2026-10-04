// Kresba „Kdy je dost?“ (cesta 6, krok 3): hladina stoupá jen k čáře; další voda ani máta ji výš nedostanou.
import { describe, expect, it } from 'vitest';
import { DOST, VYCHOZI_POHAR, chut, dolij, hladina, jeDost, popisPoharu, prepniMatu, type StavPoharu } from '../../src/lib/pohar';

const poDoliti = (kolikrat: number) => Array.from({ length: kolikrat }).reduce<StavPoharu>((s) => dolij(s), VYCHOZI_POHAR);

describe('pohár: hladina', () => {
  it('začíná prázdný a třemi dolitími dojde k čáře', () => {
    expect(VYCHOZI_POHAR).toEqual({ davka: 0, mata: false, tah: 'zacatek' });
    expect(hladina(VYCHOZI_POHAR)).toBe(0);
    expect(hladina(poDoliti(1))).toBeCloseTo(1 / 3);
    expect(hladina(poDoliti(2))).toBeCloseTo(2 / 3);
    expect(hladina(poDoliti(DOST))).toBe(1);
    expect(jeDost(poDoliti(2))).toBe(false);
    expect(jeDost(poDoliti(DOST))).toBe(true);
  });

  it('u čáry další voda hladinu nezvedne', () => {
    const navic = dolij(poDoliti(DOST));
    expect(navic).toEqual({ davka: DOST, mata: false, tah: 'navic' });
    expect(hladina(poDoliti(10))).toBe(1);
  });

  it('máta jde přidat až u čáry a hladinu nemění', () => {
    expect(prepniMatu(poDoliti(2))).toEqual(poDoliti(2));
    const sMatou = prepniMatu(poDoliti(DOST));
    expect(sMatou).toMatchObject({ mata: true, tah: 'mata' });
    expect(hladina(sMatou)).toBe(1);
    expect(chut(sMatou)).toBe('voda s mátou');
    expect(prepniMatu(sMatou)).toMatchObject({ mata: false, tah: 'cista' });
    expect(chut(VYCHOZI_POHAR)).toBe('čistá voda');
    // Dolití s mátou mátu nevezme.
    expect(dolij(sMatou)).toMatchObject({ mata: true, tah: 'navic', davka: DOST });
  });

  it('hladina snese i stav mimo rozsah', () => {
    expect(hladina({ davka: -2, mata: false, tah: 'zacatek' })).toBe(0);
    expect(hladina({ davka: 7, mata: false, tah: 'voda' })).toBe(1);
  });
});

describe('pohár: texty pod kresbou', () => {
  const stavy = [VYCHOZI_POHAR, poDoliti(1), poDoliti(2), poDoliti(3), poDoliti(4), prepniMatu(poDoliti(3)), prepniMatu(prepniMatu(poDoliti(3)))];

  it('každý stav má vlastní text', () => {
    expect(new Set(stavy.map(popisPoharu)).size).toBe(stavy.length);
    expect(popisPoharu(VYCHOZI_POHAR)).toMatch(/^Máš žízeň/);
    expect(popisPoharu(poDoliti(3))).toMatch(/^Dost\./);
    expect(popisPoharu(poDoliti(4))).toContain('hladina se nehne');
    expect(popisPoharu(prepniMatu(poDoliti(3)))).toContain('chutná jinak');
  });

  it('texty drží pravidla: věty do 25 slov, hladina není množství vody, nic se nezakazuje', () => {
    for (const text of stavy.map(popisPoharu)) {
      for (const veta of text.split(/(?<=[.?!])\s+/)) expect(veta.split(/\s+/).length, veta).toBeLessThanOrEqual(25);
      expect(text).not.toMatch(/litr|sklenic|nesmíš|špatn|štěstí/);
    }
    // U čáry mluví text o žízni, ne o plném poháru.
    for (const s of stavy.slice(3, 6)) expect(popisPoharu(s)).toMatch(/[Žž]ízeň/);
  });
});

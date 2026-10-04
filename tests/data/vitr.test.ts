// Kresba „Stejný vítr“ (profil Prótagora): vítr se nemění, mění se jen to, co má kdo za sebou.
import { describe, expect, it } from 'vitest';
import { LIDE, PREDTIM, VYCHOZI_VITR, jeZima, popisVetru, rec, type StavVetru } from '../../src/lib/vitr';

const STAVY: StavVetru[] = [
  { ty: 'cekani', kamarad: 'chuze' },
  { ty: 'chuze', kamarad: 'cekani' },
  { ty: 'cekani', kamarad: 'cekani' },
  { ty: 'chuze', kamarad: 'chuze' },
];

describe('stejný vítr', () => {
  it('začíná Platónovým případem: jednomu je zima, druhému ne', () => {
    expect(VYCHOZI_VITR).toEqual({ ty: 'cekani', kamarad: 'chuze' });
    expect(LIDE.map((c) => c.nazev)).toEqual(['Ty', 'Kamarád']);
    expect(PREDTIM.map((p) => p.nazev)).toEqual(['čekání', 'chůze']);
  });

  it('zima je tomu, kdo čekal na místě', () => {
    expect(jeZima('cekani')).toBe(true);
    expect(jeZima('chuze')).toBe(false);
    expect(rec('cekani')).toBe('„Je mi zima.“');
    expect(rec('chuze')).toBe('„Není mi zima.“');
  });

  it('každý stav má vlastní text a každý říká, že vítr je stejný', () => {
    const texty = STAVY.map(popisVetru);
    expect(new Set(texty).size).toBe(4);
    for (const text of texty) expect(text).toMatch(/Vítr (fouká na oba stejně|se přitom nezměnil)\.$/);
    expect(popisVetru(STAVY[0])).toMatch(/^Tobě je po čekání na místě zima\./);
    expect(popisVetru(STAVY[1])).toContain('Kamarádovi je po čekání na místě zima.');
    expect(popisVetru(STAVY[2])).toContain('oběma je zima');
    expect(popisVetru(STAVY[3])).toContain('zima není ani jednomu');
  });

  it('texty drží pravidla: věty do 25 slov, nikdo nedostane za pravdu, žádný rod studenta', () => {
    for (const text of STAVY.map(popisVetru)) {
      for (const veta of text.split(/(?<=[.?!])\s+/)) expect(veta.split(/\s+/).length, veta).toBeLessThanOrEqual(25);
      expect(text).not.toMatch(/pravd|mýlí|správně|ve skutečnosti|doopravdy/);
      expect(text).not.toMatch(/\bjsi (čekal|šel|stál)\b/);
    }
  });
});

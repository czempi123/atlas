// Kresba „Stejné šaty, jiné světlo“ (cesta 1, krok 6): okolí se mění, barvy šatů ne; texty drží podklady.
import { describe, expect, it } from 'vitest';
import { BARVY_SATU, STUPNE_SVETLA, VYCHOZI_STUPEN, okoli, smichej } from '../../src/lib/saty';

describe('šaty: světlo okolí', () => {
  it('míchá barvy po složkách a přichytí poměr ke krajům', () => {
    expect(smichej('#000000', '#ffffff', 0)).toBe('#000000');
    expect(smichej('#000000', '#ffffff', 1)).toBe('#ffffff');
    expect(smichej('#000000', '#ffffff', 0.5)).toBe('#808080');
    expect(smichej('#102030', '#302010', 2)).toBe('#302010');
    expect(smichej('#102030', '#302010', Number.NaN)).toBe('#102030');
  });

  it('uprostřed je okolí šedé, na krajích chladné a teplé', () => {
    const [chladne, stred, teple] = [okoli(0), okoli(VYCHOZI_STUPEN), okoli(STUPNE_SVETLA.length - 1)];
    expect(stred).toEqual({ stena: '#bdbdbd', podlaha: '#a2a2a2', okno: 0, lampa: 0 });
    expect(chladne).toMatchObject({ stena: '#5d70ab', okno: 1, lampa: 0 });
    expect(teple).toMatchObject({ stena: '#f6dc8a', okno: 0, lampa: 1 });
    // Mezistupeň leží na půl cesty a zdroj světla je vidět jen zpola.
    expect(okoli(1)).toMatchObject({ stena: smichej('#bdbdbd', '#5d70ab', 0.5), okno: 0.5, lampa: 0 });
    expect(okoli(3)).toMatchObject({ stena: smichej('#bdbdbd', '#f6dc8a', 0.5), okno: 0, lampa: 0.5 });
  });

  it('stupeň mimo rozsah se přichytí ke kraji, nečíslo zůstane uprostřed', () => {
    expect(okoli(-3)).toEqual(okoli(0));
    expect(okoli(99)).toEqual(okoli(STUPNE_SVETLA.length - 1));
    expect(okoli(Number.NaN)).toEqual(okoli(VYCHOZI_STUPEN));
  });

  it('barvy šatů jsou dvě a okolí je nikdy nepoužije', () => {
    const saty = Object.values(BARVY_SATU);
    expect(saty).toEqual(['#8f9bd0', '#74633f']);
    for (let s = 0; s < STUPNE_SVETLA.length; s++) {
      const o = okoli(s);
      expect(saty).not.toContain(o.stena);
      expect(saty).not.toContain(o.podlaha);
    }
  });
});

describe('šaty: texty pod kresbou', () => {
  it('pět stupňů od chladného světla k teplému, uprostřed barvy samé', () => {
    expect(STUPNE_SVETLA.map((s) => s.nazev)).toEqual([
      'chladné denní světlo', 'trochu chladné světlo', 'šedé okolí', 'trochu teplé světlo', 'teplé umělé světlo',
    ]);
    expect(STUPNE_SVETLA[0].popis).toContain('bílé a zlaté');
    expect(STUPNE_SVETLA[VYCHOZI_STUPEN].popis).toContain('modrou a hnědou');
    expect(STUPNE_SVETLA[4].popis).toContain('modré a černé');
  });

  it('věty mají nejvýš 25 slov a neříkají, kdo vidí správně', () => {
    for (const { popis } of STUPNE_SVETLA) {
      for (const veta of popis.split(/(?<=[.?!])\s+/)) expect(veta.split(/\s+/).length).toBeLessThanOrEqual(25);
      expect(popis).not.toMatch(/správně|ve skutečnosti|mýlí/);
    }
  });
});

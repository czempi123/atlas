// Kresba „Stejné šaty, jiné světlo“ (cesta 1, krok 6): světlo mění místnost, barvy šatů ne.
// Na krajích posuvníku se šaty shodují s věcmi, jejichž barvu student zná; texty drží podklady.
import { describe, expect, it } from 'vitest';
import { BARVY_SATU, STUPNE_SVETLA, VYCHOZI_STUPEN, scena } from '../../src/lib/saty';

const POSLEDNI = STUPNE_SVETLA.length - 1;

describe('šaty: světlo v místnosti', () => {
  it('barvy šatů jsou dvě', () => {
    expect(BARVY_SATU).toEqual({ modra: '#8f9bd0', hneda: '#74633f' });
  });

  it('v bílém světle mají věci své barvy a lampa nesvítí', () => {
    const s = scena(VYCHOZI_STUPEN);
    expect(s.lampa).toBe(0);
    expect(s.veci.bila).toBe('#ffffff');
    expect(s.veci.stena).toBe('#ceccc6');
    // Šaty se v bílém světle neshodují s ničím v místnosti.
    expect(Object.values(s.veci)).not.toContain(BARVY_SATU.modra);
    expect(Object.values(s.veci)).not.toContain(BARVY_SATU.hneda);
  });

  it('v chladném světle vyjde bílá jako světlé pruhy a zlatá jako tmavé', () => {
    const s = scena(0);
    expect(s.veci.bila).toBe(BARVY_SATU.modra);
    expect(s.veci.zlata).toBe(BARVY_SATU.hneda);
    expect(s.lampa).toBe(0);
    // Váza je v něm modřejší a kočka tmavší než šaty.
    expect(s.veci.modra).not.toBe(BARVY_SATU.modra);
    expect(s.veci.cerna).not.toBe(BARVY_SATU.hneda);
  });

  it('v teplém světle vyjde modrá váza jako světlé pruhy a černá kočka jako tmavé', () => {
    const s = scena(POSLEDNI);
    expect(s.veci.modra).toBe(BARVY_SATU.modra);
    expect(s.veci.cerna).toBe(BARVY_SATU.hneda);
    expect(s.lampa).toBe(1);
    expect(s.veci.bila).not.toBe(BARVY_SATU.modra);
  });

  it('mezistupně leží mezi středem a krajem', () => {
    const cervena = (h: string) => parseInt(h.slice(1, 3), 16);
    expect(cervena(scena(1).veci.bila)).toBeLessThan(cervena(scena(2).veci.bila));
    expect(cervena(scena(1).veci.bila)).toBeGreaterThan(cervena(scena(0).veci.bila));
    expect(cervena(scena(3).veci.cerna)).toBeGreaterThan(cervena(scena(2).veci.cerna));
    expect(cervena(scena(3).veci.cerna)).toBeLessThan(cervena(scena(4).veci.cerna));
    expect(scena(3).lampa).toBe(0.5);
  });

  it('stupeň mimo rozsah se přichytí ke kraji, nečíslo zůstane uprostřed', () => {
    expect(scena(-3)).toEqual(scena(0));
    expect(scena(99)).toEqual(scena(POSLEDNI));
    expect(scena(Number.NaN)).toEqual(scena(VYCHOZI_STUPEN));
  });
});

describe('šaty: texty pod kresbou', () => {
  it('pět stupňů od chladného světla k teplému, uprostřed barvy samé', () => {
    expect(STUPNE_SVETLA.map((s) => s.nazev)).toEqual([
      'chladné denní světlo', 'trochu chladné světlo', 'bílé světlo', 'trochu teplé světlo', 'teplé umělé světlo',
    ]);
    expect(STUPNE_SVETLA[0].popis).toContain('bílé a zlaté');
    expect(STUPNE_SVETLA[VYCHOZI_STUPEN].popis).toContain('modrou a hnědou');
    expect(STUPNE_SVETLA[POSLEDNI].popis).toContain('modré a černé');
  });

  it('věty mají nejvýš 25 slov a neříkají, kdo vidí správně', () => {
    for (const { popis } of STUPNE_SVETLA) {
      for (const veta of popis.split(/(?<=[.?!])\s+/)) expect(veta.split(/\s+/).length).toBeLessThanOrEqual(25);
      expect(popis).not.toMatch(/správně|ve skutečnosti|mýlí/);
    }
  });
});

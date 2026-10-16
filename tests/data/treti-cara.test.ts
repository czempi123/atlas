// Třetí čára (cesta 7, krok 6): geometrie karet podle Aschova prvního kola, pořadí odpovědí a texty pod kresbou.
import { describe, expect, it } from 'vitest';
import {
  BUBLINA, CARY, KARTA_TRI, KARTA_VZOR, KOLO_1, MISTA, PALEC, PLATNO, POCET_MIST, POHLEDY_CARY, POPISY_CARY, POSTAVA,
  SPODEK_CAR, SPOJENEC, SPRAVNA, TY, VETSINA, VZOR, odpovedi, popisCary, poradiBubliny, tvarBubliny,
} from '../../src/lib/treti-cara';

describe('karty na tabuli', () => {
  it('délky drží poměr Aschova prvního kola: vzor 3, možnosti 3¾, 4¼ a 3 palce', () => {
    expect(VZOR.delka).toBe(3 * PALEC);
    expect(CARY.map((c) => c.delka / PALEC)).toEqual([3.75, 4.25, 3]);
    expect(KOLO_1.moznosti[SPRAVNA - 1]).toBe(KOLO_1.vzor);
    expect(KOLO_1.moznosti[VETSINA - 1]).not.toBe(KOLO_1.vzor);
  });
  it('rozdíl je vidět i na telefonu: nejkratší rozdíl mezi čarami má aspoň 10 jednotek', () => {
    const d = [...CARY.map((c) => c.delka), VZOR.delka];
    const rozdily = d.flatMap((a, i) => d.slice(i + 1).map((b) => Math.abs(a - b))).filter((x) => x > 0);
    expect(Math.min(...rozdily)).toBeGreaterThanOrEqual(10);
  });
  it('čáry stojí na společné spodní hraně a vejdou se do karet', () => {
    for (const c of [VZOR, ...CARY]) {
      expect(c.y + c.delka).toBe(SPODEK_CAR);
      expect(c.y).toBeGreaterThan(KARTA_VZOR.y);
    }
    expect(VZOR.x).toBe(KARTA_VZOR.x + KARTA_VZOR.sirka / 2);
    for (const c of CARY) expect(c.x).toBeGreaterThan(KARTA_TRI.x);
    for (const c of CARY) expect(c.x).toBeLessThan(KARTA_TRI.x + KARTA_TRI.sirka);
    expect(KARTA_TRI.x + KARTA_TRI.sirka).toBeLessThanOrEqual(PLATNO.sirka);
  });
});

describe('řada židlí', () => {
  it('osm míst, student předposlední, spojenec mluví před ním', () => {
    expect(MISTA).toHaveLength(POCET_MIST);
    expect(TY).toBe(POCET_MIST - 2);
    expect(SPOJENEC).toBeLessThan(TY);
    for (const x of MISTA) {
      expect(x - POSTAVA.sirka / 2).toBeGreaterThanOrEqual(0);
      expect(x + POSTAVA.sirka / 2).toBeLessThanOrEqual(PLATNO.sirka);
    }
  });
  it('bez spojence řeknou všichni před studentem špatnou čáru, student má otazník a poslední ještě mlčí', () => {
    expect(odpovedi('sam')).toEqual(['1', '1', '1', '1', '1', '1', '?', null]);
  });
  it('se spojencem se změní jediná odpověď: čtvrtý řekne správnou čáru', () => {
    const sam = odpovedi('sam');
    const se = odpovedi('spojenec');
    expect(se[SPOJENEC]).toBe(String(SPRAVNA));
    expect(se.filter((o, i) => o !== sam[i])).toHaveLength(1);
    // Kresba nikde neukazuje, co řekne student.
    expect(se[TY]).toBe('?');
  });
  it('bubliny se rozsvěcují po řadě až ke studentovi', () => {
    expect(MISTA.map((_, i) => poradiBubliny(i))).toEqual([0, 1, 2, 3, 4, 5, 6, null]);
  });
  it('bublina leží nad hlavou a nepřekrývá ji', () => {
    expect(BUBLINA.y + BUBLINA.vyska + 6).toBeLessThan(POSTAVA.hlavaY - POSTAVA.hlavaR);
    expect(tvarBubliny(100)).toMatch(/^M\d/);
    expect(tvarBubliny(100)).toMatch(/Z$/);
  });
});

describe('texty pod kresbou', () => {
  it('dva pohledy a pro každý jeden text', () => {
    expect(POHLEDY_CARY.map((p) => p.id)).toEqual(['sam', 'spojenec']);
    expect(popisCary('sam')).toBe(POPISY_CARY.sam);
    expect(popisCary('spojenec')).toBe(POPISY_CARY.spojenec);
  });
  it('věty do 25 slov, bez čísel výsledku, bez smíchu a bez nálepek', () => {
    for (const t of Object.values(POPISY_CARY)) {
      for (const v of t.split(/(?<=[.?!])\s+/)) expect(v.split(/\s+/).length).toBeLessThanOrEqual(25);
      expect(t).not.toMatch(/procent|%|\d/);
      expect(t).not.toMatch(/smě|ovce|ovc|slab/i);
    }
  });
  it('text říká totéž co kresba: šest odpovědí před studentem a kdo z nich řekne co vidí', () => {
    expect(POPISY_CARY.sam).toContain('Šest lidí před tebou');
    expect(odpovedi('sam').slice(0, TY)).toHaveLength(6);
    expect(POPISY_CARY.spojenec).toContain('čtvrtý v řadě');
    expect(SPOJENEC).toBe(3);
  });
});

// Dějinné události nad posuvníkem roku: které názvy se vejdou a kde stojí (src/lib/kotvy.ts).
import { describe, it, expect } from 'vitest';
import { rozmistiNazvy, okrajeZnacky, mistoStitku, MEZERA_NAZVU, PRESAH_VPRAVO, TECKA, type KotvaNaOse } from '../../src/lib/kotvy';

const STOPA = 808;
// Období 1 na notebooku: okno 519–279 př. n. l., 808 px, tedy asi 3,37 px na rok.
const x = (rok: number) => ((rok + 519) / 240) * STOPA;
const obdobi1: KotvaNaOse[] = [
  { id: 'perske-valky', x1: x(-492), x2: x(-449), sirka: 116 },
  { id: 'marathon', x1: x(-490), x2: null, sirka: 110 },
  { id: 'salamina', x1: x(-480), x2: null, sirka: 100 },
  { id: 'peloponneska-valka', x1: x(-431), x2: x(-404), sirka: 112 },
  { id: 'proces-sokrata', x1: x(-399), x2: null, sirka: 98 },
  { id: 'alexandrova-tazeni', x1: x(-334), x2: x(-323), sirka: 158 },
];

/** Dvojice názvů, které se potkají nebo stojí blíž než na mezeru. */
function potkajiSe(kotvy: KotvaNaOse[], mista: Map<string, number>): string[] {
  const n = kotvy.filter((k) => mista.has(k.id)).map((k) => ({ id: k.id, l: mista.get(k.id)!, p: mista.get(k.id)! + k.sirka }));
  const spatne: string[] = [];
  for (let i = 0; i < n.length; i++) for (let j = i + 1; j < n.length; j++) if (n[i].l < n[j].p + MEZERA_NAZVU && n[j].l < n[i].p + MEZERA_NAZVU) spatne.push(`${n[i].id} × ${n[j].id}`);
  return spatne;
}

describe('názvy dějinných událostí nad posuvníkem', () => {
  it('období mají název nad začátkem pruhu', () => {
    const m = rozmistiNazvy(obdobi1.filter((k) => k.x2 !== null), STOPA);
    expect(m.get('perske-valky')).toBeCloseTo(x(-492));
    expect(m.get('peloponneska-valka')).toBeCloseTo(x(-431));
    expect(m.get('alexandrova-tazeni')).toBeCloseTo(x(-334));
  });
  it('bitvy uvnitř války název nemají: zůstane tečka na pruhu', () => {
    const m = rozmistiNazvy(obdobi1, STOPA);
    expect(m.has('marathon')).toBe(false);
    expect(m.has('salamina')).toBe(false);
  });
  it('události jednoho roku těsně za obdobím uvolní místo název období: ustoupí ke konci svého pruhu', () => {
    const m = rozmistiNazvy(obdobi1, STOPA);
    expect(m.get('peloponneska-valka')).toBeCloseTo(x(-404) - 112);
    expect(m.get('proces-sokrata')).toBeCloseTo(x(-399) - TECKA / 2);
    expect(m.get('proces-sokrata')! - (m.get('peloponneska-valka')! + 112)).toBeGreaterThanOrEqual(MEZERA_NAZVU);
  });
  it('když ani ústup nestačí, název události se schová a název období zůstane na místě', () => {
    const tesne = obdobi1.map((k) => (k.id === 'proces-sokrata' ? { ...k, x1: x(-403) } : k));
    const m = rozmistiNazvy(tesne, STOPA);
    expect(m.has('proces-sokrata')).toBe(false);
    expect(m.get('peloponneska-valka')).toBeCloseTo(x(-431));
  });
  it('název období kratší než pruh neustupuje', () => {
    const m = rozmistiNazvy(obdobi1, STOPA);
    expect(m.get('perske-valky')).toBeCloseTo(x(-492));
  });
  it('žádné dva názvy se nepotkají, ani při posouvání okna a na užší stopě', () => {
    for (const sirka of [808, 680, 560, 358]) {
      for (let posun = -400; posun <= 400; posun += 7) {
        const kotvy = obdobi1.map((k) => ({ ...k, x1: (k.x1 / STOPA) * sirka + posun, x2: k.x2 === null ? null : (k.x2 / STOPA) * sirka + posun }));
        const m = rozmistiNazvy(kotvy, sirka);
        expect(potkajiSe(kotvy, m), `šířka ${sirka}, posun ${posun}`).toEqual([]);
        for (const k of kotvy) {
          if (!m.has(k.id)) continue;
          expect(m.get(k.id)!).toBeGreaterThanOrEqual(0);
          expect(m.get(k.id)! + k.sirka).toBeLessThanOrEqual(sirka + PRESAH_VPRAVO);
        }
      }
    }
  });
  it('pruh, který začíná před oknem, má název od levého okraje stopy', () => {
    const m = rozmistiNazvy([{ id: 'valka', x1: -60, x2: 90, sirka: 116 }], STOPA);
    expect(m.get('valka')).toBe(0);
  });
  it('období celé v okně má přednost před obdobím, které okno ořezává', () => {
    // Užší stopa, rok 360 př. n. l.: z řecko-perských válek zbývá u levého okraje kus pruhu a oba názvy se nevejdou.
    const m = rozmistiNazvy([
      { id: 'perske-valky', x1: -24, x2: 61, sirka: 116 },
      { id: 'peloponneska-valka', x1: 96, x2: 150, sirka: 112 },
      { id: 'proces-sokrata', x1: 160, x2: null, sirka: 98 },
    ], 472);
    expect(m.get('peloponneska-valka')).toBe(96);
    expect(m.has('perske-valky')).toBe(false);
    expect(m.has('proces-sokrata')).toBe(false);
  });
  it('u pravého okraje se název zarovná ke konci značky', () => {
    const m = rozmistiNazvy([{ id: 'pad-rima', x1: 660, x2: null, sirka: 270 }], STOPA);
    expect(m.get('pad-rima')).toBeCloseTo(660 + TECKA / 2 - 270);
  });
  it('značka celá mimo stopu název nedostane', () => {
    const m = rozmistiNazvy([{ id: 'pred', x1: -200, x2: -20, sirka: 80 }, { id: 'po', x1: STOPA + 30, x2: null, sirka: 80 }], STOPA);
    expect(m.size).toBe(0);
  });
  it('prázdný vstup dá prázdné rozmístění', () => {
    expect(rozmistiNazvy([], STOPA).size).toBe(0);
  });
});

describe('značka a štítek', () => {
  it('pruh je oříznutý oknem, tečka stojí kolem svého roku', () => {
    expect(okrajeZnacky({ id: 'a', x1: -40, x2: 900, sirka: 10 }, STOPA)).toEqual([0, STOPA]);
    expect(okrajeZnacky({ id: 'b', x1: 100, x2: null, sirka: 10 }, STOPA)).toEqual([100 - TECKA / 2, 100 + TECKA / 2]);
  });
  it('štítek po najetí zůstane celý ve stopě', () => {
    expect(mistoStitku({ id: 'a', x1: 100, x2: null, sirka: 90 }, STOPA)).toBeCloseTo(100 - TECKA / 2);
    const uOkraje = mistoStitku({ id: 'b', x1: 800, x2: null, sirka: 90 }, STOPA);
    expect(uOkraje + 90).toBeLessThanOrEqual(STOPA + PRESAH_VPRAVO);
    expect(mistoStitku({ id: 'c', x1: 2, x2: null, sirka: 1200 }, STOPA)).toBe(0);
  });
});

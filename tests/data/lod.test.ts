// Loď po prknech (cesta 2, krok 4): geometrie trupu, pořadí výměny, kam jdou stará prkna a texty pod kresbou.
import { describe, expect, it } from 'vitest';
import { BREH, HLADINA, HROMADA, PLATNO, POCET, POHLEDY_LODI, POPISKY_LODI, POPISY_LODI, PORADI_VYMENY, PRKNA, RAD, SIRKA_TRUPU, SLOUPCU, TRUP_A, TRUP_B, VYSKA_TRUPU, ZEM, jeVymenene, pocetVymenenych, popisLodi, posunPrkna, stavPosuvniku } from '../../src/lib/lod';

describe('loď po prknech: trup a prkna', () => {
  it('má čtyřiadvacet prken ve třech řadách a každé má svůj tvar', () => {
    expect(POCET).toBe(24);
    expect(PRKNA).toHaveLength(RAD * SLOUPCU);
    expect(new Set(PRKNA.map((p) => p.tvar)).size).toBe(POCET);
    for (const p of PRKNA) {
      expect(p.tvar.startsWith('M') && p.tvar.endsWith('Z'), p.tvar).toBe(true);
      expect(p.stred.x).toBeGreaterThan(0);
      expect(p.stred.x).toBeLessThan(SIRKA_TRUPU);
    }
  });

  it('pořadí výměny je každé prkno právě jednou a zdvižené konce jdou poslední', () => {
    expect([...PORADI_VYMENY].sort((a, b) => a - b)).toEqual(Array.from({ length: POCET }, (_, i) => i));
    expect(PORADI_VYMENY.slice(-2).sort((a, b) => a - b)).toEqual([0, SLOUPCU - 1]);
    for (const p of PRKNA) expect(PORADI_VYMENY[p.poradi]).toBe(p.i);
  });

  it('obě lodě i hromada se vejdou do plátna a neleží přes sebe', () => {
    expect(TRUP_B.x + SIRKA_TRUPU).toBeLessThan(BREH);
    expect(TRUP_A.x).toBeGreaterThan(BREH);
    expect(TRUP_A.x + SIRKA_TRUPU).toBeLessThanOrEqual(PLATNO.sirka);
    expect(TRUP_A.y + VYSKA_TRUPU).toBeLessThanOrEqual(HLADINA);
    expect(TRUP_B.y + VYSKA_TRUPU).toBeLessThanOrEqual(ZEM);
    expect(TRUP_A.y - 19).toBeGreaterThan(0);
    expect(HROMADA.x + HROMADA.vedle * HROMADA.krok).toBeLessThan(BREH);
  });
});

describe('loď po prknech: výměna', () => {
  it('počet vyměněných drží meze a snese nesmysl', () => {
    expect(pocetVymenenych(-3)).toBe(0);
    expect(pocetVymenenych(99)).toBe(POCET);
    expect(pocetVymenenych(Number.NaN)).toBe(0);
    expect(pocetVymenenych(7.4)).toBe(7);
  });

  it('po n výměnách je venku právě n prken a žádné se nevrací', () => {
    for (let n = 0; n <= POCET; n++) {
      const venku = PRKNA.filter((p) => jeVymenene(p, n));
      expect(venku).toHaveLength(n);
      if (n > 0) for (const p of PRKNA.filter((x) => jeVymenene(x, n - 1))) expect(jeVymenene(p, n)).toBe(true);
    }
  });

  it('nevyměněné prkno se nehne; vyměněné leží na hromadě na břehu, nebo na svém místě v druhé lodi', () => {
    for (let n = 0; n <= POCET; n++) {
      const mista = new Set<string>();
      for (const p of PRKNA) {
        const h = posunPrkna(p, n, 'vymena');
        const d = posunPrkna(p, n, 'druha');
        if (!jeVymenene(p, n)) {
          expect(h).toEqual({ dx: 0, dy: 0 });
          expect(d).toEqual({ dx: 0, dy: 0 });
          continue;
        }
        // Druhá loď: stejné místo v trupu, jen o trup vedle.
        expect(d).toEqual({ dx: TRUP_B.x - TRUP_A.x, dy: TRUP_B.y - TRUP_A.y });
        // Hromada: na břehu, nad zemí, každé prkno jinde.
        const x = TRUP_A.x + p.x + h.dx;
        const y = TRUP_A.y + p.y + h.dy;
        expect(x).toBeGreaterThanOrEqual(0);
        expect(x + 24).toBeLessThan(BREH);
        expect(y + 11).toBeLessThanOrEqual(ZEM);
        expect(y - 19).toBeGreaterThan(0);
        mista.add(`${x},${y}`);
      }
      expect(mista.size).toBe(n);
    }
  });
});

describe('loď po prknech: texty', () => {
  const vsechny = [...Object.values(POPISY_LODI.vymena), ...Object.values(POPISY_LODI.druha)];

  it('věty pod kresbou mají nejvýš 25 slov', () => {
    for (const t of vsechny) for (const v of t.split(/(?<=[.?!])\s+/)) expect(v.split(/\s+/).length, v).toBeLessThanOrEqual(25);
  });

  it('text říká, co je pramen, co náš krok a co přidal Hobbes', () => {
    expect(popisLodi('vymena', 0)).toBe(POPISY_LODI.vymena.nic);
    expect(popisLodi('vymena', 1)).toBe(POPISY_LODI.vymena.cast);
    expect(popisLodi('vymena', POCET - 1)).toBe(POPISY_LODI.vymena.cast);
    expect(popisLodi('vymena', POCET)).toBe(POPISY_LODI.vymena.vse);
    expect(popisLodi('druha', 0)).toBe(POPISY_LODI.druha.nic);
    expect(popisLodi('druha', 12)).toBe(POPISY_LODI.druha.cast);
    expect(popisLodi('druha', POCET)).toBe(POPISY_LODI.druha.vse);
    // Počet prken je náš model; Plútarchos neříká, kolik jich vyměnili, a poslední prkno je náš krok.
    expect(POPISY_LODI.vymena.nic).toContain('nevíme');
    expect(POPISY_LODI.vymena.cast).toContain('kolik prken Athéňané vyměnili, neříká');
    expect(POPISY_LODI.vymena.vse).toContain('ten krok jsme přidali my');
    // Druhou loď Plútarchos nezná: je Hobbesova.
    expect(POPISY_LODI.druha.cast).toContain('Thomas Hobbes');
    expect(POPISY_LODI.druha.vse).toContain('Plútarchos ji nezná');
    // Kresba se neptá, která loď je „pravá“, a nikomu neříká, která je Théseova.
    for (const t of [...vsechny, ...Object.values(POPISKY_LODI)]) expect(t).not.toMatch(/prav[áéý]|skutečn|Théseova je/i);
  });

  it('řádek pod posuvníkem sedí pro každé číslo bez skloňování', () => {
    expect(stavPosuvniku(0)).toBe('Vyměněná prkna: 0 z 24 · původní: 24 z 24');
    expect(stavPosuvniku(1)).toBe('Vyměněná prkna: 1 z 24 · původní: 23 z 24');
    expect(stavPosuvniku(24)).toBe('Vyměněná prkna: 24 z 24 · původní: 0 z 24');
    expect(POHLEDY_LODI.map((p) => p.nazev)).toEqual(['Výměna prken', 'Druhá loď']);
  });
});

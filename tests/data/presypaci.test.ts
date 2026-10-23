// Kresba „Přesýpací hodiny“ (cesta 34, krok 3): 24 hodin dne, vrstvy podle toho, kdo o hodině rozhodl;
// co student nerozdělí, proteklo. Víc než 24 hodin nejde, zrnka se vejdou do baněk.
import { describe, expect, it } from 'vitest';
import { DOLE, HODIN, KOLO, MAX_SKUPINA, NAHORE, PAD, SKUPINY, VYCHOZI_DEN, hodinSlovy, nastav, popisDne, protekla, startZrnka, vrstva } from '../../src/lib/presypaci';

describe('přesýpací hodiny: den', () => {
  it('výchozí den nechá tři hodiny protéct', () => {
    expect(VYCHOZI_DEN).toEqual({ spanek: 8, skola: 8, ja: 3, jiny: 2 });
    expect(protekla(VYCHOZI_DEN)).toBe(3);
  });

  it('víc než 24 hodin rozdělit nejde a skupina má nejvýš dvanáct', () => {
    expect(nastav(VYCHOZI_DEN, 'ja', 10)).toMatchObject({ ja: 6 });
    expect(protekla(nastav(VYCHOZI_DEN, 'ja', 10))).toBe(0);
    expect(nastav({ spanek: 0, skola: 0, ja: 0, jiny: 0 }, 'spanek', 20).spanek).toBe(MAX_SKUPINA);
    expect(nastav(VYCHOZI_DEN, 'jiny', -3).jiny).toBe(0);
    expect(nastav(VYCHOZI_DEN, 'jiny', Number.NaN).jiny).toBe(0);
    expect(nastav(VYCHOZI_DEN, 'skola', 6.6).skola).toBe(7);
  });

  it('vrstvy jdou zdola v pořadí spánek, škola a rodina, tvoje volba, někdo jiný, protekla', () => {
    expect(SKUPINY.map((g) => g.id)).toEqual(['spanek', 'skola', 'ja', 'jiny']);
    const vrstvy = DOLE.map((_, i) => vrstva(VYCHOZI_DEN, i));
    expect(vrstvy.slice(0, 8).every((v) => v === 'spanek')).toBe(true);
    expect(vrstvy.slice(8, 16).every((v) => v === 'skola')).toBe(true);
    expect(vrstvy.slice(16, 19)).toEqual(['ja', 'ja', 'ja']);
    expect(vrstvy.slice(19, 21)).toEqual(['jiny', 'jiny']);
    expect(vrstvy.slice(21)).toEqual(['protekla', 'protekla', 'protekla']);
  });

  it('text pod kresbou říká čísla i zbytek a se zbytkem nula mluví jinak', () => {
    expect(popisDne(VYCHOZI_DEN)).toContain('Spánek 8 h, škola a rodina 8 h, tvoje volba 3 h, někdo nebo něco jiného 2 h.');
    expect(popisDne(VYCHOZI_DEN)).toContain('zbytek, 3 h. Protekl a nevíš, kdo o něm rozhodl.');
    expect(popisDne({ spanek: 8, skola: 8, ja: 6, jiny: 2 })).toContain('Neproteklo nic');
  });

  it('hodiny slovy pro čtečky skloňují', () => {
    expect([0, 1, 2, 4, 5, 12].map(hodinSlovy)).toEqual(['0 hodin', '1 hodina', '2 hodiny', '4 hodiny', '5 hodin', '12 hodin']);
  });
});

describe('přesýpací hodiny: geometrie a čas', () => {
  it('obě baňky mají místo pro každou hodinu dne', () => {
    expect(DOLE).toHaveLength(HODIN);
    expect(NAHORE).toHaveLength(HODIN);
    // Spodní baňka se plní zdola, horní odtéká shora.
    expect(DOLE[0].y).toBeGreaterThan(DOLE[HODIN - 1].y);
    expect(NAHORE[0].y).toBeLessThan(NAHORE[HODIN - 1].y);
  });

  it('poslední zrnko dopadne dřív, než kolo skončí', () => {
    expect(startZrnka(HODIN - 1) + PAD).toBeLessThan(KOLO - 2);
  });
});

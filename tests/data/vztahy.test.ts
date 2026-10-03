// Skupiny vztahů v oddílu Doba a lidé: vliv přes texty nesmí skončit pod nadpisem „Znali se a přeli se“.
import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { roleVztahu, skupinyVztahu, LEGENDA_VZTAHU, LEGENDA_TRADOVANY, type VztahOsoby } from '../../src/lib/vztahy';
import { TypVztahu } from '../../src/lib/schema';
import { vztahyOsoby } from '../../src/lib/data';

const v = (typ: 'ucitel' | 'znali-se' | 'vliv-textem' | 'polemika', smer: 'od' | 'k', druhy: string): VztahOsoby<string> =>
  ({ vztah: { od: smer === 'od' ? 'ja' : druhy, k: smer === 'od' ? druhy : 'ja', typ } as VztahOsoby['vztah'], druhy, smer });

describe('skupinyVztahu', () => {
  it('dělí vztahy na učitele, žáky, známé a vliv přes texty podle směru', () => {
    const s = skupinyVztahu([v('vliv-textem', 'k', 'autor'), v('ucitel', 'od', 'zak'), v('polemika', 'k', 'kritik'), v('ucitel', 'k', 'ucitel'), v('vliv-textem', 'od', 'ctenar'), v('znali-se', 'od', 'pritel')]);
    expect(s.map((x) => x.nazev)).toEqual(['Učitelé', 'Žáci', 'Znali se a přeli se', 'Četli ho a navázali', 'Koho četl']);
    expect(s.map((x) => x.lide.map((l) => l.druhy))).toEqual([['ucitel'], ['zak'], ['kritik', 'pritel'], ['ctenar'], ['autor']]);
  });
  it('prázdné skupiny vynechá', () => {
    expect(skupinyVztahu([])).toEqual([]);
    expect(skupinyVztahu([v('vliv-textem', 'od', 'ctenar')]).map((x) => x.nazev)).toEqual(['Četli ho a navázali']);
  });
  it('pod „Znali se a přeli se“ nikdy nestojí vliv přes texty', () => {
    for (const id of ['epiktetos', 'marcus-aurelius', 'epikuros', 'sokrates', 'diogenes', 'protagoras']) {
      const znali = skupinyVztahu(vztahyOsoby(id)).find((x) => x.nazev === 'Znali se a přeli se');
      expect(znali?.lide.every((l) => l.vztah.typ !== 'vliv-textem') ?? true, id).toBe(true);
    }
  });
  it('Epiktétos a Marcus Aurelius se neznali: jeden navázal, druhý četl', () => {
    const e = skupinyVztahu(vztahyOsoby('epiktetos'));
    expect(e.find((x) => x.nazev === 'Četli ho a navázali')?.lide.map((l) => l.druhy.id)).toEqual(['marcus-aurelius']);
    expect(e.some((x) => x.nazev === 'Znali se a přeli se')).toBe(false);
    const m = skupinyVztahu(vztahyOsoby('marcus-aurelius'));
    expect(m.find((x) => x.nazev === 'Koho četl')?.lide.map((l) => l.druhy.id)).toEqual(['epiktetos']);
    expect(m.some((x) => x.nazev === 'Znali se a přeli se')).toBe(false);
  });
});

describe('roleVztahu', () => {
  it('u vlivu přes texty říká, kdo na koho navázal', () => {
    expect(roleVztahu({ typ: 'vliv-textem' }, 'od')).toBe('navázal na jeho texty');
    expect(roleVztahu({ typ: 'vliv-textem' }, 'k')).toBe('znal ho z textů');
  });
  it('učitel a žák podle směru', () => {
    expect(roleVztahu({ typ: 'ucitel' }, 'od')).toBe('žák');
    expect(roleVztahu({ typ: 'ucitel' }, 'k')).toBe('učitel');
  });
});

describe('legenda čar mezi životy', () => {
  it('má právě čtyři typy vztahů ze schématu dat, každý jednou a s vlastní čárou', () => {
    expect(LEGENDA_VZTAHU.map((v) => v.typ)).toEqual([...TypVztahu.options]);
    expect(new Set(LEGENDA_VZTAHU.map((v) => v.cara)).size).toBe(4);
  });
  it('pojmenování sedí s CLAUDE.md a s kartou člověka', () => {
    const pravidla = readFileSync(join(import.meta.dirname, '../../CLAUDE.md'), 'utf8');
    const veta = pravidla.split('\n').find((r) => r.includes('Vztah mezi lidmi má vždy typ'))!;
    for (const v of LEGENDA_VZTAHU) expect(veta, v.nazev).toContain(v.nazev);
    const karta = readFileSync(join(import.meta.dirname, '../../src/components/mapa/KartaCloveka.svelte'), 'utf8');
    expect(karta).toContain(`· ${LEGENDA_TRADOVANY}`);
  });
});

// Skupiny vztahů pro oddíl Doba a lidé. Vliv přes texty má vlastní skupiny, aby stránka netvrdila
// setkání tam, kde jeden druhého jen četl (Epiktétos a Marcus Aurelius, Epikúros a Lucretius).
import type { TVztah } from './schema';

/** Vzorek čáry, kterou má typ vztahu v řece životů, v kartě člověka a v legendě. */
export type CaraVztahu = 'plna' | 'teckovana' | 'carkovana' | 'vlnovka';
/**
 * Legenda čar mezi životy (Mapa a čas): čtyři typy vztahů z dat, slovy podle CLAUDE.md.
 * Nový typ sem patří, až když je ve schématu dat; test hlídá, že legenda a schéma sedí.
 */
export const LEGENDA_VZTAHU: { typ: TVztah['typ']; nazev: string; cara: CaraVztahu }[] = [
  { typ: 'ucitel', nazev: 'učitel a žák', cara: 'plna' },
  { typ: 'znali-se', nazev: 'osobně se znali', cara: 'teckovana' },
  { typ: 'vliv-textem', nazev: 'vliv přes texty', cara: 'carkovana' },
  { typ: 'polemika', nazev: 'polemika', cara: 'vlnovka' },
];
/** Tradovaný vztah (v datech `tradovany`): slabší čára; stejné slovo jako v kartě člověka. */
export const LEGENDA_TRADOVANY = 'vypráví se';

/** Na které straně vztahu stojí osoba stránky: `od` (učitel, autor textu), nebo `k` (žák, čtenář). */
export type Smer = 'od' | 'k';
export interface VztahOsoby<T = unknown> { vztah: TVztah; druhy: T; smer: Smer }
export interface SkupinaVztahu<T = unknown> { nazev: string; lide: VztahOsoby<T>[] }

/** Popisek u druhého člověka ve vztahu. */
export function roleVztahu(v: Pick<TVztah, 'typ'>, smer: Smer): string {
  switch (v.typ) {
    case 'ucitel': return smer === 'od' ? 'žák' : 'učitel';
    case 'znali-se': return 'znali se';
    case 'vliv-textem': return smer === 'od' ? 'navázal na jeho texty' : 'znal ho z textů';
    case 'polemika': return 'polemizoval s ním';
  }
}

/** Neprázdné skupiny v pořadí, v jakém stojí na stránce. */
export function skupinyVztahu<T>(vztahy: VztahOsoby<T>[]): SkupinaVztahu<T>[] {
  const typ = (x: VztahOsoby<T>) => x.vztah.typ;
  return [
    { nazev: 'Učitelé', lide: vztahy.filter((x) => typ(x) === 'ucitel' && x.smer === 'k') },
    { nazev: 'Žáci', lide: vztahy.filter((x) => typ(x) === 'ucitel' && x.smer === 'od') },
    { nazev: 'Znali se a přeli se', lide: vztahy.filter((x) => typ(x) === 'znali-se' || typ(x) === 'polemika') },
    { nazev: 'Četli ho a navázali', lide: vztahy.filter((x) => typ(x) === 'vliv-textem' && x.smer === 'od') },
    { nazev: 'Koho četl', lide: vztahy.filter((x) => typ(x) === 'vliv-textem' && x.smer === 'k') },
  ].filter((s) => s.lide.length > 0);
}

// Skupiny vztahů pro oddíl Doba a lidé. Vliv přes texty má vlastní skupiny, aby stránka netvrdila
// setkání tam, kde jeden druhého jen četl (Epiktétos a Marcus Aurelius, Epikúros a Lucretius).
// Stejně tak spor na dálku: polemika s člověkem, se kterým se dotyčný osobně přít nemohl
// (Aristotelés a Sókratés, Karneadés a Chrýsippos), nestojí pod „Znali se a přeli se“.
import type { TOsoba, TVztah } from './schema';
import { interval, rozdilLet } from './casy';

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

/** Na které straně vztahu stojí osoba stránky: `od` (učitel, autor textu, kritik), nebo `k` (žák, čtenář, kritizovaný). */
export type Smer = 'od' | 'k';
export interface VztahOsoby<T = unknown> {
  vztah: TVztah;
  druhy: T;
  smer: Smer;
  /** polemika lidí, kteří se osobně přít nemohli (`sporNaDalku`); doplňuje `vztahyOsoby` v data.ts */
  naDalku?: boolean;
}
export interface SkupinaVztahu<T = unknown> { nazev: string; lide: VztahOsoby<T>[] }

/** Od kolika let počítáme, že se dva lidé mohli přít tváří v tvář. */
export const VEK_SPORU = 15;
type Zivot = Pick<TOsoba, 'narozen' | 'zemrel' | 'aktivni'>;

/**
 * Mohli se dva lidé přít osobně? Ano, když aspoň jeden rok žili oba a oběma bylo aspoň VEK_SPORU let.
 * Kdo má v datech jen roky činnosti, počítá se od jejich začátku. Když roky chybějí, vrací true:
 * stránka pak nic netvrdí navíc a vztah zůstane pod starším nadpisem.
 */
export function mohliSePrit(a: Zivot, b: Zivot): boolean {
  const ia = interval(a);
  const ib = interval(b);
  if (!ia || !ib) return true;
  const konec = Math.min(ia[1], ib[1]);
  const dospel = (o: Zivot, i: [number, number]) => !o.narozen || rozdilLet(i[0], konec) >= VEK_SPORU;
  return Math.max(ia[0], ib[0]) <= konec && dospel(a, ia) && dospel(b, ib);
}

/** Spor na dálku: polemika s člověkem, se kterým se kritik osobně přít nemohl. */
export function sporNaDalku(v: Pick<TVztah, 'typ'>, a: Zivot, b: Zivot): boolean {
  return v.typ === 'polemika' && !mohliSePrit(a, b);
}

/** Kdo je ve vztahu kdo, kvůli rodu popisku: `ja` je osoba stránky, `druhy` člověk v řádku. Bez údaje mužský rod. */
export interface RodVztahu { ja?: { zena?: boolean }; druhy?: { zena?: boolean } }
const tvar = (o: { zena?: boolean } | undefined, muz: string, zena: string) => (o?.zena ? zena : muz);

/**
 * Popisek u druhého člověka ve vztahu (řádek pod nadpisem skupiny v Době a lidech). Rod podle toho, kdo je podmět,
 * stejně jako v kartě člověka: u vlivu přes texty čtenář, u polemiky kritik („Hypatia · navázala na jeho texty“).
 */
export function roleVztahu(v: Pick<TVztah, 'typ'>, smer: Smer, naDalku = false, { ja, druhy }: RodVztahu = {}): string {
  switch (v.typ) {
    case 'ucitel': return smer === 'od' ? tvar(druhy, 'žák', 'žákyně') : tvar(druhy, 'učitel', 'učitelka');
    case 'znali-se': return 'znali se';
    case 'vliv-textem':
      return smer === 'od'
        ? `${tvar(druhy, 'navázal', 'navázala')} na ${tvar(ja, 'jeho', 'její')} texty`
        : `${tvar(ja, 'znal', 'znala')} ${tvar(druhy, 'ho', 'ji')} z textů`;
    case 'polemika': {
      const [kritik, cil] = smer === 'od' ? [ja, druhy] : [druhy, ja];
      return naDalku
        ? `${tvar(kritik, 'přel', 'přela')} se s ${tvar(cil, 'jeho', 'jejím')} učením`
        : `${tvar(kritik, 'polemizoval', 'polemizovala')} s ${tvar(cil, 'ním', 'ní')}`;
    }
  }
}

/** Neprázdné skupiny v pořadí, v jakém stojí na stránce; nadpisy v rodě osoby stránky (`zena`). */
export function skupinyVztahu<T, V extends VztahOsoby<T> = VztahOsoby<T>>(vztahy: V[], zena = false): { nazev: string; lide: V[] }[] {
  const typ = (x: V) => x.vztah.typ;
  const t = (muz: string, z: string) => (zena ? z : muz);
  return [
    { nazev: 'Učitelé', lide: vztahy.filter((x) => typ(x) === 'ucitel' && x.smer === 'k') },
    { nazev: 'Žáci', lide: vztahy.filter((x) => typ(x) === 'ucitel' && x.smer === 'od') },
    { nazev: 'Znali se a přeli se', lide: vztahy.filter((x) => typ(x) === 'znali-se' || (typ(x) === 'polemika' && !x.naDalku)) },
    { nazev: `S kým se ${t('přel', 'přela')} na dálku`, lide: vztahy.filter((x) => typ(x) === 'polemika' && x.naDalku && x.smer === 'od') },
    { nazev: `Kdo se s ${t('ním', 'ní')} přel později`, lide: vztahy.filter((x) => typ(x) === 'polemika' && x.naDalku && x.smer === 'k') },
    { nazev: `Četli ${t('ho', 'ji')} a navázali`, lide: vztahy.filter((x) => typ(x) === 'vliv-textem' && x.smer === 'od') },
    { nazev: `Koho ${t('četl', 'četla')}`, lide: vztahy.filter((x) => typ(x) === 'vliv-textem' && x.smer === 'k') },
  ].filter((s) => s.lide.length > 0);
}

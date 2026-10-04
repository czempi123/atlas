// Kdy je dost? (cesta 6, krok 3): kresba k Epikúrovu stropu slasti. Pohár se plní vodou; hladina neukazuje,
// kolik vody student vypil, ale kolik žízně je pryč. U čáry „dost“ žízeň zmizela. Další voda ani jiná chuť
// hladinu výš nedostanou: slast se podle Epikúra po odstranění nedostatku už nezvětší, jen obmění.
// Podklad: docs/podklady/celek-2-jak-zit.md › Tvrzení: Epikúros (Dopis Menoikeovi 127–132; Hlavní myšlenky 3 a 18).

/** Kolikrát je potřeba dolít, než žízeň zmizí. */
export const DOST = 3;

export type Tah = 'zacatek' | 'voda' | 'navic' | 'mata' | 'cista';

export interface StavPoharu {
  /** kolikrát student dolil, 0 až DOST */
  davka: number;
  /** je ve vodě máta */
  mata: boolean;
  /** co student udělal naposled; podle toho mluví text pod kresbou */
  tah: Tah;
}

export const VYCHOZI_POHAR: StavPoharu = { davka: 0, mata: false, tah: 'zacatek' };

export const jeDost = (stav: StavPoharu): boolean => stav.davka >= DOST;

/** Dolít vodu. Pod čarou hladina stoupne, u čáry už ne. */
export function dolij(stav: StavPoharu): StavPoharu {
  if (jeDost(stav)) return { ...stav, davka: DOST, tah: 'navic' };
  return { ...stav, davka: Math.max(0, Math.floor(stav.davka)) + 1, tah: 'voda' };
}

/** Přidat nebo vyndat mátu. Jde to až u čáry; hladinu to nemění. */
export function prepniMatu(stav: StavPoharu): StavPoharu {
  if (!jeDost(stav)) return stav;
  return { ...stav, mata: !stav.mata, tah: stav.mata ? 'cista' : 'mata' };
}

/** Výška hladiny v poháru: 0 je dno, 1 čára „dost“. Výš nejde. */
export function hladina(stav: StavPoharu): number {
  return Math.min(DOST, Math.max(0, stav.davka)) / DOST;
}

/** Text pod kresbou: říká slovy, co je na kresbě. */
export function popisPoharu(stav: StavPoharu): string {
  if (!jeDost(stav)) {
    if (stav.davka <= 0) return 'Máš žízeň a pohár je prázdný. Hladina v něm ukazuje, kolik žízně už je pryč.';
    if (stav.davka === 1) return 'První doušky. Kus žízně je pryč, k čáře ale ještě hodně chybí.';
    return 'Žízeň slábne. K čáře chybí už jen kousek.';
  }
  if (stav.tah === 'navic') return 'Doléváš dál, ale hladina se nehne. Žízeň je pryč a další voda už nemá co zahnat.';
  if (stav.tah === 'mata') return 'S mátou voda chutná jinak. Hladina zůstala u čáry: žízeň nemůže být pryč ještě víc.';
  if (stav.tah === 'cista') return 'Zase čistá voda. Hladina je pořád u čáry.';
  return 'Dost. Žízeň je pryč a nic nechybí. Zkus přidat ještě něco: další vodu, nebo jinou chuť.';
}

/** Co je ve vodě (popisek v kresbě). */
export const chut = (stav: StavPoharu): string => (stav.mata ? 'voda s mátou' : 'čistá voda');

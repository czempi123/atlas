// „Pokračuj, kde jsi skončil“: co nabídnout na Domů a v deníku. Čistá funkce nad deníkem.
import type { Denik } from './denik';

export interface Pokracovani {
  nadtitulek: string;
  nazev: string;
  popis?: string;
  odkaz: string;
  kdy: string;
}

const NBSP = ' ';
const bezKotvy = (odkaz: string) => odkaz.split('#')[0];

/**
 * Nejvýš `pocet` nabídek podle toho, co student dělal naposledy: rozpracovaná cesta,
 * rozpracovaný blok, nebo naposledy navštívená stránka. Hotové cesty a bloky se nenabízejí.
 */
export function coPokracovat(d: Pick<Denik, 'cesty' | 'aktivita' | 'navstivene'>, pocet = 2): Pokracovani[] {
  const kandidati: Pokracovani[] = [];
  for (const [slug, c] of Object.entries(d.cesty)) {
    if (c.navstivene.length >= c.pocet && c.krok >= c.pocet) continue;
    kandidati.push({
      nadtitulek: 'Pokračuj v cestě',
      nazev: c.nazev,
      popis: `Krok ${c.krok}${NBSP}z${NBSP}${c.pocet}`,
      odkaz: `/cesta/${slug}/${c.krok}/`,
      kdy: c.kdy,
    });
  }
  const blok = d.aktivita.find((a) => !a.hotovo);
  if (blok) kandidati.push({ nadtitulek: 'Rozpracovaná otázka', nazev: blok.otazka, odkaz: blok.odkaz, kdy: blok.kdy });
  const stranka = d.navstivene[0];
  if (stranka) kandidati.push({ nadtitulek: 'Naposledy jsi četl', nazev: stranka.nazev, odkaz: stranka.odkaz, kdy: stranka.kdy });
  kandidati.sort((a, b) => b.kdy.localeCompare(a.kdy));
  const videne = new Set<string>();
  return kandidati
    .filter((k) => {
      // Rozpracovaný blok v cestě nebo na stránce, kterou už nabízíme, se neopakuje.
      const klic = bezKotvy(k.odkaz).replace(/\/\d+\/$/, '/');
      if (videne.has(klic)) return false;
      videne.add(klic);
      return true;
    })
    .slice(0, pocet);
}

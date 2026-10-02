// Vstupy do cest a otázek: které cesty a velké otázky patří k osobě a které cesty vedou k otázce.
// Čisté funkce nad daty kolekcí (cesty, otazky); používá je hlavička profilu, přehled otázek a stránka Lidé.
// Díky nim se na cestu dá dostat z profilu, z otázky i z přehledu, aniž by ji někdo musel ručně odkazovat.

export interface CestaVstupu {
  slug: string;
  cislo: number;
  nazev: string;
  /** číslo velké otázky, ke které cesta vede */
  otazka: number;
  filozofove: string[];
  minut?: number;
  /** počet kroků */
  kroku?: number;
}

export interface OtazkaVstupu {
  slug: string;
  cislo: number;
  otazka: string;
  hlasy?: { osoba: string }[];
}

const podleCisla = <T extends { cislo: number }>(a: T, b: T) => a.cislo - b.cislo;

/** Cesty, ve kterých osoba vystupuje (podle `filozofove`), seřazené podle čísla cesty. */
export function cestyOsoby<C extends CestaVstupu>(osoba: string, cesty: C[]): C[] {
  return cesty.filter((c) => c.filozofove.includes(osoba)).sort(podleCisla);
}

/** Cesty, které vedou k velké otázce s daným číslem. */
export function cestyOtazky<C extends CestaVstupu>(cislo: number, cesty: C[]): C[] {
  return cesty.filter((c) => c.otazka === cislo).sort(podleCisla);
}

/**
 * Co nabídnout v hlavičce profilu: cesty osoby a otázky, na jejichž stránce má osoba hlas.
 * Otázka, ke které vede cesta osoby, jde první; ostatní podle čísla.
 */
export function vstupyOsoby<C extends CestaVstupu, O extends OtazkaVstupu>(osoba: string, cesty: C[], otazky: O[]): { cesty: C[]; otazky: O[] } {
  const moje = cestyOsoby(osoba, cesty);
  const zCest = new Set(moje.map((c) => c.otazka));
  const sHlasem = otazky.filter((o) => (o.hlasy ?? []).some((h) => h.osoba === osoba));
  const poradi = (o: O) => (zCest.has(o.cislo) ? 0 : 1);
  return { cesty: moje, otazky: [...sHlasem].sort((a, b) => poradi(a) - poradi(b) || podleCisla(a, b)) };
}

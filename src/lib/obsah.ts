// Obsah stránky osobnosti: oddíly vyčtené ze sestavené stránky a právě čtený oddíl. Čisté funkce bez DOM.

export interface Oddil {
  /** kotva oddílu na stránce (bez #) */
  kotva: string;
  /** název, jak ho oddíl sám na stránce nese */
  nazev: string;
  /** číslo kapitoly („01“); ostatní oddíly ho nemají */
  cislo?: string;
}

const ENTITY: Record<string, string> = { amp: '&', quot: '"', lt: '<', gt: '>', '#34': '"', '#39': "'", '#x27': "'" };
const odkoduj = (s: string) => s.replace(/&(amp|quot|lt|gt|#34|#39|#x27);/g, (_, e: string) => ENTITY[e]);

/**
 * Oddíly stránky v pořadí, jak za sebou stojí. Oddíl se hlásí sám: jeho kořenový prvek má atribut `data-oddil`
 * s názvem a kotvu v `data-oddil-kotva`, jinak ve svém `id`; kapitola navíc `data-oddil-cislo`.
 * Obsah se tak skládá z toho, co na stránce opravdu je, ne ze seznamu v kódu.
 */
export function oddilyZeStranky(html: string): Oddil[] {
  const oddily: Oddil[] = [];
  const videne = new Set<string>();
  for (const [znacka] of html.matchAll(/<[a-zA-Z][^<>]*\sdata-oddil="[^"]*"[^<>]*>/g)) {
    const atribut = (jmeno: string) => {
      const m = znacka.match(new RegExp(`\\s${jmeno}="([^"]*)"`));
      return m ? odkoduj(m[1]).trim() : undefined;
    };
    const nazev = atribut('data-oddil');
    const kotva = atribut('data-oddil-kotva') || atribut('id');
    if (!nazev || !kotva || videne.has(kotva)) continue;
    videne.add(kotva);
    const cislo = atribut('data-oddil-cislo');
    oddily.push(cislo ? { kotva, nazev, cislo } : { kotva, nazev });
  }
  return oddily;
}

/**
 * Právě čtený oddíl: poslední, jehož horní hrana už přešla čáru čtení (kousek pod hlavičkou).
 * Nad prvním oddílem (hlavička, úvod) není čtený žádný. Na konci stránky, kam čára poslední oddíly
 * nedostane, platí poslední oddíl, který je v okně vidět.
 * `hrany` jsou v pořadí stránky, `nahore` je vzdálenost od horního okraje okna.
 */
export function ctenyOddil(hrany: { kotva: string; nahore: number }[], cara: number, konec?: { naKonci: boolean; vyskaOkna: number }): string | null {
  let ted: string | null = null;
  for (const h of hrany) if (h.nahore <= cara) ted = h.kotva;
  if (konec?.naKonci) for (const h of hrany) if (h.nahore < konec.vyskaOkna) ted = h.kotva;
  return ted;
}

/**
 * Kam nabídnout „Pokračovat ve čtení“: uložený oddíl, pokud na stránce pořád je a není první.
 * U prvního oddílu není kam se vracet, stránka tam začíná.
 */
export function kamPokracovat(oddily: Oddil[], kotva: unknown): Oddil | null {
  const i = typeof kotva === 'string' ? oddily.findIndex((o) => o.kotva === kotva) : -1;
  return i > 0 ? oddily[i] : null;
}

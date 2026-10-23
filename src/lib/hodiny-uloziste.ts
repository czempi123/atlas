// Uložené hodiny učitele (větev hodiny-v1, krok H2): seznam v localStorage pod klíčem KLIC_HODIN, odděleně
// od deníku studenta. Nic se neodesílá; jednu hodinu jde stáhnout jako soubor .json a zase nahrát
// (hodinaZeSouboru v src/lib/hodiny.ts). Když úložiště není dostupné (soukromé okno, zablokovaná data),
// hodiny vydrží jen do zavření stránky, stejně jako deník (src/lib/denik.ts).
import { KLIC_HODIN, VERZE_HODINY, hodinaZeSouboru, type UlozenaHodina } from './hodiny';

interface Uloziste {
  verze: 1;
  hodiny: UlozenaHodina[];
}

/** Co se do hodiny zapisuje: obsah bez id, verze a data změny (ty doplní ulozHodinu). */
export type ObsahHodiny = Pick<UlozenaHodina, 'nazev' | 'poznamka' | 'zastaveni'> & { id?: string };

let vPameti: UlozenaHodina[] | null = null;

/** Seznam z úložiště; neplatné položky a dvojí id se zahodí (platí první, tedy nejnověji uložená). */
function precti(): UlozenaHodina[] {
  try {
    const t = localStorage.getItem(KLIC_HODIN);
    if (t) {
      const u = JSON.parse(t) as Partial<Uloziste> | null;
      if (u && u.verze === VERZE_HODINY && Array.isArray(u.hodiny)) {
        const videne = new Set<string>();
        return u.hodiny
          .map((h) => hodinaZeSouboru(JSON.stringify(h)))
          .filter((h): h is UlozenaHodina => !!h && !videne.has(h.id) && !!videne.add(h.id));
      }
    }
  } catch { /* úložiště nedostupné nebo poškozené */ }
  return vPameti ?? [];
}

function zapis(hodiny: UlozenaHodina[]): void {
  vPameti = hodiny;
  try {
    localStorage.setItem(KLIC_HODIN, JSON.stringify({ verze: VERZE_HODINY, hodiny } satisfies Uloziste));
  } catch { /* zůstane v paměti */ }
  if (typeof window !== 'undefined') window.dispatchEvent(new CustomEvent('atlas-hodiny'));
}

/** Uložené hodiny, naposledy změněná první. */
export function nactiHodiny(): UlozenaHodina[] {
  return [...precti()].sort((a, b) => b.zmeneno.localeCompare(a.zmeneno));
}

export function nactiHodinu(id: string): UlozenaHodina | undefined {
  return precti().find((h) => h.id === id);
}

/** Nové id hodiny: krátké, z písmen a číslic, s časem vzniku, aby se dvě hodiny nesrazily. */
export function noveIdHodiny(ted = Date.now()): string {
  const nahoda = Math.floor(Math.random() * 36 ** 6).toString(36).padStart(6, '0');
  return `hodina-${ted.toString(36)}-${nahoda}`;
}

/**
 * Uloží hodinu: bez id dostane nové, s id přepíše hodinu se stejným id (nebo ji přidá, když ji úložiště
 * nezná, třeba po nahrání ze souboru). Každé uložení posune `zmeneno`, i když se změna vešla do téže
 * milisekundy. Zastavení i název pročistí stejně jako soubor (hodinaZeSouboru). Vrátí uloženou hodinu.
 */
export function ulozHodinu(obsah: ObsahHodiny, ted: Date = new Date()): UlozenaHodina {
  const hodiny = precti();
  const id = obsah.id ?? noveIdHodiny(ted.getTime());
  const pred = hodiny.find((h) => h.id === id);
  const kdy = pred && Date.parse(pred.zmeneno) >= ted.getTime() ? new Date(Date.parse(pred.zmeneno) + 1) : ted;
  const cista = hodinaZeSouboru(
    JSON.stringify({ verze: VERZE_HODINY, id, nazev: obsah.nazev, poznamka: obsah.poznamka, zastaveni: obsah.zastaveni, zmeneno: kdy.toISOString() }),
  )!;
  zapis([cista, ...hodiny.filter((h) => h.id !== id)]);
  return cista;
}

export function smazHodinu(id: string): void {
  zapis(precti().filter((h) => h.id !== id));
}

/** Jméno souboru pro hodinu: hodina-<název bez diakritiky>-<datum>.json. */
export function jmenoSouboru(h: Pick<UlozenaHodina, 'nazev'>, ted: Date = new Date()): string {
  const slug = h.nazev
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 40)
    .replace(/-+$/, '');
  return `hodina${slug ? `-${slug}` : ''}-${ted.toISOString().slice(0, 10)}.json`;
}

/** Text souboru .json s jednou hodinou (i s poznámkami: soubor je učitelův). */
export const souborHodiny = (h: UlozenaHodina): string => JSON.stringify(h, null, 2);

/** Stáhne hodinu jako soubor .json (jen v prohlížeči). */
export function stahniHodinu(h: UlozenaHodina): void {
  const blob = new Blob([souborHodiny(h)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = jmenoSouboru(h);
  a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 0);
}

/** Jen pro testy: zapomene hodiny držené v paměti (když localStorage chybí). */
export function _zapomenPamet(): void {
  vPameti = null;
}

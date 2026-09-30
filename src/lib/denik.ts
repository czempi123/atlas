// Soukromý deník studenta v localStorage (klíč atlas-denik). Nic se neodesílá; export do souboru.
// Když úložiště není dostupné (soukromé okno, zablokovaná data), deník funguje jen do zavření stránky.

export interface Zapis {
  /** kde vznikl, např. „sokrates/nikdo-nedela-zlo“ */
  id: string;
  otazka: string;
  odpoved: string;
  odkaz: string;
  kdy: string;
  /** z jakého bloku zápis pochází (pro řazení v deníku); starší zápisy ho nemají */
  druh?: 'stanovisko' | 'odkryj' | 'volba' | 'zmena' | 'spor';
}
export interface Vyzva {
  id: string;
  nazev: string;
  odkaz: string;
  prijato: string;
  poznamka?: string;
}
export interface Denik {
  verze: 1;
  zapisy: Zapis[];
  vyzvy: Vyzva[];
  navstivene: { odkaz: string; nazev: string; kdy: string }[];
  /**
   * Rozpracovaný stav interaktivních bloků podle id (vybraná karta, odkryto, odhad…).
   * Nezobrazuje se v deníku, ale vydrží obnovení stránky a je součástí exportu.
   */
  bloky: Record<string, unknown>;
}

const KLIC = 'atlas-denik';
const prazdny = (): Denik => ({ verze: 1, zapisy: [], vyzvy: [], navstivene: [], bloky: {} });
let vPameti: Denik | null = null;

export function nacti(): Denik {
  try {
    const t = localStorage.getItem(KLIC);
    if (t) {
      const d = JSON.parse(t);
      if (d && d.verze === 1) {
        const plny = { ...prazdny(), ...d };
        if (!plny.bloky || typeof plny.bloky !== 'object' || Array.isArray(plny.bloky)) plny.bloky = {};
        return plny;
      }
    }
  } catch { /* úložiště nedostupné */ }
  return vPameti ?? prazdny();
}

export function uloz(d: Denik): void {
  vPameti = d;
  try { localStorage.setItem(KLIC, JSON.stringify(d)); } catch { /* zůstane v paměti */ }
  if (typeof window !== 'undefined') window.dispatchEvent(new CustomEvent('atlas-denik'));
}

export function ulozZapis(z: Omit<Zapis, 'kdy'>): void {
  const d = nacti();
  d.zapisy = [...d.zapisy.filter((x) => x.id !== z.id), { ...z, kdy: new Date().toISOString() }];
  uloz(d);
}

/** Smaže zápis (blok „Začít znovu“). */
export function smazZapis(id: string): void {
  const d = nacti();
  d.zapisy = d.zapisy.filter((x) => x.id !== id);
  uloz(d);
}

export function najdiZapis(id: string): Zapis | undefined {
  return nacti().zapisy.find((x) => x.id === id);
}

/** Uložený stav bloku, nebo undefined. Typ hlídá volající; neplatný stav blok zahodí sám. */
export function stavBloku<T>(id: string): T | undefined {
  return nacti().bloky[id] as T | undefined;
}

export function ulozStavBloku(id: string, stav: unknown): void {
  const d = nacti();
  d.bloky = { ...d.bloky, [id]: stav };
  uloz(d);
}

export function smazStavBloku(id: string): void {
  const d = nacti();
  const { [id]: _pryc, ...zbytek } = d.bloky;
  d.bloky = zbytek;
  uloz(d);
}

export function prijmiVyzvu(v: Omit<Vyzva, 'prijato'>): void {
  const d = nacti();
  if (!d.vyzvy.some((x) => x.id === v.id)) d.vyzvy.push({ ...v, prijato: new Date().toISOString() });
  uloz(d);
}

export function zaznamenejNavstevu(odkaz: string, nazev: string): void {
  const d = nacti();
  d.navstivene = [{ odkaz, nazev, kdy: new Date().toISOString() }, ...d.navstivene.filter((x) => x.odkaz !== odkaz)].slice(0, 20);
  uloz(d);
}

export function exportuj(): void {
  const blob = new Blob([JSON.stringify(nacti(), null, 2)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `atlas-denik-${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(a.href);
}

/** Jen pro testy: zapomene deník držený v paměti (když localStorage chybí). */
export function _zapomenPamet(): void {
  vPameti = null;
}

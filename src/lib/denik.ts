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
  druh?: 'stanovisko' | 'odkryj' | 'volba' | 'zmena' | 'spor' | 'roztrid';
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
  /** Poslední práce v blocích (nejnovější první): pro „Pokračuj, kde jsi skončil“ a deník. */
  aktivita: Aktivita[];
  /** Postup v cestách podle slugu cesty. */
  cesty: Record<string, PostupCesty>;
  /**
   * Naposledy čtený oddíl profilu: adresa stránky → kotva oddílu. Nepovinné (starší deníky ho nemají),
   * je součástí exportu. Staví z něj „Pokračovat ve čtení“ nahoře na profilu.
   */
  cteni?: Record<string, string>;
}

export type DruhBloku = 'odkryj' | 'volba' | 'zmena' | 'spor' | 'roztrid' | 'kdo-zil-driv';
export interface Aktivita {
  id: string;
  odkaz: string;
  otazka: string;
  druh: DruhBloku;
  /** blok je dokončený (odkryto, potvrzeno, zapsáno) */
  hotovo: boolean;
  kdy: string;
}
export interface PostupCesty {
  nazev: string;
  /** počet kroků cesty */
  pocet: number;
  /** naposledy otevřený krok (1…pocet) */
  krok: number;
  /** kroky, které student otevřel */
  navstivene: number[];
  kdy: string;
}

const KLIC = 'atlas-denik';
const prazdny = (): Denik => ({ verze: 1, zapisy: [], vyzvy: [], navstivene: [], bloky: {}, aktivita: [], cesty: {} });
let vPameti: Denik | null = null;

export function nacti(): Denik {
  try {
    const t = localStorage.getItem(KLIC);
    if (t) {
      const d = JSON.parse(t);
      if (d && d.verze === 1) {
        const plny = { ...prazdny(), ...d };
        const objekt = (x: unknown) => !!x && typeof x === 'object' && !Array.isArray(x);
        if (!objekt(plny.bloky)) plny.bloky = {};
        if (!objekt(plny.cesty)) plny.cesty = {};
        if (!Array.isArray(plny.aktivita)) plny.aktivita = [];
        if (plny.cteni !== undefined && !objekt(plny.cteni)) delete plny.cteni;
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

/** Uloží stav bloku; s `meta` ho zapíše i do poslední aktivity (Pokračuj, deník). */
export function ulozStavBloku(id: string, stav: unknown, meta?: Omit<Aktivita, 'id' | 'kdy'>): void {
  const d = nacti();
  d.bloky = { ...d.bloky, [id]: stav };
  if (meta) d.aktivita = [{ ...meta, id, kdy: new Date().toISOString() }, ...d.aktivita.filter((a) => a.id !== id)].slice(0, 30);
  uloz(d);
}

export function smazStavBloku(id: string): void {
  const d = nacti();
  const { [id]: _pryc, ...zbytek } = d.bloky;
  d.bloky = zbytek;
  d.aktivita = d.aktivita.filter((a) => a.id !== id);
  uloz(d);
}

/** Zaznamená otevřený krok cesty. */
export function zaznamenejKrok(slug: string, krok: number, nazev: string, pocet: number): void {
  const d = nacti();
  const p = d.cesty[slug];
  const navstivene = [...new Set([...(p?.navstivene ?? []), krok])].sort((a, b) => a - b);
  d.cesty = { ...d.cesty, [slug]: { nazev, pocet, krok, navstivene, kdy: new Date().toISOString() } };
  uloz(d);
}

/** Nejvýš tolik profilů si deník pamatuje pro „Pokračovat ve čtení“; nejdéle nečtený vypadne. */
const CTENI_NEJVYS = 30;

/** Zapamatuje naposledy čtený oddíl stránky (jen kotvu). Volá se při změně oddílu, ne při každém posunu. */
export function ulozCteni(odkaz: string, kotva: string): void {
  const d = nacti();
  if (d.cteni?.[odkaz] === kotva) return;
  const { [odkaz]: _stare, ...ostatni } = d.cteni ?? {};
  const zaznamy = [...Object.entries(ostatni), [odkaz, kotva] as const].filter(([, k]) => typeof k === 'string');
  d.cteni = Object.fromEntries(zaznamy.slice(-CTENI_NEJVYS));
  uloz(d);
}

/** Kotva naposledy čteného oddílu stránky, nebo undefined. */
export function cteniStranky(odkaz: string): string | undefined {
  const k = nacti().cteni?.[odkaz];
  return typeof k === 'string' ? k : undefined;
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

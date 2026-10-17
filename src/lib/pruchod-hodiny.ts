// Průchod hodinou (větev hodiny-v1, krok H3): aktivní hodina této karty, lišta hodiny na stránkách atlasu
// a režim Promítat pro plátno. Čisté funkce bez DOM (testy tests/data/pruchod-hodiny.test.ts) a úložiště
// v sessionStorage: hodina platí jen pro kartu, ve které ji student otevřel, a po zavření karty zmizí.
// Lištu a promítání na stránkách obsluhuje src/scripts/hodina-lista.ts; třídy na <html> nastavuje
// před vykreslením skript v src/layouts/Zakladni.astro, který čte tentýž klíč.
import { najdiZastaveni, type DruhZastaveni, type HodinaProStudenty, type Zastaveni } from './hodiny';

/** Klíč v sessionStorage (čte ho i skript v hlavičce Zakladni.astro). */
export const KLIC_AKTIVNI = 'atlas-hodina-aktivni';

/** Zastavení aktivní hodiny, jak ho potřebuje lišta: kam vede a co je zač. Zastavení, které atlas nemá, má `stranka: null`. */
export interface PolozkaHodiny {
  id: string;
  druh: DruhZastaveni | null;
  nazev: string;
  stranka: string | null;
  kotva: string | null;
  adresa: string | null;
}

export interface AktivniHodina {
  verze: 1;
  /** adresa stránky hodiny (Přehled hodiny) */
  adresa: string;
  nazev: string;
  polozky: PolozkaHodiny[];
  /** zastavení, na které student šel z lišty nebo ze stránky hodiny (index); platí, jen když stojí na otevřené stránce */
  posledni: number | null;
  /** promítání: kam na zastavení přijít (předchozí zastavení se ukáže od konce) */
  prichod: 'zacatek' | 'konec';
  promitani: boolean;
  /** student lištu v této kartě zavřel */
  zavreno: boolean;
  /** učitel při promítání zapnul celou obrazovku; po přechodu na jinou stránku se zapne znovu první klávesou */
  celaObrazovka: boolean;
}

/** Aktivní hodina z hodiny pro studenty a katalogu: zastavení s adresami, neznámá bez adresy. */
export function aktivniHodina(h: HodinaProStudenty, katalog: Zastaveni[], adresa: string, promitani = false): AktivniHodina {
  const polozky = najdiZastaveni(katalog, h.zastaveni).map((n): PolozkaHodiny =>
    n.nalezeno
      ? { id: n.id, druh: n.zastaveni.druh, nazev: n.zastaveni.nazev, stranka: n.zastaveni.stranka, kotva: n.zastaveni.kotva, adresa: n.zastaveni.adresa }
      : { id: n.id, druh: null, nazev: n.text, stranka: null, kotva: null, adresa: null },
  );
  return { verze: 1, adresa, nazev: h.nazev, polozky, posledni: null, prichod: 'zacatek', promitani, zavreno: false, celaObrazovka: false };
}

/** Aktivní hodina z úložiště, nebo null (chybí, je poškozená nebo jiné verze). */
export function platnaAktivni(x: unknown): AktivniHodina | null {
  if (!x || typeof x !== 'object') return null;
  const h = x as Partial<AktivniHodina>;
  if (h.verze !== 1 || typeof h.adresa !== 'string' || !Array.isArray(h.polozky)) return null;
  const polozky = h.polozky.filter(
    (p): p is PolozkaHodiny => !!p && typeof p.id === 'string' && (p.stranka === null || typeof p.stranka === 'string') && (p.adresa === null || typeof p.adresa === 'string'),
  );
  if (polozky.length !== h.polozky.length) return null;
  return {
    verze: 1,
    adresa: h.adresa,
    nazev: typeof h.nazev === 'string' ? h.nazev : '',
    polozky,
    posledni: typeof h.posledni === 'number' && h.posledni >= 0 && h.posledni < polozky.length ? h.posledni : null,
    prichod: h.prichod === 'konec' ? 'konec' : 'zacatek',
    promitani: h.promitani === true,
    zavreno: h.zavreno === true,
    celaObrazovka: h.celaObrazovka === true,
  };
}

let vPameti: AktivniHodina | null = null;

export function nactiAktivni(): AktivniHodina | null {
  try {
    const t = sessionStorage.getItem(KLIC_AKTIVNI);
    if (t !== null) return platnaAktivni(JSON.parse(t));
  } catch { /* úložiště nedostupné nebo poškozené */ }
  return vPameti;
}

export function ulozAktivni(h: AktivniHodina | null): void {
  vPameti = h;
  try {
    if (h) sessionStorage.setItem(KLIC_AKTIVNI, JSON.stringify(h));
    else sessionStorage.removeItem(KLIC_AKTIVNI);
  } catch { /* zůstane v paměti této stránky */ }
}

/** Jen pro testy. */
export function _zapomenPamet(): void {
  vPameti = null;
}

// ─── Lišta ────────────────────────────────────────────────────────────────────

/** Adresa stránky, jak ji nese katalog: s lomítkem na konci, bez hledání a kotvy. */
export function cestaStranky(pathname: string): string {
  let p = pathname.split(/[?#]/)[0] || '/';
  try { p = decodeURI(p); } catch { /* nechá, jak je */ }
  return p.endsWith('/') ? p : `${p}/`;
}

/** Indexy zastavení hodiny, která stojí na stránce (v pořadí hodiny). */
export function zastaveniNaStrance(polozky: PolozkaHodiny[], cesta: string): number[] {
  const c = cestaStranky(cesta);
  const vysledek: number[] = [];
  polozky.forEach((p, i) => { if (p.stranka === c) vysledek.push(i); });
  return vysledek;
}

/**
 * Které zastavení hodiny je na stránce právě to aktuální. Když jich na stránce stojí víc (krok a blok v něm),
 * platí to, na které student přišel z lišty nebo ze stránky hodiny (`posledni`), pak to, na jehož kotvu ukazuje
 * adresa, a nakonec první z nich v pořadí hodiny. Stránka bez zastavení hodiny vrátí null.
 */
export function aktualniZastaveni(polozky: PolozkaHodiny[], cesta: string, kotva: string, posledni: number | null): number | null {
  const tady = zastaveniNaStrance(polozky, cesta);
  if (!tady.length) return null;
  if (posledni !== null && tady.includes(posledni)) return posledni;
  const k = kotva.replace(/^#/, '');
  if (k) {
    let dek = k;
    try { dek = decodeURIComponent(k); } catch { /* nechá, jak je */ }
    const podleKotvy = tady.find((i) => polozky[i].kotva === dek);
    if (podleKotvy !== undefined) return podleKotvy;
  }
  return tady[0];
}

/** Sousední zastavení ve směru `smer`, které v atlasu je (neznámá se přeskočí), nebo null na kraji hodiny. */
export function sousedniZastaveni(polozky: PolozkaHodiny[], i: number, smer: -1 | 1): number | null {
  for (let j = i + smer; j >= 0 && j < polozky.length; j += smer) if (polozky[j].adresa) return j;
  return null;
}

/** První zastavení hodiny, které v atlasu je (hlavní tlačítko a Promítat hodinu), nebo null. */
export const prvniZastaveni = (polozky: PolozkaHodiny[]): number | null => sousedniZastaveni(polozky, -1, 1);

/**
 * Uloží hodinu jako aktivní pro tuto kartu s tím, že student jde na zastavení j (nebo na první), a vrátí jeho adresu.
 * S `promitani` se zastavení otevře v režimu pro plátno.
 */
export function vstupDoHodiny(h: AktivniHodina, j: number | null = prvniZastaveni(h.polozky), promitani = h.promitani): string | null {
  const p = j !== null ? h.polozky[j] : undefined;
  if (!p?.adresa) return null;
  ulozAktivni({ ...h, posledni: j, prichod: 'zacatek', promitani, zavreno: false, celaObrazovka: false });
  return p.adresa;
}

/** Pořadí zastavení česky: „3 ze 7“, „5 z 8“, „1 z 1“ (předložka podle toho, jak se číslo vysloví). */
export function poradiZastaveni(i: number, n: number): string {
  // Genitiv čísla začíná souhláskou, před kterou se říká „ze“ (dvou, tří, čtyř, šesti, sedmi, dvanácti…).
  const ze = (x: number): boolean => {
    if (x >= 100) return true; // ze sta
    if (x >= 20) return [2, 3, 4, 6, 7].includes(Math.floor(x / 10)); // ze dvaceti, z padesáti, z osmdesáti
    return [2, 3, 4, 6, 7, 12, 13, 14, 16, 17].includes(x);
  };
  return `${i}\u00a0${ze(n) ? 'ze' : 'z'}\u00a0${n}`;
}

// ─── Promítání ────────────────────────────────────────────────────────────────

/**
 * Úsek zastavení a okno v souřadnicích stránky. `poloha` je místo stránky na horním okraji volné plochy
 * (pod lištou hodiny), `vyska` výška volné plochy, `horni` a `dolni` hrany úseku, `nejvys` největší poloha,
 * na kterou se stránka ještě posune.
 */
export interface Plocha {
  poloha: number;
  vyska: number;
  horni: number;
  dolni: number;
  nejvys: number;
}

/** Kolik z předchozí obrazovky zůstane po posunu vidět: asi tři řádky, aby se neztratil ten, který student četl. */
export function prekryv(vyska: number): number {
  return Math.max(64, Math.round(vyska * 0.12));
}

/** Kam se má stránka posunout, aby zastavení bylo vidět od začátku, nebo až do konce. */
export function polohaPrichodu(p: Omit<Plocha, 'poloha'>, kam: 'zacatek' | 'konec'): number {
  const konec = Math.min(Math.max(p.horni, p.dolni - p.vyska), p.nejvys);
  return Math.max(0, kam === 'zacatek' ? Math.min(p.horni, p.nejvys) : konec);
}

export type KrokPromitani = { poloha: number } | { prejdi: 'dalsi' | 'predchozi' };

/**
 * Jeden krok promítání (šipka, PageDown, mezerník): uvnitř zastavení posun o obrazovku bez kousku předchozí,
 * nejvýš na konec úseku; na konci (při couvání na začátku) přechod na další, nebo předchozí zastavení.
 */
export function krokPromitani(p: Plocha, smer: 1 | -1): KrokPromitani {
  const krok = Math.max(1, p.vyska - prekryv(p.vyska));
  const zacatek = Math.max(0, Math.min(p.horni, p.nejvys));
  const konec = polohaPrichodu(p, 'konec');
  if (smer === 1) {
    if (p.poloha >= konec - 2) return { prejdi: 'dalsi' };
    return { poloha: Math.min(Math.max(p.poloha, zacatek) + krok, konec) };
  }
  if (p.poloha <= zacatek + 2) return { prejdi: 'predchozi' };
  return { poloha: Math.max(Math.min(p.poloha, konec) - krok, zacatek) };
}

/**
 * Patří klávesa prvku s fokusem? Pole, posuvník, přepínač a seznamy s vlastním ovládáním šipkami si šipky,
 * mezerník a PageUp/PageDown nechávají; tlačítko a odkaz si nechávají mezerník a Enter.
 * `role` jsou role prvku a jeho předků (od prvku nahoru), `znacka` název značky malými písmeny.
 */
export function klavesaPatriPrvku(k: { znacka: string; typ?: string; editovatelny: boolean; role: string[] }, klavesa: string): boolean {
  const pole = k.editovatelny || k.znacka === 'textarea' || k.znacka === 'select' || (k.znacka === 'input' && !['button', 'submit', 'reset', 'checkbox'].includes(k.typ ?? 'text'));
  if (pole) return true;
  const sOvladanim = ['slider', 'radio', 'radiogroup', 'tab', 'tablist', 'listbox', 'option', 'spinbutton', 'combobox', 'menu', 'menuitem', 'menubar', 'grid', 'gridcell', 'tree', 'treeitem', 'toolbar', 'scrollbar'];
  if (k.role.some((r) => sOvladanim.includes(r))) return true;
  const aktivni = ['button', 'a', 'summary', 'input'].includes(k.znacka) || k.role.includes('button') || k.role.includes('link');
  return aktivni && (klavesa === ' ' || klavesa === 'Enter');
}

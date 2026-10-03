// Návrat: krátký nový případ, který deník nabídne několik dní po dokončení cesty (docs/plan.md › Mechanismy učení).
// Čisté funkce bez DOM a bez hodin: čas se předává jako parametr, aby šlo rozhodování zkoušet v testech.
// Nabídka je jen v deníku; nic se nepočítá, neboduje a na Domů ani jinde se o ní neví.
import type { Denik, PostupCesty } from './denik';
import { veta } from './bloky';
import { krokyCesty, type KrokInfo } from './cesty';

export const DEN = 24 * 60 * 60 * 1000;
/** Nejdřív tolik dní po dokončení cesty se návrat nabídne. */
export const NAVRAT_PO_DNECH = 3;
/** Odložená nabídka se vrátí po tolika dnech. */
export const ODKLAD_DNI = 3;

export const OTAZKA_NAVRATU = 'Platí tvoje pravidlo i tady?';
export const ODPOVEDI_NAVRATU = [
  { id: 'ano', text: 'Ano' },
  { id: 'upravim', text: 'Upravím ho' },
  { id: 'nevim', text: 'Nevím' },
] as const;
export type OdpovedNavratu = (typeof ODPOVEDI_NAVRATU)[number]['id'];

/** Co o návratu potřebuje rozhodování: jeho id, cesta a id závěrečného pravidla. */
export interface NavratCesty {
  id: string;
  /** slug cesty */
  cesta: string;
  /** id zápisu se závěrečným pravidlem */
  pravidlo: string;
}

/** Návrat, jak ho potřebuje deník a blok: k tomu název cesty, odkaz na její závěr a obsah případu z YAML. */
export interface NavratDeniku extends NavratCesty {
  nazevCesty: string;
  /** adresa posledního kroku cesty, kde stojí pravidlo; vede na ni zápis v deníku */
  odkaz: string;
  blok: {
    obdobi: number;
    /** krátký název případu */
    nazev: string;
    scena: string;
    po: Record<OdpovedNavratu, string>;
  };
}

export interface StavNavratu {
  odpoved: OdpovedNavratu | null;
  duvod: string;
  /** student odpověď zapsal do deníku */
  zapsano: boolean;
  /** kdy nabídku odložil (ISO), nebo null */
  odlozeno: string | null;
  /** nabídku skryl: už se nenabídne */
  skryto: boolean;
}

/** Přečte uložený stav návratu; co nedává smysl, nahradí výchozím. Nikdy nevrací null: prázdný stav je platný. */
export function platnyStavNavratu(s: unknown): StavNavratu {
  const x = (s && typeof s === 'object' ? s : {}) as Partial<Record<keyof StavNavratu, unknown>>;
  const odpoved = ODPOVEDI_NAVRATU.find((o) => o.id === x.odpoved)?.id ?? null;
  return {
    odpoved,
    duvod: typeof x.duvod === 'string' ? x.duvod : '',
    zapsano: x.zapsano === true && odpoved !== null,
    odlozeno: typeof x.odlozeno === 'string' && Number.isFinite(Date.parse(x.odlozeno)) ? x.odlozeno : null,
    skryto: x.skryto === true,
  };
}

/**
 * Kdy student cestu dokončil (ISO), nebo null. Bere čas zapsaný při dokončení; starší deník, který ho nemá,
 * ale má cestu prošlou celou, dostane čas naposledy otevřeného kroku.
 */
export function casDokonceni(p: Partial<PostupCesty> | undefined): string | null {
  if (!p) return null;
  if (typeof p.dokonceno === 'string') return p.dokonceno;
  const cela = Array.isArray(p.navstivene) && typeof p.pocet === 'number' && p.pocet > 0 && p.navstivene.length >= p.pocet;
  return cela && typeof p.kdy === 'string' ? p.kdy : null;
}

/**
 * Který návrat deník právě nabídne, nebo null. Podmínky: cesta je dokončená aspoň NAVRAT_PO_DNECH dní,
 * student má uložené závěrečné pravidlo, na návrat ještě neodpověděl, neskryl ho a od odložení uběhlo
 * aspoň ODKLAD_DNI dní. Nabízí se nejvýš jeden: ten, jehož cesta je dokončená nejdéle.
 * `ted` je čas v milisekundách (Date.now()).
 */
export function nabidkaNavratu<T extends NavratCesty>(d: Pick<Denik, 'cesty' | 'zapisy' | 'bloky'>, navraty: T[], ted: number): T | null {
  const kandidati: { n: T; kdy: number }[] = [];
  for (const n of navraty) {
    const kdy = Date.parse(casDokonceni(d.cesty[n.cesta]) ?? '');
    if (!Number.isFinite(kdy) || ted - kdy < NAVRAT_PO_DNECH * DEN) continue;
    if (!d.zapisy.some((z) => z.id === n.pravidlo && typeof z.odpoved === 'string' && z.odpoved.trim())) continue;
    if (d.zapisy.some((z) => z.id === n.id)) continue;
    const s = platnyStavNavratu(d.bloky[n.id]);
    if (s.skryto || s.zapsano) continue;
    if (s.odlozeno !== null && ted - Date.parse(s.odlozeno) < ODKLAD_DNI * DEN) continue;
    kandidati.push({ n, kdy });
  }
  kandidati.sort((a, b) => a.kdy - b.kdy);
  return kandidati[0]?.n ?? null;
}

/** Otázka zápisu v deníku: „Návrat · Nový telefon: platí moje pravidlo i tady?“ */
export function otazkaZapisuNavratu(nazev: string): string {
  return `Návrat · ${nazev}: platí moje pravidlo i tady?`;
}

/** Text zápisu v deníku: „Upravím ho. Proč: …“ */
export function zapisNavratu(odpoved: OdpovedNavratu, duvod = ''): string {
  const text = ODPOVEDI_NAVRATU.find((o) => o.id === odpoved)?.text ?? '';
  return duvod.trim() ? `${text}. Proč: ${veta(duvod)}` : `${text}.`;
}

/**
 * Kontrola návratů proti cestám při sestavení: cesta existuje, má nejvýš jeden návrat a závěrečné pravidlo
 * (`<ZaverCesty id="…" />`) stojí v jejím posledním kroku. Cesta bez návratu je v pořádku. Vrací seznam chyb.
 */
export function chybyNavratu(navraty: NavratCesty[], cesty: Set<string>, kroky: (KrokInfo & { body?: string })[]): string[] {
  const chyby: string[] = [];
  const videne = new Map<string, string>();
  for (const n of navraty) {
    if (!cesty.has(n.cesta)) {
      chyby.push(`Návrat „${n.id}“: cesta „${n.cesta}“ není v src/content/cesty.`);
      continue;
    }
    const prvni = videne.get(n.cesta);
    if (prvni) chyby.push(`Návrat „${n.id}“: cesta „${n.cesta}“ už návrat má („${prvni}“).`);
    videne.set(n.cesta, n.id);
    const posledni = krokyCesty(kroky, n.cesta).at(-1);
    const vzor = new RegExp(`<ZaverCesty\\b[^>]*\\bid=["']${n.pravidlo}["']`);
    if (!posledni || !vzor.test(posledni.body ?? '')) {
      chyby.push(`Návrat „${n.id}“: pravidlo „${n.pravidlo}“ není závěrem cesty „${n.cesta}“ (v posledním kroku chybí <ZaverCesty id="${n.pravidlo}" />).`);
    }
  }
  return chyby;
}

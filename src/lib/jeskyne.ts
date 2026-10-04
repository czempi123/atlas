// Kresba Platónovy jeskyně (src/components/ostrovy/Jeskyne.svelte): pohledy, jejich popisy a průvod nesených věcí.
// Čistá data a funkce bez DOM. Popisy říkají slovy totéž co kresba a drží se pramene (Ústava VII, 514a–515b):
// vězni jsou tam od dětství a hlavu neotočí, oheň hoří za nimi, nosiči chodí za zídkou, ozvěna je jen „kdyby“.

export type Pohled = 'vezni' | 'bok';

export const POHLEDY: { id: Pohled; nazev: string }[] = [
  { id: 'vezni', nazev: 'Pohled vězňů' },
  { id: 'bok', nazev: 'Pohled z boku' },
];

export const POPISY: Record<Pohled, string> = {
  vezni:
    'Sedíš mezi vězni a vidíš to, co oni: stíny, které přicházejí a odcházejí, a pod nimi stíny vlastních hlav. Kdyby se od stěny vracela ozvěna, zdálo by se, že mluví stín.',
  bok:
    'Takhle to vypadá z boku. Oheň svítí přes zídku na stěnu, a co nosiči zvednou nad zídku, je na stěně vidět jako stín. Vězni sedí zády k ohni a hlavu neotočí. Tenhle pohled žádný z nich nemá.',
};

/** Věci, které nosiči nesou nad zídkou: nářadí a sochy lidí i zvířat (514b–515a). */
export type Vec = 'dzban' | 'soska' | 'kun' | 'kladivo' | 'ptak';
export const PRUVOD: Vec[] = ['dzban', 'soska', 'kun', 'kladivo', 'ptak'];

/** Rozestup věcí v průvodu v jednotkách kresby. */
export const ROZESTUP = 120;

/** Délka jednoho průvodu: o tolik se kresba posune, než se pohyb plynule opakuje. */
export const delkaPruvodu = (pruvod: readonly unknown[] = PRUVOD, rozestup = ROZESTUP): number => pruvod.length * rozestup;

/**
 * Kde na stěně leží stín bodu, na který svítí oheň (pohled z boku): přímka z ohně přes bod protne svislou stěnu.
 * Vrací výšku stínu na stěně; bod, který leží za stěnou nebo před ohněm, stín nemá (null).
 */
export function stinNaStene(ohen: { x: number; y: number }, bod: { x: number; y: number }, stenaX: number): number | null {
  if (bod.x <= ohen.x || bod.x >= stenaX) return null;
  const sklon = (bod.y - ohen.y) / (bod.x - ohen.x);
  return ohen.y + sklon * (stenaX - ohen.x);
}

// ─── Cesta ven (src/components/ostrovy/JeskyneVen.svelte), Ústava VII, 515c–516b ───────────────────────────
// Vězně někdo rozváže a vleče ven; venku nevidí nic a oči si zvykají v pořadí, které dává pramen:
// stíny, odrazy ve vodě, věci samé, noční nebe a nakonec slunce (podkladový list, řádky 8–13).

export type PohledVen = 'cesta' | 'venku';

export const POHLEDY_VEN: { id: PohledVen; nazev: string }[] = [
  { id: 'cesta', nazev: 'Cesta ven' },
  { id: 'venku', nazev: 'Venku' },
];

export const POPIS_CESTY =
  'Někdo vězně rozváže, donutí ho vstát a otočit se k ohni. Pak ho násilím vleče strmou cestou nahoru a nepustí ho, dokud nejsou venku. Vězeň trpí a zlobí se.';

/** Stupně, kterými si oči venku zvykají, v pořadí pramene (516a–b). */
export const STUPNE: { nazev: string; popis: string }[] = [
  { nazev: 'záře', popis: 'Venku má vězeň oči plné záře a nevidí vůbec nic.' },
  { nazev: 'stíny', popis: 'Jako první rozezná stíny. I venku začíná u nich.' },
  { nazev: 'odrazy ve vodě', popis: 'Potom rozezná odrazy lidí a věcí ve vodě.' },
  { nazev: 'věci samé', popis: 'Pak uvidí věci samé.' },
  { nazev: 'noční nebe', popis: 'Nebe snese nejdřív v noci: světlo hvězd a měsíce.' },
  { nazev: 'slunce', popis: 'Slunce samo uvidí až nakonec.' },
];

/** Jak moc je která vrstva kresby „Venku“ vidět (0 až 1). */
export interface VrstvyVenku {
  zare: number;
  stiny: number;
  voda: number;
  veci: number;
  noc: number;
  slunce: number;
}

/**
 * Co vězeň na daném stupni vidí. Stupeň mimo rozsah se přichytí ke kraji.
 * Stíny v noci vidět nejsou (vrhá je slunce); věci jsou před čtvrtým stupněm jen tušit.
 */
export function vrstvyVenku(stupen: number): VrstvyVenku {
  const s = Math.min(STUPNE.length - 1, Math.max(0, Math.round(Number.isFinite(stupen) ? stupen : 0)));
  return {
    zare: s === 0 ? 1 : 0,
    stiny: s >= 1 && s !== 4 ? 1 : 0,
    voda: s >= 2 ? 1 : 0,
    veci: s >= 3 ? 1 : s >= 1 ? 0.08 : 0,
    noc: s === 4 ? 1 : 0,
    slunce: s === 5 ? 1 : 0,
  };
}

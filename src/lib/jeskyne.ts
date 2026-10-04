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

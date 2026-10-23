// Přesýpací hodiny (cesta 34, krok 3): kresba k Senekově výzvě „spočítej si léta“ (O krátkosti života 3, 2).
// Horní baňka drží písek jednoho všedního dne, 24 zrnek, jedno za hodinu. Student rozdělí hodiny podle toho, kdo
// o nich rozhodl: spánek, škola a rodina, tvoje volba, někdo nebo něco jiného. Co nerozdělí, „proteklo“: nikdo
// to nevzal, jen to nikdo nespočítal. Zrnka padají do spodní baňky a usazují se po vrstvách v tomto pořadí.
// Spánek ani škola nejsou v kresbě ztráta, jen vlastní vrstva (podklady, e) Námitka 3).
// Podklad: docs/podklady/celek-9.md › g) Kresba s pohybem „Přesýpací hodiny“ (krok 3).

export const HODIN = 24;
/** Nejvíc hodin, které jde dát jedné skupině posuvníkem. */
export const MAX_SKUPINA = 12;

export type Skupina = 'spanek' | 'skola' | 'ja' | 'jiny';
export type Vrstva = Skupina | 'protekla';

/** Pořadí vrstev zdola nahoru; posuvníky jdou ve stejném pořadí. */
export const SKUPINY: { id: Skupina; nazev: string; legenda: string }[] = [
  { id: 'spanek', nazev: 'Spánek', legenda: 'spánek' },
  { id: 'skola', nazev: 'Škola a rodina', legenda: 'škola a rodina' },
  { id: 'ja', nazev: 'Tvoje volba', legenda: 'tvoje volba' },
  { id: 'jiny', nazev: 'Někdo jiný', legenda: 'někdo jiný' },
];
export const LEGENDA_PROTEKLA = 'protekla';

export type StavDne = Record<Skupina, number>;
export const VYCHOZI_DEN: StavDne = { spanek: 8, skola: 8, ja: 3, jiny: 2 };

const soucet = (s: StavDne, krome?: Skupina) =>
  SKUPINY.reduce((n, g) => (g.id === krome ? n : n + Math.max(0, Math.round(s[g.id]))), 0);

/** Kolik hodin nikdo nespočítal. */
export const protekla = (s: StavDne): number => Math.max(0, HODIN - soucet(s));

/** Nastaví jedné skupině počet hodin; víc, než kolik zbývá do 24, nejde. */
export function nastav(s: StavDne, kdo: Skupina, hodin: number): StavDne {
  const volno = HODIN - soucet(s, kdo);
  const n = Math.min(MAX_SKUPINA, volno, Math.max(0, Math.round(Number.isFinite(hodin) ? hodin : 0)));
  return { ...s, [kdo]: n };
}

/** Do které vrstvy se usadí zrnko s pořadím i (0 = první, které spadne, leží úplně dole). */
export function vrstva(s: StavDne, i: number): Vrstva {
  let hranice = 0;
  for (const g of SKUPINY) {
    hranice += Math.max(0, Math.round(s[g.id]));
    if (i < hranice) return g.id;
  }
  return 'protekla';
}

/** Hodiny slovy pro čtečky (posuvník). */
export function hodinSlovy(n: number): string {
  if (n === 1) return '1 hodina';
  if (n >= 2 && n <= 4) return `${n} hodiny`;
  return `${n} hodin`;
}

/** Text pod kresbou: říká slovy, co je na kresbě. Hodiny se zkratkou „h“, ať věta nemusí skloňovat. */
export function popisDne(s: StavDne): string {
  const p = protekla(s);
  const zaklad =
    'Písek jednoho všedního dne, 24 hodin, padá dolů a každá hodina se usadí podle toho, kdo o ní rozhodl. ' +
    `Spánek ${s.spanek} h, škola a rodina ${s.skola} h, tvoje volba ${s.ja} h, někdo nebo něco jiného ${s.jiny} h.`;
  if (p === 0) return `${zaklad} Neproteklo nic: o každé hodině víš, kdo o ní rozhodl.`;
  return `${zaklad} Navrchu leží zbytek, ${p} h. Protekl a nevíš, kdo o něm rozhodl.`;
}

// Geometrie (plátno 340 × 240, na telefonu vyjde jednotka asi na pixel).
export const PLATNO = { sirka: 340, vyska: 240 };
export const STRED = 92;
export const HRDLO = { x: STRED, y: 120 };
export const ZRNO = 4.2;
const KROK = 10.5;

/** Obrys skla: horní a spodní baňka, hrdlo uprostřed. */
export const SKLO =
  `M${STRED - 55},18 H${STRED + 55} C${STRED + 55},62 ${STRED + 9},98 ${STRED + 4},120 ` +
  `C${STRED + 9},142 ${STRED + 55},178 ${STRED + 55},222 H${STRED - 55} ` +
  `C${STRED - 55},178 ${STRED - 9},142 ${STRED - 4},120 C${STRED - 9},98 ${STRED - 55},62 ${STRED - 55},18 Z`;
export const RAMY = [
  { x: STRED - 63, y: 10, sirka: 126, vyska: 8 },
  { x: STRED - 63, y: 222, sirka: 126, vyska: 8 },
];

const rada = (pocet: number, y: number) =>
  Array.from({ length: pocet }, (_, k) => ({ x: STRED + (k - (pocet - 1) / 2) * KROK, y }));

/** Místa zrnek ve spodní baňce, v pořadí, jak se plní: zdola, zleva doprava. */
export const DOLE = [...rada(9, 214), ...rada(8, 204.5), ...rada(7, 195)];
/** Místa zrnek v horní baňce, v pořadí, jak odtékají: nejdřív horní vrstva. */
export const NAHORE = [...rada(7, 55), ...rada(7, 64.5), ...rada(6, 74), ...rada(4, 83.5)];

/** Časování pohybu v sekundách: kdy začne padat zrnko i, jak dlouho padá a jak dlouho je celé kolo. */
export const ZACATEK = 0.6;
export const ODSTUP = 0.4;
export const PAD = 0.7;
export const KOLO = 13.5;
export const startZrnka = (i: number) => Math.round((ZACATEK + i * ODSTUP) * 100) / 100;

/** Kosočtverec (zrnko „někdo jiný“): jiný tvar, aby se vrstvy nelišily jen tónem. */
export const kosoctverec = (x: number, y: number, r = ZRNO + 0.6) => `M${x},${y - r} L${x + r},${y} L${x},${y + r} L${x - r},${y} Z`;

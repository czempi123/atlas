// Zrcadlo času (cesta 8, krok 4): kresba k Lucretiovu argumentu a k námitce proti němu. Osa času, uprostřed život,
// vlevo čas před narozením s letopočty z dějepisu, vpravo čas po smrti bez letopočtů.
// Pohled „Zrcadlo“: student přiloží k životu zrcadlo a čas po smrti se překlopí na čas před narozením; kryjí se.
// Pohled „Námitka“: student zkusí život prodloužit. Doprava to jde (tentýž život, delší), doleva ne: život stojí
// a vlevo se objeví někdo jiný. Pravý konec života nemá letopočet ani věk: kresba není odhad, kdy kdo zemře.
// Podklad: docs/podklady/celek-6-proc-se-bat-smrti.md › Kresba s pohybem: zrcadlo na ose času; Jádro: Lucretius
// (O přírodě III, 832–842 a 972–977); Námitka ztráty (odpověď na zrcadlo: SEP „Death“ o článku T. Nagela).
// Čistá data a funkce bez DOM.

export type PohledZrcadla = 'zrcadlo' | 'namitka';

export const POHLEDY_ZRCADLA: { id: PohledZrcadla; nazev: string }[] = [
  { id: 'zrcadlo', nazev: 'Zrcadlo' },
  { id: 'namitka', nazev: 'Námitka' },
];

/** Plátno a osa v jednotkách kresby. Život leží uprostřed; pruhy času vedou od něj k oběma okrajům plátna. */
export const PLATNO = { sirka: 340, vyska: 190 };
export const OSA = { y: 78, vyska: 36, stred: 170, zivot: 40 };
export const ZIVOT = { x: OSA.stred - OSA.zivot / 2, sirka: OSA.zivot };
export const PRED = { x: 0, sirka: ZIVOT.x };
export const PO = { x: ZIVOT.x + ZIVOT.sirka, sirka: PLATNO.sirka - (ZIVOT.x + ZIVOT.sirka) };

/** Letopočty z dějepisu na levé straně osy. Vpravo žádný není a být nemá. */
export const LETOPOCTY: { rok: number; x: number }[] = [
  { rok: 1348, x: 35 },
  { rok: 1620, x: 80 },
  { rok: 1914, x: 125 },
];

/** Kde leží bod po překlopení přes zrcadlo uprostřed života. */
export const zrcadlove = (x: number): number => 2 * OSA.stred - x;

/** Stupně posuvníku v pohledu Námitka: uprostřed život, jak je; doleva dřív, doprava déle. */
export const POSUNY: { nazev: string }[] = [
  { nazev: 'o hodně dřív' },
  { nazev: 'o něco dřív' },
  { nazev: 'jak je' },
  { nazev: 'o něco déle' },
  { nazev: 'o hodně déle' },
];
export const VYCHOZI_POSUN = 2;

/** O kolik jednotek se život prodlouží na jeden stupeň doprava a jak daleko vlevo leží cizí život. */
export const KROK_NAVIC = 30;
const MEZERA = 14;
const KROK_CIZI = 56;

const stupen = (posun: number): number => Math.min(POSUNY.length - 1, Math.max(0, Math.round(Number.isFinite(posun) ? posun : VYCHOZI_POSUN)));

export interface UseckyNamitky {
  /** život, jak je: nehýbe se nikdy */
  zivot: { x: number; sirka: number };
  /** o kolik je život delší směrem doprava (0, když student neposunul doprava) */
  navic: number;
  /** jiný život vlevo, když student posunul doleva; jinak null */
  cizi: { x: number; sirka: number } | null;
}

/**
 * Co je na ose v pohledu Námitka. Doprava se prodlužuje tentýž život. Doleva se život neposune:
 * místo něj se v čase před narozením objeví jiná úsečka, čím dál, tím víc vlevo.
 */
export function useckyNamitky(posun: number): UseckyNamitky {
  const s = stupen(posun) - VYCHOZI_POSUN;
  return {
    zivot: { ...ZIVOT },
    navic: s > 0 ? s * KROK_NAVIC : 0,
    cizi: s < 0 ? { x: ZIVOT.x - MEZERA - ZIVOT.sirka - (-s - 1) * KROK_CIZI, sirka: ZIVOT.sirka } : null,
  };
}

/** Texty pod kresbou: říkají slovy totéž co kresba. Věty do 25 slov, jen to, co je v podkladech. */
export const POPISY_ZRCADLA = {
  pred: 'Uprostřed je život. Vlevo od něj leží čas před narozením, vpravo čas po smrti. Přilož k životu zrcadlo.',
  po: 'V zrcadle se čas po smrti kryje s časem před narozením. V letech 1348, 1620 ani 1914 jsme necítili nic, dobré ani zlé. Lucretius říká, že stejné to bude potom.',
};

export const POPISY_NAMITKY: string[] = [
  'Ani o hodně dřív to nejde. Život zůstal, kde byl, a vlevo je zase někdo jiný. Proto podle námitky čas před narozením nikomu nechybí.',
  'Doleva to nejde. Život zůstal, kde byl. Kdo by se narodil o tolik dřív, byl by podle námitky někdo jiný.',
  'Zkus životu přidat čas. Posuň doprava, potom doleva.',
  'Doprava to jde. Je to tentýž život, jen o něco delší. O ten kus by podle námitky smrt člověka připravila.',
  'Doprava to jde i dál. Pořád je to tentýž život, jen delší. O ten kus by podle námitky smrt člověka připravila.',
];

/** Text pod kresbou pro daný pohled a stav. */
export function popisZrcadla(pohled: PohledZrcadla, prilozeno: boolean, posun: number): string {
  if (pohled === 'zrcadlo') return prilozeno ? POPISY_ZRCADLA.po : POPISY_ZRCADLA.pred;
  return POPISY_NAMITKY[stupen(posun)];
}

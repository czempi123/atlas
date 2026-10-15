// Loď po prknech (cesta 2, krok 4): kresba k Théseově lodi. Student posuvníkem vyměňuje prkna lodi v přístavu:
// staré prkno jde na břeh, na jeho místo přijde nové. Pohled „Výměna prken“ skládá stará prkna na hromadu,
// pohled „Druhá loď“ z nich na břehu skládá loď, každé prkno na místě, které mělo.
// Co je pramen a co náš model: výměna zpuchřelých prken za pevná a spor filozofů je Plútarchos (Théseus 23, 1);
// druhá loď ze schovaných prken je Thomas Hobbes (O tělese II, 11, 7; anglicky 1656); počet prken, jejich tvar,
// pořadí výměny a to, že se vymění všechna, je náš model a text pod kresbou to říká.
// Podklad: docs/podklady/celek-7-jsem-porad-tentyz.md › Kresba s pohybem: loď po prknech a druhá loď.
// Čistá data a funkce bez DOM.

export type PohledLodi = 'vymena' | 'druha';

export const POHLEDY_LODI: { id: PohledLodi; nazev: string }[] = [
  { id: 'vymena', nazev: 'Výměna prken' },
  { id: 'druha', nazev: 'Druhá loď' },
];

/** Plátno v jednotkách kresby; na telefonu vyjde jednotka asi na pixel. */
export const PLATNO = { sirka: 340, vyska: 116 };

/** Trup: tři řady po osmi prknech. Krajní prkna jsou širší a zkosená, krajní prkna horní řady nesou zdvižený konec. */
export const RAD = 3;
export const SLOUPCU = 8;
export const POCET = RAD * SLOUPCU;
const VYSKA_PRKNA = 11;
const SIRKY = [24, 16, 16, 16, 16, 16, 16, 24];
/** o kolik je trup na hranici řad užší z každé strany (nahoře 0, u kýlu nejvíc) */
const ZUZENI = [0, 5, 10, 16];
export const SIRKA_TRUPU = SIRKY.reduce((a, b) => a + b, 0);
export const VYSKA_TRUPU = RAD * VYSKA_PRKNA;

/** Kde stojí loď v přístavu, kde druhá loď na břehu a kde leží hladina a zem. */
export const TRUP_A = { x: 188, y: 46 };
export const TRUP_B = { x: 10, y: 46 };
export const HLADINA = 80;
export const ZEM = 88;
export const BREH = 166;

export interface Prkno {
  /** pořadí v trupu: po řadách shora, v řadě od zádi k přídi */
  i: number;
  rada: number;
  sloupec: number;
  /** levý horní roh obdélníku prkna v trupu (vůči počátku trupu) */
  x: number;
  y: number;
  /** tvar prkna v souřadnicích trupu (cesta SVG) */
  tvar: string;
  /** kolikáté se vymění (0 = první) */
  poradi: number;
  /** přibližný střed prkna v souřadnicích trupu (pro kresbu let dřeva) */
  stred: { x: number; y: number };
}

/**
 * Pořadí výměny. Prkna se nemění zleva doprava, ale tam, kde zrovna zpuchřela; oba zdvižené konce jdou poslední,
 * aby na hromadě ležely nahoře. Je to náš model: pramen pořadí neuvádí.
 */
export const PORADI_VYMENY: number[] = [10, 19, 3, 13, 22, 5, 16, 9, 1, 20, 12, 6, 17, 2, 21, 11, 4, 18, 14, 8, 23, 15, 0, 7];

const sloupecX = (s: number) => SIRKY.slice(0, s).reduce((a, b) => a + b, 0);

function tvarPrkna(rada: number, sloupec: number): string {
  const x0 = sloupecX(sloupec);
  const x1 = x0 + SIRKY[sloupec];
  const y0 = rada * VYSKA_PRKNA;
  const y1 = y0 + VYSKA_PRKNA;
  if (sloupec === 0) {
    const a = ZUZENI[rada];
    const b = ZUZENI[rada + 1];
    // Záď: horní prkno pokračuje zdviženým koncem.
    const konec = rada === 0 ? `C${a - 9},${y0 - 6} ${a - 7},${y0 - 17} ${a + 4},${y0 - 19} L${a + 6},${y0 - 14} C${a},${y0 - 12} ${a},${y0 - 5} ${a + 7},${y0} ` : '';
    return `M${a},${y0} ${konec}L${x1},${y0} L${x1},${y1} L${b},${y1} Z`;
  }
  if (sloupec === SLOUPCU - 1) {
    const a = SIRKA_TRUPU - ZUZENI[rada];
    const b = SIRKA_TRUPU - ZUZENI[rada + 1];
    // Příď: horní prkno pokračuje kratším zdviženým koncem.
    const konec = rada === 0 ? `L${a - 6},${y0} C${a - 1},${y0 - 4} ${a - 1},${y0 - 9} ${a - 5},${y0 - 12} L${a - 2},${y0 - 15} C${a + 6},${y0 - 10} ${a + 6},${y0 - 4} ${a},${y0} ` : `L${a},${y0} `;
    return `M${x0},${y0} ${konec}L${b},${y1} L${x0},${y1} Z`;
  }
  return `M${x0},${y0} L${x1},${y0} L${x1},${y1} L${x0},${y1} Z`;
}

export const PRKNA: Prkno[] = Array.from({ length: POCET }, (_, i) => {
  const rada = Math.floor(i / SLOUPCU);
  const sloupec = i % SLOUPCU;
  const x0 = sloupecX(sloupec);
  const x1 = x0 + SIRKY[sloupec];
  // Střed zkoseného krajního prkna leží blíž ke středu lodi: počítá se od užší (spodní) hrany.
  const leva = sloupec === 0 ? ZUZENI[rada + 1] : x0;
  const prava = sloupec === SLOUPCU - 1 ? SIRKA_TRUPU - ZUZENI[rada + 1] : x1;
  return {
    i,
    rada,
    sloupec,
    x: x0 + (sloupec === 0 ? ZUZENI[rada] : 0),
    y: rada * VYSKA_PRKNA,
    tvar: tvarPrkna(rada, sloupec),
    poradi: PORADI_VYMENY.indexOf(i),
    stred: { x: (leva + prava) / 2, y: rada * VYSKA_PRKNA + VYSKA_PRKNA / 2 },
  };
});

/** Obrys celého trupu (pro čárkovaný obrys druhé lodi, dokud jí prkna chybějí). */
export const OBRYS_TRUPU = `M0,0 L${SIRKA_TRUPU},0 L${SIRKA_TRUPU - ZUZENI[1]},${VYSKA_PRKNA} L${SIRKA_TRUPU - ZUZENI[2]},${2 * VYSKA_PRKNA} L${SIRKA_TRUPU - ZUZENI[3]},${VYSKA_TRUPU} L${ZUZENI[3]},${VYSKA_TRUPU} L${ZUZENI[2]},${2 * VYSKA_PRKNA} L${ZUZENI[1]},${VYSKA_PRKNA} Z`;

/** Hromada na břehu: pět prken vedle sebe, vrstvy odspodu. */
export const HROMADA = { x: 14, krok: 27, vedle: 5 };

export const pocetVymenenych = (n: number): number => Math.min(POCET, Math.max(0, Math.round(Number.isFinite(n) ? n : 0)));

/** Je prkno po n výměnách už venku z lodi v přístavu? */
export const jeVymenene = (p: Prkno, n: number): boolean => p.poradi < pocetVymenenych(n);

/**
 * Kam se má původní prkno posunout z místa, které má v trupu lodi v přístavu (rozdíl v jednotkách kresby).
 * Dokud není vyměněné, zůstává na místě. Vyměněné leží na hromadě (pohled Výměna prken),
 * nebo na stejném místě v trupu druhé lodi (pohled Druhá loď).
 */
export function posunPrkna(p: Prkno, n: number, pohled: PohledLodi): { dx: number; dy: number } {
  if (!jeVymenene(p, n)) return { dx: 0, dy: 0 };
  if (pohled === 'druha') return { dx: TRUP_B.x - TRUP_A.x, dy: TRUP_B.y - TRUP_A.y };
  const vrstva = Math.floor(p.poradi / HROMADA.vedle);
  const vedle = p.poradi % HROMADA.vedle;
  const cilX = HROMADA.x + vedle * HROMADA.krok;
  const cilY = ZEM - (vrstva + 1) * VYSKA_PRKNA;
  return { dx: cilX - (TRUP_A.x + p.x), dy: cilY - (TRUP_A.y + p.y) };
}

/** Řádek pod posuvníkem a text pro čtečky: bez skloňování, aby seděl pro každé číslo. */
export const stavPosuvniku = (n: number): string => {
  const v = pocetVymenenych(n);
  return `Vyměněná prkna: ${v} z ${POCET} · původní: ${POCET - v} z ${POCET}`;
};

/** Popisky přímo v kresbě. */
export const POPISKY_LODI = { pristav: 'loď v přístavu', hromada: 'stará prkna', druha: 'loď ze starých prken' };

/** Texty pod kresbou: říkají slovy totéž co kresba. Věty do 25 slov; co je náš krok a co Hobbesův, říkají samy. */
export const POPISY_LODI = {
  vymena: {
    nic: 'Loď v přístavu má všechna prkna původní. Kolik jich měla doopravdy, nevíme; tahle jich má čtyřiadvacet. Posuň a vyměň první.',
    cast: 'Stará prkna jdou ven, na jejich místo přicházejí nová; v kresbě jsou světlejší. Tolik vypráví Plútarchos; kolik prken Athéňané vyměnili, neříká.',
    vse: 'Vyměněné je i poslední prkno. To už Plútarchos nevypráví: až sem úlohu dovedl v 17. století Thomas Hobbes. Z původního dřeva v lodi v přístavu nezbylo nic.',
  },
  druha: {
    nic: 'Na břehu zatím nestojí nic: z lodi ještě nikdo žádné prkno nevyndal. Posuň a vyměň první.',
    cast: 'Ze starých prken se na břehu skládá druhá loď, každé prkno na místě, které mělo. Tuhle loď přidal až Thomas Hobbes v 17. století.',
    vse: 'Na břehu stojí loď ze všech původních prken. V přístavu stojí loď, kterou nikdy nepřestali opravovat. Druhou loď přidal Thomas Hobbes; Plútarchos ji nezná.',
  },
} as const;

/** Text pod kresbou pro daný pohled a počet vyměněných prken. */
export function popisLodi(pohled: PohledLodi, n: number): string {
  const v = pocetVymenenych(n);
  const t = POPISY_LODI[pohled];
  return v === 0 ? t.nic : v === POCET ? t.vse : t.cast;
}

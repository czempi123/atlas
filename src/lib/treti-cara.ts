// Třetí čára (cesta 7, krok 6): kresba k Aschovu pokusu. Nahoře karta s jednou čárou a karta se třemi,
// dole řada osmi židlí. Domluvení odpovídají nahlas jeden po druhém, student sedí na předposlední židli
// a na něm se řada zastaví. Pohled „Se spojencem“ změní jednu věc: čtvrtý v řadě řekne, co vidí.
// Co je pramen a co náš obraz: karta se standardní čárou a třemi čarami k porovnání a délky z prvního kola
// (standard 3 palce, možnosti 3¾, 4¼ a 3 palce, většina řekne první) jsou Asch 1956, Tabulka 1; odpovědi nahlas
// po řadě a nezasvěcený předposlední jsou Asch 1956 (postup a obr. 1, kde sedí ve dvou řadách); spojenec, který odpovídá správně a mluví
// před nezasvěceným, je Asch 1951. Siluety, bubliny s čísly, osm židlí a to, že spojenec sedí čtvrtý, je náš obraz.
// Podklad: docs/podklady/celek-8-ci-zivot-ziju.md › Kresba s pohybem: „Třetí čára“ (krok 6).
// Čistá data a funkce bez DOM.

export type PohledCary = 'sam' | 'spojenec';

export const POHLEDY_CARY: { id: PohledCary; nazev: string }[] = [
  { id: 'sam', nazev: 'Bez spojence' },
  { id: 'spojenec', nazev: 'Se spojencem' },
];

/** Plátno v jednotkách kresby; na telefonu vyjde jednotka asi na pixel. */
export const PLATNO = { sirka: 340, vyska: 240 };

/** Kolo 1 podle Asche (1956, Tabulka 1): délky v palcích. */
export const KOLO_1 = { vzor: 3, moznosti: [3.75, 4.25, 3] } as const;
/** Kterou čáru (1–3) řekne domluvená většina a která je stejně dlouhá jako vzor. */
export const VETSINA = 1;
export const SPRAVNA = 3;

/** Kolik jednotek kresby má palec: nejdelší čára se musí vejít do karty, rozdíl musí být vidět i na telefonu. */
export const PALEC = 20;

/** Karty na tabuli: vlevo vzor, vpravo tři čáry. Čáry stojí na společné spodní hraně. */
export const KARTA_VZOR = { x: 26, y: 12, sirka: 64, vyska: 114 };
export const KARTA_TRI = { x: 112, y: 12, sirka: 202, vyska: 114 };
export const SPODEK_CAR = 102;
export const POPISEK_CAR_Y = 119;
export const TLOUSTKA_CARY = 3.2;

export interface Cara {
  /** 0 = vzor, 1–3 = čáry k porovnání */
  cislo: number;
  x: number;
  /** délka v jednotkách kresby */
  delka: number;
  /** horní konec čáry */
  y: number;
}

const cara = (cislo: number, x: number, palce: number): Cara => ({ cislo, x, delka: palce * PALEC, y: SPODEK_CAR - palce * PALEC });

export const VZOR: Cara = cara(0, KARTA_VZOR.x + KARTA_VZOR.sirka / 2, KOLO_1.vzor);
export const CARY: Cara[] = KOLO_1.moznosti.map((p, i) => cara(i + 1, KARTA_TRI.x + (KARTA_TRI.sirka * (i + 1)) / 4, p));

/** Řada židlí: osm míst, student sedí předposlední, spojenec čtvrtý. */
export const POCET_MIST = 8;
export const TY = POCET_MIST - 2;
export const SPOJENEC = 3;
export const MISTA: number[] = Array.from({ length: POCET_MIST }, (_, i) => 26 + i * 41);

/** Postava: hlava a ramena; bublina nad hlavou. */
export const POSTAVA = { hlavaY: 190, hlavaR: 6, ramenaY: 200, spodek: 224, sirka: 22 };
export const BUBLINA = { y: 150, sirka: 22, vyska: 20 };
export const ZEM = 226;

/** Obrys bubliny se zaoblenými rohy a špičkou dolů k hlavě; x je střed. */
export function tvarBubliny(x: number): string {
  const { y, sirka: w, vyska: h } = BUBLINA;
  const l = x - w / 2;
  const r = 4;
  const pul = w / 2 - r - 3;
  return `M${l + r},${y} h${w - 2 * r} q${r},0 ${r},${r} v${h - 2 * r} q0,${r} -${r},${r} h-${pul} l-3,6 l-3,-6 h-${pul} q-${r},0 -${r},-${r} v-${h - 2 * r} q0,-${r} ${r},-${r} Z`;
}

/** Co je v bublině nad každým místem: číslo čáry, otazník u studenta, nic u posledního (ještě neodpověděl). */
export type Odpoved = string | null;

export function odpovedi(pohled: PohledCary): Odpoved[] {
  return MISTA.map((_, i) => {
    if (i === TY) return '?';
    if (i > TY) return null;
    if (pohled === 'spojenec' && i === SPOJENEC) return String(SPRAVNA);
    return String(VETSINA);
  });
}

/** Pořadí, ve kterém se bubliny rozsvěcují (0 = první); místa bez bubliny nemají pořadí. */
export const poradiBubliny = (i: number): number | null => (i <= TY ? i : null);

/** Krok mezi dvěma odpověďmi a délka celého kola animace (s): po studentovi chvíli čeká, pak začne znovu. */
export const KROK_S = 0.8;
export const KOLO_S = 8;

/** Popisky přímo v kresbě. */
export const POPISKY_CARY = { ty: 'ty' };

/** Texty pod kresbou: říkají slovy totéž co kresba a neprozrazují, jak pokus dopadl. Věty do 25 slov. */
export const POPISY_CARY: Record<PohledCary, string> = {
  sam: 'Čára vlevo je stejně dlouhá jako třetí vpravo, první a druhá jsou delší. Šest lidí před tebou jeden po druhém nahlas řekne jedničku. Teď jsi na řadě ty.',
  spojenec: 'Stejné čáry, stejná skupina. Jen čtvrtý v řadě řekne, co vidí: trojku. Ostatní před tebou řeknou jedničku. Teď jsi na řadě ty.',
};

export const popisCary = (pohled: PohledCary): string => POPISY_CARY[pohled] ?? POPISY_CARY.sam;

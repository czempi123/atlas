// Kde je střed? (cesta 4, krok 6): kresba k Aristotelovu středu „vzhledem k nám“ (Etika Nikomachova II, 6–9).
// Na řece někdo volá o pomoc a na břehu stojí člověk. Čára pod scénou vede od „nic neudělat“ po „skočit za každou cenu“.
// V její půli stojí pevná značka (střed věci: šest mezi dvěma a deseti, 1106a26–36). Bod „střed“ se posouvá podle toho,
// kdo na břehu stojí a jaká je voda (střed vzhledem k nám není jeden ani stejný pro všechny, 1106a31–32), a nikdy
// neleží v půli. Kresba nemá čísla: není to měřák správné odpovědi.
// Příklad s řekou je náš („Představ si…“), Aristotelův vlastní příklad je zápasník Milón (1106b1–5). Kde přesně bod
// na čáře leží a co kdo na břehu udělá, je naše volba; zapsáno v docs/podklady/k-overeni.md.
// Podklad: docs/podklady/celek-5-staci-vedet.md › Kresba s pohybem: „Kde je střed?“.

export type Kdo = 'plavcik' | 'plavec' | 'neplavec';
export type Voda = 'klidna' | 'rozvodnena';
export interface StavStredu { kdo: Kdo; voda: Voda }

/** Co člověk na břehu udělá; podle toho se kreslí jeho póza. */
export type Cin = 'skok' | 'skok-na-lane' | 'lano' | 'volani';

/** Kresba začíná uprostřed nabídky: dobrý plavec u klidné vody. Oba přepínače pak bodem pohnou. */
export const VYCHOZI_STRED: StavStredu = { kdo: 'plavec', voda: 'klidna' };

export const LIDE_NA_BREHU: { id: Kdo; nazev: string }[] = [
  { id: 'plavcik', nazev: 'plavčík' },
  { id: 'plavec', nazev: 'dobrý plavec' },
  { id: 'neplavec', nazev: 'neplavec' },
];

export const VODY: { id: Voda; nazev: string }[] = [
  { id: 'klidna', nazev: 'klidná' },
  { id: 'rozvodnena', nazev: 'rozvodněná' },
];

/** Kraje čáry a značka v její půli. */
export const KRAJE = { malo: 'nic neudělat', mnoho: 'skočit za každou cenu', pulka: 'půlka' };

/** Poloha značky v půli čáry (0 = levý kraj, 1 = pravý). */
export const PULKA = 0.5;

interface Stred {
  /** poloha bodu na čáře, 0–1 */
  misto: number;
  cin: Cin;
  /** popisek u bodu: co je tu střed */
  popisek: string;
}

const STREDY: Record<Kdo, Record<Voda, Stred>> = {
  plavcik: {
    klidna: { misto: 0.86, cin: 'skok', popisek: 'skočit hned' },
    rozvodnena: { misto: 0.7, cin: 'skok-na-lane', popisek: 'skočit na laně' },
  },
  plavec: {
    klidna: { misto: 0.76, cin: 'skok', popisek: 'skočit' },
    rozvodnena: { misto: 0.42, cin: 'lano', popisek: 'hodit lano' },
  },
  neplavec: {
    klidna: { misto: 0.34, cin: 'lano', popisek: 'hodit lano' },
    rozvodnena: { misto: 0.24, cin: 'volani', popisek: 'volat o pomoc' },
  },
};

/** Kde leží střed pro toho, kdo stojí na břehu, a co tam udělá. */
export const stred = (stav: StavStredu): Stred => STREDY[stav.kdo][stav.voda];

const KDO_STOJI: Record<Kdo, string> = {
  plavcik: 'Na břehu stojí plavčík',
  plavec: 'Na břehu stojí dobrý plavec',
  neplavec: 'Na břehu stojí člověk, který neumí plavat,',
};

const CO_UDELA: Record<Kdo, Record<Voda, string>> = {
  plavcik: {
    klidna: 'Odvaha je pro něj skočit hned.',
    rozvodnena: 'Skočí i teď, ale přivázaný na laně.',
  },
  plavec: {
    klidna: 'Odvaha je pro něj skočit.',
    rozvodnena: 'V takové vodě by potřeboval pomoc sám, a tak hodí lano.',
  },
  neplavec: {
    klidna: 'Skočit by pro něj nebyla odvaha, ale hazard: hodí lano.',
    rozvodnena: 'Proud by ho mohl strhnout i s lanem. Zůstane na břehu a volá o pomoc. Ani to není totéž co nic neudělat.',
  },
};

/** Text pod kresbou: říká slovy, co je na kresbě. Končí tím, že půlka čáry stojí. */
export function popisStredu(stav: StavStredu): string {
  const voda = stav.voda === 'klidna' ? 'a voda je klidná.' : 'a řeka je rozvodněná.';
  const kde = stred(stav).misto > PULKA ? 'Střed leží vpravo od půlky čáry.' : 'Střed leží vlevo od půlky čáry.';
  return `${KDO_STOJI[stav.kdo]} ${voda} ${CO_UDELA[stav.kdo][stav.voda]} ${kde} Půlka se nehnula.`;
}

/** Všech šest stavů kresby (pro testy a snímky). */
export const STAVY_STREDU: StavStredu[] = LIDE_NA_BREHU.flatMap((k) => VODY.map((v) => ({ kdo: k.id, voda: v.id })));

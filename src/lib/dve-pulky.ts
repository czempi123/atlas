// Dvě půlky (cesta 5, krok 3): kresba k Epiktétovu dělení. Tři karty z koše Zčásti (krok 2) se dají roztrhnout:
// vlevo zůstane půlka, která je moje dílo, vpravo ta, o které rozhoduje někdo nebo něco jiného.
// U pravé půlky student zkouší, co všechno se může stát. Levá se při tom nemění; na tom kresba stojí.
// Podklad: docs/podklady/celek-3-co-mam-v-rukou.md › Tvrzení: Epiktétos (Rukojeť 1 a 5; tělo není naše).
// Karty jsou z bloku cesta5-tri-kose (Jestli mi odepíše, Známka ze čtvrtletky, Jestli budu v sobotu zdravý na zápas).

export interface Okolnost {
  id: string;
  /** název volby v přepínači */
  nazev: string;
  /** co stojí na pravé půlce, po řádcích (kresba text sama neláme) */
  radky: string[];
  /** text pod kresbou po roztržení: co se stalo vpravo a co zůstalo vlevo */
  popis: string;
}

export interface Karta {
  id: string;
  /** název v přepínači karet */
  nazev: string;
  /** nadpis karty, jak ji student zná z kroku 2 */
  titulek: string;
  /** text pod kresbou, dokud je karta celá */
  scena: string;
  /** levá půlka: moje dílo */
  moje: string[];
  /** čí je pravá půlka */
  cizi: string;
  /** co se na pravé půlce může stát; první je to, co si student přeje */
  okolnosti: Okolnost[];
}

export const NAZEV_MOJI = 'moje půlka';
export const OTAZKA_CELE = 'Na kartě je obojí. Je obojí ve tvých rukou?';

export const KARTY: Karta[] = [
  {
    id: 'zprava',
    nazev: 'Zpráva',
    titulek: 'Jestli mi odepíše',
    scena: 'Pohádali jste se a chceš to urovnat. Napíšeš kamarádovi a čekáš, jestli odepíše.',
    moje: ['Napíšu mu,', 'že mě to mrzí.'],
    cizi: 'jeho půlka',
    okolnosti: [
      { id: 'odepise', nazev: 'Odepíše', radky: ['Odepíše,', 'že je to dobré.'], popis: 'Kamarád odepíše, že je to dobré. To je jeho půlka. Tvoje byla ta zpráva.' },
      { id: 'mlci', nazev: 'Mlčí', radky: ['Neodepíše.'], popis: 'Kamarád neodepíše. Jeho půlka se změnila, tvoje ne: napsat, že tě to mrzí, bylo ve tvých rukou.' },
      { id: 'odsekne', nazev: 'Odsekne', radky: ['Napíše,', 'ať mu dám pokoj.'], popis: 'Kamarád napíše, ať mu dáš pokoj. Jeho půlka se změnila, tvoje ne: napsat, že tě to mrzí, bylo ve tvých rukou.' },
    ],
  },
  {
    id: 'znamka',
    nazev: 'Známka',
    titulek: 'Známka ze čtvrtletky',
    scena: 'Čeká tě čtvrtletka a chceš z ní dobrou známku.',
    moje: ['Připravím se,', 'jak nejlíp umím.'],
    cizi: 'učitelova půlka',
    okolnosti: [
      { id: 'sednou', nazev: 'Sednou', radky: ['Otázky', 'mi sednou.'], popis: 'Otázky ti sednou. Vybral je ale učitel, to je jeho půlka. Tvoje byla příprava.' },
      { id: 'zaskoci', nazev: 'Zaskočí', radky: ['Otázky', 'mě zaskočí.'], popis: 'Otázky tě zaskočí. Učitelova půlka se změnila, tvoje ne: připravit se, jak nejlíp umíš, bylo ve tvých rukou.' },
      { id: 'odlozi', nazev: 'Odloží', radky: ['Písemka', 'se odloží.'], popis: 'Písemka se odloží. O termínu rozhoduje učitel. Tvoje půlka se nezměnila: příprava ti zůstává.' },
    ],
  },
  {
    id: 'zapas',
    nazev: 'Zápas',
    titulek: 'Zdravý na zápas',
    scena: 'V sobotu je zápas a chceš na něj být ve formě.',
    moje: ['Budu spát,', 'jíst a trénovat.'],
    cizi: 'tělo a soupeř',
    okolnosti: [
      { id: 'forma', nazev: 'Forma', radky: ['V sobotu', 'jsem ve formě.'], popis: 'V sobotu jsi ve formě. Spánek, jídlo a trénink byly tvoje půlka. Že tě nic neskolilo, tvoje nebylo.' },
      { id: 'chripka', nazev: 'Chřipka', radky: ['Chytím', 'chřipku.'], popis: 'Chytíš chřipku. Druhá půlka se změnila, tvoje ne: spát, jíst a trénovat bylo ve tvých rukou.' },
      { id: 'souper', nazev: 'Soupeř', radky: ['Soupeř', 'je lepší.'], popis: 'Soupeř je lepší. O jeho nohách nerozhoduješ. Tvoje půlka se nezměnila: spánek, jídlo a trénink.' },
    ],
  },
];

/** Karta podle id; neznámé id vrátí první. */
export function karta(id: string): Karta {
  return KARTY.find((k) => k.id === id) ?? KARTY[0];
}

/** Okolnost na pravé půlce; index mimo rozsah se přichytí ke kraji. */
export function okolnost(k: Karta, index: number): Okolnost {
  const i = Number.isFinite(index) ? Math.min(k.okolnosti.length - 1, Math.max(0, Math.round(index))) : 0;
  return k.okolnosti[i];
}

/** Text pod kresbou: celá karta klade otázku, roztržená říká, co se stalo vpravo a co zůstalo vlevo. */
export function popisKarty(k: Karta, roztrzena: boolean, index: number): string {
  return roztrzena ? okolnost(k, index).popis : `${k.scena} ${OTAZKA_CELE}`;
}

/** Okraj trhliny uprostřed karty: body shora dolů. Obě půlky ho sdílejí, proto k sobě přesně sedí. */
export const TRHLINA: [number, number][] = [
  [170, 48], [166, 60], [173, 72], [167, 86], [172, 98], [165, 112], [171, 124], [167, 138], [173, 150], [166, 164], [171, 178], [168, 190], [170, 200],
];

/** Obrys půlky karty (levá končí trhlinou vpravo, pravá jí začíná vlevo). */
export function obrysPulky(strana: 'leva' | 'prava', trhlina: [number, number][] = TRHLINA): string {
  const dolu = trhlina.map(([x, y]) => `${x},${y}`).join(' L');
  const nahoru = [...trhlina].reverse().map(([x, y]) => `${x},${y}`).join(' L');
  return strana === 'leva' ? `M34,48 L${dolu} L34,200 Z` : `M306,48 L306,200 L${nahoru} Z`;
}

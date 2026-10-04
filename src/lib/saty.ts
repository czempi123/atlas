// Šaty z roku 2015 (cesta 1, krok 6): kresba „Stejné šaty, jiné světlo“.
// Šaty mají v kresbě pořád stejné dvě barvy, modrou a hnědou, jako body té fotky. Posuvník mění světlo v místnosti
// a s ním barvy všeho ostatního: obrazu, lampy, kočky, vázy, postavy. Světla jsou spočítaná tak, aby se šaty
// na krajích posuvníku shodly s věcmi, jejichž barvu student zná: v chladném světle s bílým okrajem obrazu
// a zlatým rámem, v teplém s modrou vázou a černou kočkou. Tak vzniká dojem, o kterém mluví text.
// Podklad: docs/podklady/celek-1-pravda.md › Tvrzení: nový případ (šaty, 2015), bod 4. Fotku atlas nepřebírá.

type Barva = [number, number, number];

const SATY_MODRA: Barva = [143, 155, 208];
const SATY_HNEDA: Barva = [116, 99, 63];

const hex = (b: number[]) => '#' + b.map((v) => Math.min(255, Math.max(0, Math.round(v))).toString(16).padStart(2, '0')).join('');

/** Barvy šatů v kresbě. Nemění se, ať je světlo jakékoli. */
export const BARVY_SATU = { modra: hex(SATY_MODRA), hneda: hex(SATY_HNEDA) } as const;

/** Světlo: čím se barva věci násobí a co se k ní přičte (závoj přesvětlené scény). */
interface Svetlo {
  nasobek: Barva;
  zavoj: Barva;
}
/** Chladné denní světlo: bílá věc v něm vyjde přesně jako světlé pruhy šatů. */
const CHLADNE: Svetlo = { nasobek: SATY_MODRA.map((v) => v / 255) as Barva, zavoj: [0, 0, 0] };
const BILE: Svetlo = { nasobek: [1, 1, 1], zavoj: [0, 0, 0] };
/** Teplé umělé světlo, přesvětlené: i černá věc v něm zesvětlá a zhnědne. */
const TEPLE: Svetlo = { nasobek: [1, 0.9, 0.72], zavoj: [70, 58, 30] };

const zpet = (vysledek: Barva, s: Svetlo) => vysledek.map((v, i) => (v - s.zavoj[i]) / s.nasobek[i]) as Barva;

/** Barvy věcí v bílém světle. Čtyři z nich jsou dopočítané ze šatů. */
const VECI = {
  bila: [255, 255, 255],
  /** zlatý rám: v chladném světle vyjde jako tmavé pruhy šatů */
  zlata: zpet(SATY_HNEDA, CHLADNE),
  /** modrá váza: v teplém světle vyjde jako světlé pruhy šatů */
  modra: zpet(SATY_MODRA, TEPLE),
  /** černá kočka, vlasy a boty: v teplém světle vyjdou jako tmavé pruhy šatů */
  cerna: zpet(SATY_HNEDA, TEPLE),
  stena: [206, 204, 198],
  podlaha: [150, 112, 74],
  plet: [226, 176, 142],
  list: [74, 132, 66],
  obraz: [178, 92, 70],
} satisfies Record<string, number[]>;

export type Vec = keyof typeof VECI;

/** Stupně posuvníku od chladného světla k teplému; uprostřed je světlo bílé. */
export const STUPNE_SVETLA: { nazev: string; popis: string }[] = [
  {
    nazev: 'chladné denní světlo',
    popis: 'Chladné denní světlo. Světlé pruhy mají teď stejnou barvu jako bílý okraj obrazu, tmavé jako zlatý rám. Kdo takové světlo na fotce čeká, vidí šaty bílé a zlaté.',
  },
  { nazev: 'trochu chladné světlo', popis: 'Světlo chladne. Bílý okraj obrazu modrá a blíží se barvě světlých pruhů.' },
  { nazev: 'bílé světlo', popis: 'Bílé světlo. Šaty mají v kresbě dvě barvy, modrou a hnědou. Stejné barvy mají body na fotce.' },
  { nazev: 'trochu teplé světlo', popis: 'Světlo se otepluje. Černá kočka světlá a blíží se barvě tmavých pruhů.' },
  {
    nazev: 'teplé umělé světlo',
    popis: 'Teplé umělé světlo. Světlé pruhy mají teď stejnou barvu jako modrá váza, tmavé jako černá kočka. Kdo takové světlo na fotce čeká, vidí šaty modré a černé.',
  },
];

/** Kresba začíná uprostřed: student nejdřív vidí barvy samé. */
export const VYCHOZI_STUPEN = 2;

export interface Scena {
  /** barvy věcí v daném světle, zapsané jako #rrggbb */
  veci: Record<Vec, string>;
  /** jak moc svítí lampa (teplé umělé světlo), 0 až 1 */
  lampa: number;
}

/** Místnost na daném stupni posuvníku. Stupeň mimo rozsah se přichytí ke kraji. */
export function scena(stupen: number): Scena {
  const posledni = STUPNE_SVETLA.length - 1;
  const s = Math.min(posledni, Math.max(0, Math.round(Number.isFinite(stupen) ? stupen : VYCHOZI_STUPEN)));
  const kraj = s < VYCHOZI_STUPEN ? CHLADNE : TEPLE;
  // 0 uprostřed, 1 na kraji
  const sila = Math.abs(s - VYCHOZI_STUPEN) / VYCHOZI_STUPEN;
  const nasobek = BILE.nasobek.map((v, i) => v + (kraj.nasobek[i] - v) * sila);
  const zavoj = kraj.zavoj.map((v) => v * sila);
  const veci = Object.fromEntries(
    Object.entries(VECI).map(([jmeno, barva]) => [jmeno, hex(barva.map((v, i) => v * nasobek[i] + zavoj[i]))]),
  ) as Record<Vec, string>;
  return { veci, lampa: s > VYCHOZI_STUPEN ? sila : 0 };
}

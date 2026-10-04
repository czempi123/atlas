// Šaty z roku 2015 (cesta 1, krok 6): kresba „Stejné šaty, jiné světlo“.
// Šaty mají v kresbě pořád stejné dvě barvy, modrou a hnědou, jako body té fotky. Posuvník mění jen světlo kolem.
// Podklad: docs/podklady/celek-1-pravda.md › Tvrzení: nový případ (šaty, 2015), bod 4. Fotku atlas nepřebírá.

/** Barvy šatů v kresbě. Nemění se, ať je okolí jakékoli. */
export const BARVY_SATU = { modra: '#8f9bd0', hneda: '#74633f' } as const;

/** Barvy okolí ve třech světlech; mezistupně se míchají. Jediné barvy atlasu mimo tokeny vedle fotografií. */
const CHLADNE = { stena: '#5d70ab', podlaha: '#475889' };
const SEDE = { stena: '#bdbdbd', podlaha: '#a2a2a2' };
const TEPLE = { stena: '#f6dc8a', podlaha: '#e3bd5c' };

const POPIS_CHLADNE = 'Okolí je v chladném denním světle. Kdo takové světlo na fotce čeká, vidí šaty bílé a zlaté.';
const POPIS_SEDE = 'Šaty mají v kresbě dvě barvy, modrou a hnědou. Stejné barvy mají body na fotce.';
const POPIS_TEPLE = 'Okolí je v teplém umělém světle. Kdo takové světlo na fotce čeká, vidí šaty modré a černé.';

/** Stupně posuvníku od chladného světla k teplému; uprostřed je okolí bez barvy. */
export const STUPNE_SVETLA: { nazev: string; popis: string }[] = [
  { nazev: 'chladné denní světlo', popis: POPIS_CHLADNE },
  { nazev: 'trochu chladné světlo', popis: POPIS_CHLADNE },
  { nazev: 'šedé okolí', popis: POPIS_SEDE },
  { nazev: 'trochu teplé světlo', popis: POPIS_TEPLE },
  { nazev: 'teplé umělé světlo', popis: POPIS_TEPLE },
];

/** Kresba začíná uprostřed: student nejdřív vidí barvy samé. */
export const VYCHOZI_STUPEN = 2;

/** Smíchá dvě barvy zapsané jako #rrggbb; t = 0 dá první, t = 1 druhou. */
export function smichej(a: string, b: string, t: number): string {
  const p = Math.min(1, Math.max(0, Number.isFinite(t) ? t : 0));
  const slozky = (h: string) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16));
  const [x, y] = [slozky(a), slozky(b)];
  return '#' + x.map((v, i) => Math.round(v + (y[i] - v) * p).toString(16).padStart(2, '0')).join('');
}

export interface Okoli {
  stena: string;
  podlaha: string;
  /** jak moc je vidět okno (chladné denní světlo), 0 až 1 */
  okno: number;
  /** jak moc je vidět lampa (teplé umělé světlo), 0 až 1 */
  lampa: number;
}

/** Okolí šatů na daném stupni. Stupeň mimo rozsah se přichytí ke kraji. */
export function okoli(stupen: number): Okoli {
  const posledni = STUPNE_SVETLA.length - 1;
  const s = Math.min(posledni, Math.max(0, Math.round(Number.isFinite(stupen) ? stupen : VYCHOZI_STUPEN)));
  const kraj = s < VYCHOZI_STUPEN ? CHLADNE : TEPLE;
  // 0 uprostřed, 1 na kraji
  const sila = Math.abs(s - VYCHOZI_STUPEN) / VYCHOZI_STUPEN;
  return {
    stena: smichej(SEDE.stena, kraj.stena, sila),
    podlaha: smichej(SEDE.podlaha, kraj.podlaha, sila),
    okno: s < VYCHOZI_STUPEN ? sila : 0,
    lampa: s > VYCHOZI_STUPEN ? sila : 0,
  };
}

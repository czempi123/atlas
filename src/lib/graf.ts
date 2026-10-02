// Geometrie jednoduchého grafu křivek (src/components/ui/GrafKrivek.astro): převod bodů na souřadnice kresby,
// cesta křivky, dílky osy a kontrola zadání. Čisté funkce bez DOM; testy v tests/data/graf.test.ts.
// Graf je kresba směru, ne tabulka hodnot: vodorovná osa má dílky 0…n, svislá jde od 0 (dole) do 1 (nahoře).

/** Bod křivky: [dílek vodorovné osy 0…n, výška 0…1]. */
export type BodGrafu = [number, number];

export interface KrivkaGrafu {
  /** popisek přímo u křivky: „Většina lidí“ */
  nazev: string;
  /** aspoň dva body zleva doprava */
  body: BodGrafu[];
  /** druhá křivka se odliší i čárkováním, ne jen barvou */
  carkovana?: boolean;
  /** kde stojí popisek: bod grafu, nad kterým končí; bez něj nad posledním bodem křivky */
  popisek?: BodGrafu;
}

/** Rozměry kresby v jednotkách viewBoxu; na telefonu odpovídá jednotka zhruba jednomu pixelu. */
export const KRESBA = {
  sirka: 330,
  vyska: 262,
  vlevo: 14,
  vpravo: 312,
  nahore: 48,
  dole: 188,
} as const;

const zaokrouhli = (n: number) => Math.round(n * 10) / 10;

/** Vodorovná poloha dílku `u` na ose s `dilku` dílky. */
export function polohaX(u: number, dilku: number): number {
  return zaokrouhli(KRESBA.vlevo + (u / dilku) * (KRESBA.vpravo - KRESBA.vlevo));
}

/** Svislá poloha výšky `v` (0 = osa, 1 = horní okraj plochy). */
export function polohaY(v: number): number {
  return zaokrouhli(KRESBA.dole - v * (KRESBA.dole - KRESBA.nahore));
}

/** Cesta křivky pro atribut `d`: lomená čára přes všechny body. */
export function cestaKrivky(body: BodGrafu[], dilku: number): string {
  return body.map(([u, v], i) => `${i === 0 ? 'M' : 'L'}${polohaX(u, dilku)} ${polohaY(v)}`).join(' ');
}

/** Polohy dílků vodorovné osy (0…n včetně krajů). */
export function dilkyOsy(dilku: number): number[] {
  return Array.from({ length: dilku + 1 }, (_, i) => polohaX(i, dilku));
}

/** Kde stojí popisek křivky: nad zvoleným bodem (nebo nad koncem křivky), zarovnaný k němu zprava. */
export function mistoPopisku(k: Pick<KrivkaGrafu, 'body' | 'popisek'>, dilku: number): { x: number; y: number } {
  const [u, v] = k.popisek ?? k.body[k.body.length - 1];
  return { x: polohaX(u, dilku), y: zaokrouhli(polohaY(v) - 10) };
}

/**
 * Popisek značky pod osou se nesmí dostat za okraj kresby: vrací polohu a zarovnání textu.
 * `sirkaTextu` je odhad šířky popisku v jednotkách kresby.
 */
export function mistoZnacky(u: number, dilku: number, sirkaTextu: number): { x: number; kotva: 'start' | 'middle' | 'end' } {
  const x = polohaX(u, dilku);
  if (x - sirkaTextu / 2 < 2) return { x: Math.max(2, x), kotva: 'start' };
  if (x + sirkaTextu / 2 > KRESBA.sirka - 2) return { x: Math.min(KRESBA.sirka - 2, x), kotva: 'end' };
  return { x, kotva: 'middle' };
}

/** Hrubý odhad šířky textu bezpatkovým písmem (velikost v jednotkách kresby). */
export function sirkaTextu(text: string, velikost = 13): number {
  return Math.ceil(text.length * velikost * 0.56);
}

/** Chyby zadání grafu; prázdný seznam = v pořádku. Sestavení se při chybě zastaví. */
export function chybyGrafu(krivky: KrivkaGrafu[], dilku: number, znacka?: { x: number }): string[] {
  const chyby: string[] = [];
  if (!Number.isInteger(dilku) || dilku < 1 || dilku > 12) chyby.push('Graf: počet dílků musí být celé číslo 1–12.');
  if (krivky.length < 1 || krivky.length > 3) chyby.push('Graf: jedna až tři křivky.');
  const mimo = ([u, v]: BodGrafu) => u < 0 || u > dilku || v < 0 || v > 1;
  for (const k of krivky) {
    if (k.body.length < 2) chyby.push(`Graf: křivka „${k.nazev}“ potřebuje aspoň dva body.`);
    if (k.body.some(mimo)) chyby.push(`Graf: křivka „${k.nazev}“ má bod mimo plochu (dílky 0–${dilku}, výška 0–1).`);
    if (k.body.some(([u], i) => i > 0 && u <= k.body[i - 1][0])) chyby.push(`Graf: body křivky „${k.nazev}“ musí jít zleva doprava.`);
    if (k.popisek && mimo(k.popisek)) chyby.push(`Graf: popisek křivky „${k.nazev}“ je mimo plochu.`);
  }
  if (new Set(krivky.map((k) => k.nazev)).size !== krivky.length) chyby.push('Graf: křivky musí mít různé názvy.');
  if (znacka && (znacka.x < 0 || znacka.x > dilku)) chyby.push('Graf: značka je mimo osu.');
  return chyby;
}
